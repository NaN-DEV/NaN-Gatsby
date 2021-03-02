// Import plugin
import React from 'react';
import { graphql } from 'gatsby';

// Import component
import Layout from '../layouts/index';
import Section from '../components/organisms/section/section';

// Create new component
const ContactPageComponent = ({ data }) => {
  return (
    <>
      <Layout
        content={{
          title: data.datoCmsPrivatePolitic.seo.title,
          image: data.datoCmsPrivatePolitic.seo.image.url,
          description: data.datoCmsPrivatePolitic.seo.description,
        }}
      >
        <Section
          type="excerpt"
          content={{
            title: data.datoCmsPrivatePolitic.title,
            excerpt: data.datoCmsPrivatePolitic.excerpt,
          }}
        />

        <Section type="point" content={{ description: data.datoCmsPrivatePolitic.content }} />
      </Layout>
    </>
  );
};

// GRAPHQL
export const query = graphql`
  query {
    datoCmsPrivatePolitic {
      id
      title
      excerpt
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
