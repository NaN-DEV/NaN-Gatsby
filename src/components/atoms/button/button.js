// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE
import { Button, LinkOut, LinkIn } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// CREATE NEW COMPONENT
const ButtonComponent = props => {
  const { type, content, parameters, children } = props;

  switch (type) {
    case 'button':
      return (
        <Button
          title={content.title}
          onClick={parameters.onClick}
          newStyle={parameters.newStyle}
          className={parameters.className}
          theme={{ settings, button: parameters.button }}
        >
          {children}
        </Button>
      );
    case 'linkIn':
      return (
        <>
          <LinkIn
            to={content.to}
            title={content.title}
            style={parameters.newStyle}
            className={parameters.className}
            theme={{ settings, button: parameters.button }}
          >
            {children}
          </LinkIn>
        </>
      );
    case 'linkOut':
      return (
        <LinkOut
          target="_blank"
          href={content.to}
          title={content.title}
          style={parameters.newStyle}
          className={parameters.className}
          theme={{ settings, button: parameters.button }}
        >
          {children}
        </LinkOut>
      );
    case 'sumbit':
      return (
        <Button
          type={type}
          title={content.title}
          style={parameters.newStyle}
          onClick={parameters.onClick}
          disabled={parameters.disabled}
          className={parameters.className}
          theme={{ settings, button: parameters.button }}
        >
          {children}
        </Button>
      );
    default:
      return 'Please add type button :)';
  }
};

// PropTpyes
ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

ButtonComponent.defaultProps = {
  content: false,
  parameters: false,
};

export default ButtonComponent;
