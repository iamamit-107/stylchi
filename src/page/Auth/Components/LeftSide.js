import React from "react";
import logo from "../../../assets/img/login/logo.png";
import { NavLink } from "react-router-dom";

const LeftSide = () => {
    return (
        <div className="left-side">
            <div className="left-side-inner">
                <img src={logo} className="img-fluid" alt="" />
                <div className="d-flex mt-4">
                    <NavLink
                        exact
                        to={`${process.env.PUBLIC_URL}/sign-up`}
                        activeClassName="active"
                        className="login mr-4"
                    >
                        sign up
                    </NavLink>
                    <NavLink
                        to={`${process.env.PUBLIC_URL}/login`}
                        activeClassName="active"
                        className="login"
                    >
                        Log in
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default LeftSide;
