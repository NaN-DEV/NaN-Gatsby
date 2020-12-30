// IMPORT PLUGIN
import React from 'react';
import { graphql } from 'gatsby';

// IMPORT COMPONENT
import Layout from '../layouts/index';
import Section from '../components/organisms/section/section';

// IMPORT SETTINGS STYLE
import settings from '../layouts/settings/settings';

// CREATE NEW COMPONENT

const portfolioPageComponent = props => {
  const { datoCmsPortfolio, allDatoCmsProject, allDatoCmsPortfolio } = props.data;
  return (
    <>
      <Layout theme={settings}>
        <Section
          type="heroExcerpt"
          id={`${props.pageContext.id}-heroExcerpt-id`}
          key={`${props.pageContext.id}-heroExcerpt-key`}
          content={{
            excerpt: props.pageContext.id === 'all' ? 'zobacz sam !' : datoCmsPortfolio.excerpt,
            title: props.pageContext.id === 'all' ? 'Nasze portfolo' : datoCmsPortfolio.title,
          }}
        />

        <Section
          type="fullExcerpt"
          id={`${props.pageContext.id}-fullExcerpt-id`}
          key={`${props.pageContext.id}-fullExcerpt-key`}
          content={{
            title: 'Hej !',
            description:
              props.pageContext.id === 'all'
                ? 'Ciekawi cię do ja wyprawiałem do tej pory nim na mnie trafiłeś spoko rozumiem. Domyślam się e nie jesteś naiwniakiem który chce brać kota w worku dla tego te poniej znajdziesz litę realizacji które za zgodą klientów mógłem udostępnić po lewej znajdziesz listę kategorii w jakiej dany projekt był realizowany. '
                : datoCmsPortfolio.description,
          }}
        />

        <Section
          type="categoryPortfolio"
          parameters={{
            skip: props.pageContext.skip,
            slug: props.pageContext.slug,
            limit: props.pageContext.limit,
            page: props.pageContext.currentPage,
          }}
          key={`${props.pageContext.id}-categoryServices-key`}
          content={{ category: allDatoCmsPortfolio.nodes, articles: allDatoCmsProject.nodes }}
          id={props.pageContext.id === 'all' ? `${props.pageContext.id}-categoryServices-id` : datoCmsPortfolio.id}
        />

        <Section type="sellAds" />
      </Layout>
    </>
  );
};

export const portfolioPageQuery = graphql`
  query portfolioPageComponentGraphql($id: String) {
    datoCmsPortfolio(id: { eq: $id }) {
      id
      title
      excerpt
      description
    }
    allDatoCmsProject {
      nodes {
        id
        link
        slug
        title
        image {
          alt
          title
          url
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        category {
          id
          title
        }
      }
    }
    allDatoCmsPortfolio {
      nodes {
        id
        slug
        title
        excerpt
        tag {
          id
          title
        }
      }
    }
  }
`;

// EXPORT NEW COMPONENT
export default portfolioPageComponent;
