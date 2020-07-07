// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE
import { Button, ButtonLink, ButtonSubmit } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// CREATE NEW COMPONENT

const ButtonComponent = props => {
  const { type, title, color, newClass, newStyle } = props;

  const selectTypeButton = wrap => {
    switch (wrap) {
      case 'link':
        return (
          <>
            <ButtonLink color={color} theme={settings} style={newStyle} className={newClass}>
              {title}
            </ButtonLink>
          </>
        );
      case 'sumbit':
        return (
          <>
            <ButtonSubmit
              color={color}
              value={title}
              theme={settings}
              style={newStyle}
              className={newClass}
            />
          </>
        );

      default:
        return (
          <>
            <Button color={color} theme={settings} style={newStyle} className={newClass}>
              {title}
            </Button>
          </>
        );
    }
  };

  return <>{selectTypeButton(type)}</>;
};
// PropTpyes
ButtonComponent.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  newClass: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

ButtonComponent.defaultProps = {
  newClass: null,
  newStyle: null,
  color: 'primary',
  title: 'Add title',
};

export default ButtonComponent;
