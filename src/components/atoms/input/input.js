// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE
import { BoxInput, Input, Label } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// CREATE NEW COMPONENT
const InputComponent = props => {
  const { newStyle, newClass, title, placeholder, type, required, secondary, width } = props;
  return (
    <>
      <BoxInput required={required ? 1 : 0} theme={settings} width={width}>
        {title && <Label theme={settings}>{title}</Label>}
        <Input
          type={type}
          style={newStyle}
          theme={settings}
          className={newClass}
          placeholder={placeholder}
          secondary={secondary ? 1 : 0}
        />
      </BoxInput>
    </>
  );
};

// PropTypes

InputComponent.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.number,
  required: PropTypes.bool,
  secondary: PropTypes.bool,
  newClass: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

InputComponent.defaultProps = {
  title: null,
  width: null,
  type: 'text',
  newClass: null,
  newStyle: null,
  required: false,
  secondary: false,
};

export default InputComponent;
