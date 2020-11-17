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

const projectPageComponent = ({ data }) => {
  const { problem, link, image, brand, target, process, score, job, jobTechnology, scoreStat } = data.datoCmsProject;
  const { nodes } = data.allDatoCmsProject;

  return (
    <>
      <Layout theme={settings} key="projectPage">
        <Section half type="hero" color="primary" title="Problem" description={problem} />
        <Section type="identificationProject" key="project3333" id="project3333" nameProject={link} image={image} brand={brand} />
        <Section type="fullText" big color="tertiary_4" title="Cel" key="cel" id="cel122" description={target} />
        <Section type="fullText" big color="tertiary_3" title="Proces" key="proces" id="proces122" description={process} />
        <Section type="fullText" big color="tertiary_2" title="Wynik" key="wynik" id="wynik122" description={score} options={scoreStat} />
        <Section type="fullText" big color="tertiary_1" title="Prace" key="prace" id="prace122" description={job} options={jobTechnology} />
        <Carousel content={nodes} />
        {/* SECTION SELL */}
        <Section type="sellAds" />
      </Layout>
    </>
  );
};

// QUERY GRAPHQL

export const projectPageQuery = graphql`
  query projectPageComponentGraphql($id: String) {
    allDatoCmsProject {
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
    datoCmsProject(id: { eq: $id }) {
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
export default projectPageComponent;
