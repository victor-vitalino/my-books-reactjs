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

export const BookList = styled.div`
    height: 20rem;
    background: #fff;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;

    overflow: auto;
    ::-webkit-scrollbar {
        height: 4px;
    }
    ::-webkit-scrollbar-thumb {
        width: 10px;
        background: #7159c1;
    }
`;
