import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
    margin-top: 5vh;
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    background: #fff;

    > a {
        padding: 10px 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    > div {
        display: flex;
        justify-content: space-around;
        align-items: center;

        flex-direction: row;
        height: 80vh;

        background: #fff;
        padding: 0px 20px;
    }
`;

export const Icon = styled.img`
    height: 20rem;
    width: auto;

    -webkit-box-shadow: -1px -1px 19px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px -1px 19px 0px rgba(0, 0, 0, 0.75);
    box-shadow: -1px -1px 19px 0px rgba(0, 0, 0, 0.75);
`;

export const DescriptionContainer = styled.div`
    width: 60vw;
    padding-left: 20px;

    h2 {
        font-size: 36px;
        font-weight: bold;
    }
    section {
        strong {
            font-size: 16px;
        }
        p {
            padding-left: 10px;
        }
    }
    .page-count {
        display: flex;
        flex-direction: row;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;

        border: 1px solid #7159c1;
        background: #fff;
        text-align: center;

        height: 30px;
        border-radius: 5px;
        color: #7159c1;
        transition: all 0.5s;
        padding: 0px 10px;

        :hover {
            background: ${darken(0.1, "#7159c1")};
            color: #fff;
        }
    }
`;
