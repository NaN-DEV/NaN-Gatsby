// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import style
import { Article, BoxImage, Image, Title } from './style/style';

// Import setting style
import settings from '../../../../layouts/settings/settings';

// Import component
import Button from '../../../atoms/button/button';

// Create new component
const boxArticleComponent = props => {
  const { id, key, title, to, image, newClass, newStyle } = props;

  return (
    <Article theme={settings} id={id} key={key} className={newClass} style={newStyle}>
      <Button type="linkIn" parameters={{ newClass: 'linkArticle' }} content={{ to, title }}>
        <BoxImage>
          <Image fluid={image.fluid} />
        </BoxImage>
        <Title>{title}</Title>
      </Button>
    </Article>
  );
};

// PropTpyes
boxArticleComponent.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  newClass: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

// PropTpyes default
boxArticleComponent.defaultProps = {
  id: null,
  key: null,
  slug: null,
  title: null,
  image: null,
  newStyle: null,
  newClass: null,
};

export default boxArticleComponent;
