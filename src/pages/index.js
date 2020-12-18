// IMPORT PLUGIN
import React from 'react';
import { graphql } from 'gatsby';
import Section from '../components/organisms/section/section';

// IMPORT COMPONENT
import Layout from '../layouts/index';
import Animation from '../components/atoms/animation/animation';

// IMPORT SETTINGS STYLE
import settings from '../layouts/settings/settings';

// CREATE NEW COMPONENT
const IndexPage = ({ data }) => {
  const idArticle = [];
  data.datoCmsHome.selectPortfolio.forEach(item => {
    idArticle.push(item.id);
  });

  return (
    <>
      <Layout theme={settings} parameters={{ seo: data.datoCmsHome.seo }}>
        <Animation type="scrollNextElement" parameters={{ slide: [...idArticle, 'sectionSellAds'] }} />

        <Section
          type="scrambler"
          parameters={{ color: 'primary' }}
          id={`${data.datoCmsHome.id}-scrambler-id`}
          key={`${data.datoCmsHome.id}-scrambler-key`}
          content={{ title: data.datoCmsHome.heroSectionTitle }}
        />

        <Section
          type="triangle"
          id={`${data.datoCmsHome.id}-triangle-id`}
          content={data.datoCmsHome.selectPortfolio}
          key={`${data.datoCmsHome.id}-triangle-key`}
        />

        <Section type="sellAds" id={`${data.datoCmsHome.id}-sellAds-id`} key={`${data.datoCmsHome.id}-sellAds-key`} />
      </Layout>
    </>
  );
};

// GRAPHQL
export const query = graphql`
  query {
    datoCmsHome {
      id
      heroSectionTitle {
        id
        title
      }
      selectPortfolio {
        id
        slug
        title
        category {
          id
          slug
          title
        }
        imageSubstitute {
          alt
          author
          fluid {
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

export default IndexPage;
