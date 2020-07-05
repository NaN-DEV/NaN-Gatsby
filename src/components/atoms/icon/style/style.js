import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const mainStyleIcon = css`
  display: block;
  position: relative;
  ${props =>
    props.secondary &&
    css`
      color: ${props.theme.secondary};
    `}

  svg {
    display: block;
    height: ${props => (props.height ? `${props.height}rem` : `2.4rem`)};
    ${props =>
      props.secondary &&
      css`
        fill: ${props.theme.secondary};
      `}
  }
`;

export const DivIcon = styled.div`
  ${mainStyleIcon}
`;

export const LinkIcon = styled(Link)`
  ${mainStyleIcon}
  &:hover {
    svg {
      ${props =>
        props.secondary &&
        css`
          fill: ${props.theme.tertiary_3};
        `}
    }
  }
`;
