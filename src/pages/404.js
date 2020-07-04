// IMPORT PLUGIN
import React from 'react';

// IMPORT SETTINGS STYLE
import settings from '../layouts/settings/settings';

// IMPORT COMPONENT
import Layout from '../layouts/index';

// CREATE NEW COMPONENT
const NotFoundPage = () => (
  <>
    <Layout theme={settings}>
      <h1>NOT FOUND</h1>
    </Layout>
  </>
);

export default NotFoundPage;
