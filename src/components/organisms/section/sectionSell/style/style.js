import styled, { css } from 'styled-components';

export const Section = styled.section`
  flex: 100%;
  width: 100%;
  position: relative;
  color: ${props => props.settings.secondary};
  background-color: ${props => props.settings.primary};
`;

export const Step = styled.div`
  z-index: 1;
  flex: 100%;
  padding: 3rem;
  display: flex;
  max-width: 100%;
  line-height: 1.4;
  min-height: 12rem;
  font-size: 2.4rem;
  position: relative;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: ${props => props.settings.secondary};

  &::before {
    color: ${props => props.settings.tertiary_6};
  }

  &::before {
    left: 0;
    width: 100%;
    z-index: -1;
    margin: auto 0;
    display: block;
    font-size: 18rem;
    line-height: 0.7;
    font-weight: bold;
    text-align: center;
    position: absolute;
    content: "${props => {
      return props.number;
    }}";
  }
  @media (min-width: ${props => `${props.settings.breakpoint_desktop}px`}) {
    flex: 25rem;
    max-width: 25rem;
    font-size: 2.4rem;
    min-height: 21rem;

    &::before {
      font-size: 30rem;
    }
  }
`;

export const Box = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  min-height: 30rem;
  align-items: center;
  padding: 3rem 1.5rem;

  button {
    width: 100%;
    display: block;
  }

  @media (min-width: ${props => `${props.settings.breakpoint_desktop}px`}) {
    flex: calc(100% - 250px);
    max-width: calc(100% - 250px);
  }
`;

export const BoxError = styled.p`
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${props => props.settings.danger};
  padding: 0.3rem 0.6rem 0;
`;

export const Half = styled.div`
  flex: 100%;
  height: 100%;
  max-width: 100%;
  display: relative;

  @media (min-width: ${props => `${props.settings.breakpoint_desktop}px`}) {
    flex: 50%;
    max-width: 50%;
    padding-right: 3rem;
  }

  ${props =>
    props.mascot
      ? css`
          display: none;
          @media (min-width: ${`${props.settings.breakpoint_desktop}px`}) {
            display: flex;
            overflow: hidden;
            position: relative;
            padding-left: 3rem;
            flex-direction: column;
            justify-content: center;
            border-left: 0.3rem solid #fff;

            .mascot {
              bottom: 0;
              left: -9rem;
              height: 21rem;
              display: block;
              position: absolute;
            }
          }
        `
      : null}
`;

export const Pkt = styled.p`
  text-align: left;
  font-weight: normal;
  font-size: 2.4rem;
`;
