import styled from "styled-components";

export const OverviewWrapper = styled.div`
  padding-block: 5px 30px;
  box-shadow: 0 0 10px #ff6f31;
  border-radius: 5px;

  h2 {
    padding-block: 1rem;
    font-size: 1.9rem;
    color: #ff6f31
  }

  p {
    padding-block: 0.14rem;
    font-size: 1.3rem;
  }
`;


export const OverviewContainer = styled.div`
    max-width: fit-content;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
`