// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLES
import { DivIcon, LinkIcon } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// IMPORT SVG
import Logo from '../../../assets/brand/logo.svg';

// IMPORT COMPONENT

// CREATE NEW COMPONENT

const IconComponent = props => {
  const { link, icon, height, width, dark, light } = props;

  const renderSwitchIcon = name => {
    switch (name) {
      case 'logo':
        return <Logo />;
      default:
        return console.log('Please name icon :)');
    }
  };

  const renderSwitchLinkOrDiv = type => {
    switch (!!type) {
      case true:
        return (
          <LinkIcon
            to={link}
            width={width}
            height={height}
            theme={settings}
            dark={dark ? 1 : 0}
            light={light ? 1 : 0}
          >
            {renderSwitchIcon(icon)}
          </LinkIcon>
        );
      default:
        return (
          <DivIcon
            width={width}
            height={height}
            theme={settings}
            dark={dark ? 1 : 0}
            light={light ? 1 : 0}
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
  dark: PropTypes.bool,
  light: PropTypes.bool,
  icon: PropTypes.string,
  link: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

IconComponent.defaultProps = {
  link: false,
  width: false,
  height: false,
  dark: false,
  light: false,
  icon: 'logo',
};

export default IconComponent;
