import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getBookDetailRequest } from "../../store/modules/bookSearch/actions";

import { Container, Icon, Description, Title } from "./styles";
import MakeStars from "../MakeStars";

function BookItem({ book }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleDetail = () => {
        dispatch(getBookDetailRequest(book, history));
    };
    return (
        <Container>
            <Icon
                src={
                    book.volumeInfo.imageLinks
                        ? book.volumeInfo.imageLinks.thumbnail
                        : "https://via.placeholder.com/250x280.png?text=Sem+imagem"
                }
            />
            <Description>
                <div>
                    <Title>{book.volumeInfo.title}</Title>
                    {book.volumeInfo.authors &&
                        book.volumeInfo.authors.map((author, i) => (
                            <p key={i}>{author}</p>
                        ))}
                </div>

                {book.rating > 0 && <MakeStars stars={book.rating} />}
                <button type="button" onClick={handleDetail}>
                    <p>Detalhes</p>
                </button>
            </Description>
        </Container>
    );
}

BookItem.propTypes = {
    book: PropTypes.shape({
        volumeInfo: PropTypes.object,
        stars: PropTypes.number,
    }).isRequired,
};
export default BookItem;
