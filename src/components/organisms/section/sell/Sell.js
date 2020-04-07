// IMPORT PLUGIN
import React from 'react';
import Typist from 'react-typist';

// IMPORT STYLES
import { Section, Content, Box, Assets } from './style/style';

// IMPORT SETTINGS STYLE
import theme from '../../../../layouts/theme/settings2';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';
import Button from '../../../atoms/button/button';
import Mascot from '../../../atoms/mascot/mascot';

// IMPORT SVG START
import Icon from '../../../atoms/icon/icon';

// CREATE NEW COMPONENT
const SectionSellComponent = props => {
  const { content } = props;
  const { id, textBold, textNormal, link, title, color } = content;
  return (
    <>
      <Section color={color} key={id} theme={theme}>
        <Row>
          <Content theme={theme}>
            <Box>
              <Typist>
                <span>
                  <strong>{textBold}</strong>
                  {textNormal}
                </span>
              </Typist>

              <div className="button">
                {color === 'secondary' ? (
                  <Button primary outline link={link} title={title} />
                ) : (
                  <Button secondary outline link={link} title={title} />
                )}
              </div>
            </Box>
          </Content>
          <Assets theme={theme}>
            <Mascot key="mascot-0" />
            {color === 'secondary' ? (
              <>
                <Icon triangle primary className="triangle" />
              </>
            ) : (
              <>
                <Icon triangle secondary className="triangle" />
              </>
            )}
          </Assets>
        </Row>
      </Section>
    </>
  );
};

export default SectionSellComponent;
