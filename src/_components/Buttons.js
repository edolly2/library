import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.6rem;
`;

const BtnOutline = styled.button`
  font-size: 2rem;
  padding: 0.4rem 1.6rem;
  max-width: 13rem;
  min-width: 13rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  transition: all 100ms linear;
  border: 2px solid red;
  color: red;
  background: transparent;
  &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background: red;
    color: white;
  }
`;

const BtnOutlineRound = styled.button`
  font-size: 2rem;
  padding: 0.4rem 1.6rem;
  max-width: 13rem;
  min-width: 13rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  transition: all 100ms linear;
  border: 2px solid red;
  color: red;
  border-radius: 0.6rem;
  background: transparent;
  &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background: red;
    color: white;
  }
`;

const BtnFilled = styled.button`
  font-size: 2rem;
  padding: 0.4rem 1.6rem;
  max-width: 13rem;
  min-width: 13rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  transition: all 100ms linear;
  color: white;
  background: red;
  border: 2px solid red;
  &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background: rgb(247, 85, 85);
    border: 2px solid rgb(247, 85, 85);
  }
`;

const BtnFilledRound = styled.button`
  font-size: 2rem;
  padding: 0.4rem 1.6rem;
  max-width: 13rem;
  min-width: 13rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  transition: all 100ms linear;
  color: white;
  border-radius: 0.6rem;
  background: red;
  border: 2px solid red;
  &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background: rgb(247, 85, 85);
    border: 2px solid rgb(247, 85, 85);
  }
`;

const Buttons = () => {
  return (
    <ButtonContainer>
      <BtnOutline>Click Me</BtnOutline>
      <BtnOutlineRound>Click Me</BtnOutlineRound>
      <BtnFilled>Click Me</BtnFilled>
      <BtnFilledRound>Click Me</BtnFilledRound>
    </ButtonContainer>
  );
};

export default Buttons;
