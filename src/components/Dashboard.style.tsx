import styled from "styled-components";

export const DashboardWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    border-radius: 0 50px 50px 0;
`

export const DashboardNav = styled.nav`
    background: #1e1e1e;
    color: #f5f5f5;
    

    button {
        font-size: 1rem;
        padding: .6rem;
        background: #1e1e1e;
        border: none;
        color: #f5f5f5;

        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
`