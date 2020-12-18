import GatsbyImage from 'gatsby-image';
import styled, { css } from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

export const Article = styled.article`
  padding: 0;
  flex: 100%;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
  min-height: calc(100vh - 7rem);

  ${props => {
    switch (props.colorStyle) {
      case 'secondary':
        return css`
          color: ${props.settings.primary};
          background-color: ${props.settings.secondary};
          a {
            color: ${props.settings.primary};
          }
          svg {
            fill: ${props.settings.primary};
          }
        `;
      case 'primary':
        return css`
          color: ${props.settings.secondary};
          background-color: ${props.settings.primary};
          a {
            color: ${props.settings.secondary};
          }
          svg {
            fill: ${props.settings.secondary};
          }
        `;
      case 'tertiary':
        return css`
          color: ${props.settings.primary};
          background-color: ${props.settings.tertiary_1};
          a {
            color: ${props.settings.primary};
          }
          svg {
            fill: ${props.settings.primary};
          }
        `;
      default:
        return css`
          color: ${props.settings.primary};
          background-color: ${props.settings.secondary};
          svg {
            fill: ${props.settings.primary};
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
      z-index: 99;
      position: absolute;
      right: ${props => props.settings.break};
      bottom: ${props => props.settings.break};
    }
  }

  @media (min-width: ${props => `${props.settings.breakpoint_desktop}px`}) {
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
      console.log(props.articlePosition);
      switch (props.articlePosition) {
        case 'left':
          return css`
            justify-content: flex-start;
            .row {
              margin: 0 0;
              flex-direction: column;
              max-width: ${props.settings.max_width_half};

              .box {
                justify-content: flex-start !important;
              }
            }
          `;
        case 'right':
          return css`
            justify-content: flex-end;
            .row {
              margin: 0 0;

              flex-direction: column-reverse;
              max-width: ${props.settings.max_width_half};

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
  transition: ${props => props.settings.animation};
  &:hover {
    opacity: 0.6;
  }
  @media (min-width: ${props => `${props.settings.breakpoint_desktop}px`}) {
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

export const BoxImage = styled.div`
  z-index: 0;
  left: 0rem;
  bottom: 0rem;
  width: 60rem;
  height: auto;
  max-width: 100%;
  position: absolute;
  padding-right: 12rem;
`;

export const Image = styled(GatsbyImage)`
  width: 60rem;
  height: auto;
  display: block;
  max-width: 100%;
`;
