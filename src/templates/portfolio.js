// IMPORT PLUGIN
import React from 'react';
import { graphql } from 'gatsby';
import Section from '../components/organisms/section/section';

// IMPORT COMPONENT
import Layout from '../layouts/index';

// IMPORT SETTINGS STYLE
import settings from '../layouts/settings/settings';

// CREATE NEW COMPONENT

const portfolioProject = ({ data }) => {
  const { problem, link, image, brand } = data.datoCmsPortfolio;

  return (
    <>
      <Layout theme={settings}>
        <Section half type="hero" color="primary" title="Problem" description={problem} />
        <Section type="identificationProject" nameProject={link} image={image} brand={brand} />

        {/* SECTION SELL */}
        <Section type="sellAds" />
      </Layout>
    </>
  );
};

export const portfolioProjectQuery = graphql`
  query portfolioProjectGraphql($id: String) {
    datoCmsPortfolio(id: { eq: $id }) {
      id
      link
      problem
      image {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      brand {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`;

// EXPORT NEW COMPONENT
export default portfolioProject;
