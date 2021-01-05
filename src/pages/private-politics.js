// IMPORT PLUGIN
import React from 'react';
import { graphql } from 'gatsby';

// IMPORT SETTINGS STYLE
import settings from '../layouts/settings/settings';

// IMPORT COMPONENT
import Layout from '../layouts/index';
import Section from '../components/organisms/section/section';

// CREATE NEW COMPONENT
const ContactPageComponent = ({ data }) => {
  const { id, title, excerpt, description, content } = data.datoCmsPrivatePolitic;
  console.log(content);
  return (
    <>
      <Layout
        theme={settings}
        parameters={{
          title,
          description,
        }}
      >
        <Section
          type="heroExcerpt"
          id={`${id}-heroExcerpt-id`}
          key={`${id}-heroExcerpt-key`}
          content={{
            title,
            excerpt,
          }}
        />

        <Section id={id} type="pointContent" content={{ description: content }} />
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
        twitterCard
        description
        image {
          id
          url
          author
        }
      }
    }
  }
`;

export default ContactPageComponent;
