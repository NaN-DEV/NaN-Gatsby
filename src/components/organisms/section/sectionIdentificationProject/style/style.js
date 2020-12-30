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

export const Title = styled.p`
  display: block;
  font-size: 3rem;
  font-weight: bold;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  padding-right: ${props => props.theme.break};
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    text-align: left;
  }
`;

export const Box = styled.div`
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

    .buttonLive {
      margin-left: auto;
      margin-right: 0.3rem;
    }
  }
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
