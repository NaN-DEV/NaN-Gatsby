// IMPORT PLUGIN
import React from 'react';

// IMPORT STYLES
import Form from './style/style';

// IMPORT SETTINGS STYLE
import theme from '../../../layouts/theme/settings2';

// IMPORT COMPONENT
import Input from '../../atoms/input/input';
import TextArea from '../../atoms/textarea/textarea';
import Button from '../../atoms/button/button';

// CREATE NEW COMPONENT
const FormComponent = props => {
  const { items, secondary } = props;
  return (
    <Form secondary={secondary ? 1 : 0} theme={theme}>
      {items &&
        items.map(item => {
          if (item.input) {
            return <Input item={item.input} key={item.id} secondary={secondary} />;
          }
          if (item.textArea) {
            return <TextArea item={item} key={item.id} secondary={secondary} />;
          }
          return <Button item={item} key={item.id} secondary={secondary} submit />;
        })}
    </Form>
  );
};

export default FormComponent;
