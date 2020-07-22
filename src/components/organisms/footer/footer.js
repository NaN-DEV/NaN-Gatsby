// IMPORT PLUGIN
import React from 'react';
import { Link } from 'gatsby';

// IMPORT SETTING STYLE
import settings from '../../../layouts/settings/settings';

// IMPORT STYLE
import { Footer, Copyright, Ul, Li } from './style/style';

// IMPORT COMPONENT
import Row from '../../atoms/row/row';
import Icon from '../../atoms/icon/icon';

// CREATE NEW COMPONENT
const HeaderComponent = () => {
  return (
    <>
      <Footer theme={settings}>
        <Row newClass="row">
          <Icon
            link="/"
            primary
            height={4}
            type="link"
            icon="logo"
            newClass="logo"
            title="NAN SOFTWARE HOUSE"
          />
          <Copyright theme={settings}>Copyright 2016-2020</Copyright>
          <Ul theme={settings}>
            <Li theme={settings}>
              <Link to="/">#Polityka Prywatności</Link>
            </Li>
            <Li theme={settings}>
              <Link to="/">#Regulamin</Link>
            </Li>
            <Li theme={settings}>
              <Link to="/">#Kontakt</Link>
            </Li>
          </Ul>
        </Row>
      </Footer>
    </>
  );
};

// EXPORT NEW COMPONENT
export default HeaderComponent;
