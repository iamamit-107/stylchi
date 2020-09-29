import React from "react";
import "../../../assets/scss/forgetPassword.scss";
import img from "../../../assets/img/login/forget-pass.png";
import rightsmall from "../../../assets/img/login/right-smaller.png";

const ForgetPassword = () => {
    return (
        <div id="forget-pass">
            <div className="container py-lg-0">
                <div
                    className="row align-items-center"
                    style={{ height: "100vh" }}
                >
                    <div className="col-lg-5 text-center">
                        <img src={img} alt="" className="img-fluid main-img" />
                    </div>
                    <div className="col-lg-7 px-lg-5 mt-md-0">
                        <h1>Forgot your password?</h1>
                        <p>
                            Enter the email address you registered with to
                            receive a verification code
                        </p>

                        <form>
                            <div className="row mb-2 mb-md-5">
                                <div className="col">
                                    <input
                                        type="email"
                                        className="form-control email-input"
                                        placeholder="Enter your email address"
                                        required
                                    />
                                    <img
                                        src={rightsmall}
                                        alt=""
                                        className="right"
                                    />
                                </div>
                            </div>
                            <div className="submit-btn">
                                <input
                                    type="submit"
                                    className="btn get-green mt-4 mb-3 mb-lg-0"
                                    value="SUBMIT"
                                ></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
