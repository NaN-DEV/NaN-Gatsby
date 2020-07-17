// IMPORT PLUGIN
import React from 'react';
import { graphql } from 'gatsby';
import Button from '../components/atoms/button/button';
import Section from '../components/organisms/section/sectin';
// IMPORT COMPONENT
import Layout from '../layouts/index';
// IMPORT SETTINGS STYLE
import settings from '../layouts/settings/settings';

// CREATE NEW COMPONENT
const IndexPage = ({ data }) => {
  return (
    <>
      <Layout theme={settings}>
        {/* HERO SECCTION */}
        <Section
          size="full"
          color="primary"
          type="scrambler"
          title={data.allDatoCmsHome.nodes[0].heroSectionTitle}
        >
          <Button color="tertiary_1" title="Wyceń projekt" />
        </Section>

        {/* HERO SECCTION */}

        <Section type="tsriangle" content={data.allDatoCmsHome.nodes[0].selectPortfolio} />
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
            fixed {
              ...GatsbyDatoCmsFixed
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
