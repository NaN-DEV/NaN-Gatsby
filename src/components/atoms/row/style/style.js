import styled from 'styled-components';

const Row = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  position: relative;
  padding: 0 ${props => props.theme.settings.breakFat};
  max-width: ${props => props.theme.settings.max_width};
`;

export default Row;
