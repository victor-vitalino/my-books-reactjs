import React from "react";

import { Container, Header, GridContainer } from "./styles";

import BookItem from "../BookItem";

function BookCaroussel({ books, search }) {
    const handleDetails = (id) => {
        console.log(id);
    };
    return (
        <>
            <Container>
                <Header>
                    <h3>{search && `Resultados de: ${search}`}</h3>
                </Header>
            </Container>

            <GridContainer >
                {books.map((book) => (
                    <BookItem
                        key={book.id}
                        book={book}
                        handleDetails={handleDetails}
                    />
                ))}
            </GridContainer>
        </>
    );
}

export default BookCaroussel;
