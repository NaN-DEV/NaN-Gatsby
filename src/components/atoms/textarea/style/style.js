import styled, { css } from 'styled-components';

export const BoxTextarea = styled.div`
  flex: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  position: relative;
  padding: ${props => props.theme.break} 0;
`;

export const Label = styled.label`
  flex: 100%;
  max-width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 0.6rem;
  ${props => {
    switch (props.color) {
      case 'secondary':
        return css`
          color: ${props.theme.secondary};
          a {
            color: ${props.theme.tertiary_2};
            &:hover {
              color: ${props.theme.secondary};
            }
          }
        `;
      case 'primary':
        return css`
          color: ${props.theme.primary};
        `;
      default:
        return css`
          color: ${props.theme.secondary};
        `;
    }
  }}
`;

export const Textarea = styled.textarea`
  flex: 100%;
  height: 15rem;
  max-width: 100%;
  background-color: transparent;
  padding: ${props => props.theme.break};
  border-radius: ${props => props.theme.border};
  font-family: ${props => props.theme.font_primary};

  ${props => {
    switch (props.color) {
      case 'secondary':
        return css`
          color: ${props.theme.secondary};
          border: 1px solid ${props.theme.tertiary_3};
          box-shadow: 3px 2px 0px ${props.theme.tertiary_3};
          &::placeholder {
            color: 3px 2px 0px ${props.theme.tertiary_3};
          }
          &:focus {
            border: 1px solid ${props.theme.secondary};
            box-shadow: 3px 2px 0px ${props.theme.secondary};
          }
        `;
      case 'primary':
        return css`
          color: ${props.theme.primary};
          border: 1px solid ${props.theme.tertiary_3};
          box-shadow: 3px 2px 0px ${props.theme.tertiary_3};
          &::placeholder {
            color: 3px 2px 0px ${props.theme.tertiary_3};
          }
          &:focus {
            border: 1px solid ${props.theme.primary};
            box-shadow: 3px 2px 0px ${props.theme.primary};
          }
        `;
      default:
        return css`
          color: ${props.theme.secondary};
          border: 1px solid ${props.theme.tertiary_3};
          box-shadow: 3px 2px 0px ${props.theme.tertiary_3};
          &::placeholder {
            color: 3px 2px 0px ${props.theme.tertiary_3};
          }
          &:focus {
            border: 1px solid ${props.theme.secondary};
            box-shadow: 3px 2px 0px ${props.theme.secondary};
          }
        `;
    }
  }}
`;
