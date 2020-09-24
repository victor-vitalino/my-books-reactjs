import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

import Layout from "../pages/_layouts/default";

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const name = useSelector((state) => state.userReducer.user.name);
    if (name === "" && isPrivate) {
        return <Redirect to="/entry" />;
    }
    if (name !== "" && !isPrivate) {
        return <Redirect to="/" />;
    }

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
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
};
RouteWrapper.defaultProps = {
    isPrivate: false,
};
