import styled from "styled-components";

export const BigBlindSelectionWrapper = styled.div`
    width: fit-content;
    margin-inline: auto;
    padding-bottom: 1rem;
`
export const BigBlindContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    border: 1px solid pink;
    width: 24.8rem;
    background: #23887E;
    border: none;
    font-size: 1rem;
`

export const BigBlindSquare = styled.div`
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

export const BigBlindH2 = styled.h2`
    font-size: 1.2rem;
    margin-top: 1rem;
`

