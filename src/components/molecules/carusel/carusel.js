/* eslint-disable no-plusplus */
// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// IMPORT LOCAL STYLE
import { Item, BoxLeft, BoxRight, BoxFull, BoxTop, BoxBottom, Title, Category, BoxCarousel, BoxCarouselMobile } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../atoms/row/row';
import Icon from '../../atoms/icon/icon';
import Button from '../../atoms/button/button';

// CREATE NEW COMPONENT

const CarouselComponent = props => {
  const { content } = props;

  const caruselDesctopFinal = [];
  let caruselDesctopOne = [];
  let resetArray = 0;

  content.forEach(item => {
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
      // eslint-disable-next-line no-unused-vars
      onMove,
      // eslint-disable-next-line no-unused-vars
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <Button onClick={() => onClick()} newClass="button_next" title="Następne" color="primary" type="triangle" right />;
  };

  const CustomRightArrowMobile = ({ onClick, ...rest }) => {
    const {
      // eslint-disable-next-line no-unused-vars
      onMove,
      // eslint-disable-next-line no-unused-vars
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <Button onClick={() => onClick()} newClass="button_next" title="Następne" color="secondary" type="triangle" right />;
  };

  const CustomLeftArrowDesctop = ({ onClick, ...rest }) => {
    const {
      // eslint-disable-next-line no-unused-vars
      onMove,
      // eslint-disable-next-line no-unused-vars
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <Button onClick={() => onClick()} newClass="button_back" title="Wstecz" color="secondary" type="triangle" left />;
  };

  const CustomLeftArrowMobile = ({ onClick, ...rest }) => {
    const {
      // eslint-disable-next-line no-unused-vars
      onMove,
      // eslint-disable-next-line no-unused-vars
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <Button onClick={() => onClick()} newClass="button_back" title="Wstecz" color="secondary" type="triangle" left />;
  };

  return (
    <>
      <BoxCarousel theme={settings}>
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
              <Item theme={settings}>
                <Row>
                  <BoxLeft theme={settings} to={`/portfolio/projekt/${item[0].slug}`} title={item[0].title}>
                    <BoxTop theme={settings}>
                      <Icon turn icon="triangle" title={item[0].title} newClass="triangle" secondary />
                    </BoxTop>
                    <BoxBottom theme={settings}>
                      {item[0].category.map(category => {
                        return (
                          <Category to={`/portfolio/${category.slug}`} theme={settings} title={category.name}>
                            {category.name}
                          </Category>
                        );
                      })}
                      <Title>{item[0].title}</Title>
                    </BoxBottom>
                  </BoxLeft>
                  <BoxRight theme={settings} to={`/portfolio/projekt/${item[1].slug}`} title={item[1].title}>
                    <BoxTop theme={settings}>
                      <Icon turn icon="triangle" title={item[1].title} newClass="triangle" primary />
                    </BoxTop>
                    <BoxBottom theme={settings}>
                      {item[1].category.map(category => {
                        return (
                          <Category to={`/portfolio/${category.slug}`} theme={settings} title={category.name}>
                            {category.name}
                          </Category>
                        );
                      })}
                      <Title theme={settings}>{item[1].title}</Title>
                    </BoxBottom>
                  </BoxRight>
                </Row>
              </Item>
            );
          })}
        </Carousel>
      </BoxCarousel>
      <BoxCarouselMobile theme={settings}>
        <Carousel
          ssr
          infinite
          swipeable
          draggable
          keyBoardControl
          autoPlaySpeed={1000}
          responsive={responsive}
          transitionDuration={500}
          customTransition="all 0.5s"
          customLeftArrow={<CustomLeftArrowMobile />}
          customRightArrow={<CustomRightArrowMobile />}
        >
          {content.map(item => {
            return (
              <Item id={item.id}>
                <Row>
                  <BoxFull theme={settings} to={`/portfolio/projekt/${item.slug}`} title={item.title}>
                    <BoxTop theme={settings}>
                      <Icon turn icon="triangle" title={item.title} newClass="triangle" secondary />
                    </BoxTop>
                    <BoxBottom theme={settings}>
                      {item.category.map(category => {
                        return (
                          <Category to={`/portfolio/${category.slug}`} theme={settings} title={category.name}>
                            {category.name}
                          </Category>
                        );
                      })}

                      <Title theme={settings}>{item.title}</Title>
                    </BoxBottom>
                  </BoxFull>
                </Row>
              </Item>
            );
          })}
        </Carousel>
      </BoxCarouselMobile>
    </>
  );
};

// PropTpyes
CarouselComponent.propTypes = { content: PropTypes.oneOfType([PropTypes.array]) };

CarouselComponent.defaultProps = { content: null };

export default CarouselComponent;
