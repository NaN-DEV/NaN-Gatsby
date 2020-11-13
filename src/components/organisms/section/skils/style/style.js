import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  padding: 1.5rem 0;
  position: relative;
  align-items: center;
  background-color: ${props => (props.dark ? props.theme.tertiary_1 : props.theme.tertiary_4)};
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    padding: 6rem 0;
    min-height: 100vh;
  }
`;
export const BoxTitle = styled.div`
  width: 100%;
  display: block;
  position: relative;

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    order: 0;
    width: 25rem;
  }
`;
export const Title = styled.h1`
  top: 0;
  width: 100%;
  font-size: 3rem;
  text-align: center;
  position: relative;
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    text-align: left;
  }
`;

export const BoxLeft = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    width: calc(40% - 12.5rem);
    order: ${props => (props.order ? '2' : '1')};
  }
`;

export const Score = styled.p`
  width: 100%;
  line-height: 1;
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  text-overflow: ellipsis;

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    font-size: 35rem;
    letter-spacing: -3rem;
    font-family: ${props => props.theme.font_tertiary};
  }
`;
export const Unit = styled.span`
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 0;
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    font-size: 5rem;
  }
`;

export const BoxRight = styled.div`
  width: 100%;
  display: flex;
  padding-top: 3rem;
  text-align: center;
  position: relative;
  align-items: center;

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    padding-top: 0;
    font-size: 3rem;
    text-align: left;
    width: calc(60% - 12.5rem);
    order: ${props => (props.order ? '1' : '2')};
  }
`;

export const Description = styled.p`
  width: 100%;
  display: block;
`;
