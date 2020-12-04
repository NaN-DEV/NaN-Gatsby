// IMPORT PLUGIN
import React from 'react';
import { graphql } from 'gatsby';
import Section from '../components/organisms/section/section';

// IMPORT COMPONENT
import Layout from '../layouts/index';

// IMPORT SETTINGS STYLE
import settings from '../layouts/settings/settings';

// CREATE NEW COMPONENT
const SellPageComponent = () => {
  return (
    <>
      <Layout theme={settings}>
        {/* HERO SECCTION */}
        <Section
          id="SellPageComponent-id"
          type="heroClassic"
          title="Uzyskaj szybką  wycenę !"
          description="Wypełnij ten prosty formularz. Nasz zespół skontaktuje się z Tobą niezwłocznie, aby omówić kolejne kroki."
        />

        <Section type="sell" color="primary" target="classic" />
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

export default SellPageComponent;
