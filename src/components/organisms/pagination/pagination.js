// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import settings style
import settings from '../../../layouts/settings/settings';

// Import component
import Button from '../../atoms/button/button';

// Import style
import BoxPagination from './style/style';

// Create new component
const paginationComponent = props => {
  const { id, key, page, limit, slug, colorStyle, newClass, newStyle } = props;
  return (
    <>
      <BoxPagination theme={settings} id={id} key={key} colorStyle={colorStyle} className={newClass} style={newStyle}>
        <Button
          type="linkIn"
          content={{ title: 'Dalej', to: page > 2 ? `${slug}/${page - 1}` : slug }}
          parameters={{
            direction: 'right',
            newClass: `button ${page === 1 && 'disablet'}`,
            color: colorStyle === 'primary' ? 'primary' : 'secondary',
          }}
        >
          Wstecz
        </Button>
        <Button
          type="linkIn"
          content={{ title: 'Dalej', to: page < limit && `${slug}/${page + 1}` }}
          parameters={{
            direction: 'left',
            newClass: `button ${page === limit && 'disablet'}`,
            color: colorStyle === 'primary' ? 'primary' : 'secondary',
          }}
        >
          Dalej
        </Button>
      </BoxPagination>
    </>
  );
};

// PropTypes
paginationComponent.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  page: PropTypes.number,
  slug: PropTypes.string,
  limit: PropTypes.number,
  colorStyle: PropTypes.string,
  newClass: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
};

// PropTypes default
paginationComponent.defaultProps = {
  id: null,
  key: null,
  page: null,
  slug: null,
  limit: null,
  newClass: null,
  newStyle: null,
  colorStyle: null,
};

// Export new component
export default paginationComponent;
