// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import style
import { Section, Left, Right, Image, Title, NameExpert, Description } from './style/style';

// Import settings style
import Row from '../../../atoms/row/row';
import settings from '../../../../layouts/settings/settings';

// Create new component
const sectionIdExpertComponent = props => {
  const { content } = props;

  return (
    <>
      <Section theme={{ settings }}>
        <Row parameters={{}}>
          <Left theme={{ settings }}>
            <Image theme={{ settings }} fluid={content.image.fluid} />
            <Title theme={{ settings }}>Hej</Title>
          </Left>
          <Right theme={{ settings }}>
            <NameExpert theme={{ settings }}>
              {content.name} {content.surname}
            </NameExpert>

            <Description theme={{ settings }}>{content.description}</Description>
          </Right>
        </Row>
      </Section>
    </>
  );
};

// PropTpyes
sectionIdExpertComponent.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    description: PropTypes.string,
  }),
};

// PropsTypes default
sectionIdExpertComponent.defaultProps = {
  content: PropTypes.shape({
    name: 'Add name',
    surname: 'Add surname',
    description: 'description',
  }),
};

export default sectionIdExpertComponent;
