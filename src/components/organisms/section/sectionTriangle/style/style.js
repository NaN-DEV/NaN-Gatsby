import GatsbyImage from 'gatsby-image';
import styled, { css } from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

export const Article = styled.article`
  padding: 0;
  flex: 100%;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  min-height: calc(100vh - 7rem);

  ${props => {
    switch (props.colorStyle) {
      case 'secondary':
        return css`
          color: ${props.theme.primary};
          background-color: ${props.theme.secondary};
          a {
            color: ${props.theme.primary};
          }
          svg {
            fill: ${props.theme.primary};
          }
        `;
      case 'primary':
        return css`
          color: ${props.theme.secondary};
          background-color: ${props.theme.primary};
          a {
            color: ${props.theme.secondary};
          }
          svg {
            fill: ${props.theme.secondary};
          }
        `;
      case 'tertiary':
        return css`
          color: ${props.theme.primary};
          background-color: ${props.theme.tertiary_1};
          a {
            color: ${props.theme.primary};
          }
          svg {
            fill: ${props.theme.primary};
          }
        `;
      default:
        return css`
          color: ${props.theme.primary};
          background-color: ${props.theme.secondary};
          svg {
            fill: ${props.theme.primary};
          }
        `;
    }
  }}

  .link {
    width: 100%;
    height: auto;
    justify-content: flex-start;
  }

  .row {
    height: 100%;
    flex-direction: column;

    .triangle {
      svg {
        margin-right: 12rem;
        opacity: 1 !important;
      }
    }

    .buttonMore {
      position: absolute;
      right: ${props => props.theme.break};
      bottom: ${props => props.theme.break};
    }
  }

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    ${props => {
      switch (props.colorStyle) {
        case 'secondary':
          return css`
            flex: 100%;
            width: 100%;
          `;
        default:
          return css`
            flex: 50%;
            width: 50%;
          `;
      }
    }}
    ${props => {
      switch (props.articlePosition) {
        case 'left':
          return css`
            .row {
              margin: 0 0;
              flex-direction: column;
              justify-content: flex-start;
              max-width: ${props.theme.max_width_half};

              .box {
                justify-content: flex-start !important;
              }
            }
          `;
        case 'right':
          return css`
            .row {
              margin: 0 0;
              justify-content: flex-end;
              flex-direction: column-reverse;
              max-width: ${props.theme.max_width_half};

              .box {
                justify-content: flex-end !important;
              }

              .image {
                top: 0;
                right: 0;
                left: auto !important;
                bottom: auto !important;
                transform: rotate(-180deg);
              }

              .triangle {
                top: 0;
                right: 0;
                left: auto !important;
                bottom: auto !important;
                transform: rotate(-180deg);
              }
            }
          `;
        default:
          return css`
            justify-content: center;
          `;
      }
    }}
  }
`;

export const Box = styled.div`
  height: 50%;
  display: flex;
  max-width: 100%;
  flex: 100 1 auto;
  min-height: 20rem;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;

  .triangle {
    left: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: auto;
    display: block;
    max-width: 60rem;
    position: absolute;

    svg {
      height: auto;
      max-width: 60rem;
    }
  }
`;

export const Title = styled.h1`
  flex: 100%;
  opacity: 1;
  display: block;
  max-width: 100%;
  font-size: 3rem;
  cursor: pointer;
  text-align: left;
  transition: ${props => props.theme.animation};
  &:hover {
    opacity: 0.6;
  }
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    max-width: calc(100% - 20rem);
  }
`;

export const Category = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  a {
    font-size: 1.8rem;
    font-weight: normal;
  }
`;

export const Image = styled(GatsbyImage)`
  z-index: 0;
  left: 0rem;
  bottom: 0rem;
  width: 25rem;
  height: 25rem;
  display: block;
  position: absolute !important;

  @media (min-width: ${props => `${props.theme.breakpoint_mobile}px`}) {
    width: 40rem;
    height: 40rem;
  }

  @media (min-width: ${props => `${props.theme.breakpoint_tablet}px`}) {
    width: 50rem;
    height: 50rem;
  }

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    width: 60rem;
    height: 60rem;
  }
`;
