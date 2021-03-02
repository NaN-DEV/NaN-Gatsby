import styled from 'styled-components';
import { Link } from 'gatsby';

const Article = styled(Link)`
  width: 100%;
  height: 30rem;
  display: flex;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  position: relative;
  align-items: center;
  justify-content: center;
  text-transform: lowercase;
  padding: ${props => props.theme.settings.breakBig};
  color: ${props => props.theme.settings.colorTextActive};
  background-color: ${props => props.theme.settings.colorBackgroundLight};

  &:hover {
    color: ${props => props.theme.settings.colorText};
    background-color: ${props => props.theme.settings.colorBackgroundDisactive};
  }
`;

export default Article;
