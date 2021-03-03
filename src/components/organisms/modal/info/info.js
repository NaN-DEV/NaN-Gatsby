// Import plugin
import React from 'react';

// Import settings style
import settings from '../../../../layouts/settings/settings';

// IMPORT STYLE
import { Modal, Footer, Header, Content, ModalBox, MainInfo, GlobalStyle } from './style/style';

// Import component
import Row from '../../../atoms/row/row';
import Icon from '../../../atoms/icon/icon';
import Button from '../../../atoms/button/button';

// Create new component
const ModalInfoComponent = props => {
  const { parameters, content } = props;

  return (
    <>
      <GlobalStyle />
      <ModalBox>
        <Modal theme={{ settings }}>
          <Header theme={{ settings }}>
            <Row parameters={{}}>
              <Button type="linkIn" content={{ to: '/', title: 'nan' }} parameters={{ className: 'logo' }}>
                <Icon type="logo" parameters={{ color: 'secondary', size: 4 }} />
              </Button>

              <Button type="button" content={{ title: 'closed menu' }} parameters={{ className: 'closed', onClick: parameters.switchPower }}>
                <Icon type="closed" parameters={{ color: 'secondary' }} />
              </Button>
            </Row>
          </Header>

          <Content theme={{ settings }}>
            <Row parameters={{ className: 'row' }}>
              <MainInfo theme={{ settings }}>{content.info ? content.info : 'Add infomation'}</MainInfo>
            </Row>
          </Content>

          <Footer theme={{ settings }} />
        </Modal>
      </ModalBox>
    </>
  );
};

// Export new component
export default ModalInfoComponent;
