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
  const { problem, link, image, brand, target, process, score, job, jobTechnology } = data.datoCmsPortfolio;

  const OptionsScore = [
    { value: '10', unit: 'mc.', percent: 20, description: '10 miesięcy ciągłej pracy nad projektem' },
    { value: '200', unit: 'tyś.', percent: 50, description: 'Po 5 miesiącach od uruchomienia 200 000 nowych użytników' },
    { value: '120', unit: 'tyś.', percent: 80, description: 'Po 5 miesiącach od uruchomienia 200 000 nowych użytników' },
  ];

  return (
    <>
      <Layout theme={settings}>
        <Section half type="hero" color="primary" title="Problem" description={problem} />
        <Section type="identificationProject" nameProject={link} image={image} brand={brand} />
        <Section type="fullText" color="tertiary_4" title="Cel" description={target} />
        <Section type="fullText" color="tertiary_3" title="Proces" description={process} />
        <Section type="fullText" color="tertiary_2" title="Wynik" description={score} options={OptionsScore} />
        <Section type="fullText" color="tertiary_1" title="Prace" description={job} options={jobTechnology} />
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
    }
  }
`;

// EXPORT NEW COMPONENT
export default portfolioProject;
