// IMPORT PLUGIN
import React from 'react';
import { graphql } from 'gatsby';

// IMPORT SETTINGS STYLE
import settings from '../layouts/settings/settings';

// IMPORT COMPONENT
import Layout from '../layouts/index';
import Section from '../components/organisms/section/section';

// CREATE NEW COMPONENT
const ContactPageComponent = ({ data }) => (
  <>
    <Layout theme={settings}>
      <Section id={data.datoCmsSettingsContact.id} type="heroClassic" title="Dane Kontaktowe" description="Poznajmy się" />
      <Section id={data.datoCmsSettingsContact.id} type="contact" content={data.datoCmsSettingsContact} />
    </Layout>
  </>
);

// GRAPHQL
export const query = graphql`
  query {
    datoCmsSettingsContact {
      id
      nameCompany
      street
      streetNumber
      postCode
      city
      country
      vat
      regon
      krs
      capital
      ceo {
        id
        name
      }
      telephoneNumber
      mail
    }
  }
`;

export default ContactPageComponent;
