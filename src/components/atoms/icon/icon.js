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
  const { id, key, type, content, parameters } = props;

  switch (type) {
    case 'cv':
      return (
        <BoxIcon
          theme={settings}
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          <Cv />
        </BoxIcon>
      );

    case 'ask':
      return (
        <BoxIcon
          theme={settings}
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          <Ask />
        </BoxIcon>
      );
    case 'ui/ux':
      return (
        <BoxIcon
          theme={settings}
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          <Ux />
        </BoxIcon>
      );
    case 'more':
      return (
        <BoxIcon
          theme={settings}
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          <More />
        </BoxIcon>
      );
    case 'mail':
      return (
        <BoxIcon
          theme={settings}
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          <Mail />
        </BoxIcon>
      );
    case 'down':
      return (
        <BoxIcon
          theme={settings}
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          <Down />
        </BoxIcon>
      );
    case 'back-end':
      return (
        <BoxIcon
          theme={settings}
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          <Back />
        </BoxIcon>
      );
    case 'logo':
      return (
        <BoxIcon
          theme={settings}
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          <Logo />
        </BoxIcon>
      );
    case 'front-end':
      return (
        <BoxIcon
          theme={settings}
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          <Front />
        </BoxIcon>
      );
    case 'phone':
      return (
        <BoxIcon
          theme={settings}
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          <Phone />
        </BoxIcon>
      );
    case 'coffe':
      return (
        <BoxIcon
          theme={settings}
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          <Coffe />
        </BoxIcon>
      );
    case 'folder':
      return (
        <BoxIcon
          theme={settings}
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          <Folder />
        </BoxIcon>
      );
    case 'closed':
      return (
        <BoxIcon
          theme={settings}
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          <Closed />
        </BoxIcon>
      );
    case 'people':
      return (
        <BoxIcon
          theme={settings}
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          <People />
        </BoxIcon>
      );
    case 'twitter':
      return (
        <BoxIcon
          theme={settings}
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          <Twitter />
        </BoxIcon>
      );
    case 'website':
      return (
        <BoxIcon
          theme={settings}
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          <Website />
        </BoxIcon>
      );
    case 'facebook':
      return (
        <BoxIcon
          theme={settings}
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          <Facebook />
        </BoxIcon>
      );
    case 'computer':
      return (
        <BoxIcon
          theme={settings}
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          <Computer />
        </BoxIcon>
      );
    case 'triangle':
      return (
        <BoxIcon
          theme={settings}
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          <Triangle />
        </BoxIcon>
      );
    case 'settings':
      return (
        <BoxIcon
          theme={settings}
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          <Settings />
        </BoxIcon>
      );
    case 'hamburger':
      return (
        <BoxIcon
          theme={settings}
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          <Hamburger />
        </BoxIcon>
      );
    case 'conversation':
      return (
        <BoxIcon
          theme={settings}
          id={id}
          key={key}
          title={content.title}
          size={parameters.size}
          style={parameters.newStyle}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          <Conversation />
        </BoxIcon>
      );
    case 'notification':
      return (
        <BoxIcon
          theme={settings}
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          <Notification />
        </BoxIcon>
      );
    default:
      return 'Please add type icon :) ';
  }
};

// PropTpyes
IconComponent.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

// PropTpyes default
IconComponent.defaultProps = {
  id: null,
  key: null,
  content: null,
  parameters: false,
};

export default IconComponent;
