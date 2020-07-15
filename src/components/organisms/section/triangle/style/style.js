import styled, { css } from 'styled-components';

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
/* COLOR SELECT */
${props =>
  props.primary &&
  css`
    a {
      color: ${props.theme.secondary};
      &:hover {
        color: ${props.theme.tertiary_3};
      }
    }
    color: ${props.theme.secondary};
    background-color: ${props.theme.primary};
  `}
${props =>
  props.tertiary &&
  css`
    a {
      color: ${props.theme.primary};
      &:hover {
        color: ${props.theme.tertiary_2};
      }
    }
    color: ${props.theme.primary};
    background-color: ${props.theme.tertiary_4};
  `}
${props =>
  props.secondary &&
  css`
    a {
      color: ${props.theme.primary};
      &:hover {
        color: ${props.theme.tertiary_2};
      }
    }
    color: ${props.theme.primary};
    background-color: ${props.theme.secondary};
  `}
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
  font-size: 30px;
  text-align: left;
  max-width: ${props => props.theme.max_width_half};
`;

export const Category = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  a {
    font-weight: normal;
  }
`;
