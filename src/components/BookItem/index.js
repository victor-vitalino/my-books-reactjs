import React from "react";
import PropTypes from "prop-types";

import { Container, Icon, Description, Title } from "./styles";
import MakeStars from "../MakeStars";

function BookItem({ book }) {
    return (
        <Container>
            <Icon src={book.img} />
            <Description>
                <Title>{book.title}</Title>
                <p>{book.author}</p>
                <MakeStars stars={book.stars} />
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
