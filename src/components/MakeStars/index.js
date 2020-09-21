import React from "react";

import PropTypes from "prop-types";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import { Container } from "./styles";

function MakeStars({ stars }) {
    const items = [];
    // eslint-disable-next-line no-plusplus
    for (let index = 1; index <= 5; index++) {
        if (index <= stars) {
            items.push(<AiFillStar key={index} size={24} />);
        } else {
            items.push(<AiOutlineStar key={index} size={24} />);
        }
    }
    return <Container>{items}</Container>;
}

MakeStars.propTypes = {
    stars: PropTypes.number.isRequired,
};

export default MakeStars;
