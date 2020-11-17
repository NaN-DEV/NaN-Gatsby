import styled, { css } from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  padding: 6rem 0;
  flex-wrap: wrap;
  min-height: ${props => (props.big ? '50vh' : 'auto')};
  position: relative;
  flex-direction: column;
  justify-content: center;
  ${props => {
    switch (props.color) {
      case 'secondary':
        return css`
          color: ${props.theme.primary};
          background-color: ${props.theme.secondary};
        `;
      case 'tertiary_1':
        return css`
          color: ${props.theme.primary};
          background-color: ${props.theme.tertiary_1};
        `;
      case 'tertiary_2':
        return css`
          color: ${props.theme.primary};
          background-color: ${props.theme.tertiary_2};
        `;
      case 'tertiary_3':
        return css`
          color: ${props.theme.primary};
          background-color: ${props.theme.tertiary_3};
        `;
      case 'tertiary_4':
        return css`
          color: ${props.theme.primary};
          background-color: ${props.theme.tertiary_4};
        `;
      default:
        return css`
          color: ${props.theme.secondary};
          background-color: ${props.theme.primary};
        `;
    }
  }}
`;

export const LeftBox = styled.div`
  flex: 100%;
  width: 100%;
  position: relative;
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    flex: 25rem;
    width: 25rem;
    text-align: left;
  }
`;
export const RightBox = styled.div`
  flex: 100%;
  width: 100%;
  position: relative;
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    text-align: left;
    flex: calc(100% - 25rem);
    width: calc(100% - 25rem);
  }
`;

export const Title = styled.h1`
  flex: 100%;
  width: 100%;
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
  padding-bottom: ${props => props.theme.break};
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    text-align: left;
  }
`;

export const Description = styled.p`
  display: block;

  text-align: center;
  position: relative;
  font-weight: normal;
  padding-right: ${props => props.theme.break};
  font-family: ${props => props.theme.font_primary};
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    font-size: 3rem;
    text-align: left;
  }
`;

export const BoxOptions = styled.div`
  flex: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 9rem;
  position: relative;
  &::after {
    top: 3rem;
    content: '';
    width: 30vh;
    opacity: 0.3;
    height: 0.1rem;
    display: block;
    position: absolute;
    left: calc(50% - 15vh);
    background-color: black;
  }
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    margin-left: 25rem;
    flex: calc(100% - 25rem);
    width: calc(100% - 25rem);
  }
`;

export const ElementOptions = styled.div`
  flex: 100%;
  width: 100%;
  display: flex;
  padding: 3rem 0;
  flex-wrap: wrap;
  justify-content: center;
  .icon {
    display: flex;
    justify-content: center;
    svg {
      height: 25rem;
    }
  }

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    width: 33.3333%;
    flex: 33.3333%;
    padding: 0 0;
    &:nth-child(0n + 1) {
      justify-content: flex-start;
    }
    &:nth-child(0n + 2) {
      justify-content: center;
    }
    &:nth-child(0n + 3) {
      justify-content: flex-end;
    }
  }
`;

export const BoxElementOptions = styled.div`
  position: relative;
  flex-direction: column;
  justify-content: center;
`;

export const DescriptionOptionsIcon = styled.div`
  width: 100%;
  max-width: 250px;
  font-size: 2.4rem;
  padding: 1.5rem 0;
  text-align: center;
  text-transform: uppercase;
`;
