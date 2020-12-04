// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT STYLE
import { Ul, Li } from './style/style';

// CREATE NEW COMPONENT

const ListLevelComponent = props => {
  const { children, newClass, newStyle } = props;

  return (
    <>
      <Ul theme={settings} style={newStyle} className={newClass}>
        {React.Children.map(children, child => {
          return <Li theme={settings}>{child}</Li>;
        })}
      </Ul>
    </>
  );
};

// PropTpyes
ListLevelComponent.propTypes = {
  newStyle: PropTypes.string,
  newClass: PropTypes.string,
  children: PropTypes.node.isRequired,
};

// PropTpyes default
ListLevelComponent.defaultProps = {
  newClass: null,
  newStyle: null,
};

export default ListLevelComponent;
