import styled, { css } from 'styled-components';

export const BoxInput = styled.div`
  flex: 100%;
  max-width: 100%;
  min-height: 4rem;
  @media (min-width: ${props => props.theme.breakpoint_tablet}) {
    max-width: ${props => (props.width ? `${props.width}rem` : `100%`)};
  }
`;

export const Label = styled.label``;

export const Input = styled.input`
  width: 100%;
  height: 3.7rem;
  font-size: 1.5rem;
  padding: ${props => props.theme.break};
  background-color: transparent;
  border: 0.1rem solid;
  border-radius: 0.3rem;
  &::placeholder {
    font-weight: normal;
  }
  ${props =>
    props.secondary
      ? css`
          color: ${props.theme.secondary};
          border-color: ${props.theme.secondary};
          box-shadow: ${props.theme.tertiary_2} ${props.theme.border} ${props.theme.border} 0;

          &::placeholder {
            color: ${props.theme.tertiary_3};
          }
        `
      : css`
          color: ${props.theme.primary};
          border-color: ${props.theme.primary};
          box-shadow: ${props.theme.tertiary_3} ${props.theme.border} ${props.theme.border} 0;

          &::placeholder {
            color: ${props.theme.tertiary_2};
          }
        `}

  &:focus {
    ${props =>
      props.secondary
        ? css`
            border-color: ${props.theme.tertiary_2};
          `
        : css`
            border-color: ${props.theme.tertiary_3};
          `}
  }
`;
