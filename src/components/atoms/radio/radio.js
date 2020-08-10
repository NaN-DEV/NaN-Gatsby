// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT COMPONENT
import Box from './box/box';

// CREATE NEW COMPONENT

const RadioComponent = props => {
  const { id, name, icon, type, swith, color, title, onBlur, checked, onChange, newClass, newStyle, defaultChecked } = props;

  switch (type) {
    case 'box':
      return (
        <>
          <Box
            id={id}
            name={name}
            icon={icon}
            swith={swith}
            color={color}
            title={title}
            onBlur={onBlur}
            checked={checked}
            onChange={onChange}
            newClass={newClass}
            newStyle={newStyle}
            defaultChecked={defaultChecked}
          />
        </>
      );
    default:
      return 'pleace add type radio';
  }
};

RadioComponent.propTypes = {
  title: PropTypes.string,
  checked: PropTypes.bool,
  newClass: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

  value: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.func]),

  onBlur: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.func]),

  onChange: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.func]),

  defaultChecked: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.func]),
};

RadioComponent.defaultProps = {
  title: null,
  value: null,
  onBlur: null,
  newClass: null,
  checked: false,
  onChange: null,
  defaultChecked: null,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

// EXPORT NEW COMPONENT
export default RadioComponent;
