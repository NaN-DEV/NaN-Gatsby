// IMPORT PLUGIN
import React from 'react';
import { graphql } from 'gatsby';
import Section from '../components/organisms/section/section';

// IMPORT COMPONENT
import Layout from '../layouts/index';

// IMPORT SETTINGS STYLE
import settings from '../layouts/settings/settings';

// CREATE NEW COMPONENT

const servicePageComponent = ({ data }) => {
  const { id, seo, title, excerpt, content } = data.datoCmsService;
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
          type="heroExcerpt"
          id={`${id}-heroExcerpt-id`}
          key={`${id}-heroExcerpt-key`}
          content={{
            title,
            excerpt,
          }}
        />
        <Section id={id} type="serviceContent" content={{ description: content }} />
        <Section type="sellAds" />
      </Layout>
    </>
  );
};

// QUERY GRAPHQL
export const servicePageQuery = graphql`
  query servicePageComponentGraphql($id: String) {
    datoCmsService(id: { eq: $id }) {
      id
      title
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

// EXPORT NEW COMPONENT
export default servicePageComponent;
