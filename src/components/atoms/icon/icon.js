// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLES
import BoxIcon from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// IMPORT SVG
import Cv from '../../../assets/icon/cv.svg';
import Ask from '../../../assets/icon/ask.svg';
import Ux from '../../../assets/icon/uxui.svg';
import More from '../../../assets/icon/more.svg';
import Mail from '../../../assets/icon/mail.svg';
import Down from '../../../assets/icon/down.svg';
import Back from '../../../assets/icon/back.svg';
import Logo from '../../../assets/brand/logo.svg';
import Front from '../../../assets/icon/front.svg';
import Phone from '../../../assets/icon/phone.svg';
import Coffe from '../../../assets/icon/coffe.svg';
import Folder from '../../../assets/icon/folder.svg';
import Closed from '../../../assets/icon/closed.svg';
import People from '../../../assets/icon/people.svg';
import Twitter from '../../../assets/icon/twitter.svg';
import Website from '../../../assets/icon/website.svg';
import Facebook from '../../../assets/icon/facebook.svg';
import Computer from '../../../assets/icon/computer.svg';
import Triangle from '../../../assets/icon/triangle.svg';
import Settings from '../../../assets/icon/settings.svg';
import Hamburger from '../../../assets/icon/hamburger.svg';
import Conversation from '../../../assets/icon/conversation.svg';
import Notification from '../../../assets/icon/notification.svg';

// CREATE NEW COMPONENT
const IconComponent = props => {
  const { type, colorStyle, size, newClass, newStyle } = props;

  switch (type) {
    case 'cv':
      return (
        <BoxIcon theme={settings} className={newClass} style={newStyle} colorStyle={colorStyle} size={size}>
          <Cv />
        </BoxIcon>
      );

    case 'ask':
      return (
        <BoxIcon theme={settings} className={newClass} style={newStyle} colorStyle={colorStyle} size={size}>
          <Ask />
        </BoxIcon>
      );
    case 'ui/ux':
      return (
        <BoxIcon theme={settings} className={newClass} style={newStyle} colorStyle={colorStyle} size={size}>
          <Ux />
        </BoxIcon>
      );
    case 'more':
      return (
        <BoxIcon theme={settings} className={newClass} style={newStyle} colorStyle={colorStyle} size={size}>
          <More />
        </BoxIcon>
      );
    case 'mail':
      return (
        <BoxIcon theme={settings} className={newClass} style={newStyle} colorStyle={colorStyle} size={size}>
          <Mail />{' '}
        </BoxIcon>
      );
    case 'down':
      return (
        <BoxIcon theme={settings} className={newClass} style={newStyle} colorStyle={colorStyle} size={size}>
          <Down />
        </BoxIcon>
      );
    case 'back-end':
      return (
        <BoxIcon theme={settings} className={newClass} style={newStyle} colorStyle={colorStyle} size={size}>
          <Back />
        </BoxIcon>
      );
    case 'logo':
      return (
        <BoxIcon theme={settings} className={newClass} style={newStyle} colorStyle={colorStyle} size={size}>
          <Logo />
        </BoxIcon>
      );
    case 'front-end':
      return (
        <BoxIcon theme={settings} className={newClass} style={newStyle} colorStyle={colorStyle} size={size}>
          <Front />
        </BoxIcon>
      );
    case 'phone':
      return (
        <BoxIcon theme={settings} className={newClass} style={newStyle} colorStyle={colorStyle} size={size}>
          <Phone />
        </BoxIcon>
      );
    case 'coffe':
      return (
        <BoxIcon theme={settings} className={newClass} style={newStyle} colorStyle={colorStyle} size={size}>
          <Coffe />
        </BoxIcon>
      );
    case 'folder':
      return (
        <BoxIcon theme={settings} className={newClass} style={newStyle} colorStyle={colorStyle} size={size}>
          <Folder />
        </BoxIcon>
      );
    case 'closed':
      return (
        <BoxIcon theme={settings} className={newClass} style={newStyle} colorStyle={colorStyle} size={size}>
          <Closed />
        </BoxIcon>
      );
    case 'people':
      return (
        <BoxIcon theme={settings} className={newClass} style={newStyle} colorStyle={colorStyle} size={size}>
          <People />
        </BoxIcon>
      );
    case 'twitter':
      return (
        <BoxIcon theme={settings} className={newClass} style={newStyle} colorStyle={colorStyle} size={size}>
          <Twitter />
        </BoxIcon>
      );
    case 'website':
      return (
        <BoxIcon theme={settings} className={newClass} style={newStyle} colorStyle={colorStyle} size={size}>
          <Website />
        </BoxIcon>
      );
    case 'facebook':
      return (
        <BoxIcon theme={settings} className={newClass} style={newStyle} colorStyle={colorStyle} size={size}>
          <Facebook />
        </BoxIcon>
      );
    case 'computer':
      return (
        <BoxIcon theme={settings} className={newClass} style={newStyle} colorStyle={colorStyle} size={size}>
          <Computer />
        </BoxIcon>
      );
    case 'triangle':
      return (
        <BoxIcon theme={settings} className={newClass} style={newStyle} colorStyle={colorStyle} size={size}>
          <Triangle />
        </BoxIcon>
      );
    case 'settings':
      return (
        <BoxIcon theme={settings} className={newClass} style={newStyle} colorStyle={colorStyle} size={size}>
          <Settings />
        </BoxIcon>
      );
    case 'hamburger':
      return (
        <BoxIcon theme={settings} className={newClass} style={newStyle} colorStyle={colorStyle} size={size}>
          <Hamburger />
        </BoxIcon>
      );
    case 'conversation':
      return (
        <BoxIcon theme={settings} className={newClass} style={newStyle} colorStyle={colorStyle} size={size}>
          <Conversation />
        </BoxIcon>
      );
    case 'notification':
      return (
        <BoxIcon theme={settings} className={newClass} style={newStyle} colorStyle={colorStyle} size={size}>
          <Notification />
        </BoxIcon>
      );
    default:
      return 'Please add type icon :) ';
  }
};

// PropTpyes
IconComponent.propTypes = {
  type: PropTypes.string,
  size: PropTypes.number,
  newClass: PropTypes.string,
  colorStyle: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

// PropTpyes default
IconComponent.defaultProps = {
  type: null,
  size: null,
  newClass: null,
  newStyle: null,
  colorStyle: null,
};

export default IconComponent;
