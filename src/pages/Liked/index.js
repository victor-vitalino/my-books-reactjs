import React from "react";
import { useSelector } from "react-redux";

import BookItem from "../../components/BookItem";
import MessageWrapper from "../../components/MessageWrapper";

import { Container, GridContainer } from "./styles";

function Liked() {
    const books = useSelector((state) => state.userReducer.myList);
    if (books.length <= 0) {
        return (
            <MessageWrapper>
                <p>Não existem livros nos seus favoritos</p>
            </MessageWrapper>
        );
    }
    return (
        <Container>
            <h2>Meus Favoritos</h2>
            <GridContainer>
                {books.map((book) => (
                    <BookItem book={book} />
                ))}
            </GridContainer>
        </Container>
    );
}

export default Liked;
