// IMPORT PLUGIN
import React from 'react';
import { graphql } from 'gatsby';
import Section from '../components/organisms/section/section';

// IMPORT COMPONENT
import Layout from '../layouts/index';
import Carousel from '../components/molecules/carusel/carusel';

// IMPORT SETTINGS STYLE
import settings from '../layouts/settings/settings';

// CREATE NEW COMPONENT

const portfolioProject = ({ data }) => {
  const { problem, link, image, brand, target, process, score, job, jobTechnology, scoreStat } = data.datoCmsPortfolio;
  const { nodes } = data.allDatoCmsPortfolio;

  return (
    <>
      <Layout theme={settings} key="portfolio">
        <Section half type="hero" color="primary" title="Problem" description={problem} />
        <Section type="identificationProject" nameProject={link} image={image} brand={brand} />
        <Section type="fullText" color="tertiary_4" title="Cel" key="cel" description={target} />
        <Section type="fullText" color="tertiary_3" title="Proces" key="proces" description={process} />
        <Section type="fullText" color="tertiary_2" title="Wynik" key="wynik" description={score} options={scoreStat} />
        <Section type="fullText" color="tertiary_1" title="Prace" key="prace" description={job} options={jobTechnology} />
        <Carousel content={nodes} />
        {/* SECTION SELL */}
        <Section type="sellAds" />
      </Layout>
    </>
  );
};

export const portfolioProjectQuery = graphql`
  query portfolioProjectGraphql($id: String) {
    allDatoCmsPortfolio {
      nodes {
        id
        slug
        title
        category {
          slug
          name
          id
        }
      }
    }
    datoCmsPortfolio(id: { eq: $id }) {
      id
      job
      link
      score
      target
      problem
      process
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
      jobTechnology {
        id
        icon
      }
      scoreStat {
        id
        unit
        value
        percent
        description
      }
    }
  }
`;

// EXPORT NEW COMPONENT
export default portfolioProject;
