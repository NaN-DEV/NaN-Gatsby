// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE
import List from './style/style';

// IMPORT SETTINGS STYLE
import theme from '../../../../layouts/theme/settings2';

// IMPORT COMPONENT
import Item from './item/item';

// CREATE NEW COMPONENT
const LevelComponent = props => {
  const { items, secondary } = props;
  const ArrayLength = items.length;

  return (
    <List theme={theme} secondary={secondary ? 1 : 0}>
      {items &&
        items.map(item => (
          <Item
            link={item.link}
            title={item.title}
            key={item.id}
            length={ArrayLength > 1 ? 1 : 0}
            secondary={secondary}
          />
        ))}
    </List>
  );
};

export default LevelComponent;

LevelComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
