import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { getBookRequest } from "../../store/modules/bookSearch/actions";

import { useSelector } from "react-redux";

import {
    Container,
    HeaderContainer,
    SearchContainer,
    ProfileContainer,
} from "./styles";

import BookCaroussel from "../../components/BookCaroussel";

function Main() {
    const [text, setText] = useState("");
    const [foundBooks, setFoundBooks] = useState([]);
    const dispatch = useDispatch();

    const books = useSelector((state) => state.bookSearch.books);

    useEffect(() => {
        setFoundBooks(books);
    }, [books]);

    const getBooksFromApi = async (e) => {
        e.preventDefault();

        dispatch(getBookRequest(text));
    };
    return (
        <>
            <Container>
                {/*  header */}
                <HeaderContainer>
                    <form onSubmit={getBooksFromApi}>
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
                <BookCaroussel books={foundBooks} search={text} />
            </Container>
        </>
    );
}

export default Main;
