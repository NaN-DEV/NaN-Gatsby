// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLES
import { DivIcon, LinkIcon } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// IMPORT SVG
import Logo from '../../../assets/brand/logo.svg';
import Hamburger from '../../../assets/icon/hamburger.svg';
import Notification from '../../../assets/icon/notification.svg';

// IMPORT COMPONENT

// CREATE NEW COMPONENT

const IconComponent = props => {
  const { link, icon, height, primary, secondary, title, newStyle, newClass } = props;

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

  const renderSwitchLinkOrDiv = type => {
    switch (!!type) {
      case true:
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

  return renderSwitchLinkOrDiv(link);
};

// PropTpyes
IconComponent.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string,
  primary: PropTypes.bool,
  title: PropTypes.string,
  height: PropTypes.number,
  secondary: PropTypes.bool,
  newClass: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

IconComponent.defaultProps = {
  icon: 'logo',
  light: false,
  height: null,
  newClass: null,
  newStyle: null,
  primary: false,
  secondary: false,
  title: 'Add title icon',
};

export default IconComponent;
