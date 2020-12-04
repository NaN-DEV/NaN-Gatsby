// Import plugin
import React from 'react';

// Import settings style
import settings from '../../../layouts/settings/settings';

// Import style
import { Footer, Copyright } from './style/style';

// Import component
import Row from '../../atoms/row/row';
import Icon from '../../atoms/icon/icon';
import List from '../../molecules/list/list';
import Button from '../../atoms/button/button';

// Create new component
const footerComponent = () => {
  return (
    <>
      <Footer theme={settings}>
        <Row newClass="row">
          <Button type="linkIn" content={{ to: '/', title: 'nan' }} parameters={{ newClass: 'logo' }}>
            <Icon type="logo" colorStyle="primary" size={4} />
          </Button>

          <Copyright theme={settings}>Copyright 2016-2020</Copyright>
          <List type="level" newClass="listLink">
            <Button type="linkIn" content={{ to: '/sell', title: 'Wyceń Projekt' }}>
              #Wyceń projekt
            </Button>
            <Button type="linkIn" content={{ to: '/', title: 'Prywatnosć' }}>
              #Prywatność
            </Button>
            <Button type="linkIn" content={{ to: '/contact', title: 'Kontakt' }}>
              #Kontakt
            </Button>
          </List>
        </Row>
      </Footer>
    </>
  );
};

// Export new component
export default footerComponent;
