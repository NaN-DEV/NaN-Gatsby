import styled from 'styled-components';

const Row = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: ${props => props.theme.break};
  max-width: ${props => props.theme.max_width};
`;

export default Row;
