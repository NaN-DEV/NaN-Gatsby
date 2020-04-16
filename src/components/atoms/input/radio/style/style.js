import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  height: 60px;
  max-width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
`;

export const Label = styled.label`
  color: #fff;
  width: 33px;
  height: 30px;
  display: flex;
  line-height: 1;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  transition: ${props => props.theme.animation_time};
  ${props =>
    props.secondary === 1
      ? css`
          color: ${props.theme.secondary};
          border-color: ${props.theme.secondary};
          background-color: ${props.theme.primary};
        `
      : css`
          color: ${props.theme.primary};
          border-color: ${props.theme.secondary};
          background-color: ${props.theme.secondary};
        `}
  border: ${props => props.theme.border} solid;
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    width: 63px;
    height: 60px;
    font-size: 2.4rem;
      &:hover{
      ${props =>
        props.secondary === 1
          ? css`
              color: ${props.theme.primary};
              border-color: ${props.theme.secondary};
              background-color: ${props.theme.primary_hover};
            `
          : css`
              color: ${props.theme.primary};
              border-color: ${props.theme.secondary};
              background-color: ${props.theme.primary_hover};
            `}
  }
  }
`;

export const InputRadioBox = styled.div`
  position: relative;
  overflow: hidden;
  height: 30px;
  display: flex;

  input:checked + label {
    width: 30px;
    cursor: default;
    ${props =>
      props.secondary === 1
        ? css`
            color: ${props.theme.primary};
            border-color: ${props.theme.secondary};
            background-color: ${props.theme.secondary};
          `
        : css`
            color: ${props.theme.secondary};
            border-color: ${props.theme.secondary};
            background-color: ${props.theme.primary};
          `}
  }
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    input:checked + label {
      width: 60px;
    }
    height: 60px;
  }
`;

export const Input = styled.input`
  display: none;
`;
