// IMPORT PLUGIN
import React from 'react';

// IMPORT SETTINGS STYLE

import Row from '../../../atoms/row/row';
import Icon from '../../../atoms/icon/icon';
import Button from '../../../atoms/button/button';
import settings from '../../../../layouts/settings/settings';

// IMPORT STYLE
import { Modal, Footer, Header, Content, ModalBox, MainInfo, GlobalStyle } from './style/style';

// CREATE NEW COMPONENT
const ModalInfoComponent = props => {
  const { parameters, content } = props;

  return (
    <>
      <GlobalStyle />
      <ModalBox>
        <Modal theme={settings}>
          <Header>
            <Row newClass="rowHeader">
              <Button type="linkIn" content={{ to: '/', title: 'nan' }} parameters={{ newClass: 'logo' }}>
                <Icon type="logo" parameters={{ color: 'secondary', size: 4 }} />
              </Button>

              <Button type="button" content={{ title: 'closed menu' }} parameters={{ newClass: 'closed', onClick: parameters.switchPower }}>
                <Icon type="closed" parameters={{ color: 'secondary' }} />
              </Button>
            </Row>
          </Header>

          <Content theme={settings}>
            <MainInfo theme={settings}>{content.info ? content.info : 'Add infomation'}</MainInfo>
          </Content>

          <Footer theme={settings} />
        </Modal>
      </ModalBox>
    </>
  );
};

// EXPORT NEW COMPONENT
export default ModalInfoComponent;
