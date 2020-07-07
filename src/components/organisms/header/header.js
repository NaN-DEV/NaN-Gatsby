// IMPORT PLUGIN
import React from 'react';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// IMPORT STYLE
import { Header, HeaderStopBox } from './style/style';

// IMPORT COMPONENT
import Row from '../../atoms/row/row';
import Icon from '../../atoms/icon/icon';
import Input from '../../atoms/input/input';
import Form from '../../molecules/form/form';

// CREATE NEW COMPONENT
const HeaderComponent = () => {
  return (
    <>
      <Header theme={settings}>
        <Row newClass="row">
          {/* ############## LOGO ############## */}
          <Icon
            link="/"
            secondary
            height={4}
            type="link"
            icon="logo"
            newClass="logo"
            title="NAN SOFTWARE HOUSE"
          />

          {/* ########### FROM SEARCH ########## */}
          <Form newClass="search">
            <Input type="search" secondary placeholder="Szukaj..." width={30} />
          </Form>

          {/* ########## Button icon ########### */}
          <Icon secondary type="button" icon="hamburger" title="OPEN MENU" />
        </Row>
      </Header>
      <HeaderStopBox />
    </>
  );
};

// EXPORT NEW COMPONENT
export default HeaderComponent;
