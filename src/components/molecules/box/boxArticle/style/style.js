import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

export const Article = styled.article`
  width: 100%;
  height: 100%;
  padding: 0 0 3rem 0;
  position: relative;

  .linkArticle {
    padding: 0;
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
  }
`;

export const BoxImage = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Image = styled(BackgroundImage)`
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  display: block;
  position: absolute !important;
`;

export const Title = styled.p`
  padding-top: 0.3rem;
  font-weight: normal;
  @media (min-width: ${props => `${props.theme.breakpoint_desktop}px`}) {
    font-size: 2.4rem;
    padding-top: 1.5rem;
  }
`;
