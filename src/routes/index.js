import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Main from "../pages/Main";
import Liked from "../pages/Liked";
import BookDetail from "../pages/BookDetail";
import UserSelect from "../pages/UserSelect";

function Routes() {
    return (
        <Switch>
            <UserSelect path="/entry" exact component={UserSelect} />
            <Route path="/" exact component={Main} isPrivate />
            <Route path="/liked" exact component={Liked} isPrivate />
            <Route path="/detail" exact component={BookDetail} isPrivate />
        </Switch>
    );
}

export default Routes;
