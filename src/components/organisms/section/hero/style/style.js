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

export const Title = styled.p`
  flex: 100%;
  width: 100%;
  font-size: 2.4rem;
  text-align: center;
  padding-bottom: ${props => props.theme.break};
  font-family: ${props => props.theme.font_primary};
      ${props =>
        props.joke
          ? css`
              font-weight: normal;
            `
          : css`
              font-weight: bold;
            `}
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    font-size: 3rem;
    ${props =>
      props.joke
        ? css``
        : css`
            flex: 25rem;
            max-width: 25rem;
            text-align: left;
          `}
  }
`;

export const Joke = styled.p`
  display: block;
  font-size: 1.8rem;
  text-align: center;
  position: relative;
  font-weight: normal;
`;

export const Description = styled.p`
  flex: 100%;
  width: 100%;
  display: block;
  font-size: 1.8rem;
  text-align: center;
  position: relative;
  font-weight: normal;
  padding-right: ${props => props.theme.break};
  font-family: ${props => props.theme.font_primary};
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    ${props =>
      props.half &&
      css`
        text-align: left;
        flex: calc(25rem - 100%);
      `}
  }
`;
