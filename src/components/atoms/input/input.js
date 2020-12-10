// IMPORT PLUGIN
import React from 'react';

import PropTypes from 'prop-types';

// IMPORT STYLE
import { Box, Input, Label, Error } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// CREATE NEW COMPONENT
const InputComponent = props => {
  const { id, key, type, content, parameters } = props;

  return (
    <>
      <Box settings={settings} id={id} key={key}>
        {content.title && (
          <Label settings={settings} color={parameters.color}>
            {`${content.title} ${parameters.required ? '*' : ''}`}
          </Label>
        )}
        <Input
          type={type}
          settings={settings}
          name={parameters.name}
          theme={parameters.color}
          style={parameters.style}
          validate={parameters.validate}
          className={parameters.newClass}
          placeholder={content.placeholder}
        />
        <Error settings={settings}>{content.errors}</Error>
      </Box>
    </>
  );
};

// PropTypes

InputComponent.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

InputComponent.defaultProps = {
  id: null,
  type: null,
  content: null,
  parameters: null,
};

export default InputComponent;
