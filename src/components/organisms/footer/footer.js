// Import plugin
import React from 'react';

// Import settings style
import settings from '../../../layouts/settings/settings';

// Import style
import { Footer, Copyright } from './style/style';

// Import component
import Icon from '../../atoms/icon/icon';
import List from '../../molecules/list/list';
import Button from '../../atoms/button/button';

// Create new component
const footerComponent = () => {
  return (
    <>
      <Footer theme={{ settings }}>
        <Button type="linkIn" content={{ to: '/', title: 'nan' }} parameters={{ className: 'logo' }}>
          <Icon type="logo" parameters={{ colorStyle: 'primary', size: 4 }} />
        </Button>

        <Copyright theme={{ settings }}>Copyright 2016-2020</Copyright>
        <List type="level" parameters={{ className: 'listLink' }}>
          <Button type="linkIn" content={{ to: '/sell', title: 'wyceń projekt' }} parameters={{}}>
            wyceń projekt
          </Button>
        </List>
      </Footer>
    </>
  );
};

// Export new component
export default footerComponent;
