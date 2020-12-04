// Import plugin
import React from 'react';
import PropTypes from 'prop-types';
import { Cycler } from 'react-text-scrambler';

// Import style
import { Section, Content } from './style/style';

// Import settings style
import settings from '../../../../layouts/settings/settings';

// Import component
import Row from '../../../atoms/row/row';
import Icon from '../../../atoms/icon/icon';
import Button from '../../../atoms/button/button';

// Create new component
class SectionScramblerTextComponent extends React.Component {
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
    this.setState({ height: window.innerHeight - 70 });
  }

  scrollClickArray() {
    const { height } = this.state;
    window.scrollTo({
      top: height,
      behavior: 'smooth',
    });
  }

  render() {
    const { titleArray } = this.state;
    const { id, key, content, parameters } = this.props;

    content.title.forEach(item => {
      titleArray.push(item.title);
    });
    return (
      <>
        <Section theme={settings} id={id} key={key} colorStyle={parameters.color} style={parameters.style} className={parameters.newClass}>
          <Row newClass="row">
            <Content>
              <Cycler duration={3000} strings={titleArray} />
            </Content>
          </Row>
          <Button type="button" content={{ title: 'kliknij' }} parameters={{ onClick: this.scrollClickArray, newClass: 'array' }}>
            <Icon colorStyle="secondary" type="down" />
          </Button>
        </Section>
      </>
    );
  }
}

// PropTpyes
SectionScramblerTextComponent.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

// PropTpyes default
SectionScramblerTextComponent.defaultProps = {
  id: null,
  key: null,
  content: null,
  parameters: false,
};

export default SectionScramblerTextComponent;
