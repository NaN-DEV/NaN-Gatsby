import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const styleAllButton = css`
  display: flex;
  height: 4.2rem;
  padding: 0 3rem;
  font-weight: bold;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.border};
  font-family: ${props => props.theme.font_secondary};

  ${props => {
    switch (props.color) {
      case 'secondary':
        return css`
          color: ${props.theme.primary} !important;
          background-color: ${props.theme.secondary} !important;
          box-shadow: ${props.theme.tertiary_2} ${props.theme.border} ${props.theme.border} 0 !important;
          &:hover {
            color: ${props.theme.primary} !important;
            background-color: ${props.theme.tertiary_1} !important;
          }
        `;
      case 'tertiary_1':
        return css`
          color: ${props.theme.secondary} !important;
          background-color: ${props.theme.tertiary_1} !important;
          box-shadow: ${props.theme.tertiary_2} ${props.theme.border} ${props.theme.border} 0 !important;
          &:hover {
            color: ${props.theme.primary} !important;
            background-color: ${props.theme.secondary} !important;
          }
        `;
      case 'tertiary_2':
        return css`
          color: ${props.theme.secondary} !important;
          background-color: ${props.theme.tertiary_1} !important;
          box-shadow: ${props.theme.tertiary_2} ${props.theme.border} ${props.theme.border} 0 !important;
          &:hover {
            color: ${props.theme.primary} !important;
            background-color: ${props.theme.secondary} !important;
          }
        `;
      case 'tertiary_3':
        return css`
          color: ${props.theme.primary} !important;
          background-color: ${props.theme.secondary} !important;
          box-shadow: ${props.theme.tertiary_2} ${props.theme.border} ${props.theme.border} 0 !important;
          &:hover {
            color: ${props.theme.secondary} !important;
            background-color: ${props.theme.tertiary_1} !important;
          }
        `;
      case 'tertiary_4':
        return css`
          color: ${props.theme.primary} !important;
          background-color: ${props.theme.secondary} !important;
          box-shadow: ${props.theme.tertiary_2} ${props.theme.border} ${props.theme.border} 0 !important;
          &:hover {
            color: ${props.theme.secondary} !important;
            background-color: ${props.theme.tertiary_1} !important;
          }
        `;
      default:
        return css`
          color: ${props.theme.secondary} !important;
          background-color: ${props.theme.primary}!important;
          box-shadow: ${props.theme.tertiary_2} ${props.theme.border} ${props.theme.border} 0 !important;
          &:hover {
            color: ${props.theme.primary} !important;
            background-color: ${props.theme.tertiary_4} !important;
          }
        `;
    }
  }};
`;

export const Button = styled.button`
  ${styleAllButton}
`;

export const ButtonLink = styled(Link)`
  ${styleAllButton}
`;

export const ButtonSubmit = styled.input`
  ${styleAllButton}
`;

export const ButtonLinkOut = styled.a`
  ${styleAllButton}
`;
