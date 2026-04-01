import styled from "styled-components";

export const AnteSelectionWrapper = styled.div`
    width: fit-content;
    margin-inline: auto;
    padding-bottom: 1rem;
`

export const AnteContainer = styled.div`
    display: flex;
    width: 24.8rem;
    height: 2.8rem;
    justify-content: center;
    align-items: center;
    margin-inline: auto;
    background: #23887E;
    color: #fff;
    font-size: 1rem;
    border: 2px solid gold;
`

export const AnteSquare = styled.div<{selected?:boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(228, 230, 228);
    height: 100%;
    width: 100%;

    &:hover {
        cursor: pointer;
    }

    &.active {
        background: yellow;
    }
`

export const AnteH2 = styled.h2`
    font-size: 1.2rem;
    margin-top: 1rem;
`




