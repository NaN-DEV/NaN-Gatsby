/* eslint-disable no-undef */
/* eslint-disable prefer-template */

// Import plugin
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

// Import style
import { Section, CompanyData, Point, Important, FormBox, MascotBox } from './style/style';

// Import settings style
import settings from '../../../../layouts/settings/settings';

// Import component
import Row from '../../../atoms/row/row';
import Modal from '../../modal/modal';
import Input from '../../../atoms/input/input';
import List from '../../../molecules/list/list';
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
    const { content } = this.props;

    return (
      <>
        {isModalOpen && <Modal type="info" content={{ info: isModalMessage }} parameters={{ switchPower: this.clouseModal }} />}

        <Section theme={{ settings }}>
          <Row parameters={{}}>
            <CompanyData theme={{ settings }}>
              <List type="vertical" parameters={{}}>
                <Point theme={{ settings }}>
                  <Important theme={{ settings }}>{content.company}</Important>
                </Point>
                <Point theme={{ settings }}>ul. {content.street}</Point>
                <Point theme={{ settings }}>
                  {content.postCode} {content.city}
                </Point>
                <Point theme={{ settings, break: true }}>{content.country}</Point>

                <Point theme={{ settings }}>
                  <Important theme={{ settings }}>VAT-ID :</Important> {content.vat}
                </Point>
                <Point theme={{ settings }}>
                  <Important theme={{ settings }}>REGON :</Important> {content.regon}
                </Point>
                <Point theme={{ settings, break: true }}>
                  <Important theme={{ settings }}>KRS :</Important> {content.krs}
                </Point>

                <Point theme={{ settings }}>
                  <Important theme={{ settings }}>TEL :</Important>
                  <Button type="linkOut" to={`+48 ${content.phone}`}>
                    {`+48 ${content.phone}`}
                  </Button>
                </Point>
                <Point theme={{ settings }}>
                  <Important theme={{ settings }}>MAIL :</Important>
                  <Button type="linkOut" to={`mailo:${content.mail}`}>
                    {`${content.mail}`}
                  </Button>
                </Point>
              </List>
            </CompanyData>

            <FormBox theme={{ settings }}>
              <MascotBox theme={{ settings }}>
                <Mascot newClass="mascot" />
              </MascotBox>

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
                      content={{
                        placeholder: 'jak Ci na imię ?',
                        errors: errors.username && touched.username && errors.username,
                      }}
                      parameters={{
                        name: 'username',
                        required: true,
                        validate: this.validateUsername,
                        value: values.username,
                      }}
                    />

                    <Input
                      type="email"
                      content={{
                        placeholder: 'mail',
                        errors: errors.email && touched.email && errors.email,
                      }}
                      parameters={{
                        name: 'email',
                        required: true,
                        validate: this.validateEmail,
                      }}
                    />

                    <Input
                      type="text"
                      content={{
                        placeholder: 'telefon',
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
                      content={{
                        placeholder: 'opis pomysłu/problemu, potrzebujesz pierw NDA wyślij wzór na maila',
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
                      id="rodoGroup-privacyPolicyAccepted-id"
                      content={{
                        description:
                          "<p>potrzebuje Twoich danych do czasu udzielenia odpowiedzi . Masz prawo zrezygnować z przetwarzania Twoich danych lub żądać ich usunięcia w dowolnym momencie. Więcej informacji znajdziesz w <a href='../politics/'>polityce prywatności</a></p>",
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
                        button: true,
                        disabled: !isValid,
                        className: 'button',
                      }}
                    >
                      Wyślij
                    </Button>
                  </Form>
                )}
              </Formik>
            </FormBox>
          </Row>
        </Section>
      </>
    );
  }
}

// PropTpyes
SectionContactComponent.propTypes = {
  content: PropTypes.shape({
    company: PropTypes.string,
    street: PropTypes.string,
    city: PropTypes.string,
    postCode: PropTypes.string,
    country: PropTypes.string,
    vat: PropTypes.string,
    regon: PropTypes.string,
    krs: PropTypes.string,
    phone: PropTypes.string,
    mail: PropTypes.string,
  }),
};

// PropTpyes default
SectionContactComponent.defaultProps = {
  content: PropTypes.shape({
    company: null,
    street: null,
    city: null,
    postCode: null,
    country: null,
    vat: null,
    regon: null,
    krs: null,
    phone: null,
    mail: null,
  }),
};
export default SectionContactComponent;
