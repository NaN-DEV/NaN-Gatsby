import styled, { css } from 'styled-components';

export const Box = styled.div`
  flex: 100%;
  width: 100%;
  padding: 1.5rem 0;
  position: relative;

  @media (min-width: ${props => props.theme.breakpoint_mobile}) {
    flex: 30%;
    width: 30%;
    padding: 1.5rem;
  }
`;

export const Radio = styled.input`
  display: none;
  &:checked ~ label {
    cursor: no-drop;
    ${props => {
      switch (props.color) {
        case 'secondary':
          return css`
            color: ${props.theme.primary}!important;
            background-color: ${props.theme.secondary};

            svg {
              fill: ${props.theme.primary} !important;
            }
            &::after {
              background-color: ${props.theme.primary}!important;
            }
            &::before {
              border: 1px solid ${props.theme.primary}!important;
            }
          `;
        default:
          return css`
            color: ${props.theme.primary}!important;
            background-color: ${props.theme.secondary};

            svg {
              fill: ${props.theme.primary}!important;
            }
            &::after {
              background-color: ${props.theme.primary}!important;
            }
            &::before {
              border: 1px solid ${props.theme.primary}!important;
            }
          `;
      }
    }}
    &::after {
      transform: scale(1);
    }
  }
`;

export const Label = styled.label`
  flex: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  min-height: 150px;
  position: relative;
  border-radius: 3px;
  padding: 3rem 0.5rem;
  justify-content: center;
  transition: ${props => props.theme.animation};

  &::before {
    content: '';
    top: 0.6rem;
    width: 3rem;
    height: 3rem;
    right: 0.6rem;
    display: block;
    position: absolute;
    border-radius: 3px;
    background-color: transparent;
    transition: ${props => props.theme.animation};
  }

  &::after {
    content: '';
    width: 2rem;
    top: 1.1rem;
    height: 2rem;
    right: 1.1rem;
    display: block;
    border-radius: 3px;
    position: absolute;
    transform: scale(0);
    transition: ${props => props.theme.animation};
  }

  ${props => {
    switch (props.swith) {
      case 'active':
        return css`
          cursor: pointer;
        `;
      default:
        return css`
          cursor: no-drop;
          color: ${props.theme.tertiary_2} !important;
          border: 1px solid ${props.theme.tertiary_2}!important;
          box-shadow: 3px 3px 0px ${props.theme.tertiary_2}!important;
          svg {
            fill: ${props.theme.tertiary_2} !important;
          }
          &::after {
            background-color: ${props.theme.tertiary_2};
          }
          &::before {
            border: 1px solid ${props.theme.tertiary_2};
          }
          &:hover {
            border: 1px solid ${props.theme.tertiary_2}!important;
            box-shadow: 3px 3px 0px ${props.theme.tertiary_2}!important;
            &::after {
              background-color: ${props.theme.tertiary_2}!important;
            }
            &::before {
              border: 1px solid ${props.theme.tertiary_2}!important;
            }
          }
        `;
    }
  }}
  ${props => {
    switch (props.color) {
      case 'secondary':
        return css`
          color: ${props.theme.tertiary_3};
          background-color: ${props.theme.primary};
          border: 1px solid ${props.theme.tertiary_3};
          box-shadow: 3px 3px 0px ${props.theme.tertiary_3};
          svg {
            fill: ${props.theme.tertiary_3};
          }
          &::after {
            background-color: ${props.theme.tertiary_3};
          }
          &::before {
            border: 1px solid ${props.theme.tertiary_3};
          }
          &:hover {
            color: ${props.theme.secondary};
            border: 1px solid ${props.theme.secondary};
            box-shadow: 3px 3px 0px ${props.theme.secondary};
            svg {
              fill: ${props.theme.secondary};
            }
            &::after {
              background-color: ${props.theme.secondary};
            }
            &::before {
              border: 1px solid ${props.theme.secondary};
            }
          }
        `;

      default:
        return css`
          color: ${props.theme.tertiary_3};
          background-color: ${props.theme.primary};
          border: 1px solid ${props.theme.tertiary_3};
          box-shadow: 3px 3px 0px ${props.theme.tertiary_3};
          svg {
            fill: ${props.theme.secondary};
          }
          &::after {
            background-color: ${props.theme.tertiary_3};
          }
          &::before {
            border: 1px solid ${props.theme.tertiary_3};
          }
          &:hover {
            border: 1px solid ${props.theme.secondary};
            box-shadow: 3px 3px 0px ${props.theme.secondary};
            &::after {
              background-color: ${props.theme.secondary};
            }
            &::before {
              border: 1px solid ${props.theme.secondary};
            }
          }
        `;
    }
  }}



  .icon {
    margin: 1.5rem 0;
    width: 6rem !important;
    height: 6rem !important;
    transition: ${props => props.theme.animation};
  }
  svg {
    width: 6rem !important;
    height: 6rem !important;
    transition: ${props => props.theme.animation};
  }

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    min-height: 250px;
    .icon {
      width: 12rem !important;
      height: 12rem !important;
    }
    svg {
      width: 12rem !important;
      height: 12rem !important;
    }
  }
`;

export const Title = styled.p`
  flex: 100%;
  width: 100%;
  line-height: 1;
  height: 1.2rem;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  font-family: ${props => props.theme.font_secondary};
        ${props =>
          props.active
            ? css`
                color: ${props.theme.muted};
              `
            : css`
                color: ${props.theme.dark};
              `}

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    height: 2.4rem;
    font-size: 2.4rem;
  }
`;
