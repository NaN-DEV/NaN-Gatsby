import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const styleAllButton = css`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 3rem;
  height: 4.2rem;
  border-radius: ${props => props.theme.border};
  font-family: ${props => props.theme.font_secondary};

  ${props => {
    switch (props.color) {
      case 'secondary':
        return css`
          color: ${props.theme.primary};
          background-color: ${props.theme.secondary};
          box-shadow: ${props.theme.tertiary_2} ${props.theme.border} ${props.theme.border} 0;
          &:hover {
            color: ${props.theme.secondary};
            background-color: ${props.theme.tertiary_1};
          }
        `;
      case 'tertiary_1':
        return css`
          color: ${props.theme.secondary};
          background-color: ${props.theme.tertiary_1};
          box-shadow: ${props.theme.tertiary_2} ${props.theme.border} ${props.theme.border} 0;
          &:hover {
            color: ${props.theme.primary};
            background-color: ${props.theme.secondary};
          }
        `;
      case 'tertiary_2':
        return css`
          color: ${props.theme.secondary};
          background-color: ${props.theme.tertiary_1};
          box-shadow: ${props.theme.tertiary_2} ${props.theme.border} ${props.theme.border} 0;
          &:hover {
            color: ${props.theme.primary};
            background-color: ${props.theme.secondary};
          }
        `;
      case 'tertiary_3':
        return css`
          color: ${props.theme.primary};
          background-color: ${props.theme.secondary};
          box-shadow: ${props.theme.tertiary_2} ${props.theme.border} ${props.theme.border} 0;
          &:hover {
            color: ${props.theme.secondary};
            background-color: ${props.theme.tertiary_1};
          }
        `;
      case 'tertiary_4':
        return css`
          color: ${props.theme.primary};
          background-color: ${props.theme.secondary};
          box-shadow: ${props.theme.tertiary_2} ${props.theme.border} ${props.theme.border} 0;
          &:hover {
            color: ${props.theme.secondary};
            background-color: ${props.theme.tertiary_1};
          }
        `;
      default:
        return css`
          color: ${props.theme.primary};
          background-color: ${props.theme.secondary};
          box-shadow: ${props.theme.tertiary_2} ${props.theme.border} ${props.theme.border} 0;
          &:hover {
            color: ${props.theme.secondary};
            background-color: ${props.theme.tertiary_1};
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
