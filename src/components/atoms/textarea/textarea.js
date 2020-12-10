// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import settings style
import settings from '../../../layouts/settings/settings';

// Import styles
import { Box, Label, Textarea, Error } from './style/style';

// Create new component
const TextAreaComponent = props => {
  const { id, key, content, parameters } = props;
  return (
    <>
      <Box theme={settings} id={id} key={key}>
        {content.title && <Label settings={settings} theme={parameters.color} dangerouslySetInnerHTML={{ __html: content.title }} />}
        <Textarea
          component="textarea"
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

TextAreaComponent.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

TextAreaComponent.defaultProps = {
  id: null,
  key: null,
  content: null,
  parameters: null,
};

// EXPORT NEW COMPONENT
export default TextAreaComponent;
