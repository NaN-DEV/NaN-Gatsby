/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
// IMPORT PLUGIN
import React from 'react';
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

// CREATE NEW COMPONENT
const sectionContactComponent = props => {
  const { id, newStyle, newClass, content } = props;

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
            <form name="mojFormularz" method="POST" data-netlify="true">
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>
              <p>
                <label>
                  Email: <input type="text" name="email" />
                </label>
              </p>
              <p>
                <label>
                  Message: <textarea name="message" />
                </label>
              </p>
              <p>
                <button type="submit" style={{ color: 'white' }}>
                  Send
                </button>
              </p>
            </form>
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
