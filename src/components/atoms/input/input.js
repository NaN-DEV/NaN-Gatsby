// Import plugin
import React from 'react';

import PropTypes from 'prop-types';

// Import style
import { Box, Input, Error } from './style/style';

// Import settings style
import settings from '../../../layouts/settings/settings';

// Create new component
const InputComponent = props => {
  const { type, content, parameters } = props;

  return (
    <>
      <Box theme={{ settings }}>
        <Input
          type={type}
          name={parameters.name}
          style={parameters.style}
          value={parameters.value}
          validate={parameters.validate}
          className={parameters.newClass}
          placeholder={content.placeholder}
          theme={{ errors: content.errors ? 1 : 0, settings }}
        />
        <Error theme={{ settings }}>{content.errors}</Error>
      </Box>
    </>
  );
};

// PropTypes
InputComponent.propTypes = {
  type: PropTypes.string,
  content: PropTypes.shape({
    errors: PropTypes.string,
    placeholder: PropTypes.string,
  }),
  parameters: PropTypes.shape({
    name: PropTypes.string,
    theme: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array, PropTypes.func]),
    validate: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array, PropTypes.func]),
    className: PropTypes.string,
  }),
};

// PropTypes default
InputComponent.defaultProps = {
  type: null,
  content: PropTypes.shape({
    errors: null,
    placeholder: 'add placeholder',
  }),
  parameters: PropTypes.shape({
    name: null,
    theme: null,
    style: null,
    value: null,
    validate: null,
    className: null,
  }),
};

export default InputComponent;
