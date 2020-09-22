import styled from "styled-components";

export const Container = styled.div`
    margin-top: 5vh;
    display: flex;
    justify-content: space-around;
    align-items: center;

    flex-direction: row;
    height: 80vh;

    background: #fff;
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
`;
