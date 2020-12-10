// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE
import { Button, LinkOut, LinkIn } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// CREATE NEW COMPONENT
const ButtonComponent = props => {
  const { id, key, type, content, parameters, children } = props;

  switch (type) {
    case 'button':
      return (
        <Button
          id={id}
          key={key}
          settings={settings}
          title={content.title}
          theme={parameters.color}
          onClick={parameters.onClick}
          newStyle={parameters.newStyle}
          className={parameters.newClass}
        >
          {children}
        </Button>
      );
    case 'linkIn':
      return (
        <>
          <LinkIn
            id={id}
            key={key}
            to={content.to}
            settings={settings}
            title={content.title}
            theme={parameters.color}
            style={parameters.newStyle}
            className={parameters.newClass}
          >
            {children}
          </LinkIn>
        </>
      );
    case 'linkOut':
      return (
        <LinkOut
          id={id}
          key={key}
          target="_blank"
          settings={settings}
          href={content.to}
          title={content.title}
          theme={parameters.color}
          style={parameters.newStyle}
          className={parameters.newClass}
        >
          {children}
        </LinkOut>
      );
    case 'sumbit':
      return (
        <Button
          id={id}
          key={key}
          type={type}
          settings={settings}
          title={content.title}
          theme={parameters.color}
          style={parameters.newStyle}
          onClick={parameters.onClick}
          disabled={parameters.disabled}
          className={parameters.newClass}
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
  id: PropTypes.string,
  key: PropTypes.string,
  children: PropTypes.node.isRequired,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

ButtonComponent.defaultProps = {
  id: null,
  key: null,
  content: false,
  parameters: false,
};

export default ButtonComponent;
