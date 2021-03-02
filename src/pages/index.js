// Import plugin
import React from 'react';
import { graphql } from 'gatsby';
import Section from '../components/organisms/section/section';

// Import component
import Layout from '../layouts/index';

// Create new component
const IndexPage = ({ data }) => {
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
          type="scrambler"
          parameters={{ speed: 1500 }}
          content={{
            phrases: ['php', 'JavaScript', 'React.js', 'Gatsby.js'],
          }}
        />
      </Layout>
    </>
  );
};

// GraphQl
export const query = graphql`
  query {
    datoCmsPage(tag: { title: { eq: "home" } }) {
      id
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

// Export component
export default IndexPage;
