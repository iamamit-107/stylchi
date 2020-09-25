import React from "react";
import "./assets/scss/common.scss";
import Registration from "./page/Auth/Registration/Registration";
import { Switch, Route } from "react-router-dom";
import Login from "./page/Auth/Login/Login";
import ForgetPassword from "./page/Auth/ForgetPassword/ForgetPassword";
import Verification from "./page/Auth/Verification/Verification";
import ThankYou from "./page/Auth/ThankYou/ThankYou";

function App() {
    return (
        <Switch>
            <Route
                exact
                path={`${process.env.PUBLIC_URL}/`}
                component={Registration}
            />
            <Route
                exact
                path={`${process.env.PUBLIC_URL}/login`}
                component={Login}
            />
            <Route
                exact
                path={`${process.env.PUBLIC_URL}/forget-password`}
                component={ForgetPassword}
            />
            <Route
                exact
                path={`${process.env.PUBLIC_URL}/verification`}
                component={Verification}
            />
            <Route
                exact
                path={`${process.env.PUBLIC_URL}/thank-you`}
                component={ThankYou}
            />
        </Switch>
    );
}

export default App;
