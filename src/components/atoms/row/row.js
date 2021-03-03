// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import style
import Row from './style/style';

// Import style settings
import settings from '../../../layouts/settings/settings';

// Create new component
const RowComponent = props => {
  const { parameters, children } = props;
  return (
    <>
      <Row className={parameters.className} theme={{ settings }}>
        {children}
      </Row>
    </>
  );
};

// PropTpyes
RowComponent.propTypes = {
  children: PropTypes.node.isRequired,
  parameters: PropTypes.shape({
    className: PropTypes.string,
  }),
};

// PropTpyes defaults
RowComponent.defaultProps = {
  parameters: PropTypes.shape({
    style: null,
    className: null,
  }),
};

export default RowComponent;
