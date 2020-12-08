/* eslint-disable jsx-a11y/label-has-associated-control */
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
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Name <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email <input type="email" name="email" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
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
