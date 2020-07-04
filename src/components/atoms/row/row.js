// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE
import Row from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// CREATE NEW COMPONENT
const RowComponent = props => {
  const { children, newStyle, newClass } = props;
  return (
    <>
      <Row style={newStyle} className={newClass} theme={settings}>
        {children}
      </Row>
    </>
  );
};

RowComponent.propTypes = {
  newClass: PropTypes.string,
  children: PropTypes.node.isRequired,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

RowComponent.defaultProps = {
  newClass: null,
  newStyle: null,
};

export default RowComponent;
