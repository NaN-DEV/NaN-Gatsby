/* eslint-disable react/self-closing-comp */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import style
import { Section, Content, ContentStatic, ContentScrambler } from './style/style';

// Import settings style
import settings from '../../../../layouts/settings/settings';

// Import component
import Row from '../../../atoms/row/row';

// Create new component
class SectionScramblerTextComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textScrambler: '',
      chars: '!<>-_\\/[]{}—=+*^?#________',
    };

    this.update = this.update.bind(this);
    this.setText = this.setText.bind(this);
    this.randomChar = this.randomChar.bind(this);
  }

  componentDidMount() {
    const { phrases } = this.props.content;
    const { speed } = this.props.parameters;

    let counter = 0;
    const next = () => {
      this.setText(phrases[counter]).then(() => {
        setTimeout(next, speed || 1500);
      });

      counter = (counter + 1) % phrases.length;
    };

    next();
  }

  setText = newText => {
    const { textScrambler } = this.state;

    const length = Math.max(textScrambler.length, newText.length);
    const promise = new Promise(resolve => (this.resolve = resolve));
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = textScrambler[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({
        from,
        to,
        start,
        end,
      });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  };

  update = () => {
    let output = '';
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }

        output += char;
      } else {
        output += from;
      }
    }

    this.setState({
      textScrambler: output,
    });

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  };

  randomChar = () => {
    return this.state.chars[Math.floor(Math.random() * this.state.chars.length)];
  };

  render() {
    return (
      <>
        <Section theme={{ settings }}>
          <Row parameters={{ className: 'row' }}>
            <Content theme={{ settings }}>
              <ContentStatic theme={{ settings }}>Witaj, świecie !</ContentStatic>
              <ContentStatic theme={{ settings }}>
                jestem developerem{' '}
                <ContentScrambler theme={{ settings }} dangerouslySetInnerHTML={{ __html: this.state.textScrambler }}></ContentScrambler>
              </ContentStatic>
            </Content>
          </Row>
        </Section>
      </>
    );
  }
}

// PropTpyes
SectionScramblerTextComponent.propTypes = {
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

// PropTpyes default
SectionScramblerTextComponent.defaultProps = {
  content: null,
  parameters: false,
};

export default SectionScramblerTextComponent;
