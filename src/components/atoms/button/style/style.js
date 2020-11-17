import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const styleAllButton = css`
  display: flex;
  height: 4.2rem;
  padding: 0 3rem;
  font-weight: bold;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: ${props => props.theme.border};
  font-family: ${props => props.theme.font_secondary};
`;

const buttonColor = css`
  ${props => {
    switch (props.color) {
      case 'secondary':
        return css`
          color: ${props.theme.primary} !important;
          background-color: ${props.theme.secondary} !important;
          box-shadow: rgba(255, 255, 255, 0.3) ${props.theme.border} ${props.theme.border} 0 !important;
          .triangle {
            svg {
              fill: ${props.theme.secondary};
            }
          }
          .arrow {
            svg {
              fill: ${props.theme.primary};
            }
          }

          &:hover {
            color: ${props.theme.primary} !important;
            background-color: ${props.theme.tertiary_1} !important;
            .triangle {
              svg {
                fill: ${props.theme.tertiary_1};
              }
            }
          }
        `;
      case 'tertiary_1':
        return css`
          color: ${props.theme.secondary} !important;
          background-color: ${props.theme.tertiary_1} !important;
          box-shadow: ${props.theme.tertiary_2} ${props.theme.border} ${props.theme.border} 0 !important;
          .triangle {
            svg {
              fill: ${props.theme.tertiary_1};
            }
          }
          .arrow {
            svg {
              fill: ${props.theme.primary};
            }
          }
          &:hover {
            color: ${props.theme.primary} !important;
            background-color: ${props.theme.secondary} !important;
            .triangle {
              svg {
                fill: ${props.theme.secondary};
              }
            }
          }
        `;
      case 'tertiary_2':
        return css`
          color: ${props.theme.secondary} !important;
          background-color: ${props.theme.tertiary_1} !important;
          box-shadow: ${props.theme.tertiary_2} ${props.theme.border} ${props.theme.border} 0 !important;
          .triangle {
            svg {
              fill: ${props.theme.tertiary_2};
            }
          }
          .arrow {
            svg {
              fill: ${props.theme.primary};
            }
          }
          &:hover {
            color: ${props.theme.primary} !important;
            background-color: ${props.theme.secondary} !important;
            .triangle {
              svg {
                fill: ${props.theme.secondary};
              }
            }
          }
        `;
      case 'tertiary_3':
        return css`
          color: ${props.theme.primary} !important;
          background-color: ${props.theme.secondary} !important;
          box-shadow: ${props.theme.tertiary_2} ${props.theme.border} ${props.theme.border} 0 !important;
          .triangle {
            svg {
              fill: ${props.theme.tertiary_2};
            }
          }
          .arrow {
            svg {
              fill: ${props.theme.primary};
            }
          }
          &:hover {
            color: ${props.theme.secondary} !important;
            background-color: ${props.theme.tertiary_1} !important;
            .triangle {
              svg {
                fill: ${props.theme.tertiary_1};
              }
            }
          }
        `;
      case 'tertiary_4':
        return css`
          color: ${props.theme.primary} !important;
          background-color: ${props.theme.secondary} !important;
          box-shadow: ${props.theme.tertiary_2} ${props.theme.border} ${props.theme.border} 0 !important;
          .triangle {
            svg {
              fill: ${props.theme.tertiary_3};
            }
          }
          .arrow {
            svg {
              fill: ${props.theme.primary};
            }
          }
          &:hover {
            color: ${props.theme.secondary} !important;
            background-color: ${props.theme.tertiary_1} !important;
            .triangle {
              svg {
                fill: ${props.theme.tertiary_1};
              }
            }
          }
        `;
      default:
        return css`
          color: ${props.theme.secondary} !important;
          background-color: ${props.theme.primary}!important;
          box-shadow: ${props.theme.tertiary_2} ${props.theme.border} ${props.theme.border} 0 !important;
          .triangle {
            svg {
              fill: ${props.theme.primary};
            }
          }
          .arrow {
            svg {
              fill: ${props.theme.secondary};
            }
          }
          &:hover {
            opacity: 0.9;
            .triangle {
              svg {
                opacity: 0.9;
              }
            }
          }
        `;
    }
  }};
`;

export const Button = styled.button`
  ${styleAllButton};
  ${buttonColor};
`;

export const ButtonLink = styled(Link)`
  ${styleAllButton};
  ${buttonColor};
`;

export const ButtonSubmit = styled.input`
  ${styleAllButton};
  ${buttonColor};
`;

export const ButtonLinkOut = styled.a`
  ${styleAllButton};
  ${buttonColor};
`;

export const ButtonTriangle = styled.button`
  ${buttonColor};
  display: flex;
  max-height: 4.2rem;
  position: relative;
  align-items: center;
  justify-content: center;

  ${props =>
    props.left &&
    css`
      .arrow {
        z-index: 1;
        display: block;
        margin-left: 0.9rem;
        position: relative;
        margin-bottom: 1rem;
        transform: rotate(90deg);
        svg {
          bottom: 0;
          display: block;
          max-width: 15rem;
          transition: ${props.theme.animation};
        }
      }
      .triangle {
        left: 0;
        z-index: 0;
        position: absolute;
        svg {
          bottom: 0;
          display: block;
          max-width: 15rem;
          transition: ${props.theme.animation};
        }
      }
    `}

  ${props =>
    props.right &&
    css`
      .arrow {
        z-index: 1;
        display: block;
        margin-right: 0.9rem;
        position: relative;
        margin-bottom: 1rem;
        transform: rotate(-90deg);
        svg {
          bottom: 0;
          display: block;
          max-width: 15rem;
          transition: ${props.theme.animation};
        }
      }
      .triangle {
        right: 0;
        z-index: 0;
        position: absolute;
        transform: scaleX(-1);
        svg {
          bottom: 0;
          display: block;
          max-width: 15rem;
          transition: ${props.theme.animation};
        }
      }
    `}
`;
