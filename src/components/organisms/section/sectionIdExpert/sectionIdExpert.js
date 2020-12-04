// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE
import { Section, Left, Right, FaceExpert, NameExpert, Description, Title, BoxData } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';
import Button from '../../../atoms/button/button';

// CREATE NEW COMPONENT

// CREATE NEW COMPONENT

const identificationExpertComponent = props => {
  const { id, key, content, parameters } = props;

  return (
    <>
      <Section theme={settings} style={parameters.newStyle} className={parameters.newClass} id={id} key={key}>
        <Row theme={settings} newClass="row">
          <Left theme={settings}>
            <FaceExpert theme={settings} fluid={content.image.fluid} />
            <Title theme={settings}>Witam</Title>
          </Left>
          <Right theme={settings}>
            <BoxData theme={settings}>
              <NameExpert theme={settings}>
                {content.name} {content.surname}
              </NameExpert>

              <Button
                theme={settings}
                type={content.portfolio.includes('http://') || content.portfolio.includes('https://') ? 'linkOut' : 'linkIn'}
                content={{
                  title: 'Portfolio',
                  to: content.portfolio,
                }}
                parameters={{ color: 'primary', newClass: 'buttonPortfolio' }}
              >
                Moje portfolio
              </Button>
            </BoxData>
            <Description theme={settings}>{content.description}</Description>
          </Right>
        </Row>
      </Section>
    </>
  );
};

// PropTpyes
identificationExpertComponent.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

// PropsTypes default
identificationExpertComponent.defaultProps = {
  id: null,
  key: null,
  content: null,
  parameters: false,
};

export default identificationExpertComponent;
