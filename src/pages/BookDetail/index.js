import React, { useState } from "react";
import { Link } from "react-router-dom";

// state
import { useSelector, useDispatch } from "react-redux";
import { addBookToMyListRequest } from "../../store/modules/user/actions";

//components
import MakeStars from "../../components/MakeStars";
import MessageWrapper from "../../components/MessageWrapper";

//icons
import { BsArrowLeftShort } from "react-icons/bs";

//styled-components
import { Container, Icon, DescriptionContainer } from "./styles";

function BookDetail() {
    const [rating, setRating] = useState(0);
    const dispatch = useDispatch();

    const book = useSelector((state) => state.bookSearch.bookSelected);

    if (!book) {
        return (
            <MessageWrapper>
                <p>Nenhum livro foi selecionado!</p>
            </MessageWrapper>
        );
    }

    const handleFavoriteBook = () => {
        dispatch(addBookToMyListRequest({ book, rating }));
    };

    return (
        <Container>
            <Link to="/">
                <BsArrowLeftShort size={24} />
                <p>Voltar</p>
            </Link>
            <div>
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
                            <p key={book.id}>{author}</p>
                        ))}
                        <div className="page-count">
                            <strong>N° de páginas:</strong>
                            <p>{book.volumeInfo.pageCount}</p>
                        </div>
                        <strong>Descrição:</strong>
                        <p>{book.volumeInfo.description}</p>
                    </section>
                    <MakeStars
                        size={42}
                        stars={book.rating && book.rating}
                        returnRating={setRating}
                    />
                    <button type="button" onClick={handleFavoriteBook}>
                        <p>Adicionar aos Favoritos</p>
                    </button>
                </DescriptionContainer>
            </div>
        </Container>
    );
}

export default BookDetail;
