import React from "react";
import "../../../assets/scss/forgetPassword.scss";
import img from "../../../assets/img/login/thankyou.png";
import { Link } from "react-router-dom";

const ThankYou = () => {
    return (
        <div id="forget-pass">
            <div className="container py-5 py-lg-0">
                <div
                    className="row align-items-center"
                    style={{ height: "100vh" }}
                >
                    <div className="col-lg-5 text-center">
                        <img src={img} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-7 px-lg-5 mt-5 mt-md-0">
                        <h1>Thank you!</h1>
                        <p>
                            Your account has been created, start booking your
                            beauty service now!
                        </p>

                        <div className="row">
                            <div className="col submit-btn">
                                <Link
                                    to={`${process.env.PUBLIC_URL}/`}
                                    className="btn get-green d-inline-block mt-4 mb-3 mb-lg-0"
                                >
                                    GO TO HOMEPAGE
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
