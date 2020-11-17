import styled from 'styled-components';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

export const Article = styled.article`
  width: 100%;
  height: 100%;
  padding: 3rem 0;
  position: relative;
`;

export const LinkArticle = styled(Link)`
  padding: 0;
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
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
  font-size: 3rem;
  font-weight: bold;
`;
