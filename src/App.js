import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

//styles
import GlobalStyle from "./styles/global";
import { GridLayout } from "./styles/layout";

import Menu from "./components/Menu";

import './config/reactotronConfig'

function App() {
    return (
        <>
            <GridLayout>
                <BrowserRouter>
                    <Menu />
                    <Routes />
                </BrowserRouter>
            </GridLayout>

            <GlobalStyle />
        </>
    );
}

export default App;
