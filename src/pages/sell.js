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
          type="heroExcerpt"
          id="sellPageComponent-id"
          key="sellPageComponent-key"
          content={{
            title: 'Uzyskaj szybką wycenę za darmo !',
            excerpt: 'Wypełnij formularz lub zadzwoń +48 888 333 885',
          }}
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
