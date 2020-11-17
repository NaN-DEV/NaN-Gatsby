// IMPORT PLUGIN
import React from 'react';
import { graphql } from 'gatsby';
import Section from '../components/organisms/section/section';

// IMPORT COMPONENT
import Layout from '../layouts/index';

// IMPORT SETTINGS STYLE
import settings from '../layouts/settings/settings';

// CREATE NEW COMPONENT

const portfolioPage = ({ data }) => {
  const { id, header, excerpt, description } = data.datoCmsPortfolio;
  return (
    <>
      <Layout theme={settings} key="projectPage">
        <Section half type="hero" color="primary" title={header} joke={excerpt} />
        <Section type="fullText" color="secondary" title="Czejść !" key="cel" id="cel122" description={description} />
        <Section type="itemCategory" id={id} category={data.allDatoCmsPortfolio.nodes} items={data.allDatoCmsProject.nodes} />
        {/* SECTION SELL */}

        <Section type="sellAds" />
      </Layout>
    </>
  );
};

export const portfolioPageQuery = graphql`
  query portfolioPageComponentGraphql($id: String) {
    datoCmsPortfolio(id: { eq: $id }) {
      id
      name
      slug
      header
      excerpt
      description
    }
    allDatoCmsPortfolio {
      nodes {
        id
        name
        slug
      }
    }
    allDatoCmsProject {
      nodes {
        id
        slug
        title
        excerpt
        category {
          id
        }
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
export default portfolioPage;
