// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

// IMPORT STYLE
import { Section, FormBox, DataBox, LisData, ListBox, Point, Important, Tel, Mail, MascotBox, Title } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';
import Modal from '../../modal/modal';
import Input from '../../../atoms/input/input';
import Button from '../../../atoms/button/button';
import Mascot from '../../../atoms/mascot/mascot';
import TextArea from '../../../atoms/textarea/textarea';
import CheckBox from '../../../atoms/checkbox/checkbox';

// CREATE NEW COMPONENT
class sectionContactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };

    this.encode = this.encode.bind(this);
    this.openModal = this.openModal.bind(this);
    this.clouseModal = this.clouseModal.bind(this);
    this.validateTel = this.validateTel.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateUsername = this.validateUsername.bind(this);
    this.validateDescription = this.validateDescription.bind(this);
  }

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  clouseModal = () => {
    this.setState({
      isModalOpen: false,
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

  validateContract = value => {
    let error;
    if (!value.length) {
      error = 'Twoja zgoda jest wymagana';
    }
    return error;
  };

  render() {
    const { isModalOpen } = this.state;
    const { id, newStyle, newClass, content } = this.props;

    return (
      <>
        {isModalOpen && (
          <Modal
            type="info"
            id="info-send-form-id"
            key="info-send-form-key"
            content={{ info: 'Hej, dzięki za wiadomość !' }}
            parameters={{ switchPower: this.clouseModal }}
          />
        )}

        <Section
          theme={settings}
          newStyle={newStyle}
          className={newClass}
          id={`${id}-sectionContactComponent-section-id`}
          key={`${id}-sectionContactComponent-section-key`}
        >
          <Row newClass="row">
            <FormBox theme={settings}>
              <Title>FORMULARZ</Title>
              <Formik
                isInitialValid={false}
                initialValues={{
                  username: '',
                  email: '',
                  phone: '',
                  description: '',
                  contract: '',
                }}
                onSubmit={values => {
                  return values;
                }}
              >
                {({ errors, touched, isValid, values }) => (
                  <Form name="contact" method="POST" data-netlify="true">
                    <Input type="hidden" id="hidden-id" key="hidden-key" parameters={{ value: 'contact', name: 'form-name' }} />
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
                        validate: this.validateTel,
                        value: values.phone,
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
                      id="contract-id"
                      key="contract-key"
                      content={{
                        description:
                          "NaN LLC potrzebuje twoich danych na czas odpowiedzi na twoje pytanie.  Masz prawo zrezygnować z przetwarzania twoich danych w dowolnym momencie, więcej informacji w <a href='#'>polityce prywatności</a> ",
                        errors: errors.contract && touched.contract && errors.contract,
                      }}
                      parameters={{ name: 'contract', required: true, value: 'contract', validate: this.validateContract }}
                    />

                    <Button
                      type="sumbit"
                      content={{ title: 'Wyślij' }}
                      parameters={{
                        disabled: !isValid,
                        color: 'secondary',
                        onClick: this.openModal,
                      }}
                    >
                      Wyślij
                    </Button>
                  </Form>
                )}
              </Formik>
            </FormBox>
            <DataBox theme={settings}>
              <MascotBox theme={settings}>
                <Mascot newClass="mascot" />
              </MascotBox>
              <ListBox>
                <LisData theme={settings}>
                  <Point theme={settings}>
                    <Important theme={settings}>{content.nameCompany}</Important>
                  </Point>
                  <Point theme={settings}>
                    ul. {content.street} {content.streetNumber}
                  </Point>
                  <Point theme={settings}>
                    {content.postCode} {content.city}
                  </Point>
                  <Point theme={settings}>{content.country}</Point>
                </LisData>
                <LisData theme={settings}>
                  <Point theme={settings}>
                    <Important theme={settings}>VAT-ID :</Important> {content.vat}
                  </Point>
                  <Point theme={settings}>
                    <Important theme={settings}>REGON :</Important> {content.regon}
                  </Point>
                  <Point theme={settings}>
                    <Important theme={settings}>KRS :</Important> {content.krs}
                  </Point>
                </LisData>
                <LisData theme={settings}>
                  <Point theme={settings}>
                    <Important theme={settings}>KAPITAŁ :</Important> {`${content.capital}`} PLN
                  </Point>
                  <Point theme={settings}>
                    <Important theme={settings}>CEO :</Important> {content.ceo.name}
                  </Point>
                </LisData>

                <LisData theme={settings}>
                  <Point theme={settings}>
                    <Important theme={settings}>TEL :</Important>
                    <Tel theme={settings} to={`+48 ${content.telephoneNumber}`}>
                      {`+48 ${content.telephoneNumber}`}
                    </Tel>
                  </Point>
                  <Point theme={settings}>
                    <Important theme={settings}>MAIL :</Important>
                    <Mail theme={settings} to={`mailo:${content.mail}`}>
                      {`${content.mail}`}
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
sectionContactComponent.propTypes = {
  id: PropTypes.string,
  newClass: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

sectionContactComponent.defaultProps = {
  id: null,
  content: null,
  newClass: null,
  newStyle: null,
};

export default sectionContactComponent;
