import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

import { Container, Header, BookList } from "./styles";

import BookItem from "../BookItem";

function BookCaroussel({ books, search }) {
    const handleDetails = (id) => {
        console.log(id);
    };
    return (
        <>
            <Container>
                <Header>
                    <h3>
                        {search ? `Resultados de: ${search}` : "Meus Livros"}
                    </h3>
                    <div>
                        <Link to="/liked">
                            <h4>Mais</h4>
                        </Link>
                        <BsArrowRightShort size={24} />
                    </div>
                </Header>
            </Container>

            <BookList>
                {books.map((book) => (
                    <BookItem
                        key={book.id}
                        book={book}
                        handleDetails={handleDetails}
                    />
                ))}
            </BookList>
        </>
    );
}

export default BookCaroussel;
