// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';
import { Cycler } from 'react-text-scrambler';

// IMPORT STYLE

// eslint-disable-next-line import/no-unresolved
import { Section, DivChildren, DivArray, BoxContent } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';
import Icon from '../../../atoms/icon/icon';

// CREATE NEW COMPONENT

class SectionTypingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      titleArray: [],
    };
    this.scrollClickArray = this.scrollClickArray.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ height: window.innerHeight });
  }

  scrollClickArray() {
    const { height } = this.state;
    window.scrollTo({
      top: height,
      behavior: 'smooth',
    });
  }

  render() {
    const { children, newClass, newStyle, size, title, color, id } = this.props;
    const { titleArray } = this.state;
    title.forEach(item => {
      titleArray.push(item.title);
    });
    return (
      <>
        <Section id={id} size={size} color={color} theme={settings} newStyle={newStyle} className={newClass}>
          <Row newClass="row">
            <BoxContent>
              <Cycler duration={3000} strings={titleArray} />
              <DivChildren>{children}</DivChildren>
            </BoxContent>
            <DivArray>
              <Icon secondary icon="down" type="button" onClick={this.scrollClickArray} />
            </DivArray>
          </Row>
        </Section>
      </>
    );
  }
}

// PropTpyes
SectionTypingComponent.propTypes = {
  id: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
  color: PropTypes.string,
  newClass: PropTypes.string,
  children: PropTypes.node.isRequired,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SectionTypingComponent.defaultProps = {
  id: null,
  size: 'full',
  newClass: null,
  newStyle: null,
  color: 'primary',
  title: ['Add title'],
};

export default SectionTypingComponent;
