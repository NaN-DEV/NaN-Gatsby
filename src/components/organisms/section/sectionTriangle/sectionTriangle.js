// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import style
import { Section, Article, Box, Category, Title, Image } from './style/style';

// Import setting style
import settings from '../../../../layouts/settings/settings';

// Import component
import Row from '../../../atoms/row/row';
import Icon from '../../../atoms/icon/icon';
import Button from '../../../atoms/button/button';

// Create new component
const SectionTriangleComponent = props => {
  const { id, content, newClass, newStyle } = props;
  return (
    <Section theme={settings} id={id} newStyle={newStyle} className={newClass}>
      {content.map((item, index) => {
        return (
          <Article
            theme={settings}
            id={item.id}
            key={`${item.id}-article-key`}
            colorStyle={index % 3 === 0 || index === 0 ? 'secondary' : `${index % 2 === 0 ? 'primary' : 'tertiary'}`}
            articlePosition={index % 3 === 0 || index === 0 ? 'center' : `${(index - 1) % 3 || index === 0 ? 'left' : 'right'}`}
          >
            <Button type="linkIn" content={{ title: 'Kliknij tu', to: `/portfolio/project/${item.slug}` }} parameters={{ newClass: 'link' }}>
              <Row newClass="row">
                <Box className="box">
                  <Category>
                    {item.category.map((category, i) => {
                      return (
                        <Button type="linkIn" id={`${category.id}-category-id`} key={category.id} content={{ to: category.slug }}>
                          {category.title}
                          {item.category.length > 1 && i < item.category.length && ' /'}
                        </Button>
                      );
                    })}
                  </Category>
                  <Title theme={settings}>{item.title}</Title>
                </Box>
                <Box>
                  <Icon
                    type="triangle"
                    newClass="triangle"
                    colorStyle={index % 3 === 0 || index === 0 ? 'primary' : `${index % 2 === 0 ? 'secondary' : 'primary'}`}
                  />
                  <Image theme={settings} fluid={item.imageSubstitute.fluid} className="image" />
                </Box>
                <Button
                  type="linkIn"
                  content={{ to: `/portfolio/project/${item.slug}`, title: 'więcej' }}
                  parameters={{
                    newClass: 'buttonMore',
                    color: index % 3 === 0 || index === 0 ? 'primary' : `${index % 2 === 0 ? 'secondary' : 'primary'}`,
                  }}
                >
                  Więcej
                </Button>
              </Row>
            </Button>
          </Article>
        );
      })}
    </Section>
  );
};

// PropTpyes
SectionTriangleComponent.propTypes = {
  newClass: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
};

SectionTriangleComponent.defaultProps = {
  content: null,
  newClass: null,
  newStyle: null,
};

export default SectionTriangleComponent;
