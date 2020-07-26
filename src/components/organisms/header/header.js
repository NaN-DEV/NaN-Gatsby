// IMPORT PLUGIN
import React from 'react';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// IMPORT STYLE
import { Header, HeaderStopBox } from './style/style';

// IMPORT COMPONENT
import Modal from '../modal/modal';
import Row from '../../atoms/row/row';
import Icon from '../../atoms/icon/icon';
import Input from '../../atoms/input/input';
import Form from '../../molecules/form/form';

// CREATE NEW COMPONENT
const HeaderComponent = () => {
  return (
    <>
      <Modal key="main-menu" />
      <Header theme={settings}>
        <Row newClass="row">
          {/* ############## LOGO ############## */}
          <Icon
            link="/"
            secondary
            type="link"
            icon="logo"
            height={4}
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
