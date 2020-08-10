// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE
import { BoxInput, Input, Label } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// CREATE NEW COMPONENT
const InputComponent = props => {
  const { id, type, name, title, color, value, onBlur, newStyle, newClass, required, onChange, placeholder } = props;
  return (
    <>
      <BoxInput theme={settings} id={id}>
        {title && (
          <Label theme={settings} color={color}>
            {`${title} ${required ? '*' : ''}`}
          </Label>
        )}
        <Input
          name={name}
          type={type}
          value={value}
          color={color}
          onBlur={onBlur}
          style={newStyle}
          theme={settings}
          onChange={onChange}
          className={newClass}
          placeholder={`${placeholder} ${required ? '*' : ''}`}
        />
      </BoxInput>
    </>
  );
};

// PropTypes

InputComponent.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  required: PropTypes.bool,
  newStyle: PropTypes.string,
  newClass: PropTypes.string,
  placeholder: PropTypes.string,
};

InputComponent.defaultProps = {
  id: null,
  type: 'text',
  title: null,
  color: null,
  newStyle: null,
  newClass: null,
  required: false,
  placeholder: null,
};

export default InputComponent;
