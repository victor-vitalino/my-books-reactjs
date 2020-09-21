import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./styles";

import { MainContent } from "../../../styles/layout";

export default function DefaultLayout({ children }) {
    return (
        <MainContent>
            <Wrapper>{children}</Wrapper>;
        </MainContent>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
