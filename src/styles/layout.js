import styled from "styled-components";

export const GridLayout = styled.div`
    height: 100vh;
    display: grid;
    grid-template-areas:
        "asideLeft main main"
        "asideLeft main main"
        "asideLeft footer footer";
    grid-template-rows: 1fr 9fr 1fr;
    grid-template-columns: 0.8fr 6fr 1fr;
`;

export const Nav = styled.nav`
    grid-area: nav;
`;
export const AsideLeft = styled.aside`
    grid-area: asideLeft;
`;

export const MainContent = styled.main`
    grid-area: main;
`;
export const Footer = styled.footer`
    grid-area: footer;
`;
