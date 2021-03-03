// Import plugin
import React from 'react';

// Import settings style
import settings from '../../../layouts/settings/settings';

// Import style
import Header from './style/style';

// Import component
import Modal from '../modal/modal';
import Row from '../../atoms/row/row';
import Icon from '../../atoms/icon/icon';
import Button from '../../atoms/button/button';

// Create new component
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
          <Row parameters={{ className: 'row' }}>
            <Button type="linkIn" content={{ to: '/', title: 'nan' }} parameters={{ className: 'logo', color: null }}>
              <Icon type="logo" parameters={{ color: 'secondary', size: 4 }} />
            </Button>

            {/* ### Button modal open ### */}
            <Button type="button" content={{ to: '/', title: 'open menu' }} parameters={{ className: 'open', color: null, onClick: this.openModal }}>
              <Icon type="hamburger" parameters={{ color: 'secondary' }} />
            </Button>
          </Row>
        </Header>
      </>
    );
  }
}

// EXPORT NEW COMPONENT
export default HeaderComponent;
