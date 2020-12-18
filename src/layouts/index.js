// Import plugin
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

// Import setting style
import settings from './settings/settings';

// Import style
import GlobalStyle from './style/style';

// Import component
import Header from '../components/organisms/header/header';
import Footer from '../components/organisms/footer/footer';

// Create new component
const Root = props => {
  const { type, children, parameters } = props;

  const { datoCmsSite } = useStaticQuery(
    graphql`
      query {
        datoCmsSite {
          id
          domain
          globalSeo {
            siteName
            titleSuffix
            twitterAccount
            facebookPageUrl
            fallbackSeo {
              title
              description
              twitterCard
              image {
                url
              }
            }
          }
        }
      }
    `,
  );

  const title = parameters.title || datoCmsSite.globalSeo.siteName;
  const image = parameters.image || datoCmsSite.globalSeo.fallbackSeo.image.url;
  const description = parameters.description || datoCmsSite.globalSeo.description;
  const url = parameters.slug ? `https://www.nan.nz/${parameters.slug}` : `https://www.nan.nz/`;
  return (
    <>
      <Helmet>
        {/* General tags */}
        <title>
          {title} {datoCmsSite.globalSeo.titleSuffix}
        </title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <link rel="canonical" href={url} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {type === 'blog' ? <meta property="og:type" content="article" /> : null}

        {/* Twitter Card tags */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content={datoCmsSite.globalSeo.twitterAccount} />

        {/* schema tags */}
        {parameters.schema ? <script type="application/ld+json">{parameters.schema}</script> : null}

        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swapg" rel="stylesheet" defer />
      </Helmet>
      <GlobalStyle theme={settings} />

      <Header />
      {children}
      <Footer />
    </>
  );
};

// PropTpyes
Root.propTypes = {
  children: PropTypes.node.isRequired,
  parameters: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  }),
};

// PropTpyes default
Root.defaultProps = {
  parameters: PropTypes.shape({
    title: false,
    image: false,
    description: false,
  }),
};

// Export new component
export default Root;
