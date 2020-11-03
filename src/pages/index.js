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
  const listScrollElement = ['hero', 'article-triangle-0', 'article-triangle-1', 'article-triangle-2', 'article-triangle-3', 'sell'];

  return (
    <>
      <Layout theme={settings}>
        <Animation type="scrollNextElement" allSlide={listScrollElement} />
        {/* HERO SECCTION */}
        <Section id="hero" size="full" color="primary" type="scrambler" title={data.allDatoCmsHome.nodes[0].heroSectionTitle} />

        {/* SECCTION TRIANGLE */}

        <Section type="triangle" content={data.allDatoCmsHome.nodes[0].selectPortfolio} />

        {/* SECTION SELL */}

        <Section type="sellAds" />
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
            name
          }
          title
          slug
          imageSubstitute {
            alt
            title
            url
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
