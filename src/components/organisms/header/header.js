// IMPORT PLUGIN
import React from 'react';

// IMPORT STYLES
import Header from './style/style';

// IMPORT SETTINGS STYLE
import theme from '../../../layouts/theme/settings2';

// IMPORT COMPONENT
import Row from '../../atoms/row/row';
import Modal from '../modal/modal';
import Button from '../../atoms/button/button';
import Logo from '../../atoms/logo/logo';
import Form from '../../molecules/form/form';

// CREATE NEW COMPONENT

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      isModalOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const amt = window.scrollY;
    if (amt > 100) this.setState({ scrolled: true });
    if (amt < 100) this.setState({ scrolled: false });
  };

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
    const { isModalOpen, scrolled } = this.state;
    const on = { transform: 'translateY(0px)' };
    const off = { transform: 'translateY(-120px)' };
    const FormSearch = [
      {
        id: 'search-main',
        input: {
          type: 'Search',
          placeholder: `<b>Javascript</b> Developer`,
        },
      },
    ];

    return (
      <>
        {isModalOpen && <Modal />}
        <Header style={scrolled ? off : on} theme={theme}>
          <Row style={{ flexWrap: 'nowrap' }}>
            <Logo secondary />
            <Form secondary items={FormSearch} key="form-search-header" />
            <Button className="button-hamburger" secondary hamburger onClick={this.openModal} />
          </Row>
        </Header>
      </>
    );
  }
}

export default HeaderComponent;
