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
      <Section
        type="heroClassic"
        title="Dane Kontaktowe"
        description="Poznajmy się"
        id={`${data.datoCmsSettingsContact.id}-heroClassic-id`}
        key={`${data.datoCmsSettingsContact.id}-heroClassic-key`}
      />
      <Section
        type="contact"
        content={{ data: data.datoCmsSettingsContact }}
        id={`${data.datoCmsSettingsContact.id}-contact-id`}
        key={`${data.datoCmsSettingsContact.id}-contact-key`}
      />
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
