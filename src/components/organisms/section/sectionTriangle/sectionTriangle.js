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
  const { id, key, content, newClass, newStyle } = props;
  return (
    <Section theme={settings} id={id} key={key} newStyle={newStyle} className={newClass}>
      {content.map((item, index) => {
        return (
          <Article
            theme={settings}
            id={item.id}
            key={`${item.id}-article-key`}
            colorStyle={index % 3 === 0 || index === 0 ? 'secondary' : `${index % 2 === 0 ? 'primary' : 'tertiary'}`}
            articlePosition={index % 3 === 0 || index === 0 ? 'center' : `${(index - 1) % 3 || index === 0 ? 'left' : 'right'}`}
          >
            <Row newClass="row">
              <Box className="box">
                <Category>
                  {item.category.map((category, i) => {
                    return (
                      <Button
                        type="linkIn"
                        id={`${category.id}-category-id`}
                        key={`${category.id}-category-key`}
                        content={{ to: `/portfolio/${category.slug}` }}
                        parameters={{
                          color: null,
                        }}
                      >
                        {category.title}
                        {item.category.length > 1 && i < item.category.length && ' /'}
                      </Button>
                    );
                  })}
                </Category>
                <Button type="linkIn" content={{ title: 'Kliknij tu', to: `/project/${item.slug}` }} parameters={{ newClass: 'link' }}>
                  <Title theme={settings}>{item.title}</Title>
                </Button>
              </Box>
              <Box>
                <Icon
                  type="triangle"
                  parameters={{
                    newClass: 'triangle',
                    color: index % 3 === 0 || index === 0 ? 'primary' : `${index % 2 === 0 ? 'secondary' : 'primary'}`,
                  }}
                />
                <Image theme={settings} fluid={item.imageSubstitute.fluid} className="image" />
              </Box>
              <Button
                type="linkIn"
                id={`${item.id}-button-more-id`}
                key={`${item.id}-button-more-key`}
                content={{ to: `/project/${item.slug}`, title: 'więcej' }}
                parameters={{
                  newClass: 'buttonMore',
                  color: index % 3 === 0 || index === 0 ? 'primary' : `${index % 2 === 0 ? 'secondary' : 'primary'}`,
                }}
              >
                Więcej
              </Button>
            </Row>
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