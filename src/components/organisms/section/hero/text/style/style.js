import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  min-height: 50vh;
  display: grid;
  overflow: hidden;
  position: relative;
  padding: 120px 30px;
  grid-template-rows: 1fr;
  grid-template-columns: 230px calc(100% - 230px);

  /* COLOR START */
  ${props =>
    props.color === 'dark'
      ? { background: '#000', color: '#fff' }
      : { background: '#fff', color: '#000' }}

  .left {
    h1 {
      font-size: 30px;
    }
  }
  .right {
    padding: 0 30px 0 30px;
    p {
      font-size: 21px;
    }
  }
`;

export default Section;
