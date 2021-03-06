import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    flex-direction: column;
    justify-content: flex-start;

    padding: 10px 20px 10px 0px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h3 {
        font-size: 24px;
        padding-bottom: 5px;
    }
    > div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

export const GridContainer = styled.div`
    display: grid;
    height: 80%;
    width: 100%;

    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px 5px;



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
