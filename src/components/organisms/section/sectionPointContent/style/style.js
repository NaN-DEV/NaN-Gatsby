import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

export const Section = styled.section`
  padding: 0;
  width: 100%;
  display: block;
  position: relative;
  color: ${props => props.theme.secondary};
  background-color: ${props => props.theme.primary};

  .row {
    padding: 0 1.5rem;
  }
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    padding: 3rem 0;
  }
`;

export const Box = styled.div`
  flex: 100%;
  max-width: 100%;
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  .row {
    padding: 1.5rem 0;
  }

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    .row {
      padding: 6rem 0;
    }
  }
`;

export const Number = styled.div`
  flex: 100%;
  display: block;
  max-width: 100%;
  position: relative;
  text-align: center;
  padding-bottom: 1.5rem;

  .box {
    display: flex;
    min-height: 25rem;
    align-items: center;
  }

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    flex: 30rem;
    max-width: 30rem;

    .box {
      min-height: 30rem;
    }
  }
`;

export const Point = styled.div`
  flex: 100%;
  width: 100%;
  opacity: 0.2;
  display: block;
  line-height: 1;
  font-size: 30rem;
  font-weight: bold;
  position: absolute;
  text-align: center;

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    font-size: 40rem;
  }
`;

export const Title = styled.h1`
  flex: 100%;
  width: 100%;
  display: block;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.3rem;
`;

export const Description = styled.div`
  flex: 100%;
  width: 100%;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  font-size: 2rem;
  text-align: center;

  p {
    flex: 100%;
    display: block;
    max-width: 100%;
    position: relative;
  }

  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    padding: 0 3rem;
    font-size: 3rem;
    text-align: left;
    min-height: 30rem;
    max-width: calc(100% - 30rem);
  }
`;

export const Line = styled.div`
  width: 50%;
  height: 1px;
  display: block;
  margin: 3rem 25%;
  background-color: #fff;
`;

export const Image = styled(GatsbyImage)`
  width: 100%;
  opacity: 0.6;
  display: block;
  margin-top: 3rem;
  filter: grayscale(100%);
`;
