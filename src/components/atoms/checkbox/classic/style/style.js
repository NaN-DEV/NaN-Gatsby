import styled from 'styled-components';

export const Box = styled.div`
  flex: 100%;
  width: 100%;
  height: auto;
  display: flex;
  cursor: pointer;
  padding: 1.5rem 0;
  align-items: center;
`;

export const CheckBox = styled.input`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  font-size: 1.5rem;
  position: relative;
  border-radius: 3px;
  font-weight: normal;
  -webkit-appearance: none;
  padding: ${props => props.theme.break};
  color: ${props => props.theme.secondary};
  border: 1px solid ${props => props.theme.secondary};
  font-family: ${props => props.theme.font_secondary};

  &::placeholder {
    opacity: 1;
    font-weight: normal;
    color: ${props => props.theme.primary};
    transition: ${props => props.theme.animation};
  }
  &:focus {
    outline: none;

    &::placeholder {
      opacity: 0;
    }
  }
  &:checked {
    &:after {
      content: '';
      top: 0.75rem;
      left: 0.75rem;
      width: 1.5rem;
      height: 1.5rem;
      display: block;
      position: absolute;
      border-radius: 3px;
      background-color: ${props => props.theme.secondary};
    }
  }
`;

export const Label = styled.label`
  width: 100%;
  display: inline-block;

  cursor: pointer;
  font-weight: normal;
  font-size: 1.2rem;
  border-radius: 3px;
  align-items: center;
  padding: 0 0 0 1.5rem;
  -webkit-appearance: none;
  color: ${props => props.theme.secondary};
  a {
    color: ${props => props.theme.secondary} !important;
  }
  &:focus {
    outline: none;
  }
`;
