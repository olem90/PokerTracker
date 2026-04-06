import styled from "styled-components";

export const Modal = styled.div`
  height: 100vh;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(7px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 90;
`;

export const ModalContent = styled.div`
  width: 600px;
  height: 250px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  z-index: 99;
  margin: auto;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  background: #343333;
  color: #e6e2e2;

  h2 {
    text-align: center;
    color: #ff6f31;
  }

  label {
    display: flex;
    border: 2px solid #938b8b;
    width: fit-content;
    margin: 50px auto auto auto;
    padding: 5px 8px;
    border-radius: 10px;
    background: transparent;
    color: #fff;
    font-family: "JetBrains Mono", monospace;

    &:hover {
      cursor: pointer;
      color: #ff6f31;
      border: 2px solid #ff6f31;
      background: #fff;
      font-weight: bold;
    }
  }
`;

export const CloseBtn = styled.button`
  display: flex;
  padding: 8px 10px;
  width: fit-content;
  margin-top: auto;
  background: #131313;
  color: #e6e2e2;
  margin-left: auto;
  border-radius: 10px;
   font-family: "JetBrains Mono", monospace;

  &:hover {
    cursor: pointer;
    border: 2px solid #ff6f31;
   
  }
`;
