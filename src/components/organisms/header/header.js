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

// CREATE NEW COMPONENT
class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.clouseModal = this.clouseModal.bind(this);
  }

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  clouseModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <>
        {isModalOpen && <Modal key="main-menu" closed={this.clouseModal} />}
        <Header theme={settings}>
          <Row newClass="row">
            {/* ############## LOGO ############## */}
            <Icon link="/" secondary height={4} type="link" icon="logo" newClass="logo" title="NAN SOFTWARE HOUSE" />

            {/* ########### FROM SEARCH ########## */}
            {/* <Form newClass="search">
              <Input width={30} type="search" color="secondary" placeholder="Szukaj..." />
            </Form> */}

            {/* ########## Button icon ########### */}
            <Icon secondary type="button" icon="hamburger" title="OPEN MENU" onClick={this.openModal} />
          </Row>
        </Header>
        <HeaderStopBox />
      </>
    );
  }
}

// EXPORT NEW COMPONENT
export default HeaderComponent;
