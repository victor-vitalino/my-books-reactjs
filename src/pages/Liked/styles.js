import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const GridContainer = styled.div`
    display: grid;
    height: 80%;
    width: 100%;

    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px 5px;

    overflow: scroll;


    @media only screen and (min-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
    @media only screen and (min-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (min-width: 960px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;
