// IMPORT PLUGIN
import React from 'react';
import { Helmet } from 'react-helmet';

// IMPORT SETTINGS STYLE
import settings from './settings/settings';

// IMPORT STYLE
import GlobalStyle from './style/style';

// IMPORT COMPONENT

import Header from '../components/organisms/header/header';
import Footer from '../components/organisms/footer/footer';

// CREATE NEW COMPONENT
const Root = props => {
  const { children, color } = props;
  return (
    <>
      <Helmet>
        {/* General tags */}
        <title>NaN</title>
        <meta name="description" content="NaN" />
        <link rel="canonical" href="https://nan.nz" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <GlobalStyle theme={settings} color={color} />

      <Header />
      {children}
      <Footer />
    </>
  );
};

// EXPORT NEW COMPONENT
export default Root;
