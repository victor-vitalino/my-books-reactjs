import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Main from "../pages/Main";
import Liked from "../pages/Liked";
import BookDetail from "../pages/BookDetail";

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/liked" exact component={Liked} />
            <Route path="/detail" exact component={BookDetail} />
        </Switch>
    );
}

export default Routes;
