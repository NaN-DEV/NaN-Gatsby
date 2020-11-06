// IMPORT PLUGIN
import React from 'react';
import { Link } from 'gatsby';

import PropTypes from 'prop-types';

// IMPORT STYLE
import { Title, Image, BoxTop, BoxDown, Section, Article, Category } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';
import Icon from '../../../atoms/icon/icon';
import Button from '../../../atoms/button/button';

// CREATE NEW COMPONENT

class SectionTriangleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.ArticleDisplay = this.ArticleDisplay.bind(this);
    this.ArticleContent = this.ArticleContent.bind(this);
  }

  ArticleContent = (title, slug, category) => (
    <>
      <Category>
        {category.map((item, i) => {
          if (category.length === i + 1) {
            return (
              <Link to={item.slug} key={item.id}>
                {item.name}
              </Link>
            );
          }

          return (
            <Link to={item.slug} key={item.id}>
              {item.name} /
            </Link>
          );
        })}
      </Category>
      <Link to={`/portfolio/projekt/${slug}`}>
        <Title theme={settings}>{title}</Title>
      </Link>
    </>
  );

  ArticleDisplay = (type, direction, color, content, index) => {
    return (
      <Article
        id={`article-triangle-${index}`}
        theme={settings}
        key={content.id}
        full={type === 'full' ? true : null}
        half={type === 'half' ? true : null}
        primary={color === 'primary' ? true : null}
        tertiary={color === 'tertiary' ? true : null}
        secondary={color === 'secondary' ? true : null}
      >
        <Row
          half={type === 'half' ? true : null}
          desctop={type === 'half' ? true : null}
          left={direction === 'left' ? null : true}
          right={direction === 'right' ? null : true}
        >
          <BoxTop theme={settings}>
            {direction === 'right' ? (
              <>
                <Icon
                  turn
                  icon="triangle"
                  title={content.title}
                  newClass="top triangle"
                  tertiary={color === 'primary' ? true : null}
                  primary={color === 'secondary' ? true : null}
                  secondary={color === 'primary' ? true : null}
                />

                <Image fluid={content.imageSubstitute.fluid} top />
              </>
            ) : (
              <>{this.ArticleContent(content.title, content.slug, content.category)}</>
            )}
          </BoxTop>
          <BoxDown theme={settings}>
            {direction === 'right' ? (
              <>{this.ArticleContent(content.title, content.slug, content.category)}</>
            ) : (
              <>
                <Icon
                  icon="triangle"
                  title={content.title}
                  newClass="botom triangle"
                  tertiary={color === 'primary' ? true : null}
                  primary={color === 'secondary' ? true : null}
                  secondary={color === 'primary' ? true : null}
                />
                <Image fluid={content.imageSubstitute.fluid} bottom />
              </>
            )}

            <Button
              type="link"
              title="Więcej"
              newClass="button"
              link={`/portfolio/projekt/${content.slug}`}
              color={color === 'primary' ? 'secondary' : 'primary'}
            />
          </BoxDown>
        </Row>
      </Article>
    );
  };

  render() {
    const { content, newClass, newStyle, color } = this.props;

    return (
      <Section color={color} theme={settings} newStyle={newStyle} className={newClass}>
        {content.map((item, index) => {
          if (index % 3 === 0 || index === 0) {
            return this.ArticleDisplay('full', null, 'secondary', item, index);
          }

          if (index % 2 === 0) {
            if ((index + 1) % 3 === 0) {
              return this.ArticleDisplay('half', 'right', 'primary', item, index);
            }
            return this.ArticleDisplay('half', 'left', 'primary', item, index);
          }

          if ((index - 1) % 3 === 0) {
            return this.ArticleDisplay('half', 'left', 'tertiary', item, index);
          }

          return this.ArticleDisplay('half', 'right', 'tertiary', item, index);
        })}
      </Section>
    );
  }
}

// PropTpyes
SectionTriangleComponent.propTypes = {
  color: PropTypes.string,
  newClass: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
};

SectionTriangleComponent.defaultProps = {
  content: null,
  newClass: null,
  newStyle: null,
  color: 'primary',
};

export default SectionTriangleComponent;
