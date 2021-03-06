// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLES
import BoxIcon from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../layouts/settings/settings';

// IMPORT SVG

import Js from '../../../assets/icon/js.svg';
import Cv from '../../../assets/icon/cv.svg';
import Git from '../../../assets/icon/git.svg';
import Npm from '../../../assets/icon/npm.svg';
import Css from '../../../assets/icon/css.svg';
import Ask from '../../../assets/icon/ask.svg';
import Ux from '../../../assets/icon/uxui.svg';
import Php from '../../../assets/icon/php.svg';
import Sass from '../../../assets/icon/sass.svg';
import Node from '../../../assets/icon/node.svg';
import Html from '../../../assets/icon/html.svg';
import More from '../../../assets/icon/more.svg';
import Mail from '../../../assets/icon/mail.svg';
import Down from '../../../assets/icon/down.svg';
import Back from '../../../assets/icon/back.svg';
import Logo from '../../../assets/brand/logo.svg';
import Grunt from '../../../assets/icon/grunt.svg';
import Front from '../../../assets/icon/front.svg';
import Phone from '../../../assets/icon/phone.svg';
import Coffe from '../../../assets/icon/coffe.svg';
import Gatsby from '../../../assets/icon/gatsby.svg';
import Folder from '../../../assets/icon/folder.svg';
import Closed from '../../../assets/icon/closed.svg';
import People from '../../../assets/icon/people.svg';
import ReactJs from '../../../assets/icon/reactJs.svg';
import Twitter from '../../../assets/icon/twitter.svg';
import Website from '../../../assets/icon/website.svg';
import Webpack from '../../../assets/icon/webpack.svg';
import Graphql from '../../../assets/icon/graphql.svg';
import Datocms from '../../../assets/icon/datocms.svg';
import Netlify from '../../../assets/icon/netlify.svg';
import Facebook from '../../../assets/icon/facebook.svg';
import Computer from '../../../assets/icon/computer.svg';
import Triangle from '../../../assets/icon/triangle.svg';
import Settings from '../../../assets/icon/settings.svg';
import Wordpress from '../../../assets/icon/wordpress.svg';
import Hamburger from '../../../assets/icon/hamburger.svg';
import Conversation from '../../../assets/icon/conversation.svg';
import Notification from '../../../assets/icon/notification.svg';

// CREATE NEW COMPONENT
const IconComponent = props => {
  const { id, key, type, parameters } = props;

  switch (type) {
    case 'js':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Js />
        </BoxIcon>
      );
    case 'cv':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Cv />
        </BoxIcon>
      );

    case 'git':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Git />
        </BoxIcon>
      );

    case 'npm':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Npm />
        </BoxIcon>
      );

    case 'css':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Css />
        </BoxIcon>
      );

    case 'ask':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Ask />
        </BoxIcon>
      );
    case 'ui/ux':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Ux />
        </BoxIcon>
      );

    case 'php':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Php />
        </BoxIcon>
      );

    case 'sass':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Sass />
        </BoxIcon>
      );

    case 'node':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Node />
        </BoxIcon>
      );

    case 'html':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Html />
        </BoxIcon>
      );

    case 'more':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <More />
        </BoxIcon>
      );
    case 'mail':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Mail />
        </BoxIcon>
      );
    case 'down':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Down />
        </BoxIcon>
      );
    case 'back-end':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Back />
        </BoxIcon>
      );
    case 'logo':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Logo />
        </BoxIcon>
      );

    case 'grunt':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Grunt />
        </BoxIcon>
      );

    case 'front-end':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Front />
        </BoxIcon>
      );
    case 'phone':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Phone />
        </BoxIcon>
      );
    case 'coffe':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Coffe />
        </BoxIcon>
      );

    case 'gatsby':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Gatsby />
        </BoxIcon>
      );

    case 'folder':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Folder />
        </BoxIcon>
      );
    case 'closed':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Closed />
        </BoxIcon>
      );
    case 'people':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <People />
        </BoxIcon>
      );

    case 'react.js':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <ReactJs />
        </BoxIcon>
      );

    case 'twitter':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Twitter />
        </BoxIcon>
      );

    case 'website':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Website />
        </BoxIcon>
      );

    case 'webpack':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Webpack />
        </BoxIcon>
      );

    case 'graphql':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Graphql />
        </BoxIcon>
      );

    case 'datocms':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Datocms />
        </BoxIcon>
      );

    case 'netlify':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Netlify />
        </BoxIcon>
      );

    case 'facebook':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Facebook />
        </BoxIcon>
      );

    case 'computer':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Computer />
        </BoxIcon>
      );

    case 'triangle':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Triangle />
        </BoxIcon>
      );

    case 'settings':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Settings />
        </BoxIcon>
      );

    case 'wordpress':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Wordpress />
        </BoxIcon>
      );

    case 'hamburger':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Hamburger />
        </BoxIcon>
      );
    case 'conversation':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Conversation />
        </BoxIcon>
      );
    case 'notification':
      return (
        <BoxIcon
          id={id}
          key={key}
          size={parameters.size}
          style={parameters.newStyle}
          className={parameters.newClass}
          theme={{ settings, color: parameters.color }}
        >
          <Notification />
        </BoxIcon>
      );
    default:
      return 'Please add type icon :) ';
  }
};

// PropTpyes
IconComponent.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

// PropTpyes default
IconComponent.defaultProps = {
  id: null,
  key: null,
  parameters: false,
};

export default IconComponent;
