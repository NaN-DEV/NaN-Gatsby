// IMPORT PLUGIN
import React from 'react';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// IMPORT STYLE
import { Header, HeaderStopBox } from './style/style';

// IMPORT COMPONENT
import Row from '../../atoms/row/row';
import Icon from '../../atoms/icon/icon';

// CREATE NEW COMPONENT
const HeaderComponent = () => {
  return (
    <>
      <Header theme={settings}>
        <Row>
          <Icon link="/" icon="logo" />
          dxwdwdwd
        </Row>
      </Header>
      <HeaderStopBox />
    </>
  );
};

// EXPORT NEW COMPONENT
export default HeaderComponent;
