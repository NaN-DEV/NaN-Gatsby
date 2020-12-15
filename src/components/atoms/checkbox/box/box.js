// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Icon from '../../icon/icon';

// IMPORT STYLES
import { Box, CheckBox, Label, Title } from './style/style';

// CREATE NEW COMPONENT

const CheckBoxComponent = props => {
  const { id, key, content, parameters } = props;

  return (
    <>
      <Box settings={settings}>
        <CheckBox
          id={id}
          key={key}
          type="checkbox"
          settings={settings}
          name={parameters.name}
          value={parameters.value}
          checked={parameters.checked}
          validate={parameters.validate}
          onChange={parameters.onChange}
        />
        <Label settings={settings} htmlFor={id}>
          <Icon type={content.icon} parameters={{ newClass: 'icon' }} />
          <Title settings={settings}>{content.title}</Title>
        </Label>
      </Box>
    </>
  );
};

CheckBoxComponent.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

CheckBoxComponent.defaultProps = {
  id: null,
  key: null,
  content: null,
  parameters: null,
};

// EXPORT NEW COMPONENT
export default CheckBoxComponent;
