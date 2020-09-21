import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { AiOutlineHeart, AiOutlineStar, AiOutlineLogout } from "react-icons/ai";
import { RiHomeLine } from "react-icons/ri";

import { AsideLeft } from "../../styles/layout";
import { Container, LogoContainer, MenuItem } from "./styles";

import Logo from "../../assets/logo.png";

function Menu() {
    const location = useLocation();
    const [screen, setScreen] = useState(location.pathname);
    const [booklist, setBooklist] = useState([]);

    return (
        <AsideLeft>
            <Container>
                <LogoContainer>
                    <img src={Logo} alt="logo estante livros" />
                    <p>My Books</p>
                </LogoContainer>

                <MenuItem
                    to="/"
                    selected={screen === "/"}
                    onClick={() => setScreen("/")}
                >
                    <RiHomeLine size={36} />
                    <p>Inicio</p>
                </MenuItem>

                <MenuItem
                    to="/liked"
                    selected={screen === "/liked"}
                    onClick={() => setScreen("/liked")}
                >
                    <AiOutlineHeart size={36} />
                    <p>Favoritos</p>
                </MenuItem>
                <MenuItem
                    to="/exit"
                    selected={screen === "/exit"}
                    onClick={() => setScreen("/exit")}
                >
                    <AiOutlineLogout size={36} />
                    <p>Sair</p>
                </MenuItem>
            </Container>
        </AsideLeft>
    );
}

export default Menu;
