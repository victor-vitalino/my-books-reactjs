import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Main from "../pages/Main";
import Liked from "../pages/Liked";

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/liked" exact component={Liked} />
        </Switch>
    );
}

export default Routes;
