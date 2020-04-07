// IMPORT PLUGIN
import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

// IMPORT STYLES
import { Wrapper, Assets, Content } from './style/style';

// IMPORT SETTINGS STYLE
import theme from '../../../../../layouts/theme/settings2';

// IMPORT COMPONENT START
import Button from '../../../../atoms/button/button';

// IMPORT SVG START
import Icon from '../../../../atoms/icon/icon';

// CREATE NEW COMPONENT
class SectionTriangle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: null,
      section: null,
      page: 'center',
    };
  }

  componentDidMount() {
    const { index } = this.props;
    if ((index + 1) % 3 === 0) {
      this.setState({
        layout: 'top',
      });
    }
    if (index === 0) {
      this.setState({
        section: 'FullWhite',
      });
    } else if (index % 3 === 0) {
      this.setState({
        section: 'FullWhite',
      });
    } else if (index > 0 && index % 3 > 0 && index % 2 === 0) {
      this.setState({
        section: 'HalfLight',
      });
    } else if (index > 0 && index % 3 > 0 && index % 2 > 0) {
      this.setState({
        section: 'HalfBlack',
      });
    }

    if (index % 3 === 0 + 1 || index % 3 === 0 + 1) {
      this.setState({
        page: 'flex-end',
      });
    } else if (index % 3 === 0 + 2 || index % 3 === 0 + 2) {
      this.setState({
        page: 'flex-start',
      });
    }
  }

  render() {
    const { layout, section, page } = this.state;
    const { content } = this.props;
    return (
      <>
        <Wrapper
          page={page}
          theme={theme}
          size={section}
          id={content.id}
          key={content.id}
          style={{
            justifyContent: page,
          }}
        >
          <Link to={content.link}>
            {layout === 'top' ? (
              <>
                <Assets top theme={theme}>
                  <div className="box">
                    <Img fixed={content.image} className="img" />
                    <Icon triangle className="triangle" />
                  </div>
                </Assets>
                <Content bottom theme={theme}>
                  <div className="box">
                    <p>{content.category}</p>
                    <h1>{content.title}</h1>
                    <div className="box-button">
                      {section === 'FullWhite' ? (
                        <Button more primary />
                      ) : (
                        <Button more secondary />
                      )}
                    </div>
                  </div>
                </Content>
              </>
            ) : (
              <>
                <Content theme={theme}>
                  <div className="box">
                    <p>{content.category}</p>
                    <h1>{content.title}</h1>
                  </div>
                </Content>
                <Assets theme={theme}>
                  <div className="box">
                    <Img fixed={content.image} className="img" />
                    <Icon triangle className="triangle" />
                  </div>
                  <div className="box-button">
                    {section === 'FullWhite' ? <Button more primary /> : <Button more secondary />}
                  </div>
                </Assets>
              </>
            )}
          </Link>
        </Wrapper>
      </>
    );
  }
}

export default SectionTriangle;
