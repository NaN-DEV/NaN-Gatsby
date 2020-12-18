/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';

// CREATE NEW COMPONENT
class ScrollNextElementComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      heightWindows: 0,
      offsetPageYOld: 0,
      wheelActionNumber: 0,
      allHeightElement: [],
      topEdgesAllElements: [],
    };

    this.animationScollUp = this.animationScollUp.bind(this);
    this.animationScollDown = this.animationScollDown.bind(this);
    this.scrollDirectionNow = this.scrollDirectionNow.bind(this);
    this.addTopEdgesAllElement = this.addTopEdgesAllElement.bind(this);
  }

  componentDidMount() {
    smoothscroll.polyfill();
    this.addTopEdgesAllElement();
    document.addEventListener('scroll', this.scrollDirectionNow);
    window.addEventListener('resize', this.addTopEdgesAllElement);
  }

  componentWillUnmount() {
    smoothscroll.polyfill();
    this.addTopEdgesAllElement();
    document.removeEventListener('scroll', this.scrollDirectionNow);
    window.removeEventListener('resize', this.addTopEdgesAllElement);
  }

  addTopEdgesAllElement = () => {
    const allEdge = [];
    const allHeight = [];
    const { parameters } = this.props;

    parameters.slide.forEach((element, i) => {
      const topEdgeElement = document.getElementById(element);
      if (i > 0 && allEdge[i - 1] === topEdgeElement.getBoundingClientRect().top + window.pageYOffset) return null;
      allHeight.push(topEdgeElement.offsetHeight);
      allEdge.push(topEdgeElement.getBoundingClientRect().top + window.pageYOffset);
    });

    this.setState({
      allHeightElement: allHeight,
      topEdgesAllElements: allEdge,
      heightWindows: window.innerHeight,
    });
  };

  scrollDirectionNow = () => {
    const { offsetPageYOld } = this.state;

    const offsetPageYNow = window.pageYOffset;

    if (offsetPageYNow > offsetPageYOld) {
      this.animationScollDown();
    } else {
      this.animationScollUp();
    }

    this.setState({
      offsetPageYOld: offsetPageYNow,
    });
  };

  animationScollDown = () => {
    const edgeTopWindow = window.pageYOffset;
    const { wheelActionNumber, topEdgesAllElements, heightWindows } = this.state;

    this.setState({
      wheelActionNumber: wheelActionNumber + 1,
    });

    const isItLastAction = new Promise(resolve => {
      setTimeout(resolve, 40, this.state.wheelActionNumber);
    });

    isItLastAction.then(values => {
      if (this.state.wheelActionNumber === values) {
        const index = topEdgesAllElements.findIndex(el => {
          return el >= edgeTopWindow;
        });

        if (index >= 0) {
          if (topEdgesAllElements[index] < edgeTopWindow + heightWindows - 60) {
            window.scrollTo({
              top: topEdgesAllElements[index] - 70,
              behavior: 'smooth',
            });
          } else {
            window.scrollTo({
              top: topEdgesAllElements[index - 1] - 70,
              behavior: 'smooth',
            });
          }
        }

        this.setState({
          activeIndex: index,
        });
      }
    });
  };

  animationScollUp = () => {
    const edgeTopWindow = window.pageYOffset;
    const { wheelActionNumber, topEdgesAllElements, heightWindows, allHeightElement, activeIndex } = this.state;

    this.setState({
      wheelActionNumber: wheelActionNumber + 1,
    });

    const isItLastAction = new Promise(resolve => {
      setTimeout(resolve, 40, this.state.wheelActionNumber);
    });

    isItLastAction.then(values => {
      if (this.state.wheelActionNumber === values) {
        if (activeIndex > 0) {
          if (topEdgesAllElements[activeIndex] + allHeightElement[activeIndex - 1] > edgeTopWindow + heightWindows + 60) {
            window.scrollTo({
              top: topEdgesAllElements[activeIndex - 1] - 70,
              behavior: 'smooth',
            });
          } else {
            window.scrollTo({
              top: topEdgesAllElements[activeIndex] - 70,
              behavior: 'smooth',
            });
          }
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
