// IMPORT PLUGIN
import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import IconMenu from '../../../../atoms/icon/icon';
import theme from '../../../../../layouts/theme/settings2';

// IMPORT STYLE
import Li from './style/style';

// CREATE NEW COMPONENT

const LiComponent = props => {
  const { link, title, icon } = props;
  return (
    <>
      <Li theme={theme}>
        <Link to={link}>
          {icon === 'js' && (
            <IconMenu js width="10rem" height="10rem" widthMobile="3rem" heightMobile="3rem" />
          )}
          {icon === 'cogs' && (
            <IconMenu cogs width="10rem" height="10rem" widthMobile="3rem" heightMobile="3rem" />
          )}
          {icon === 'brand' && (
            <IconMenu brand width="10rem" height="10rem" widthMobile="3rem" heightMobile="3rem" />
          )}
          {icon === 'users' && (
            <IconMenu users width="10rem" height="10rem" widthMobile="3rem" heightMobile="3rem" />
          )}
          {icon === 'envelope' && (
            <IconMenu
              envelope
              width="10rem"
              height="10rem"
              widthMobile="3rem"
              heightMobile="3rem"
            />
          )}
          {icon === 'newspaper' && (
            <IconMenu
              newspaper
              width="10rem"
              height="10rem"
              widthMobile="3rem"
              heightMobile="3rem"
            />
          )}
          <p>{title}</p>
        </Link>
      </Li>
    </>
  );
};

export default LiComponent;

LiComponent.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
};

LiComponent.defaultProps = {
  link: '/',
};
