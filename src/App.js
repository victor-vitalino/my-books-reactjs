import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

//styles
import GlobalStyle from "./styles/global";
import { GridLayout } from "./styles/layout";

import Menu from "./components/Menu";

import "./config/reactotronConfig";
import store from "./store";

function App() {
    return (
        <>
            <Provider store={store}>
                <GridLayout>
                    <BrowserRouter>
                        <Menu />
                        <Routes />
                    </BrowserRouter>
                </GridLayout>

                <GlobalStyle />
            </Provider>
        </>
    );
}

export default App;
