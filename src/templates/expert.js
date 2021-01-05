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
  const { id, seo, image, name, surname, title, excerpt, portfolio, description, content, stack, passions } = data.datoCmsExpert;

  return (
    <>
      <Layout theme={settings} parameters={{ title: seo.title, description: seo.description, image: seo.image.url }}>
        <Section half type="heroExcerpt" id={`${id}-id`} key={`${id}-key`} content={{ title, excerpt }} />
        <Section type="idExpert" id={`${id}-idExpert-id`} key={`${id}-idExpert-key`} content={{ image, name, surname, portfolio, description }} />
        <Section type="listSkils" id={`${id}-listSkils-id`} key={`${id}-listSkils-key`} content={{ skils: content }} />
        <Section type="fullText" content={{ title: 'Stack', tags: stack }} parameters={{ color: 'tertiary_1' }} />
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
      title
      excerpt
      surname
      passions
      portfolio
      description
      stack {
        title
      }
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

// EXPORT NEW COMPONENT
export default expertPage;
