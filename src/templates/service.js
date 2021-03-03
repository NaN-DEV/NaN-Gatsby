// Import plugin
import React from 'react';
import { graphql } from 'gatsby';
import Section from '../components/organisms/section/section';

// Import component
import Layout from '../layouts/index';

// Create new component
const servicePageComponent = ({ data }) => {
  const { seo, title, excerpt, content } = data.datoCmsService;

  return (
    <>
      <Layout
        content={{
          title: seo ? seo.title : null,
          image: seo ? seo.image.url : null,
          description: seo ? seo.description : null,
        }}
      >
        <Section
          type="excerpt"
          content={{
            title,
            excerpt,
          }}
        />
        <Section type="point" content={{ description: content }} />
      </Layout>
    </>
  );
};

// GraphQL
export const servicePageQuery = graphql`
  query servicePageComponentGraphql($id: String) {
    datoCmsService(id: { eq: $id }) {
      title
      excerpt
      seo {
        title
        description
        image {
          url
        }
      }
      content {
        id
        title
        description
        image {
          fluid(maxWidth: 1920) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`;

// Export new component
export default servicePageComponent;
