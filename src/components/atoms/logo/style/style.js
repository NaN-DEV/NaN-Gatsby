import styled from 'styled-components';

const Brand = styled.div`
  width: ${props => (props.width ? props.width : 'auto')};
  height: ${props => (props.height ? props.height : 'auto')};
  display: block;
  a {
    width: ${props => (props.width ? props.width : 'auto')};
    height: ${props => (props.height ? props.height : 'auto')};
  }
  svg {
    margin: 0 auto;
    display: block;
    fill: ${props => {
      if (props.white) {
        return ({ theme }) => theme.secondary;
      }
      return ({ theme }) => theme.primary;
    }};
    transition: ${({ theme }) => theme.animation_time};
    width: ${props => (props.width ? props.width : 'auto')};
    height: ${props => (props.height ? props.height : 'auto')};
  }
  &:hover {
    svg {
      fill: ${props => {
        if (props.white) {
          return ({ theme }) => theme.secondary_hover;
        }
        return ({ theme }) => theme.primary_hover;
      }};
      transition: ${({ theme }) => theme.animation_time};
    }
  }
`;

export default Brand;
