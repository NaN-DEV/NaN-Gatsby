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
  const { id, key, type, parameters } = props;

  switch (type) {
    case 'cv':
      return (
        <BoxIcon
          id={id}
          key={key}
          settings={settings}
          size={parameters.size}
          theme={parameters.color}
          style={parameters.newStyle}
          className={parameters.newClass}
        >
          <Cv />
        </BoxIcon>
      );

    case 'ask':
      return (
        <BoxIcon
          id={id}
          key={key}
          settings={settings}
          size={parameters.size}
          theme={parameters.color}
          style={parameters.newStyle}
          className={parameters.newClass}
        >
          <Ask />
        </BoxIcon>
      );
    case 'ui/ux':
      return (
        <BoxIcon
          id={id}
          key={key}
          settings={settings}
          size={parameters.size}
          theme={parameters.color}
          style={parameters.newStyle}
          className={parameters.newClass}
        >
          <Ux />
        </BoxIcon>
      );
    case 'more':
      return (
        <BoxIcon
          id={id}
          key={key}
          settings={settings}
          size={parameters.size}
          theme={parameters.color}
          style={parameters.newStyle}
          className={parameters.newClass}
        >
          <More />
        </BoxIcon>
      );
    case 'mail':
      return (
        <BoxIcon
          id={id}
          key={key}
          settings={settings}
          size={parameters.size}
          theme={parameters.color}
          style={parameters.newStyle}
          className={parameters.newClass}
        >
          <Mail />
        </BoxIcon>
      );
    case 'down':
      return (
        <BoxIcon
          id={id}
          key={key}
          settings={settings}
          size={parameters.size}
          theme={parameters.color}
          style={parameters.newStyle}
          className={parameters.newClass}
        >
          <Down />
        </BoxIcon>
      );
    case 'back-end':
      return (
        <BoxIcon
          id={id}
          key={key}
          settings={settings}
          size={parameters.size}
          theme={parameters.color}
          style={parameters.newStyle}
          className={parameters.newClass}
        >
          <Back />
        </BoxIcon>
      );
    case 'logo':
      return (
        <BoxIcon
          id={id}
          key={key}
          settings={settings}
          size={parameters.size}
          theme={parameters.color}
          style={parameters.newStyle}
          className={parameters.newClass}
        >
          <Logo />
        </BoxIcon>
      );
    case 'front-end':
      return (
        <BoxIcon
          id={id}
          key={key}
          settings={settings}
          size={parameters.size}
          theme={parameters.color}
          style={parameters.newStyle}
          className={parameters.newClass}
        >
          <Front />
        </BoxIcon>
      );
    case 'phone':
      return (
        <BoxIcon
          id={id}
          key={key}
          settings={settings}
          size={parameters.size}
          theme={parameters.color}
          style={parameters.newStyle}
          className={parameters.newClass}
        >
          <Phone />
        </BoxIcon>
      );
    case 'coffe':
      return (
        <BoxIcon
          id={id}
          key={key}
          settings={settings}
          size={parameters.size}
          theme={parameters.color}
          style={parameters.newStyle}
          className={parameters.newClass}
        >
          <Coffe />
        </BoxIcon>
      );
    case 'folder':
      return (
        <BoxIcon
          id={id}
          key={key}
          settings={settings}
          size={parameters.size}
          theme={parameters.color}
          style={parameters.newStyle}
          className={parameters.newClass}
        >
          <Folder />
        </BoxIcon>
      );
    case 'closed':
      return (
        <BoxIcon
          id={id}
          key={key}
          settings={settings}
          size={parameters.size}
          theme={parameters.color}
          style={parameters.newStyle}
          className={parameters.newClass}
        >
          <Closed />
        </BoxIcon>
      );
    case 'people':
      return (
        <BoxIcon
          id={id}
          key={key}
          settings={settings}
          size={parameters.size}
          theme={parameters.color}
          style={parameters.newStyle}
          className={parameters.newClass}
        >
          <People />
        </BoxIcon>
      );
    case 'twitter':
      return (
        <BoxIcon
          id={id}
          key={key}
          settings={settings}
          size={parameters.size}
          theme={parameters.color}
          style={parameters.newStyle}
          className={parameters.newClass}
        >
          <Twitter />
        </BoxIcon>
      );
    case 'website':
      return (
        <BoxIcon
          id={id}
          key={key}
          settings={settings}
          size={parameters.size}
          theme={parameters.color}
          style={parameters.newStyle}
          className={parameters.newClass}
        >
          <Website />
        </BoxIcon>
      );
    case 'facebook':
      return (
        <BoxIcon
          id={id}
          key={key}
          settings={settings}
          size={parameters.size}
          theme={parameters.color}
          style={parameters.newStyle}
          className={parameters.newClass}
        >
          <Facebook />
        </BoxIcon>
      );
    case 'computer':
      return (
        <BoxIcon
          id={id}
          key={key}
          settings={settings}
          size={parameters.size}
          theme={parameters.color}
          style={parameters.newStyle}
          className={parameters.newClass}
        >
          <Computer />
        </BoxIcon>
      );
    case 'triangle':
      return (
        <BoxIcon
          id={id}
          key={key}
          settings={settings}
          size={parameters.size}
          theme={parameters.color}
          style={parameters.newStyle}
          className={parameters.newClass}
        >
          <Triangle />
        </BoxIcon>
      );
    case 'settings':
      return (
        <BoxIcon
          id={id}
          key={key}
          settings={settings}
          size={parameters.size}
          theme={parameters.color}
          style={parameters.newStyle}
          className={parameters.newClass}
        >
          <Settings />
        </BoxIcon>
      );
    case 'hamburger':
      return (
        <BoxIcon
          id={id}
          key={key}
          settings={settings}
          size={parameters.size}
          theme={parameters.color}
          style={parameters.newStyle}
          className={parameters.newClass}
        >
          <Hamburger />
        </BoxIcon>
      );
    case 'conversation':
      return (
        <BoxIcon
          id={id}
          key={key}
          settings={settings}
          size={parameters.size}
          theme={parameters.color}
          style={parameters.newStyle}
          className={parameters.newClass}
        >
          <Conversation />
        </BoxIcon>
      );
    case 'notification':
      return (
        <BoxIcon
          id={id}
          key={key}
          settings={settings}
          size={parameters.size}
          theme={parameters.color}
          style={parameters.newStyle}
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
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

// PropTpyes default
IconComponent.defaultProps = {
  id: null,
  key: null,
  parameters: false,
};

export default IconComponent;
