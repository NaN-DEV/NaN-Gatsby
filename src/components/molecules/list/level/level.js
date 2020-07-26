// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT STYLE
import { Ul, Li } from './style/style';

// CREATE NEW COMPONENT

const ListLevelComponent = props => {
  const { breakpoint, children, newClass, newStyle } = props;

  return (
    <>
      <Ul style={newStyle} theme={settings} className={newClass} breakpoint={breakpoint}>
        {React.Children.map(children || null, item => {
          return (
            <Li breakpoint={breakpoint} theme={settings}>
              {item}
            </Li>
          );
        })}
      </Ul>
    </>
  );
};

// PropTpyes
ListLevelComponent.propTypes = {
  newStyle: PropTypes.string,
  newClass: PropTypes.string,
  breakpoint: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]).isRequired,
};

ListLevelComponent.defaultProps = {
  newClass: null,
  newStyle: null,
  breakpoint: null,
};

export default ListLevelComponent;
