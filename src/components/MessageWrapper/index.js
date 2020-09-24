import React from "react";
import { MainMessage } from "./styles";

function MessageWrapper({ children }) {
    return (
        <>
            <MainMessage>
                <div>{children}</div>
            </MainMessage>
        </>
    );
}

export default MessageWrapper;
