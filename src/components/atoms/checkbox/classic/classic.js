// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT STYLES
import { Box, CheckBox, Label, Error } from './style/style';

// CREATE NEW COMPONENT
const CheckClassicComponent = props => {
  const { id, key, content, parameters } = props;

  return (
    <>
      <Box settings={settings} className={parameters.newClass} style={parameters.newStyle}>
        <CheckBox
          id={id}
          key={key}
          type="checkbox"
          settings={settings}
          name={parameters.name}
          checked={parameters.checked}
          onChange={parameters.onChange}
        />
        <Label htmlFor={id} settings={settings} dangerouslySetInnerHTML={{ __html: content.description }} />
        <Error settings={settings}>{content.errors}</Error>
      </Box>
    </>
  );
};

CheckClassicComponent.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

CheckClassicComponent.defaultProps = {
  id: null,
  key: null,
  content: null,
  parameters: null,
};

// EXPORT NEW COMPONENT
export default CheckClassicComponent;
