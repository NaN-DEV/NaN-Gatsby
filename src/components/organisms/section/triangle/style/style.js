import styled, { css } from 'styled-components';
import GatsbyImage from 'gatsby-image';

export const Section = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

export const Article = styled.article`
width: 100%;
min-height:100vh;

/* COLOR SELECT PRIMARY */
${props =>
  props.primary
    ? css`
        color: ${props.theme.secondary};
        background-color: ${props.theme.primary};
        a {
          color: ${props.theme.secondary};
          &:hover {
            color: ${props.theme.tertiary_3};
          }
        }
      `
    : null}

/* COLOR SELECT SECONDARY */
${props =>
  props.secondary
    ? css`
        color: ${props.theme.primary};
        background-color: ${props.theme.secondary};
        a {
          color: ${props.theme.primary};
          &:hover {
            color: ${props.theme.tertiary_2};
          }
        }
      `
    : null}

/* COLOR SELECT TERTIARY */
${props =>
  props.tertiary
    ? css`
        color: ${props.theme.primary};
        background-color: ${props.theme.tertiary_2};
        a {
          color: ${props.theme.primary};
          &:hover {
            color: ${props.theme.tertiary_4};
          }
        }
      `
    : null}

  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
     ${props =>
       props.half &&
       css`
         width: 50%;
       `}
  }
`;

export const Title = styled.h1`
  display: block;
  text-align: left;
  font-size: 1.5rem;
  margin-bottom: ${props => props.theme.break};
  max-width: ${props => props.theme.max_width_half};
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    font-size: 3rem;
  }
`;

export const Category = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  a {
    font-weight: normal;
  }
`;

const box = css`
  flex: 100%;
  display: flex;
  max-width: 100%;
  min-height: 25rem;
  flex-wrap: nowrap;
  position: relative;
  flex-direction: column;
  height: calc(50vh - 1.5rem);

  .top {
    top: 0;
    right: 0;
  }

  .bottom {
    left: 0;
    bottom: 0;
  }

  .triangle {
    z-index: 10;
    position: absolute;
  }
`;

export const BoxTop = styled.div`
  ${box}
  align-items:flex-start;
  justify-content: flex-start;
`;
export const BoxDown = styled.div`
  ${box}

  align-items:flex-start;
  justify-content: flex-end;
  .button {
    margin-left: auto;
    margin-right: 2px;
    margin-bottom: 2px;
  }
`;

export const Image = styled(GatsbyImage)`
  ${props =>
    props.top
      ? css`
          top: 0;
          right: 0;
          transform: rotate(180deg);
        `
      : css`
          left: 0;
          bottom: 0;
        `}

  z-index: 0;
  width: 100%;
  display: block;
  max-width: 60rem;
  position: absolute !important;
`;
