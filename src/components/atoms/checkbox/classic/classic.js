// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT STYLES
import { Box, CheckBox, Label } from './style/style';

// CREATE NEW COMPONENT
const CheckClassicComponent = props => {
  const {
    id,
    color,

    title,
    onBlur,
    content,
    checked,
    newClass,
    newStyle,
    onChange,
    defaultValue,
  } = props;
  return (
    <>
      <Box newClass={newClass} newStyle={newStyle}>
        <CheckBox
          id={id}
          name={title}
          color={color}
          value={title}
          type="checkbox"
          onBlur={onBlur}
          theme={settings}
          content={content}
          onChange={onChange}
          defaultChecked={checked}
          defaultValue={defaultValue}
        />
        <Label for={id} theme={settings} dangerouslySetInnerHTML={{ __html: content }} />
      </Box>
    </>
  );
};

CheckClassicComponent.propTypes = {
  checked: PropTypes.bool,
  newClass: PropTypes.string,
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

  onBlur: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.func]),

  onChange: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.func]),

  defaultValue: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.func]),
};

CheckClassicComponent.defaultProps = {
  onBlur: null,
  newClass: null,
  checked: false,
  onChange: null,
  defaultValue: null,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

// EXPORT NEW COMPONENT
export default CheckClassicComponent;
