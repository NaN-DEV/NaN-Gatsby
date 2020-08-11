// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT COMPONENT
import Box from './box/box';
import Classic from './classic/classic';

// CREATE NEW COMPONENT

const CheckboxComponent = props => {
  const { id, icon, type, swith, color, title, onBlur, content, checked, onChange, newClass, newStyle, defaultChecked } = props;

  switch (type) {
    case 'box':
      return (
        <>
          <Box
            id={id}
            icon={icon}
            swith={swith}
            color={color}
            title={title}
            onBlur={onBlur}
            checked={checked}
            onChange={onChange}
            newStyle={newStyle}
            newClass={newClass}
            defaultChecked={defaultChecked}
          />
        </>
      );
    case 'classic':
      return (
        <>
          <Classic
            id={id}
            icon={icon}
            color={color}
            title={title}
            onBlur={onBlur}
            checked={checked}
            content={content}
            onChange={onChange}
            newStyle={newStyle}
            newClass={newClass}
            defaultChecked={defaultChecked}
          />
        </>
      );
    default:
      return 'pleace add type checkbox';
  }
};

CheckboxComponent.propTypes = {
  title: PropTypes.string,
  checked: PropTypes.bool,
  content: PropTypes.string,
  newClass: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

  onBlur: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.func]),

  onChange: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.func]),

  defaultValue: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.func]),
};

CheckboxComponent.defaultProps = {
  title: null,
  onBlur: null,
  content: null,
  newClass: null,
  checked: false,
  onChange: null,
  newStyle: null,
  defaultValue: null,
};

// EXPORT NEW COMPONENT
export default CheckboxComponent;
