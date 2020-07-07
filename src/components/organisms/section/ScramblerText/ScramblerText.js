// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';
import { Cycler } from 'react-text-scrambler';

// IMPORT STYLE
import { Section, DivChildren, DivArray } from './style/style';

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
      titleArray: [],
    };
  }

  render() {
    const { children, newClass, newStyle, size, title, color } = this.props;
    const { titleArray } = this.state;
    title.forEach(item => {
      titleArray.push(item.title);
    });
    return (
      <>
        <Section
          size={size}
          color={color}
          theme={settings}
          newStyle={newStyle}
          className={newClass}
        >
          <Row newClass="row">
            <Cycler duration={3000} strings={titleArray} />
            <DivChildren>{children}</DivChildren>
            <DivArray>
              <Icon secondary />
            </DivArray>
          </Row>
        </Section>
      </>
    );
  }
}

// PropTpyes
SectionTypingComponent.propTypes = {
  size: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
  color: PropTypes.string,
  newClass: PropTypes.string,
  children: PropTypes.node.isRequired,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SectionTypingComponent.defaultProps = {
  size: 'full',
  newClass: null,
  newStyle: null,
  color: 'primary',
  title: ['Add title'],
};

export default SectionTypingComponent;
