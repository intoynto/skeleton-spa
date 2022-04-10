import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {Store} from "./Store";
import "./_css/main.scss";
import Header from "./Header";

export default ()=>{
    return (
        <Provider store={Store}>
            <BrowserRouter>
                <Header />
                <div className="p-4">
                    <div className="text-4xl">App</div>
                    <div>Lorem Ipsum Dolor Si Amet</div>
                </div>
            </BrowserRouter>
        </Provider>
    );
};