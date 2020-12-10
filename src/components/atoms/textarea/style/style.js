import { Field } from 'formik';
import styled, { css } from 'styled-components';

export const Box = styled.div`
  flex: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  position: relative;
`;

export const Textarea = styled(Field)`
  flex: 100%;
  height: 15rem;
  max-width: 100%;
  background-color: transparent;
  padding: ${props => props.settings.break};
  border-radius: ${props => props.settings.border};

  ${props => {
    switch (props.theme) {
      case 'primary':
        return css`
          color: ${props.settings.primary};
          border: 1px solid ${props.settings.tertiary_3};
          box-shadow: 3px 2px 0px ${props.settings.tertiary_3};
          &::placeholder {
            color: 3px 2px 0px ${props.settings.tertiary_3};
          }
          &:focus {
            border: 1px solid ${props.settings.primary};
            box-shadow: 3px 2px 0px ${props.settings.primary};
          }
        `;
      default:
        return css`
          color: ${props.settings.secondary};
          border: 1px solid ${props.settings.tertiary_3};
          box-shadow: 3px 2px 0px ${props.settings.tertiary_3};
          &::placeholder {
            color: 3px 2px 0px ${props.settings.tertiary_3};
          }
          &:focus {
            border: 1px solid ${props.settings.secondary};
            box-shadow: 3px 2px 0px ${props.settings.secondary};
          }
        `;
    }
  }}
`;

export const Label = styled.label`
  flex: 100%;
  max-width: 100%;
  font-weight: bold;
  padding-bottom: 0.3rem;
  ${props => {
    switch (props.theme) {
      case 'primary':
        return css`
          color: ${props.settings.primary};
        `;
      default:
        return css`
          color: ${props.settings.secondary};
        `;
    }
  }}
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
