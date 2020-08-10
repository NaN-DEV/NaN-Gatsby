// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLES
import { DivIcon, LinkIcon, ButtonIcon } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// IMPORT SVG

import Cv from '../../../assets/icon/cv.svg';
import Ask from '../../../assets/icon/ask.svg';
import Mail from '../../../assets/icon/mail.svg';
import Down from '../../../assets/icon/down.svg';
import Logo from '../../../assets/brand/logo.svg';
import Phone from '../../../assets/icon/phone.svg';
import Coffe from '../../../assets/icon/coffe.svg';
import Folder from '../../../assets/icon/folder.svg';
import Closed from '../../../assets/icon/closed.svg';
import People from '../../../assets/icon/people.svg';
import Website from '../../../assets/icon/website.svg';
import Computer from '../../../assets/icon/computer.svg';
import Triangle from '../../../assets/icon/triangle.svg';
import Settings from '../../../assets/icon/settings.svg';
import Hamburger from '../../../assets/icon/hamburger.svg';
import Notification from '../../../assets/icon/notification.svg';

// IMPORT COMPONENT

// CREATE NEW COMPONENT

const IconComponent = props => {
  const { turn, link, icon, type, title, height, primary, onClick, newClass, newStyle, secondary } = props;

  // SELECT ICON
  const renderSwitchIcon = name => {
    switch (name) {
      case 'logo':
        return <Logo height={height} />;
      case 'cv':
        return <Cv height={height} />;
      case 'mail':
        return <Mail height={height} />;
      case 'hamburger':
        return <Hamburger height={height} />;
      case 'notification':
        return <Notification height={height} />;
      case 'down':
        return <Down height={height} />;
      case 'triangle':
        return <Triangle height={height} />;
      case 'coffe':
        return <Coffe height={height} />;
      case 'people':
        return <People height={height} />;
      case 'folder':
        return <Folder height={height} />;
      case 'settings':
        return <Settings height={height} />;
      case 'closed':
        return <Closed height={height} />;
      case 'phone':
        return <Phone height={height} />;
      case 'website':
        return <Website height={height} />;
      case 'computer':
        return <Computer height={height} />;
      case 'ask':
        return <Ask height={height} />;
      default:
        return 'Please name icon :) ';
    }
  };

  // SELECT WRAP ICON

  const renderSwitchLinkOrDiv = wrap => {
    switch (wrap) {
      case 'link':
        return (
          <LinkIcon
            to={link}
            turn={turn}
            title={title}
            height={height}
            style={newStyle}
            theme={settings}
            className={newClass}
            primary={primary ? 1 : 0}
            secondary={secondary ? 1 : 0}
          >
            {renderSwitchIcon(icon)}
          </LinkIcon>
        );
      case 'button':
        return (
          <ButtonIcon
            to={link}
            turn={turn}
            title={title}
            height={height}
            style={newStyle}
            theme={settings}
            onClick={onClick}
            className={newClass}
            primary={primary ? 1 : 0}
            secondary={secondary ? 1 : 0}
          >
            {renderSwitchIcon(icon)}
          </ButtonIcon>
        );
      default:
        return (
          <DivIcon
            icon={icon}
            turn={turn}
            title={title}
            height={height}
            style={newStyle}
            theme={settings}
            className={newClass}
            primary={primary ? 1 : 0}
            secondary={secondary ? 1 : 0}
          >
            {renderSwitchIcon(icon)}
          </DivIcon>
        );
    }
  };

  return renderSwitchLinkOrDiv(type);
};

// PropTpyes
IconComponent.propTypes = {
  turn: PropTypes.bool,
  type: PropTypes.string,
  icon: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  title: PropTypes.string,
  height: PropTypes.number,
  secondary: PropTypes.bool,
  newClass: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

IconComponent.defaultProps = {
  turn: null,
  type: null,
  icon: 'logo',
  light: false,
  height: null,
  onClick: null,
  newClass: null,
  newStyle: null,
  primary: false,
  secondary: false,
  title: 'Add title icon',
};

export default IconComponent;
