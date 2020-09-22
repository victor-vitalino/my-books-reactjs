import React, { useState } from "react";

import PropTypes from "prop-types";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import { Container } from "./styles";

function MakeStars({ stars = 0, size = 24 }) {
    const [starsCount, setStarsCount] = useState(0);

    const handleStarsClick = (index) => {
        if (starsCount === 1 && index === 1) {
            setStarsCount(0);
        } else {
            setStarsCount(index);
        }
    };

    const items = [];
    // eslint-disable-next-line no-plusplus
    for (let index = 1; index <= 5; index++) {
        if (index <= starsCount) {
            items.push(
                <AiFillStar
                    key={index}
                    size={size}
                    onClick={() => handleStarsClick(index)}
                />
            );
        } else {
            items.push(
                <AiOutlineStar
                    key={index}
                    size={size}
                    onClick={() => handleStarsClick(index)}
                />
            );
        }
    }
    return <Container>{items}</Container>;
}

MakeStars.propTypes = {
    stars: PropTypes.number.isRequired,
};

export default MakeStars;
