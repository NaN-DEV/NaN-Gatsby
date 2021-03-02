// Import plugin
import React from 'react';

import PropTypes from 'prop-types';

// Import style
import { Box, Textarea, Error } from './style/style';

// Import settings style
import settings from '../../../layouts/settings/settings';

// Create new component
const TextAreaComponent = props => {
  const { content, parameters } = props;

  return (
    <>
      <Box theme={{ settings }}>
        <Textarea
          component="textarea"
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
TextAreaComponent.propTypes = {
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
TextAreaComponent.defaultProps = {
  content: PropTypes.shape({
    errors: '',
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

export default TextAreaComponent;
