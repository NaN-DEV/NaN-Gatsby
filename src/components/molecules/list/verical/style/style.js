import styled from 'styled-components';

export const Ul = styled.ul`
  display: block;
  max-width: 100%;
  list-style: none;

  a {
    color: #fff;
    font-weight: bold;
  }
`;

export const Li = styled.li`
  flex: 100%;
  max-width: 100%;
  text-align: center;
  padding-top: ${props => props.theme.break};
`;
