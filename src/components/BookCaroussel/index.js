import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

import { Container, Header, BookList } from "./styles";

import BookItem from "../BookItem";

function BookCaroussel() {
    const book = {
        title: "O auto da compadecida",
        stars: 4,
        author: "Ariano Suasuna",
        img:
            "https://upload.wikimedia.org/wikipedia/pt/b/bf/O_auto_da_compadecida.jpg",
    };
    return (
        <>
            <Container>
                <Header>
                    <h3>Meus Livros</h3>
                    <div>
                        <Link to="/liked">
                            <h4>Mais</h4>
                        </Link>
                        <BsArrowRightShort size={24} />
                    </div>
                </Header>
            </Container>

            <BookList>
                <BookItem book={book} />
                <BookItem book={book} />
                <BookItem book={book} />
                <BookItem book={book} />
                <BookItem book={book} />
                <BookItem book={book} />
                <BookItem book={book} />

            </BookList>
        </>
    );
}

export default BookCaroussel;
