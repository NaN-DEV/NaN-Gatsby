// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// IMPORT STYLE
import { Form, MainTitle } from './style/style';

// IMPORT COMPONENT
import Row from '../../atoms/row/row';

// CREATE NEW COMPONENT
const FormComponent = props => {
  const { children, newClass, newStyle, title } = props;
  return (
    <>
      <Form theme={settings} className={newClass} style={newStyle}>
        <Row newClass="row">
          {title && <MainTitle>{title}</MainTitle>}
          {children}
        </Row>
      </Form>
    </>
  );
};

// PropTypes

FormComponent.propTypes = {
  title: PropTypes.string,
  newClass: PropTypes.string,
  children: PropTypes.node.isRequired,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

FormComponent.defaultProps = {
  title: null,
  newClass: null,
  newStyle: null,
};

// EXPORT NEW COMPONENT
export default FormComponent;
