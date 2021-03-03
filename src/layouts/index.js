/* eslint-disable react/no-unknown-property */
// import plugin
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

// import style
import GlobalStyle from './style/globalStyle';

// import settings style
import settings from './settings/settings';

// import component
import Header from '../components/organisms/header/header';
import Footer from '../components/organisms/footer/footer';

// create new component
const Root = props => {
  const { content, children } = props;

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

  const title = content.title ? content.title : datoCmsSite.globalSeo.siteName;
  const image = content.image ? content.image : datoCmsSite.globalSeo.fallbackSeo.image.url;
  const url = content.slug ? `https://www.nan.nz/${content.slug}` : `https://www.nzn.nz/`;
  const description = content.description ? content.description : datoCmsSite.globalSeo.fallbackSeo.description;

  return (
    <>
      <Helmet htmlAttributes={{ lang: 'pl' }}>
        {/* General tags */}
        <title>
          {title} {datoCmsSite.globalSeo.titleSuffix}
        </title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <link rel="canonical" href={url} />

        {/* OpenGraph tags */}
        <meta name="og:url" content={url} />
        <meta name="og:image" content={image} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />

        {/* Twitter Card tags */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content={datoCmsSite.globalSeo.twitterAccount} />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;0,800;1,400;1,700&display=swap"
          as="style"
          onload="this.onload=null; this.rel='stylesheet'; document.body.classList.add('fontLoaded')"
        />
      </Helmet>

      <GlobalStyle theme={{ settings }} />
      <Header />
      {children}
      <Footer />
    </>
  );
};

// PropTpyes
Root.propTypes = {
  children: PropTypes.node.isRequired,

  content: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }),
};

// PropTpyes default
Root.defaultProps = {
  content: PropTypes.shape({ title: false, description: false, image: null }),
};

// export new component
export default Root;
