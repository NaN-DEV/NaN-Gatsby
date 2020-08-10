// IMPORT PLUGIN
import React from 'react';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// IMPORT STYLES
import { BoxTextarea, Label, Textarea } from './style/style';

// CREATE NEW COMPONENT
const TextAreaComponent = props => {
  const { id, name, title, color, value, onBlur, newStyle, newClass, required, onChange, placeholder } = props;
  return (
    <>
      <BoxTextarea theme={settings} id={id}>
        {title && <Label theme={settings} color={color} dangerouslySetInnerHTML={{ __html: title }} />}
        <Textarea
          name={name}
          value={value}
          color={color}
          onBlur={onBlur}
          style={newStyle}
          theme={settings}
          onChange={onChange}
          className={newClass}
          placeholder={`${placeholder} ${required ? '*' : ''}`}
        />
      </BoxTextarea>
    </>
  );
};

// EXPORT NEW COMPONENT
export default TextAreaComponent;
