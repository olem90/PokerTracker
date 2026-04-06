import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const SessionsWrapper = styled.div`
  padding: 35px;
  box-shadow: 0 0 8px #ff6f31;
  min-height: 400px;
`;

export const SessionsInput = styled.input`
  padding-left: 10px;
  font-size: 1rem;
  padding-block: 2px;
  border: 1px solid transparent;
  margin-left: 5px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
`;

export const SessionsContainer = styled.div`
  max-width: fit-content;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const SessionsFilter = styled.div`
  max-width: fit-content;
  display: flex;
  margin-bottom: 25px;
  min-width: 100%;
  padding: 0;
`;

export const SessionsFilterSelect = styled.select`
  max-width: fit-content;
  display: flex;
  margin-bottom: 25px;
  margin-left: auto;
  font-size: 1.2rem;
`;

export const SelectSession = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

export const StyledDatePicker: any = styled(DatePicker)`
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  padding-left: 10px;
  padding-block: 2px;
  border: 1px solid transparent;
`;

export const SessionsContent = styled.div`
  padding: 4px 12px;
  display: flex;
  flex-direction: row;
  font-size: 1.3rem;
  margin-bottom: 3px;
  background: #181818;
  box-shadow: 0 1px 1px rgba(255, 111, 49, 0.3);
`;

export const CurrentSession = styled.div`
  padding: 2px;

  h2 {
    font-size: 1.3rem;
  }
`;

export const SessionsH2 = styled.h2`
  margin-bottom: 15px;
`;

export const CurrentSessionData = styled.div`
  display: flex;
  max-width: fit-content;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 10px 20px;
  font-size: 1.3rem;
`;

export const ImportExportBtnsContainer = styled.div`
  display: flex;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-block: 10px 20px;
`;

export const SaveSessionBtn = styled.button`
  display: flex;
  border: 1px solid #908f8fc6;
  justify-content: center;
  align-items: center;
  padding: 4px 6px;
  outline: none;
  border-radius: 5px;
  background: #023b13;
  color: #fff;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.7rem;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
    color: #06a837;
  }
`;


export const ImportSessionBtn = styled.button`
  display: flex;
  border: 1px solid #908f8fc6;
  justify-content: center;
  align-items: center;
  padding: 4px 6px;
  outline: none;
  border-radius: 5px;
  background: #8e5607;
  color: #fff;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.7rem;

  &:hover {
    cursor: pointer;
    color: #f09c3d;
  }
`;


export const DeleteSessionBtn = styled.button`
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 3px 6px;
  border-radius: 5px;
  background: #5c0000;
  color: #fff;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.9rem;
  margin-left: auto;

  &:hover {
    cursor: pointer;
    color: red;
  }
`;

export const CurrentSessionInput = styled.input`
  display: flex;
  padding: 2px 0 2px 8px;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 5px;
  align-items: center;

  &:focus {
  outline: none;
  border: 1px solid rgba(255, 111, 49, 0.6);
  box-shadow: 0 2px 8px rgba(255, 111, 49, 0.15);
}
  
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
`;

export const CurrentSessionDate = styled.p`
  padding: 2px 5px;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
`;

export const CurrentSessionBankroll = styled.p`
  padding-inline: 15px 25px;
`;

export const DateParagraph = styled.p`
  border-right: 2px solid #993205;
  margin-right: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
`;

export const BankrollParagraph = styled.p`
  border-right: 2px solid #993205;
  margin-right: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
`;

export const ResultParagraph = styled.p<{ profit: number }>`
  color: ${(props) =>
    props.profit !== undefined && props.profit >= 0 ? "green" : "red"};
  font-weight: bold;
  width: 70px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-inline: auto 20px;
`;

export const StartSessionButton = styled.button`
  font-size: 1rem;
  display: flex;
  padding: 2px 6px 3px 6px;
  margin-left: 6px;
  border-radius: 2px;
  border: none;
  background: #d04205;
  color: #fff;
  font-family: "Roboto Slab", serif;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 0 0 10px #8e2d03;
    cursor: pointer;
  }
`;

export const EndBankrollButton = styled.button`
  font-size: 1rem;
  display: flex;
  padding: 2px 6px 3px 6px;
  margin-left: 6px;
  border-radius: 2px;
  border: none;
  background: #d04205;
  color: #fff;
  font-family: "Roboto Slab", serif;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 0 0 10px #8e2d03;
    cursor: pointer;
  }
`;
