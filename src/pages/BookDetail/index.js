import React from "react";
import { useSelector } from "react-redux";

import MakeStars from "../../components/MakeStars";

import { Container, Icon, DescriptionContainer } from "./styles";

function BookDetail() {
    const book = useSelector((state) => state.bookSearch.bookSelected);
    if (!book) {
        return <div>ops</div>;
    }
    return (
        <Container>
            <Icon
                src={
                    book.volumeInfo.imageLinks
                        ? book.volumeInfo.imageLinks.thumbnail
                        : ""
                }
            />
            <DescriptionContainer>
                <h2>{book.volumeInfo.title}</h2>
                <section>
                    <strong>Autor:</strong>
                    {book.volumeInfo.authors.map((author) => (
                        <p>{author}</p>
                    ))}
                    <div className="page-count">
                        <strong>N° de páginas:</strong>
                        <p>{book.volumeInfo.pageCount}</p>
                    </div>
                    <strong>Descrição:</strong>
                    <p>{book.volumeInfo.description}</p>
                </section>
                <MakeStars size={42} />
            </DescriptionContainer>
        </Container>
    );
}

export default BookDetail;
