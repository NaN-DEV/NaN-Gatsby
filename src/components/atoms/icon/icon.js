// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLES
import { DivIcon, LinkIcon, ButtonIcon } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// IMPORT SVG
import Logo from '../../../assets/brand/logo.svg';
import Hamburger from '../../../assets/icon/hamburger.svg';
import Notification from '../../../assets/icon/notification.svg';

// IMPORT COMPONENT

// CREATE NEW COMPONENT

const IconComponent = props => {
  const {
    link,
    icon,
    type,
    title,
    height,
    primary,
    onClick,
    newClass,
    newStyle,
    secondary,
  } = props;

  // SELECT ICON
  const renderSwitchIcon = name => {
    switch (name) {
      case 'logo':
        return <Logo />;
      case 'hamburger':
        return <Hamburger />;
      case 'notification':
        return <Notification />;
      default:
        return 'Please name icon :)';
    }
  };

  // SELECT WRAP ICON

  const renderSwitchLinkOrDiv = wrap => {
    switch (wrap) {
      case 'link':
        return (
          <LinkIcon
            to={link}
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
