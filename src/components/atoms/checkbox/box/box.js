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
  const { id, icon, name, swith, color, title, onBlur, checked, newClass, newStyle, onChange, defaultValue } = props;

  switch (swith) {
    case 'active':
      return (
        <>
          <Box theme={settings}>
            <CheckBox
              id={id}
              name={title}
              color={color}
              value={title}
              type="checkbox"
              onBlur={onBlur}
              theme={settings}
              newClass={newClass}
              newStyle={newStyle}
              onChange={onChange}
              defaultChecked={checked}
              defaultValue={defaultValue}
            />
            <Label for={id} swith={swith} color={color} theme={settings}>
              <Icon icon={icon} newClass="icon" />
              <Title theme={settings}>{title}</Title>
            </Label>
          </Box>
        </>
      );
    default:
      return (
        <>
          <Box theme={settings}>
            <CheckBox id={id} disabled name={name} type="radio" color={color} theme={settings} />
            <Label color={color} htmlFor={id} theme={settings} disabled>
              <Icon icon={icon} newClass="icon" />
              <Title theme={settings} disabled>
                {title}
              </Title>
            </Label>
          </Box>
        </>
      );
  }
};

CheckBoxComponent.propTypes = {
  checked: PropTypes.bool,
  newClass: PropTypes.string,
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

  onBlur: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.func]),

  onChange: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.func]),

  defaultValue: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.func]),
};

CheckBoxComponent.defaultProps = {
  onBlur: null,
  newClass: null,
  checked: false,
  onChange: null,
  defaultValue: null,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

// EXPORT NEW COMPONENT
export default CheckBoxComponent;
