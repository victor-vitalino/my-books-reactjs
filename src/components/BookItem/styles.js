import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    background: ${lighten(0.2, "#7159c1")};
    padding: 20px;
    border-radius: 10px;

    width: 18rem;
    margin-left: 10px;
`;

export const Title = styled.h3`
    font-size: 18px;
    font-weight: bold;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-around;
    padding-left: 10px;
    width:10rem;

    p {
        margin-top: 5px;
    }
`;

export const Icon = styled.img`
    height: 10rem;
    width: auto;
`;
