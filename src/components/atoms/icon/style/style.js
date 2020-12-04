import styled, { css } from 'styled-components';

const BoxIcon = styled.div`
  display: block;
  position: relative;
  svg {
    display: block;
    transition: all 0.3s;
    ${props =>
      props.size
        ? css`
            height: ${`${props.size}rem`};
          `
        : css`
            height: 3rem;
          `}
    ${props => {
      switch (props.colorStyle) {
        case 'primary':
          return css`
            fill: ${props.theme.primary};
          `;
        case 'secondary':
          return css`
            fill: ${props.theme.secondary};
          `;
        case 'tertiary_1':
          return css`
            fill: ${props.theme.tertiary_1};
          `;
        case 'tertiary_2':
          return css`
            fill: ${props.theme.tertiary_2};
          `;
        case 'tertiary_3':
          return css`
            fill: ${props.theme.tertiary_3};
          `;
        case 'tertiary_4':
          return css`
            fill: ${props.theme.tertiary_4};
          `;
        case 'tertiary_5':
          return css`
            fill: ${props.theme.tertiary_5};
          `;
        case 'tertiary_6':
          return css`
            fill: ${props.theme.tertiary_6};
          `;
        default:
          return css`
            fill: ${props.theme.primary};
          `;
      }
    }}
  }
`;

export default BoxIcon;
