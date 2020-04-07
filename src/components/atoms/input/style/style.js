import styled, { css } from 'styled-components';

export const Input = styled.div`
  width: ${props => (props.width ? props.width : '100%')};
  height: 50px;
  input {
    &:focus {
      outline: none;
    }
  }

  input[type='mail'],
  input[type='text'],
  input[type='number'],
  input[type='search'],
  input[type='password'] {
    width: 100%;
    height: 60px;
    font-size: 30px;
    padding: 0 15px;
    border-style: solid;
    background-color: transparent;
    border-width: ${props => props.theme.border};
    transition: ${props => props.theme.animation_time};
    ${props =>
      props.secondary === 1
        ? css`
            color: ${props.theme.secondary};
            border-color: ${props.theme.secondary_hover};
          `
        : css`
            color: ${props.theme.primary};
            border-color: ${props.theme.primary_hover};
          `}

    &:focus {
      ${props =>
        props.secondary === 1
          ? css`
              border-color: ${props.theme.secondary};
            `
          : css`
              border-color: ${props.theme.primary};
            `}
    }
  }
`;

export const Label = styled.label``;
