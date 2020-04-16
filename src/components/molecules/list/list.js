import React from 'react';
import PropTypes from 'prop-types';

// IMPORT COMPONENT

import LevelList from './level/level';
import MenuList from './menu/menu';

// CREATE NEW COMPONENT

const ListComponent = props => {
  const { level, items, menu, secondary } = props;
  return (
    <>
      {level && <LevelList items={items} secondary={secondary} />}
      {menu && <MenuList items={items} secondary={secondary} />}
    </>
  );
};

export default ListComponent;

ListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
