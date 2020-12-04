import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

export const Section = styled.section`
  width: 100%;
  height: 100%;
  overflow: revert;
  position: relative;
  .row {
    padding-bottom: 0;
  }
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    padding-bottom: 6rem;
  }
`;

export const Left = styled.div`
  display: none;
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    top: -15rem;
    width: 25rem;
    display: block;
    position: relative;
  }
`;
export const Title = styled.p`
  display: none;
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    top: 0rem;
    display: block;
    font-size: 3rem;
    font-weight: bold;
    position: relative;
    padding-right: ${props => props.theme.break};
  }
`;

export const FaceExpert = styled(BackgroundImage)`
  display: none;
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    z-index: 100;
    height: 30rem;
    display: block;
    position: relative;
    margin-bottom: 3rem;
    width: calc(25rem - 3rem);
    margin-right: ${props => props.theme.break};
    background-color: ${props => props.theme.primary};
    border: solid ${props => props.theme.border} ${props => props.theme.secondary};
  }
`;

export const BoxData = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  min-height: 15rem;
  position: relative;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Right = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  justify-content: center;

  .buttonPortfolio {
    margin: ${props => props.theme.border} auto 0 auto;
  }

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    width: calc(100% - 25rem);
    justify-content: flex-start;

    .buttonPortfolio {
      margin: 0 ${props => props.theme.border} auto auto;
    }
  }
`;

export const NameExpert = styled.p`
  width: 100%;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  padding-right: ${props => props.theme.break};
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    width: auto;
    text-align: center;
  }
`;

export const Description = styled.p`
  width: 100%;
  display: block;
  text-align: center;
  padding-bottom: 3rem;
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    font-size: 3rem;
    text-align: left;
    padding-top: 3rem;
  }
`;
