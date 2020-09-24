import React, { useState } from "react";

import PropTypes from "prop-types";

import { FaStar } from "react-icons/fa";

import { Container } from "./styles";

function MakeStars({ stars = 0, size = 24, returnRating }) {
    const [rating, setRating] = useState(stars);
    const [hover, setHover] = useState(0);

    const handleRating = (ratingValue) => {
        setRating(ratingValue);
        // caso receba o callback executa
        returnRating && returnRating(ratingValue++);
    };

    return (
        <Container>
            {[...Array(5)].map((star, index) => {
                let ratingValue = index++;

                return (
                    <label>
                        <input
                            type="radio"
                            name="ratingInput"
                            onClick={() => handleRating(ratingValue)}
                        />
                        <FaStar
                            className="star"
                            color={
                                ratingValue <= (hover || rating)
                                    ? "#ffc107"
                                    : "#e4e5e9"
                            }
                            size={size}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </Container>
    );
}

MakeStars.propTypes = {
    returnRating: PropTypes.func,
};

export default MakeStars;
