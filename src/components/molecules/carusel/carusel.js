/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// IMPORT LOCAL STYLE
import { Item, BoxLeft, BoxRight, BoxTop, BoxBottom, Title, Category, BoxCarousel } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../atoms/row/row';
import Icon from '../../atoms/icon/icon';
import Button from '../../atoms/button/button';

// CREATE NEW COMPONENT

const CarouselComponent = props => {
  const { id, key, content, parameters } = props;

  const caruselDesctopFinal = [];
  let caruselDesctopOne = [];
  let resetArray = 0;

  content.nodes.forEach(item => {
    caruselDesctopOne.push(item);
    if (resetArray === 1) {
      caruselDesctopFinal.push(caruselDesctopOne);
      resetArray = 0;
      caruselDesctopOne = [];
    }
    resetArray++;
  });

  if (content.length % 2 === 1) {
    caruselDesctopFinal.pop();
  }

  const responsive = {
    all: {
      breakpoint: { max: 9999999, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const CustomRightArrowDesctop = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;

    return (
      <Button type="button" onClick={() => onClick()} content={{ title: 'Wstecz' }} parameters={{ newClass: 'buttonBack', onClick: () => onClick() }}>
        <Icon type="triangle" colorStyle="secondary" size={6} title="Następne" />
        <Icon type="down" colorStyle="primary" newClass="arrow" />
      </Button>
    );
  };

  const CustomLeftArrowDesctop = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;

    return (
      <Button
        type="button"
        onClick={() => onClick()}
        content={{ title: 'Następne' }}
        parameters={{ newClass: 'buttonNext', onClick: () => onClick() }}
      >
        <Icon type="triangle" colorStyle="primary" size={6} title="Następne" />
        <Icon type="down" colorStyle="secondary" newClass="arrow" title="Następne" />
      </Button>
    );
  };

  return (
    <>
      <BoxCarousel theme={settings} id={id} key={key} className={parameters.newClass} style={parameters.style}>
        <Carousel
          ssr
          infinite
          swipeable
          draggable
          keyBoardControl
          autoPlaySpeed={1000}
          responsive={responsive}
          customTransition="all 0.5s"
          customLeftArrow={<CustomLeftArrowDesctop />}
          customRightArrow={<CustomRightArrowDesctop />}
          transitionDuration={500}
        >
          {caruselDesctopFinal.map(item => {
            return (
              item.length > 1 && (
                <Item theme={settings} key={item[0].id}>
                  <Row>
                    <BoxLeft theme={settings} to={`/project/${item[0].slug}`} title={item[0].title}>
                      <BoxTop theme={settings}>
                        <Icon type="triangle" title={item[0].title} size={15} newClass="triangle" colorStyle="secondary" />
                      </BoxTop>
                      <BoxBottom theme={settings}>
                        {item[0].category.map(category => {
                          return (
                            <Category to={`/portfolio/${category.slug}`} theme={settings} title={category.title} key={category.id}>
                              {category.title}
                            </Category>
                          );
                        })}
                        <Title>{item[0].title}</Title>
                      </BoxBottom>
                    </BoxLeft>
                    <BoxRight theme={settings} to={`/project/${item[1].slug}`} title={item[1].title}>
                      <BoxTop theme={settings}>
                        <Icon type="triangle" title={item[1].title} size={15} newClass="triangle" primary />
                      </BoxTop>
                      <BoxBottom theme={settings}>
                        {item[1].category.map(category => {
                          return (
                            <Category to={`/portfolio/${category.slug}`} theme={settings} title={category.title} key={category.id}>
                              {category.title}
                            </Category>
                          );
                        })}
                        <Title theme={settings}>{item[1].title}</Title>
                      </BoxBottom>
                    </BoxRight>
                  </Row>
                </Item>
              )
            );
          })}
        </Carousel>
      </BoxCarousel>
    </>
  );
};

// PropTpyes
CarouselComponent.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

// PropTypes default
CarouselComponent.defaultProps = { id: null, key: null, content: null, parameters: false };

export default CarouselComponent;
