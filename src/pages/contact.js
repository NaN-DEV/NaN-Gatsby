// Import plugin
import React from 'react';
import { graphql } from 'gatsby';

// Import component
import Layout from '../layouts/index';
import Section from '../components/organisms/section/section';

// Create new component
const ContactPageComponent = ({ data }) => (
  <>
    <Layout
      content={{
        title: data.datoCmsPage.seo.title,
        image: data.datoCmsPage.seo.image.url,
        description: data.datoCmsPage.seo.description,
      }}
    >
      <Section
        type="excerpt"
        content={{
          title: data.datoCmsPage.title,
          excerpt: data.datoCmsPage.excerpt,
        }}
      />

      <Section type="contact" content={{ ...data.datoCmsContact }} />
    </Layout>
  </>
);

// GraphQL
export const query = graphql`
  query {
    datoCmsContact {
      company
      street
      city
      postCode
      country
      vat
      regon
      krs
      phone
      mail
    }

    datoCmsPage(tag: { title: { eq: "contact" } }) {
      title
      excerpt
      seo {
        title
        description
        image {
          url
        }
      }
    }
  }
`;

export default ContactPageComponent;
