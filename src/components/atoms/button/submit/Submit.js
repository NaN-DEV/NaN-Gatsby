import React from 'react';
import Container from './style/style';

const ButtonSubmitComponent = props => {
  const { onClick, title } = props;
  return (
    <>
      <Container onClick={onClick}>
        <button type="submit">{title}</button>
      </Container>
    </>
  );
};

export default ButtonSubmitComponent;
