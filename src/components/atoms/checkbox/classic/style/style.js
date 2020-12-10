import { Field } from 'formik';
import styled from 'styled-components';

export const Box = styled.div`
  flex: 100%;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  padding: 1.5rem 0;
  align-items: center;
`;

export const CheckBox = styled(Field)`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  font-size: 1.5rem;
  position: relative;
  border-radius: 3px;
  font-weight: normal;
  -webkit-appearance: none;
  padding: ${props => props.settings.break};
  color: ${props => props.settings.secondary};
  border: 1px solid ${props => props.settings.secondary};
  font-family: ${props => props.settings.font_secondary};

  &::placeholder {
    opacity: 1;
    font-weight: normal;
    color: ${props => props.settings.primary};
    transition: ${props => props.settings.animation};
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
      background-color: ${props => props.settings.secondary};
    }
  }
`;

export const Label = styled.label`
  width: calc(100% - 4rem);
  display: inline-block;

  cursor: pointer;
  font-weight: normal;
  font-size: 1.2rem;
  border-radius: 3px;
  align-items: center;
  padding: 0 0 0 1.5rem;
  -webkit-appearance: none;
  color: ${props => props.settings.secondary};
  a {
    color: ${props => props.settings.secondary} !important;
  }
  &:focus {
    outline: none;
  }
`;

export const Error = styled.div`
  flex: 100%;
  display: block;
  max-width: 100%;
  min-height: 3rem;
  font-weight: bold;
  padding-top: 0.6rem;
  color: ${props => props.settings.danger};
`;
