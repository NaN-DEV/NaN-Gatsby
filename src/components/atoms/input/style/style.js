import styled, { css } from 'styled-components';

export const BoxInput = styled.div`
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
  padding-bottom: 0.3rem;
  ${props => {
    switch (props.color) {
      case 'secondary':
        return css`
          color: ${props.theme.secondary};
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

export const Input = styled.input`
 ${props => {
   switch (props.type) {
     case 'search':
       return css`
         flex: 10rem;
         max-width: 10rem;
       `;
     default:
       return css`
         flex: 100%;
         max-width: 100%;
       `;
   }
 }}
 @media (min-width: ${props => `${props.theme.breakpoint_mobile}px`}) {
 ${props => {
   switch (props.type) {
     case 'search':
       return css`
         flex: 30rem;
         max-width: 30rem;
       `;
     default:
       return css`
         flex: 100%;
         max-width: 100%;
       `;
   }
 }}
  }
 
  height: 3.8rem;
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
