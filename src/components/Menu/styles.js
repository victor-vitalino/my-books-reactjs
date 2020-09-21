import styled, { keyframes } from "styled-components";
import { lighten } from "polished";

import { Link } from "react-router-dom";

export const Container = styled.div`
    border-radius: 0 25px 10px 0;
    margin-top: 20px;
    margin-right: 10px;

    height: 100%;
    background: ${lighten(0.2, "#7159c1")};

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const appearFromLeft = keyframes`
  from {
    opacity:0;
    transform:translateX(-50px);
  }

  to {
    opacity:1;
    transform:translateX(0);
  }
`;
export const LogoContainer = styled.div`
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 100px;
    animation: ${appearFromLeft} 1s;

    p {
        padding-top: 5px;
        font-size: 24px;
        font-weight: bold;
        color: #fff;
        border-bottom: 1px solid #fff;
    }

    img {
        height: 64px;
        width: 64px;
    }
`;

export const MenuItem = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;

    background: ${(props) => props.selected && "#fff"};
    width: 70%;
    padding: 10px 0;

    border-radius: 8px;
    margin-bottom: 48px;

    svg {
        fill: ${(props) => (props.selected ? "#7159c1" : "#fff")};

        :hover {
            opacity: 0.7;
        }
    }

    p {
        color: ${(props) => (props.selected ? "#7159c1" : "#fff")};
    }
`;
