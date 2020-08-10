// IMPORT PLUGIN
import React from 'react';

// IMPORT SETTINGS STYLE
import settings from '../layouts/settings/settings';

// IMPORT COMPONENT
import Layout from '../layouts/index';
import Section from '../components/organisms/section/section';

// CREATE NEW COMPONENT
const NotFoundPage = () => (
  <>
    <Layout theme={settings}>
      <Section type="notFoundPage" />
    </Layout>
  </>
);

export default NotFoundPage;
