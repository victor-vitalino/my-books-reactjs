import styled from "styled-components";

export const MainMessage = styled.div`
    display: flex;
    height: 70vh;

    align-items: center;
    justify-content: center;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #7159c1;
        border-radius: 5px;
        height: 10rem;
        width: 60vw;

        background: #fff;

        -webkit-box-shadow: -1px -1px 19px 0px rgba(0, 0, 0, 0.5);
        -moz-box-shadow: -1px -1px 19px 0px rgba(0, 0, 0, 0.5);
        box-shadow: -1px -1px 19px 0px rgba(0, 0, 0, 0.5);

        color: #7159c1;
        font-weight: bold;
        font-size: 24px;
        font-family: "Roboto" Arial, Helvetica, sans-serif, Arial, Helvetica,
            sans-serif;
        text-align: center;
    }
`;
