import React from "react";
import "../../../assets/scss/forgetPassword.scss";
import img from "../../../assets/img/login/verification.svg";
import rightsmall from "../../../assets/img/login/right.svg";

const Verification = () => {
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
                        <h1>Verification code sent!</h1>
                        <p>
                            Check your email inbox for a verification code and
                            enter it below
                        </p>

                        <form>
                            <div className="row mb-0 mb-md-5">
                                <div className="col mb-2 mb-lg-0">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="•"
                                        required
                                    />
                                </div>
                                <div className="col mb-2 mb-lg-0">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="•"
                                        required
                                    />
                                </div>
                                <div className="col mb-2 mb-lg-0">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="•"
                                        required
                                    />
                                </div>
                                <div className="col mb-2 mb-lg-0">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="•"
                                        required
                                    />
                                </div>
                                <div className="col mb-2 mb-lg-0">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="•"
                                        required
                                    />
                                </div>
                                <div className="col mb-2 mb-lg-0">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="•"
                                        required
                                    />
                                </div>
                                <div className="col mb-2 mb-lg-0">
                                    <img
                                        src={rightsmall}
                                        className="rightsmall"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="submit-btn">
                                <input
                                    type="submit"
                                    className="btn get-green mt-0 mt-md-4 mb-3 mb-lg-0"
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

export default Verification;
