// Import plugin
import React from 'react';
import { graphql } from 'gatsby';
import Section from '../components/organisms/section/section';

// Import component
import Layout from '../layouts/index';

// Import settings style
import settings from '../layouts/settings/settings';

// Create new component
const servicePageComponent = ({ data }) => {
  const { seo, excerpt, content } = data.datoCmsService;
  return (
    <>
      <Layout
        theme={settings}
        parameters={{
          title: seo ? seo.title : null,
          image: seo ? seo.image.url : null,
          description: seo ? seo.description : null,
        }}
      >
        <Section
          type="excerpt"
          content={{
            title: excerpt,
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
      id
      excerpt
      seo {
        title
        twitterCard
        description
        image {
          id
          url
          author
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
