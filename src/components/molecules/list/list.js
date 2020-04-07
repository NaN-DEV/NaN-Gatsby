import React from 'react';
import PropTypes from 'prop-types';

// IMPORT COMPONENT

import LevelList from './level/level';

// CREATE NEW COMPONENT

const ListComponent = ({ items, listType }) => {
  if (listType === 'level') {
    return (
      <>
        <LevelList items={items} />
      </>
    );
  }
  return null;
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
  listType: PropTypes.oneOf(['level', 'vertical']),
};

ListComponent.defaultProps = {
  listType: 'vertical',
};
