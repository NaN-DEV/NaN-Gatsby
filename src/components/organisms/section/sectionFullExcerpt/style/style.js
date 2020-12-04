import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  padding: 3rem 0;
  flex-wrap: wrap;
  position: relative;
  flex-direction: column;
  justify-content: center;
  color: ${props => props.theme.primary};
  background-color: ${props => props.theme.secondary};
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    padding: 6rem 0;
  }
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
  font-weight: bold;
  text-align: center;
  padding-bottom: ${props => props.theme.break};
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    text-align: left;
  }
`;

export const Description = styled.p`
  display: block;
  text-align: center;
  position: relative;
  padding-right: ${props => props.theme.break};
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    font-size: 3rem;
    text-align: left;
  }
`;
