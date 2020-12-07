// IMPORT PLUGIN
import React from 'react';
import { graphql } from 'gatsby';
import Section from '../components/organisms/section/section';

// IMPORT COMPONENT
import Layout from '../layouts/index';
// import Animation from '../components/atoms/animation/animation';

// IMPORT SETTINGS STYLE
import settings from '../layouts/settings/settings';

// CREATE NEW COMPONENT
const IndexPage = ({ data }) => {
  const idArticle = [];
  data.allDatoCmsHome.nodes[0].selectPortfolio.forEach(item => {
    idArticle.push(item.id);
  });
  // const listScrollElement = [`${data.allDatoCmsHome.nodes[0].id}-scrambler-id`, ...idArticle, 'sectionSellAds'];

  return (
    <>
      <Layout theme={settings}>
        {/*
        <Animation type="scrollNextElement" allSlide={listScrollElement} /> 
        */}

        <Section
          type="scrambler"
          parameters={{ color: 'primary' }}
          id={`${data.allDatoCmsHome.nodes[0].id}-scrambler-id`}
          key={`${data.allDatoCmsHome.nodes[0].id}-scrambler-key`}
          content={{ title: data.allDatoCmsHome.nodes[0].heroSectionTitle }}
        />

        <Section
          type="triangle"
          id={`${data.allDatoCmsHome.nodes[0].id}-triangle-id`}
          content={data.allDatoCmsHome.nodes[0].selectPortfolio}
          key={`${data.allDatoCmsHome.nodes[0].id}-triangle-key`}
        />

        <Section type="sellAds" id={`${data.allDatoCmsHome.nodes[0].id}-sellAds-id`} key={`${data.allDatoCmsHome.nodes[0].id}-sellAds-key`} />
      </Layout>
    </>
  );
};

// GRAPHQL
export const query = graphql`
  query {
    allDatoCmsHome {
      nodes {
        id
        heroSectionTitle {
          title
        }
        selectPortfolio {
          id
          category {
            id
            slug
            title
          }
          title
          slug
          imageSubstitute {
            alt
            url
            title
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
