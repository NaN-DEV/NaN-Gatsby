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
          <Button color="tertiary_1" title="Wyceń Mój projekt" />
        </Section>

        {/* HERO SECCTION */}
      </Layout>
    </>
  );
};

// GRAPHQL
export const query = graphql`
  query {
    allDatoCmsHome {
      nodes {
        heroSectionTitle {
          id
          title
        }
      }
    }
  }
`;

export default IndexPage;
