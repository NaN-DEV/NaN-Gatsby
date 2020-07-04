import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const mainStyleIcon = css`
  display: block;
  position: relative;
  svg {
    display: block;
    fill: #fff;
    height: 30px;
  }
`;

export const DivIcon = styled.div`
  ${mainStyleIcon}
`;

export const LinkIcon = styled(Link)`
  ${mainStyleIcon}
`;
