/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

// CREATE NEW COMPONENT
class ScrollNextElementComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offsetPageYOld: 0,
      wheelActionNumber: 0,
      lastActiveElement: 0,
      allElementsHeight: [],
      topEdgesAllElements: [],
      scrollDirection: 'down',
    };

    this.animationScoll = this.animationScoll.bind(this);
    this.scrollDirectionNow = this.scrollDirectionNow.bind(this);
    this.addTopEdgesAllElement = this.addTopEdgesAllElement.bind(this);
  }

  componentDidMount() {
    this.addTopEdgesAllElement();
    document.addEventListener('wheel', this.animationScoll);
    document.addEventListener('scroll', this.scrollDirectionNow);
    window.addEventListener('resize', this.addTopEdgesAllElement);
  }

  componentWillUnmount() {
    this.addTopEdgesAllElement();
    document.removeEventListener('wheel', this.animationScoll);
    document.removeEventListener('scroll', this.scrollDirectionNow);
    window.removeEventListener('resize', this.addTopEdgesAllElement);
  }

  addTopEdgesAllElement = () => {
    const { parameters } = this.props;
    const AllEdge = [];
    const AllHeight = [];

    parameters.slide.forEach((element, i) => {
      const topEdgeElement = document.getElementById(element);
      if (AllEdge[i - 1] === topEdgeElement) return null;
      AllEdge.push(topEdgeElement.getBoundingClientRect().top + window.pageYOffset);
      AllHeight.push(topEdgeElement.offsetHeight);
    });

    this.setState({
      topEdgesAllElements: AllEdge,
      allElementsHeight: AllHeight,
    });
  };

  scrollDirectionNow = () => {
    const { offsetPageYOld } = this.state;

    const offsetPageYNow = window.pageYOffset;

    if (offsetPageYNow > offsetPageYOld) {
      this.setState({
        scrollDirection: 'down',
      });
    } else {
      this.setState({
        scrollDirection: 'up',
      });
    }

    this.setState({
      offsetPageYOld: offsetPageYNow,
    });
  };

  animationScoll = () => {
    const heightWindows = window.pageYOffset;
    const { lastActiveElement, topEdgesAllElements, wheelActionNumber, scrollDirection, allElementsHeight } = this.state;

    this.setState({
      wheelActionNumber: wheelActionNumber + 1,
    });

    const isItLastaction = new Promise(resolve => {
      setTimeout(resolve, 30, this.state.wheelActionNumber);
    });

    if (
      scrollDirection === 'down' &&
      topEdgesAllElements.length - 1 > lastActiveElement &&
      topEdgesAllElements[lastActiveElement + 1] < heightWindows + allElementsHeight[lastActiveElement] / 2
    ) {
      this.setState({
        lastActiveElement: lastActiveElement + 1,
      });
    } else if (
      scrollDirection === 'up' &&
      lastActiveElement > 0 &&
      topEdgesAllElements[lastActiveElement - 1] > heightWindows + allElementsHeight[lastActiveElement] / 2
    ) {
      this.setState({
        lastActiveElement: lastActiveElement - 1,
      });
    }

    isItLastaction.then(values => {
      if (this.state.wheelActionNumber === values) {
        if (
          scrollDirection === 'down' &&
          topEdgesAllElements.length - 1 >= lastActiveElement &&
          topEdgesAllElements[lastActiveElement] < heightWindows + allElementsHeight[lastActiveElement] / 2
        ) {
          window.scrollTo({
            top: topEdgesAllElements[lastActiveElement] - 70,
            behavior: 'smooth',
          });
        } else if (
          scrollDirection === 'up' &&
          lastActiveElement > 0 &&
          topEdgesAllElements[lastActiveElement] > allElementsHeight[lastActiveElement] / 2
        ) {
          window.scrollTo({
            top: topEdgesAllElements[lastActiveElement - 1] - 70,
            behavior: 'smooth',
          });
        }
      }
    });
  };

  render() {
    return null;
  }
}

// PropTpyes
ScrollNextElementComponent.propTypes = {
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

// EXPORT NEW COMPONENT
export default ScrollNextElementComponent;
