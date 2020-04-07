// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLES
import { Input, Label } from './style/style';

// IMPORT SETTINGS STYLE
import theme from '../../../layouts/theme/settings2';

// IMPORT COMPONENT
import Mail from './mail/mail';
import Radio from './radio/radio';
import Search from './search/search';
import Classic from './classic/classic';
import Checkbox from './checkbox/checkbox';
import Password from './password/password';

// CREATE NEW COMPONENT
const InputComponent = props => {
  const { item, secondary } = props;
  return (
    <>
      <Input theme={theme} secondary={secondary ? 1 : 0}>
        {item.label && <Label secondary={secondary}>{item.label}</Label>}
        {item.type === 'Mail' && <Mail item={item} secondary={secondary} />}
        {item.type === 'Radio' && <Radio item={item} secondary={secondary} />}
        {item.type === 'Search' && <Search item={item} secondary={secondary} />}
        {item.type === 'Classic' && <Classic item={item} secondary={secondary} />}
        {item.type === 'Password' && <Password item={item} secondary={secondary} />}
        {item.type === 'Checkbox' && <Checkbox item={item} secondary={secondary} />}
      </Input>
    </>
  );
};

export default InputComponent;

InputComponent.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
  }),
  secondary: PropTypes.bool,
};

InputComponent.defaultProps = {
  item: PropTypes.shape({
    label: null,
    placeholder: 'Add Placeholder',
  }),
  secondary: null,
};
