import styled from "styled-components";

export const PositionSelectionWrapper = styled.div`
    width: fit-content;
    margin-inline: auto;
    padding-bottom: 1rem;
`

export const PositionSelection = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    width: 24.8rem;
    background: #23887E;
`

export const PositionSquare = styled.div`
    width: 100%;
    height: 2.8rem;
    border: .015em solid rgb(255, 254, 254);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`

export const PositionH2 = styled.h2`
    font-size: 1.2rem;
    margin-top: 1rem;
`

