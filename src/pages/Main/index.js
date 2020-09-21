import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import {
    Container,
    HeaderContainer,
    SearchContainer,
    ProfileContainer,
} from "./styles";

import BookCaroussel from "../../components/BookCaroussel";

function Main() {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(text);
    };
    return (
        <>
            <Container>
                {/*  header */}
                <HeaderContainer>
                    <form onSubmit={handleSubmit}>
                        <SearchContainer>
                            <div>
                                <AiOutlineSearch size={36} />
                            </div>

                            <input
                                type="text"
                                placeholder="Buscar um Livro"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                        </SearchContainer>
                    </form>

                    <ProfileContainer>
                        <h2>Victor</h2>
                        <img
                            src="https://api.adorable.io/avatars/90/abott@adorable.png"
                            alt="profile"
                        />
                    </ProfileContainer>
                </HeaderContainer>

                {/* book list */}
                {text === "" && <BookCaroussel />}
            </Container>
        </>
    );
}

export default Main;
