import styled, { css } from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const buttonStyles = css`
  opacity: 1;
  display: flex;
  outline: none;
  font-weight: bold;
  font-size: 1.5rem;
  position: relative;
  align-items: center;
  justify-content: center;
  transform: ${props => props.settings.animation};
  border-radius: ${props => props.settings.border};
`;

const buttonColor = css`
  &:hover {
    opacity: 0.6;
  }

  ${props => {
    switch (props.theme) {
      case 'primary':
        return css`
          height: 4.2rem;
          padding: 0 3rem;
          border-radius: ${props.settings.border};
          color: ${props.settings.secondary} !important;
          background-color: ${props.settings.primary} !important;
          box-shadow: ${props.settings.tertiary_5} ${props.settings.border} ${props.settings.border} 0 !important;
        `;
      case 'secondary':
        return css`
          height: 4.2rem;
          padding: 0 3rem;
          border-radius: ${props.settings.border};
          color: ${props.settings.primary} !important;
          background-color: ${props.settings.secondary} !important;
          box-shadow: ${props.settings.tertiary_5} ${props.settings.border} ${props.settings.border} 0 !important;
        `;
      default:
        return css`
          background-color: transparent;
        `;
    }
  }}
`;

export const LinkOut = styled.a`
  ${buttonColor}
  ${buttonStyles}
`;

export const Button = styled.button`
  ${buttonColor}
  ${buttonStyles}
`;

export const LinkIn = styled(AniLink)`
  ${buttonColor}
  ${buttonStyles}
`;
