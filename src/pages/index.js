// IMPORT PLUGIN
import React from 'react';

// IMPORT SETTINGS STYLE
import settings from '../layouts/settings/settings';

// IMPORT COMPONENT
import Layout from '../layouts/index';

// CREATE NEW COMPONENT
const IndexPage = () => (
  <>
    <Layout theme={settings}>
      <h1>Hi people</h1>
    </Layout>
  </>
);

export default IndexPage;
