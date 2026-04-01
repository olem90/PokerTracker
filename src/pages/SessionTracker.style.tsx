import styled from "styled-components";

export const PokerTrackerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #0f0f0f;
  color: #e0e0e0;
  text-align: center;
  height: 100vh;

  h1 {
    font-size: 4rem;
    padding-block: 1.5rem;
    color: #ff6f31;
    font-family: "Roboto Slab", serif;
  }

  h2 {
    font-family: "JetBrains Mono", monospace;
    font-size: 1.5rem;
  }

  .active {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

export const Sidebar = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  height: 200px;
  background: #1e1e1e;
  border-right: 1px solid #2a2a2a;
  border-radius: 0 50px 50px 0;
`;

export const Content = styled.div`
  flex: 1;
  padding: 2rem;
`;

export const PageHeader = styled.div`
  margin-bottom: 1rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
