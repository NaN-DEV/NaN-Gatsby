// IMPORT PLUGIN
import React from 'react';

// IMPORT STYLES
import { Modal, Header } from './style/style';

// IMPORT SETTINGS STYLE
import theme from '../../../layouts/theme/settings2';

// IMPORT COMPONENT START
import Row from '../../atoms/row/row';
import Logo from '../../atoms/logo/logo';
import Button from '../../atoms/button/button';

// CREATE NEW COMPONENT

const ModalComponent = () => {
  return (
    <>
      <Modal theme={theme}>
        <Row>
          <Header theme={theme}>
            <Logo secondary />
            <Button className="button-clouse" hamburger secondary clouse />
          </Header>
        </Row>
      </Modal>
    </>
  );
};

export default ModalComponent;
