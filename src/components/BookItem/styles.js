import styled from "styled-components";
import { lighten, darken } from "polished";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    background: ${lighten(0.2, "#7159c1")};
    padding: 20px;
    border-radius: 10px;

    width: auto;
    height: 15rem;
    margin-left: 10px;
`;

export const Title = styled.h3`
    font-size: 18px;
    font-weight: bold;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    -webkit-box-orient: vertical;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    padding-left: 10px;
    width: 10rem;
    height: 80%;

    div {
        p {
            font-size: 14px;

            :first-child {
                margin-top: 5px;
            }
        }
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;

        border: 1px solid #7159c1;
        background: #fff;
        text-align: center;

        height: 40px;
        border-radius: 5px;
        color: #7159c1;
        transition: all 0.5s;

        :hover {
            background: ${darken(0.1, "#7159c1")};
            color: #fff;
        }
    }
`;

export const Icon = styled.img`
    height: 10rem;
    width: auto;
`;
