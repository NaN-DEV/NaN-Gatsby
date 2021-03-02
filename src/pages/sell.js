// IMPORT PLUGIN
import React from 'react';
import { graphql } from 'gatsby';
import Section from '../components/organisms/section/section';

// Import component
import Layout from '../layouts/index';

// Create new component
const SellPageComponent = ({ data }) => {
  return (
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
          }}
        />
        <Section type="sell" />
      </Layout>
    </>
  );
};

// Query GraphQL
export const SellPageComponentQuery = graphql`
  query {
    datoCmsPage(tag: { title: { eq: "sale" } }) {
      id
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

// export
export default SellPageComponent;
