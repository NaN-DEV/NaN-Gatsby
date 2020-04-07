// IMPORT PLUGIN
import React from 'react';

// IMPORT STYLES
import Section from './style/style';

// IMPORT SETTINGS STYLE
import theme from '../../../../layouts/theme/settings2';

// IMPORT COMPONENT START
import Item from './Item/Item';

// CREATE NEW COMPONENT

const SectionTriangleComponent = props => {
  const { index, content } = props;

  return (
    <>
      {index === 0 && (
        <Section>
          {content.map(
            (item, i) =>
              theme.max_post_home >= i + 1 && <Item content={item} index={i} key={item.id} />,
          )}
        </Section>
      )}
    </>
  );
};

export default SectionTriangleComponent;
