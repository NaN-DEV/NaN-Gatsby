// IMPORT PLUGIN
import React from 'react';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// IMPORT STYLE
import Header from './style/style';

// IMPORT COMPONENT
import Modal from '../modal/modal';
import Icon from '../../atoms/icon/icon';
import Button from '../../atoms/button/button';

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
        {isModalOpen && <Modal type="menu" parameters={{ switchPower: this.clouseModal }} />}
        <Header theme={{ settings }}>
          <Button type="linkIn" content={{ to: '/', title: 'nan' }} parameters={{ className: 'logo', color: null }}>
            <Icon type="logo" parameters={{ color: 'secondary', size: 4 }} />
          </Button>

          {/* ### Button modal open ### */}
          <Button type="button" content={{ to: '/', title: 'open menu' }} parameters={{ className: 'open', color: null, onClick: this.openModal }}>
            <Icon type="hamburger" parameters={{ color: 'secondary' }} />
          </Button>
        </Header>
      </>
    );
  }
}

// EXPORT NEW COMPONENT
export default HeaderComponent;
