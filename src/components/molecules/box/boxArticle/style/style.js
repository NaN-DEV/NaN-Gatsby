import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

export const Article = styled.article`
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 3rem;

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
  font-size: 2.4rem;
  padding-top: 1.5rem;
  font-weight: normal;
`;
