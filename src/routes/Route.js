import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import Layout from "../pages/_layouts/default";

export default function RouteWrapper({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            component={(props) => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}

RouteWrapper.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
};
