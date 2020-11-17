// IMPORT PLUGIN
import React from 'react';

// IMPORT STYLE
import { Article, LinkArticle, BoxImage, Image, Title } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// CREATE NEW COMPONENT

// CREATE NEW COMPONENT

const boxArticleComponent = props => {
  const { id, title, slug, image } = props;

  return (
    <Article theme={settings} id={id}>
      <LinkArticle to={slug} title={title}>
        <BoxImage>
          <Image fluid={image.fluid} />
        </BoxImage>
        <Title>{title}</Title>
      </LinkArticle>
    </Article>
  );
};

// PropTpyes
boxArticleComponent.propTypes = {};

boxArticleComponent.defaultProps = {};

export default boxArticleComponent;
