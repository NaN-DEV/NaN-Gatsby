import styled from 'styled-components';

const BoxPagination = styled.div`
  flex: 100%;
  display: flex;
  max-width: 100%;
  justify-content: center;

  .button {
    margin: 0 1.5rem;
  }
  .disablet {
    opacity: 0.1;
    cursor: no-drop;
  }
`;

export default BoxPagination;
