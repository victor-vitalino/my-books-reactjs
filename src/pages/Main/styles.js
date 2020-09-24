import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
    padding-top: 20px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
`;

export const HeaderContainer = styled.div`
    height: 100%;
    padding: 5px 10px 10px 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #fff;
`;

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

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 7rem;

    padding-left: 15px;
    border-left: 1px solid #7159c1;

    h2 {
        font-size: 16px;
        font-weight: normal;
        color: #7159c1;
    }
    img {
        border-radius: 50%;
        height: 32px;
        width: 32px;
    }
`;

