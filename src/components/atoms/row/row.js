// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE
import Row from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// CREATE NEW COMPONENT
const RowComponent = props => {
  const { half, left, right, mobile, tablet, desctop, children, newStyle, newClass } = props;

  return (
    <>
      <Row
        half={half}
        left={left}
        right={right}
        mobile={mobile}
        tablet={tablet}
        style={newStyle}
        theme={settings}
        desctop={desctop}
        className={newClass}
      >
        {children}
      </Row>
    </>
  );
};

RowComponent.propTypes = {
  half: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  mobile: PropTypes.bool,
  tablet: PropTypes.bool,
  desctop: PropTypes.bool,
  newClass: PropTypes.string,
  children: PropTypes.node.isRequired,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

RowComponent.defaultProps = {
  half: false,
  left: false,
  right: false,
  mobile: false,
  tablet: false,
  newClass: null,
  newStyle: null,
  desctop: false,
};

export default RowComponent;
