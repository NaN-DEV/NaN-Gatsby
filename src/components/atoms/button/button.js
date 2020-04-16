// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT COMPONENT
import ButtonMore from './more/more';
import ButtonText from './text/text';
import ButtonSubmit from './submit/Submit';
import ButtonOutLine from './outline/outline';
import ButtonHamburger from './hamburger/hamburger';

// CREATE NEW COMPONENT

const ButtonComponent = props => {
  const {
    text,
    more,
    title,
    style,
    clouse,
    submit,
    onClick,
    outline,
    hamburger,
    secondary,
    className,
  } = props;

  if (text) {
    return (
      <ButtonText
        title={title}
        style={style}
        secondary={secondary}
        onClick={onClick}
        className={className}
      />
    );
  }
  if (more) {
    return (
      <ButtonMore style={style} secondary={secondary} onClick={onClick} className={className} />
    );
  }
  if (submit) {
    return (
      <ButtonSubmit
        title={title}
        style={style}
        secondary={secondary}
        onClick={onClick}
        className={className}
      />
    );
  }
  if (outline) {
    return (
      <ButtonOutLine
        title={title}
        style={style}
        secondary={secondary}
        onClick={onClick}
        className={className}
      />
    );
  }
  if (hamburger) {
    return (
      <ButtonHamburger
        clouse={clouse}
        style={style}
        secondary={secondary}
        onClick={onClick}
        className={className}
      />
    );
  }
  return <p>not working button</p>;
};

ButtonComponent.propTypes = {
  more: PropTypes.bool,
  clouse: PropTypes.bool,
  outline: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
  style: PropTypes.string,
  hamburger: PropTypes.bool,
  secondary: PropTypes.bool,
  className: PropTypes.string,
};

ButtonComponent.defaultProps = {
  more: false,
  style: null,
  title: null,
  onClick: null,
  clouse: false,
  outline: false,
  className: null,
  hamburger: false,
  secondary: false,
};

export default ButtonComponent;
