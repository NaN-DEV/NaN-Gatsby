// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import setting style
import settings from '../../../../layouts/settings/settings';

// Import styles
import { Box, CheckBox, Label, Title } from './style/style';

// Create new component
const CheckBoxComponent = props => {
  const { id, key, content, parameters } = props;

  return (
    <>
      <Box theme={{ settings }} className={parameters.className}>
        <CheckBox
          id={id}
          key={key}
          type="checkbox"
          theme={{ settings }}
          name={parameters.name}
          value={parameters.value}
          checked={parameters.checked}
          validate={parameters.validate}
          onChange={parameters.onChange}
        />
        <Label theme={{ settings }} htmlFor={id}>
          <Title theme={{ settings }}>{content.title}</Title>
        </Label>
      </Box>
    </>
  );
};

CheckBoxComponent.propTypes = {
  id: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

CheckBoxComponent.defaultProps = {
  id: null,
  content: null,
  parameters: null,
};

// Export new component
export default CheckBoxComponent;
