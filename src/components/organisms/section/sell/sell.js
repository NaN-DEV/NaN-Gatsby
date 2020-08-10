// IMPORT PLUGIN
import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

// IMPORT STYLE
import { Box, Pkt, Half, Step, Section, BoxError } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';
import Radio from '../../../atoms/radio/radio';
import Input from '../../../atoms/input/input';
import List from '../../../molecules/list/list';
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

const SectionHeroComponent = props => {
  const { id, color, newClass, newStyle } = props;

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
      <Section id={id} color={color} theme={settings} style={newStyle} className={newClass}>
        <Row className="row">
          <form onSubmit={formik.handleSubmit}>
            <Step color={color} theme={settings} number={1}>
              Co możemy dla ciebie zrobić ?
            </Step>
            <Box theme={settings} id="step1">
              {formik.touched.service && formik.errors.service ? (
                <>
                  <CheckBox
                    id="website"
                    type="box"
                    swith="active"
                    icon="computer"
                    color="secondary"
                    title="Strone internetową"
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.service}
                  />
                  <CheckBox
                    id="app"
                    type="box"
                    icon="phone"
                    swith="active"
                    title="Aplikacje"
                    color="secondary"
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.service}
                  />
                  <CheckBox
                    id="seo"
                    type="box"
                    icon="website"
                    swith="active"
                    title="Pozycjonowanie"
                    color="secondary"
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.service}
                  />

                  <BoxError theme={settings}>{formik.errors.service}</BoxError>
                </>
              ) : (
                <>
                  <CheckBox
                    id="website"
                    type="box"
                    swith="active"
                    icon="computer"
                    color="secondary"
                    title="Strone internetową"
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.service}
                  />
                  <CheckBox
                    id="app"
                    type="box"
                    icon="phone"
                    swith="active"
                    title="Aplikacje"
                    color="secondary"
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.service}
                  />
                  <CheckBox
                    id="seo"
                    type="box"
                    icon="website"
                    swith="active"
                    name="Pozycjonowanie"
                    title="Pozycjonowanie"
                    color="secondary"
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.service}
                  />
                </>
              )}
            </Box>
            <Step color={color} theme={settings} number={2}>
              Kogo konkretnie szukasz ?
            </Step>
            <Box theme={settings} id="step2">
              {formik.touched.typeContract && formik.errors.typeContract ? (
                <>
                  <Radio
                    id="contractor"
                    name="type"
                    type="box"
                    swith="active"
                    icon="people"
                    color="secondary"
                    title="Wykonawca"
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.typeContract}
                  />
                  <Radio
                    id="subcontractors"
                    name="type"
                    type="box"
                    swith="active"
                    icon="cv"
                    color="secondary"
                    title="Podwykonawcy"
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.typeContract}
                  />
                  <Radio
                    id="other"
                    name="type"
                    type="box"
                    swith="active"
                    icon="ask"
                    color="secondary"
                    title="Inne"
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.typeContract}
                  />
                  <BoxError theme={settings}>{formik.errors.typeContract}</BoxError>
                </>
              ) : (
                <>
                  <Radio
                    id="contractor"
                    name="type"
                    type="box"
                    swith="active"
                    icon="people"
                    color="secondary"
                    title="Wykonawca"
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.typeContract}
                  />
                  <Radio
                    id="subcontractors"
                    name="type"
                    type="box"
                    swith="active"
                    icon="cv"
                    color="secondary"
                    title="Podwykonawcy"
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.typeContract}
                  />
                  <Radio
                    id="other"
                    name="type"
                    type="box"
                    swith="active"
                    icon="ask"
                    color="secondary"
                    title="Inne"
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.typeContract}
                  />
                </>
              )}
            </Box>

            <Step color={color} theme={settings} number={3}>
              Wypełnij formularz i uzyskaj wycenę
            </Step>

            <Box theme={settings}>
              <Half theme={settings}>
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
                      title="Najpierw potrzebujesz NDA? Wyślij nam e-mail na adres : <a href='mailto:hello@na3.eu'>hello@na3.eu</a>"
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
                      id="checkbox"
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

                <Button submit title="Wyślij" color="tertiary_1" disabled={!(formik.isValid && formik.dirty)} />
              </Half>
              <Half mascot theme={settings}>
                <List type="vertical">
                  <Pkt># Wycena bez zobowiazań</Pkt>
                  <Pkt># Wycena jest darmowa</Pkt>
                  <Pkt># Wycena w ciągu 24h</Pkt>
                </List>
                <Mascot newClass="mascot" theme={settings} />
              </Half>
            </Box>
          </form>
        </Row>
      </Section>
    </>
  );
};

// PropTpyes
SectionHeroComponent.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  newClass: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SectionHeroComponent.defaultProps = {
  id: null,
  newClass: null,
  newStyle: null,
  color: 'primary',
};

export default SectionHeroComponent;
