// IMPORT PLUGIN
import React from 'react';

// IMPORT SETTINGS STYLE
import settings from './settings/settings';

// IMPORT STYLE
import GlobalStyle from './style/style';

// IMPORT COMPONENT
import Header from '../components/organisms/header/header';

// CREATE NEW COMPONENT
const Root = props => {
  const { children } = props;
  return (
    <>
      <GlobalStyle theme={settings} />
      <Header newStyle={{ height: '300px' }} />
      {children}
    </>
  );
};

// EXPORT NEW COMPONENT
export default Root;
