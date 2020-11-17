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
  const { id, title, excerpt, content } = data.datoCmsService;
  return (
    <>
      <Layout theme={settings} key={`${id}-servicePageComponent-section-key`} id={`${id}-servicePageComponent-section-id`} color="primary">
        <Section id={id} type="heroClassic" title={title} description={excerpt} />
        <Section id={id} type="serviceContent" content={content} />
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
      content {
        id
        title
        description
        image {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`;

// EXPORT NEW COMPONENT
export default servicePageComponent;
