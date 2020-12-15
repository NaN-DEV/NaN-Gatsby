/* eslint-disable no-undef */
/* eslint-disable prefer-template */

// Import plugin
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

// Import style
import { Section, FormBox, DataBox, LisData, ListBox, Point, Important, Tel, Mail, MascotBox, Title } from './style/style';

// Import settings style
import settings from '../../../../layouts/settings/settings';

// Import component
import Modal from '../../modal/modal';
import Row from '../../../atoms/row/row';
import Input from '../../../atoms/input/input';
import Button from '../../../atoms/button/button';
import Mascot from '../../../atoms/mascot/mascot';
import TextArea from '../../../atoms/textarea/textarea';
import CheckBox from '../../../atoms/checkbox/checkbox';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

// Crete new component
class SectionContactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      isModalMessage: 'false',
    };

    this.openModal = this.openModal.bind(this);
    this.clouseModal = this.clouseModal.bind(this);
    this.validateTel = this.validateTel.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateUsername = this.validateUsername.bind(this);
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

  validateRodoGroup = value => {
    let error;
    if (!value[0]) {
      error = 'Twoja zgoda jest wymagana';
    }
    return error;
  };

  render() {
    const { isModalOpen, isModalMessage } = this.state;
    const { id, key, content } = this.props;

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
          <Row newClass="row">
            <FormBox settings={settings}>
              <Title settings={settings}>FORMULARZ</Title>
              <Formik
                isInitialValid={false}
                initialValues={{
                  username: '',
                  email: '',
                  phone: '',
                  description: '',
                  rodoGroup: [],
                }}
                onSubmit={(values, actions) => {
                  fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: encode({ 'form-name': 'contact', ...values, rodoGroup: values.rodoGroup.filter(e => e) }),
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
                  <Form name="contact" data-netlify={1}>
                    <Input
                      type="text"
                      id="username-id"
                      key="username-key"
                      content={{ title: 'Imię', placeholder: 'Jak masz na imię ?', errors: errors.username && touched.username && errors.username }}
                      parameters={{
                        name: 'username',
                        required: true,
                        validate: this.validateUsername,
                        value: values.username,
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
                        title: `Najpierw potrzebujesz NDA? Wyślij mi e-mail na adres : ${content.mail}`,
                        placeholder: 'Hej , opisz tutaj krótko swój pomysł lub problem',
                        errors: errors.description && touched.description && errors.description,
                      }}
                      parameters={{
                        name: 'description',
                        required: true,
                        validate: this.validateDescription,
                        value: values.description,
                      }}
                    />

                    <CheckBox
                      type="classic"
                      id="rodoGroup-privacyPolicyAccepted-id"
                      key="rodoGroup-privacyPolicyAccepted-key"
                      content={{
                        description:
                          "NaN LLC potrzebuje twoich danych na czas odpowiedzi na twoje pytanie.  Masz prawo zrezygnować z przetwarzania twoich danych w dowolnym momencie, więcej informacji w <a href='#'>polityce prywatności</a> ",
                        errors: errors.rodoGroup && touched.rodoGroup && errors.rodoGroup,
                      }}
                      parameters={{
                        name: 'rodoGroup',
                        required: true,
                        validate: this.validateRodoGroup,
                        onChange: event => {
                          const value = event.target.checked ? 'privacyPolicyAccepted' : null;
                          setFieldValue('rodoGroup.0', value);
                        },
                        checked: values.rodoGroup.includes('privacyPolicyAccepted'),
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
                  </Form>
                )}
              </Formik>
            </FormBox>
            <DataBox settings={settings}>
              <MascotBox settings={settings}>
                <Mascot newClass="mascot" />
              </MascotBox>
              <ListBox>
                <LisData settings={settings}>
                  <Point settings={settings}>
                    <Important settings={settings}>{content.data.nameCompany}</Important>
                  </Point>
                  <Point settings={settings}>
                    ul. {content.data.street} {content.data.streetNumber}
                  </Point>
                  <Point settings={settings}>
                    {content.data.postCode} {content.data.city}
                  </Point>
                  <Point settings={settings}>{content.data.country}</Point>
                </LisData>
                <LisData settings={settings}>
                  <Point settings={settings}>
                    <Important settings={settings}>VAT-ID :</Important> {content.data.vat}
                  </Point>
                  <Point settings={settings}>
                    <Important settings={settings}>REGON :</Important> {content.data.regon}
                  </Point>
                  <Point settings={settings}>
                    <Important settings={settings}>KRS :</Important> {content.data.krs}
                  </Point>
                </LisData>
                <LisData settings={settings}>
                  <Point settings={settings}>
                    <Important settings={settings}>KAPITAŁ :</Important> {`${content.data.capital}`} PLN
                  </Point>
                  <Point settings={settings}>
                    <Important settings={settings}>CEO :</Important> {content.data.ceo.name}
                  </Point>
                </LisData>

                <LisData settings={settings}>
                  <Point settings={settings}>
                    <Important settings={settings}>TEL :</Important>
                    <Tel settings={settings} to={`+48 ${content.data.telephoneNumber}`}>
                      {`+48 ${content.data.telephoneNumber}`}
                    </Tel>
                  </Point>
                  <Point settings={settings}>
                    <Important settings={settings}>MAIL :</Important>
                    <Mail settings={settings} to={`mailo:${content.data.mail}`}>
                      {`${content.data.mail}`}
                    </Mail>
                  </Point>
                </LisData>
              </ListBox>
            </DataBox>
          </Row>
        </Section>
      </>
    );
  }
}

// PropTpyes
SectionContactComponent.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

// PropTpyes default
SectionContactComponent.defaultProps = {
  id: null,
  key: null,
  content: null,
};
export default SectionContactComponent;
