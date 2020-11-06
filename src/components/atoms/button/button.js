// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE
import { ButtonLinkOut, Button, ButtonLink, ButtonSubmit, ButtonTriangle } from './style/style';

// IMPORT SETTINGS STYLE
import Icon from '../icon/icon';
import settings from '../../../layouts/settings/settings';

// CREATE NEW COMPONENT

const ButtonComponent = props => {
  const { type, title, color, newClass, newStyle, link, onClick, left, right } = props;
  const selectTypeButton = wrap => {
    switch (wrap) {
      case 'linkOut':
        return (
          <>
            <ButtonLinkOut color={color} theme={settings} style={newStyle} className={newClass} href={link} title={title} target="_blank">
              {title}
            </ButtonLinkOut>
          </>
        );
      case 'link':
        return (
          <>
            <ButtonLink color={color} theme={settings} style={newStyle} className={newClass} to={link} title={title}>
              {title}
            </ButtonLink>
          </>
        );
      case 'sumbit':
        return (
          <>
            <ButtonSubmit color={color} value={title} theme={settings} style={newStyle} className={newClass} />
          </>
        );
      case 'triangle':
        return (
          <>
            <ButtonTriangle color={color} theme={settings} style={newStyle} className={newClass} onClick={onClick} left={left} right={right}>
              <Icon width={140} icon="triangle" title="ok" newClass="triangle" secondary />
              <Icon width={140} icon="down" title="ok" newClass="arrow" secondary />
            </ButtonTriangle>
          </>
        );

      default:
        return (
          <>
            <Button color={color} theme={settings} style={newStyle} className={newClass} onClick={onClick}>
              {title}
            </Button>
          </>
        );
    }
  };

  return <>{selectTypeButton(type)}</>;
};
// PropTpyes
ButtonComponent.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  newClass: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

ButtonComponent.defaultProps = {
  link: null,
  newClass: null,
  newStyle: null,
  color: 'primary',
  title: 'Add title',
};

export default ButtonComponent;
