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
  top: 0;
  display: block;
  font-size: 3rem;
  font-weight: bold;
  position: relative;
  text-align: center;
  padding-right: ${props => props.theme.break};
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    text-align: left;
  }
`;

export const Brand = styled(BackgroundImage)`
  display: none;
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    top: 0;
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

export const Right = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  justify-content: center;

  .buttonLive {
    margin: 0 auto;
  }
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    justify-content: left;
    width: calc(100% - 25rem);

    .buttonLive {
      margin-left: auto;
      margin-right: 0.3rem;
    }
  }
`;

export const ProjectTitle = styled.p`
  font-size: 3rem;
  font-weight: bold;
  padding-right: ${props => props.theme.break};
`;

export const BigImage = styled(BackgroundImage)`
  width: 100%;
  height: 30rem;
  display: block;
  margin-top: ${props => props.theme.break};
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    height: 50rem;
  }
`;