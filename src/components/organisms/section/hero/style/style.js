import styled, { css } from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: block;
  padding: 6rem 0;
  position: relative;
  ${props =>
    props.color === 'primary'
      ? css`
          color: ${props.theme.secondary};
          background-color: ${props.theme.primary};
        `
      : css`
          color: ${props.theme.primary};
          background-color: ${props.theme.secondary};
        `}
  .row {
    justify-content: center;
  }
`;

export const Title = styled.h1`
  flex: 100%;
  width: 100%;
  font-size: 3rem;
  text-align: center;
  font-weight: normal;
  padding-bottom: ${props => props.theme.break};
  font-family: ${props => props.theme.font_primary};
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    ${props =>
      props.half &&
      css`
        flex: 12rem;
        max-width: 12rem;
        text-align: left;
        font-weight: bold;
        font-size: 2.4rem;
      `}
  }
`;

export const Description = styled.p`
  flex: 100%;
  width: 100%;
  display: block;
  text-align: center;
  position: relative;
  font-weight: normal;
  font-family: ${props => props.theme.font_primary};
  @media (min-width: ${props => props.theme.breakpoint_desktop}) {
    ${props =>
      props.half &&
      css`
        text-align: left;
        font-size: 2.4rem;
        padding-left: 1.5rem;
        flex: calc(12rem - 100vw);
      `}
  }
`;
