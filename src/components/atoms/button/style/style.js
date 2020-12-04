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
  transform: ${props => props.theme.animation};
  border-radius: ${props => props.theme.border};
`;

const buttonColor = css`
  &:hover {
    opacity: 0.6;
  }

  ${props => {
    switch (props.colorStyle) {
      case 'primary':
        return css`
          height: 4.2rem;
          padding: 0 3rem;
          border-radius: ${props.theme.border};
          color: ${props.theme.secondary} !important;
          background-color: ${props.theme.primary} !important;
          box-shadow: ${props.theme.tertiary_5} ${props.theme.border} ${props.theme.border} 0 !important;
        `;
      case 'secondary':
        return css`
          height: 4.2rem;
          padding: 0 3rem;
          border-radius: ${props.theme.border};
          color: ${props.theme.primary} !important;
          background-color: ${props.theme.secondary} !important;
          box-shadow: ${props.theme.tertiary_5} ${props.theme.border} ${props.theme.border} 0 !important;
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
