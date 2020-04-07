import styled from 'styled-components';

const Container = styled.div`
  padding-top: 15px;
  button {
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    border: 2px solid ${props => (props.color ? '#000' : '#fff')};
    color: ${props => (props.color ? '#000' : '#fff')};
    text-decoration: none;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      color: ${props => (props.color ? '#0f0f0f' : '#a7a7a7')};
      border: 2px solid ${props => (props.color ? '#0f0f0f' : '#a7a7a7')};
    }
    &:focus {
      outline: none;
    }
  }
`;

export default Container;
