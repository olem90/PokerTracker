import styled from "styled-components";

export const GameTreeGrid = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: repeat(13, 1fr);
  margin-inline: auto;
  background-color: #535353;
  column-gap: 0.1rem;
  row-gap: 0.1rem;
  border: 0.1rem solid #535353;
`;

export const Square = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 1.8rem;
  width: 1.8rem;
  background-color: #dad8d8;
  font-size: 0.7rem;
  padding: 2px;
  font-family: "helvetica", "Courier New", monospace;
`;