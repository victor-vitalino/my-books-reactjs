import styled from "styled-components";
import { lighten, darken } from "polished";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100vw;
`;

export const FormUser = styled.div``;

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 10px;

    > div {
        padding: 10px;
        background: #fff;
        border-radius: 5px;
        margin-right: 10px;
        svg {
            fill: ${lighten(0.2, "#7159c1")};
        }
    }

    input {
        border: 0;
        border-bottom: 1px solid transparent;

        background: transparent;
        color: #7159c1;
        font-size: 16px;
        width: 10rem;

        padding-left: 15px;
        transition: all 0.4s ease-in-out;

        ::placeholder {
            color: #7159c1;
            font-size: 16px;
        }
        :focus {
            border-bottom: 1px solid ${lighten(0.2, "#7159c1")};
            width: 35rem;
        }
    }
`;

export const UsersList = styled.div`
    width: 60vw;
    height: 60vh;
    background: transparent;

    margin-bottom: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: scroll;

    ul {
        list-style: none;

        div {
            margin: 5px;
            width: 50vw;
            height: 50px;
            transition: hover 1s;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: #7159c1;
            font-weight: bold;
            font-size: 16px;

            :hover {
                border: 1px solid #7159c1;
                border-radius: 5px;
            }
        }
    }
`;
