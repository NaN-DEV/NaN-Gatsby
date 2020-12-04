// IMPORT PLUGIN
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

// IMPORT STYLE
import { Section, FormBox, DataBox, LisData, BoxError, ListBox, Point, Important, Tel, Mail, MascotBox, Title, Form } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';
import Input from '../../../atoms/input/input';
import Button from '../../../atoms/button/button';
import Mascot from '../../../atoms/mascot/mascot';
import TextArea from '../../../atoms/textarea/textarea';
import CheckBox from '../../../atoms/checkbox/checkbox';

// VALUE
const validate = values => {
  const errors = {};

  if (!values.service) {
    errors.service = 'Hej wybierz jedną z usług :)';
  }

  if (!values.typeContract) {
    errors.typeContract = 'Wybierz jaki typ współpracy cię interesuje !';
  }

  if (!values.name) {
    errors.name = 'Hej ! Jak ci na imię ?  :)';
  }

  if (!values.email) {
    errors.email = 'Hej ! gdzie mamy Ci odpisać ? :)';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Hej ! Popraw ten email';
  }

  if (!values.tel) {
    errors.tel = 'Hej ! podaj nam nr tel :)';
  } else if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/./0-9]*$/i.test(values.tel)) {
    errors.tel = 'Hallo... coś ten nr telefonu nie taki';
  }

  if (!values.message) {
    errors.message = 'Hej , napisz nam coś na temat Twojego projektu !';
  } else if (values.message.length < 10) {
    errors.message = 'Coś za krótki ten opis';
  }

  if (!values.checkbox) {
    errors.checkbox = 'Hallo... jeżeli chcesz abyśmy ci odpowiedzieli musisz zaakceptować warunki';
  }

  return errors;
};

// CREATE NEW COMPONENT
const sectionContactComponent = props => {
  const { id, newStyle, newClass, content } = props;

  const formik = useFormik({
    initialValues: {
      website: '',
      app: '',
      seo: '',
      typeContract: '',
      name: '',
      email: '',
      tel: '',
      message: '',
      checkbox: '',
    },
    validate,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setSubmitting(false);
      axios
        .post('https://us-central1-uxu-serwis-komputerowy-279407.cloudfunctions.net/sendEmailRepair', values)
        .then(() => {
          resetForm();
        })
        .catch(() => {});
      resetForm();
    },
  });

  return (
    <>
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
            <Form onSubmit={formik.handleSubmit}>
              {formik.touched.email && formik.errors.email ? (
                <>
                  <Input
                    required
                    id="email"
                    name="email"
                    type="email"
                    title="Email"
                    newClass="error"
                    color="secondary"
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="email@domian.com"
                    onChange={formik.handleChange}
                  />
                  <BoxError theme={settings}>{formik.errors.email}</BoxError>
                </>
              ) : (
                <>
                  <Input
                    required
                    id="email"
                    name="email"
                    type="email"
                    title="Email"
                    color="secondary"
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="email@domian.com"
                    onChange={formik.handleChange}
                  />
                </>
              )}

              {formik.touched.name && formik.errors.name ? (
                <>
                  <Input
                    required
                    id="name"
                    name="name"
                    type="text"
                    title="Name"
                    newClass="error"
                    color="secondary"
                    placeholder="name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  <BoxError theme={settings}>{formik.errors.name}</BoxError>
                </>
              ) : (
                <>
                  <Input
                    required
                    id="name"
                    name="name"
                    type="text"
                    title="Name"
                    color="secondary"
                    placeholder="Name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                </>
              )}

              {formik.touched.tel && formik.errors.tel ? (
                <>
                  <Input
                    required
                    id="tel"
                    name="tel"
                    type="tel"
                    title="Phone"
                    color="secondary"
                    placeholder="Number"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.tel}
                  />
                  <BoxError theme={settings}>{formik.errors.tel}</BoxError>
                </>
              ) : (
                <>
                  <Input
                    required
                    id="tel"
                    name="tel"
                    type="tel"
                    title="Phone"
                    color="secondary"
                    placeholder="Number"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.tel}
                  />
                </>
              )}

              {formik.touched.message && formik.errors.message ? (
                <>
                  <TextArea
                    required
                    id="message"
                    name="message"
                    title="Najpierw potrzebujesz NDA? Wyślij nam e-mail na adres : <a href='mailto:hello@na3.eu'>hello@na3.eu</a>"
                    newClass="error"
                    color="secondary"
                    placeholder="A brief description of your idea"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.message}
                  />
                  <BoxError theme={settings}>{formik.errors.message}</BoxError>
                </>
              ) : (
                <>
                  <TextArea
                    required
                    id="message"
                    name="message"
                    title={`Najpierw potrzebujesz NDA? Wyślij nam e-mail na adres : <a href='mailto:${content.mail}'>${content.mail}</a>`}
                    color="secondary"
                    placeholder="A brief description of your idea"
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                  />
                </>
              )}

              {formik.touched.checkbox && formik.errors.checkbox ? (
                <>
                  <CheckBox
                    id="politycy"
                    type="classic"
                    name="checkbox"
                    color="secondary"
                    newClass="error"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.checkbox}
                    content="NaN LLC potrzebuje twoich danych na czas odpowiedzi na twoje pytanie.  Masz prawo zrezygnować z przetwarzania twoich danych w dowolnym momencie, więcej informacji w <a href='#'> polityce prywatności</a> "
                  />
                  <BoxError theme={settings}>{formik.errors.checkbox}</BoxError>
                </>
              ) : (
                <>
                  <CheckBox
                    id="checkbox"
                    type="classic"
                    name="checkbox"
                    color="secondary"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.checkbox}
                    content="NaN LLC potrzebuje twoich danych na czas odpowiedzi na twoje pytanie.  Masz prawo zrezygnować z przetwarzania twoich danych w dowolnym momencie,  więcej informacji w <a href='#'> polityce prywatności</a> "
                    r
                  />
                </>
              )}

              <Button
                type="sumbit"
                content={{ title: 'Wyślij' }}
                primary={{ colorStyle: 'tertiary_1', disabled: !(formik.isValid && formik.dirty) }}
              />
            </Form>
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
};

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
