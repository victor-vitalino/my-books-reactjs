import React from "react";
import PropTypes from "prop-types";

import { Container, Icon, Description, Title } from "./styles";
import MakeStars from "../MakeStars";

function BookItem({ book }) {
    return (
        <Container>
            <Icon
                src={
                    book.volumeInfo.imageLinks
                        ? book.volumeInfo.imageLinks.thumbnail
                        : ""
                }
            />
            <Description>
                <div>
                    <Title>{book.volumeInfo.title}</Title>
                    {book.volumeInfo.authors.map((author) => (
                        <p>{author}</p>
                    ))}
                </div>

                {book.stars && <MakeStars stars={book.stars} />}
            </Description>
        </Container>
    );
}

BookItem.propTypes = {
    book: PropTypes.shape({
        img: PropTypes.string,
        title: PropTypes.string,
        author: PropTypes.string,
        stars: PropTypes.number,
    }).isRequired,
};
export default BookItem;
