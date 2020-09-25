import React from "react";

import "../../../assets/scss/registration.scss";
import bg from "../../../assets/img/login/login-bg.png";

import loginfooter from "../../../assets/img/login/login-footer.png";
import LeftSide from "../Components/LeftSide";
import ButtonWithImg from "../Components/ButtonWithImg";

const Login = () => {
    return (
        <div id="registration">
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div
                        className="col-lg-4 h-100 login-bg"
                        style={{ backgroundImage: `url(${bg})` }}
                    >
                        <LeftSide />
                    </div>

                    <div
                        className="col-lg-8 mt-5 p-0"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <div className="px-3 px-lg-5">
                            {/* top two button component */}
                            <ButtonWithImg />

                            <div className="mt-5">
                                <form>
                                    {/* email input */}
                                    <div className="row mb-3">
                                        <div className="col">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter your email address"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* password field */}
                                    <div className="row mb-3">
                                        <div className="col">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <input
                                        type="submit"
                                        className="btn get-green mb-3 mb-lg-0"
                                        value="LOGIN"
                                    ></input>
                                </form>
                            </div>
                        </div>

                        <div className="login-footer">
                            <img
                                src={loginfooter}
                                alt=""
                                style={{ height: "100%" }}
                            />
                            <div className="ml-3">
                                <p className="strong">
                                    Don’t remember your password?
                                </p>
                                <p className="light">
                                    Follow these simple steps to reset
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
