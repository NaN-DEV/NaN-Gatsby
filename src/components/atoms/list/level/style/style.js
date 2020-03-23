import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  li {
    flex: 100%;
    width: 100%;
    display: flex;
    margin: 7.5px 0;
    justify-content: center;
  }

  li:last-of-type {
    margin: 7.5px 0 0 15px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint}) {
    li {
      flex: none;
      width: auto;
      margin: 0px 15px;
    }
    li:first-of-type {
      margin: 0 15px 0 0;
    }
    li:last-of-type {
      margin: 0 0 0 15px;
    }
  }
`;

export default List;
