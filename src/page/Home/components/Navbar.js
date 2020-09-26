import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/img/home/logoheader.png";
import translate from "../../../assets/img/home/translate.png";
import map from "../../../assets/img/home/map.png";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light navbar-bg">
            <div className="container">
                <Link class="navbar-brand" to={`${process.env.PUBLIC_URL}/`}>
                    <img src={logo} alt="" className="img-fluid" />
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="!#">
                                For Partners{" "}
                                <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="!#"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <span>
                                    <img src={map} alt="" className="mr-2" />
                                </span>
                                Estonia
                            </a>
                            <div
                                class="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <a class="dropdown-item" href="!#">
                                    Action
                                </a>
                                <a class="dropdown-item" href="!#">
                                    Another action
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="!#">
                                    Something else here
                                </a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="!#"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <span>
                                    <img
                                        src={translate}
                                        alt=""
                                        className="mr-2"
                                    />
                                </span>
                                EN
                            </a>
                            <div
                                class="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <a class="dropdown-item" href="!#">
                                    EST
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="!#">
                                    RUS
                                </a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <Link
                                class="nav-link btn signup-btn"
                                to={`${process.env.PUBLIC_URL}/sign-up`}
                            >
                                Sign up
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link
                                class="nav-link btn login-btn"
                                to={`${process.env.PUBLIC_URL}/login`}
                            >
                                Log in
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
