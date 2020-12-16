/* eslint-disable no-undef */
/* eslint-disable prefer-template */
// Import plugin
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

// Import style
import { Box, Pkt, Half, Step, Section } from './style/style';

// Import settings style
import settings from '../../../../layouts/settings/settings';

// Import component
import Modal from '../../modal/modal';
import Row from '../../../atoms/row/row';
import Input from '../../../atoms/input/input';
import List from '../../../molecules/list/list';
import Button from '../../../atoms/button/button';
import Mascot from '../../../atoms/mascot/mascot';
import TextArea from '../../../atoms/textarea/textarea';
import CheckBox from '../../../atoms/checkbox/checkbox';

// encode
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

// Create new component
class sectionSellComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      isModalMessage: 'false',
    };

    this.openModal = this.openModal.bind(this);
    this.clouseModal = this.clouseModal.bind(this);
    this.validateJob = this.validateJob.bind(this);
    this.validateTel = this.validateTel.bind(this);
    this.validateRodo = this.validateRodo.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateUsername = this.validateUsername.bind(this);
    this.validatePartner = this.validatePartner.bind(this);
    this.validateDescription = this.validateDescription.bind(this);
  }

  openModal = message => {
    this.setState({
      isModalOpen: true,
      isModalMessage: message,
    });
  };

  clouseModal = () => {
    this.setState({
      isModalOpen: false,
      isModalMessage: '',
    });
  };

  validateJob = value => {
    let error;
    if (!value) {
      error = 'wybierz jedną z usług';
    }
    return error;
  };

  validatePartner = value => {
    let error;
    if (!value) {
      error = 'wybierz jedną z usług';
    }
    return error;
  };

  validateUsername = value => {
    let error;
    if (!value) {
      error = 'Imię jest wymagane !';
    } else if (value === 'admin' || value === 'root') {
      error = 'Niezła próba!';
    }
    return error;
  };

  validateEmail = value => {
    let error;
    if (!value) {
      error = 'Adres email jest wymagany !';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Nie poprawny adres email !';
    }
    return error;
  };

  validateTel = value => {
    let error;

    if (!value) {
      error = 'Numer telefonu jest wymagany !';
    } else if (!/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm.test(value)) {
      error = 'Nie poprawny numer telefonu';
    }
    return error;
  };

  validateDescription = value => {
    let error;
    if (!value) {
      error = 'Twój opis jest wymagany !';
    } else if (value.length < 5) {
      error = 'Cos za krótki jest ten opis :)';
    }
    return error;
  };

  validateRodo = value => {
    let error;
    if (!value[0]) {
      error = 'Twoja zgoda jest wymagana';
    }
    return error;
  };

  render() {
    const { isModalOpen, isModalMessage } = this.state;
    const { id, key } = this.props;

    return (
      <>
        {isModalOpen && (
          <Modal
            type="info"
            id="info-send-form-id"
            key="info-send-form-key"
            content={{ info: isModalMessage }}
            parameters={{ switchPower: this.clouseModal }}
          />
        )}
        <Section settings={settings} id={id} key={key}>
          <Row className="row">
            <Formik
              isInitialValid={false}
              initialValues={{
                job: '',
                partner: '',
                username: '',
                email: '',
                phone: '',
                description: '',
                rodo: '',
              }}
              onSubmit={(values, actions) => {
                fetch('/', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: encode({
                    'form-name': 'sell',
                    ...values,
                    job: values.job.filter(e => e),
                    rodo: values.rodo.filter(e => e),
                    partner: values.partner.filter(e => e),
                  }),
                })
                  .then(() => {
                    this.openModal('Hej, dzięki za kontakt , niebawem dam ci znać co o tym myślę !');
                    actions.resetForm();
                  })
                  .catch(() => {
                    this.openModal('Upsss... Coś poszło nie tak spróbuj jeszcze raz wysłać wiadomość !');
                  })
                  .finally(() => actions.setSubmitting(false));
              }}
            >
              {({ errors, touched, isValid, values, setFieldValue }) => (
                <Form name="sell" data-netlify={1}>
                  <Step settings={settings} number="1">
                    Co chcesz zrobić ?
                  </Step>
                  <Box settings={settings} id="step1">
                    <CheckBox
                      type="box"
                      id="servicesGroup-webSite-id"
                      key="servicesGroup-webSite-key"
                      content={{
                        icon: 'website',
                        title: 'STRONE WWW',
                      }}
                      parameters={{
                        name: 'job',
                        required: true,
                        value: values.job,
                        validate: this.validateJob,
                        onChange: event => {
                          const value = event.target.checked ? 'webSite' : null;
                          setFieldValue('job.0', value);
                        },
                        checked: values.job.includes('webSite'),
                      }}
                    />

                    <CheckBox
                      type="box"
                      id="job-appMobile-id"
                      key="job-appMobile-key"
                      content={{
                        icon: 'phone',
                        title: 'APLIKACJE',
                      }}
                      parameters={{
                        name: 'job',
                        required: true,
                        value: values.job,
                        validate: this.validateJob,
                        onChange: event => {
                          const value = event.target.checked ? 'appMobile' : null;
                          setFieldValue('job.1', value);
                        },
                        checked: values.job.includes('appMobile'),
                      }}
                    />

                    <CheckBox
                      type="box"
                      id="job-other-id"
                      key="job-other-key"
                      content={{
                        icon: 'ask',
                        title: 'INNE',
                      }}
                      parameters={{
                        name: 'job',
                        required: true,
                        value: values.job,
                        validate: this.validateJob,
                        onChange: event => {
                          const value = event.target.checked ? 'other' : null;
                          setFieldValue('job.2', value);
                        },
                        checked: values.job.includes('other'),
                      }}
                    />
                  </Box>
                  <Step settings={settings} number="2">
                    Kogo szukasz?
                  </Step>
                  <Box settings={settings} id="step2">
                    <CheckBox
                      type="box"
                      id="partner-contractor-id"
                      key="partner-contractor-key"
                      content={{
                        icon: 'people',
                        title: 'Wykonawce',
                      }}
                      parameters={{
                        required: true,
                        name: 'partner',
                        value: values.partner,
                        validate: this.validatePartner,
                        onChange: event => {
                          const value = event.target.checked ? 'contractor' : null;
                          setFieldValue('partner.0', value);
                        },
                        checked: values.partner.includes('contractor'),
                      }}
                    />

                    <CheckBox
                      type="box"
                      id="partner-subcontractor-id"
                      key="partner-subcontractor-key"
                      content={{
                        icon: 'cv',
                        title: 'Podwykonawce',
                      }}
                      parameters={{
                        required: true,
                        name: 'partner',
                        value: values.partner,
                        validate: this.validatePartner,
                        onChange: event => {
                          const value = event.target.checked ? 'subcontractor' : null;
                          setFieldValue('partner.0', value);
                        },
                        checked: values.partner.includes('subcontractor'),
                      }}
                    />

                    <CheckBox
                      type="box"
                      id="partner-other-id"
                      key="partner-other-key"
                      content={{
                        icon: 'ask',
                        title: 'Inne',
                      }}
                      parameters={{
                        required: true,
                        name: 'partner',
                        value: values.partner,
                        validate: this.validatePartner,
                        onChange: event => {
                          const value = event.target.checked ? 'other' : null;
                          setFieldValue('partner.0', value);
                        },
                        checked: values.partner.includes('other'),
                      }}
                    />
                  </Box>
                  <Step settings={settings} number="3">
                    Twoje dane i opis projektu
                  </Step>
                  <Box settings={settings}>
                    <Half settings={settings}>
                      <Input
                        type="text"
                        id="username-id"
                        key="username-key"
                        content={{ title: 'Imię', placeholder: 'Jak masz na imię ?', errors: errors.username && touched.username && errors.username }}
                        parameters={{
                          name: 'username',
                          required: true,
                          value: values.username,
                          validate: this.validateUsername,
                        }}
                      />
                      <Input
                        type="email"
                        id="email-id"
                        key="email-key"
                        content={{ title: 'Email', placeholder: 'name@domian.com', errors: errors.email && touched.email && errors.email }}
                        parameters={{
                          name: 'email',
                          required: true,
                          validate: this.validateEmail,
                        }}
                      />
                      <Input
                        type="text"
                        id="tel-id"
                        key="tel-key"
                        content={{
                          title: 'Telefon',
                          placeholder: 'Jaki jest twój numer telefonu ?',
                          errors: errors.phone && touched.phone && errors.phone,
                        }}
                        parameters={{
                          name: 'phone',
                          required: true,
                          value: values.phone,
                          validate: this.validateTel,
                        }}
                      />
                      <TextArea
                        id="description-id"
                        key="description-key"
                        content={{
                          title: `Najpierw potrzebujesz NDA? Wyślij mi e-mail na adres`,
                          placeholder: 'Hej , opisz tutaj krótko swój pomysł lub problem',
                          errors: errors.description && touched.description && errors.description,
                        }}
                        parameters={{
                          name: 'description',
                          required: true,
                          value: values.description,
                          validate: this.validateDescription,
                        }}
                      />
                      <CheckBox
                        type="classic"
                        id="rodo-contract-id"
                        key="rodo-contract-key"
                        content={{
                          description:
                            "NaN LLC potrzebuje twoich danych na czas odpowiedzi na twoje pytanie.  Masz prawo zrezygnować z przetwarzania twoich danych w dowolnym momencie, więcej informacji w <a href='#'>polityce prywatności</a> ",
                          errors: errors.rodo && touched.rodo && errors.rodo,
                        }}
                        parameters={{
                          name: 'rodo',
                          required: true,
                          validate: this.validateRodo,
                          onChange: event => {
                            const value = event.target.checked ? 'privacyPolicyAccepted' : null;
                            setFieldValue('rodo.0', value);
                          },
                          checked: values.rodo.includes('privacyPolicyAccepted'),
                        }}
                      />
                      <Button
                        type="sumbit"
                        content={{ title: 'Wyślij' }}
                        parameters={{
                          disabled: !isValid,
                          color: 'secondary',
                        }}
                      >
                        Wyślij
                      </Button>
                    </Half>
                    <Half mascot settings={settings}>
                      <List type="vertical">
                        <Pkt># Wycena bez zobowiazań</Pkt>
                        <Pkt># Wycena jest darmowa</Pkt>
                        <Pkt># Wycena w ciągu 24h</Pkt>
                      </List>
                      <Mascot newClass="mascot" settings={settings} />
                    </Half>
                  </Box>
                </Form>
              )}
            </Formik>
          </Row>
        </Section>
      </>
    );
  }
}

// PropTpyes
sectionSellComponent.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
};

// PropTpyes default
sectionSellComponent.defaultProps = {
  id: null,
  key: null,
};

export default sectionSellComponent;
