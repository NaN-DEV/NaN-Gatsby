import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: revert;
  position: relative;
  padding-top: ${props => props.theme.settings.breakFat};

  .live {
    margin-right: auto;
    margin-top: ${props => props.theme.settings.break};
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_mobile}px`}) {
    .live {
      margin-top: 0;
      margin-right: 0;
      margin-left: auto;
    }
  }
`;

export const Title = styled.h1`
  width: 100%;
  display: block;
  font-size: 2rem;
  text-align: left;
  line-height: 4.2rem;
  text-transform: uppercase;
  padding-right: ${props => props.theme.settings.breakFat};

  @media (min-width: ${props => `${props.theme.settings.breakpoint_mobile}px`}) {
    width: auto;
  }

  @media (min-width: ${props => `${props.theme.settings.breakpoint_tablet}px`}) {
    font-size: 3rem;
  }
`;

export const Image = styled(BackgroundImage)`
  width: 100%;
  height: 30rem;
  display: block;
  filter: grayscale(100%);
  background-position: top center !important;
  margin-top: ${props => props.theme.settings.breakFat};

  @media (min-width: ${props => `${props.theme.settings.breakpoint_desktop}px`}) {
    height: 50rem;
  }
`;
