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
          theme={settings}
          title={content.title}
          color={settings.primary}
          onClick={parameters.onClick}
          colorStyle={parameters.color}
          newStyle={parameters.newStyle}
          className={parameters.newClass}
        >
          {children}
        </Button>
      );
    case 'linkIn':
      return (
        <>
          {parameters.direction ? (
            <LinkIn
              cover
              id={id}
              key={key}
              duration={1}
              to={content.to}
              theme={settings}
              bg={settings.primary}
              title={content.title}
              style={parameters.newStyle}
              onClick={parameters.onClick}
              colorStyle={parameters.color}
              className={parameters.newClass}
              direction={parameters.direction}
            >
              {children}
            </LinkIn>
          ) : (
            <LinkIn
              id={id}
              key={key}
              paintDrip
              duration={1}
              to={content.to}
              theme={settings}
              title={content.title}
              color={settings.primary}
              style={parameters.newStyle}
              onClick={parameters.onClick}
              colorStyle={parameters.color}
              className={parameters.newClass}
            >
              {children}
            </LinkIn>
          )}
        </>
      );
    case 'linkOut':
      return (
        <LinkOut
          id={id}
          key={key}
          target="_blank"
          theme={settings}
          href={content.to}
          title={content.title}
          color={settings.primary}
          style={parameters.newStyle}
          onClick={parameters.onClick}
          colorStyle={parameters.color}
          className={parameters.newClass}
        >
          {children}
        </LinkOut>
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
  content: null,
  parameters: false,
};

export default ButtonComponent;
