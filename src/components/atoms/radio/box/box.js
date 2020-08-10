// IMPORT PLUGIN
import React from 'react';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Icon from '../../icon/icon';

// IMPORT STYLES
import { Box, Radio, Label, Title } from './style/style';

// CREATE NEW COMPONENT

const RadioBoxComponent = props => {
  const { id, name, icon, swith, color, title, newClass, newStyle, onChange, defaultChecked } = props;

  switch (swith) {
    case 'active':
      return (
        <>
          <Box theme={settings}>
            <Radio id={id} name={name} type="radio" color={color} value={id} theme={settings} onChange={onChange} defaultChecked={defaultChecked} />
            <Label for={id} swith={swith} color={color} theme={settings} newClass={newClass} newStyle={newStyle}>
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
            <Radio id={id} disabled name={name} type="radio" color={color} theme={settings} />
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

// EXPORT NEW COMPONENT
export default RadioBoxComponent;
