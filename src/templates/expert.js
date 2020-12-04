// IMPORT PLUGIN
import React from 'react';
import { graphql } from 'gatsby';

// IMPORT COMPONENT
import Layout from '../layouts/index';
import Section from '../components/organisms/section/section';

// IMPORT SETTINGS STYLE
import settings from '../layouts/settings/settings';

// CREATE NEW COMPONENT

const expertPage = ({ data }) => {
  const { id, image, name, surname, joke, portfolio, description, content, passions } = data.datoCmsExpert;

  return (
    <>
      <Layout theme={settings} key="expertPage">
        <Section
          half
          type="heroExcerpt"
          id={`${id}-heroExcerpt-id`}
          key={`${id}-heroExcerpt-key`}
          content={{ title: 'Co robię na co dzień ?', excerpt: joke }}
        />
        <Section type="idExpert" id={`${id}-idExpert-id`} key={`${id}-idExpert-key`} content={{ image, name, surname, portfolio, description }} />
        <Section type="listSkils" id={`${id}-listSkils-id`} key={`${id}-listSkils-key`} content={{ skils: content }} />
        <Section type="fullText" content={{ title: 'Pasje', description: passions }} parameters={{ color: 'tertiary_4' }} />
        <Section type="sellAds" />
      </Layout>
    </>
  );
};

export const expertPageQuery = graphql`
  query expertPageQuery($id: String) {
    datoCmsExpert(id: { eq: $id }) {
      id
      slug
      name
      joke
      surname
      passions
      portfolio
      description
      image {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      content {
        id
        description
        sinceWhenYouCan
        skils {
          id
          title
        }
      }
    }
  }
`;

// EXPORT NEW COMPONENT
export default expertPage;
