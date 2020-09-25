import React from "react";
import "../../../assets/scss/registration.scss";
import card from "../../../assets/img/login/card.png";
import translate from "../../../assets/img/login/translate.png";
import bg from "../../../assets/img/login/login-bg.png";
import rightsmall from "../../../assets/img/login/right-smaller.png";
import matchbg from "../../../assets/img/login/match-bg.png";
import LeftSide from "../Components/LeftSide";
import ButtonWithImg from "../Components/ButtonWithImg";

const Registration = () => {
    return (
        <div id="registration">
            <div className="container-fluid h-100">
                <div className="row h-100 align-items-center">
                    <div
                        className="col-lg-4 h-100 login-bg"
                        style={{ backgroundImage: `url(${bg})` }}
                    >
                        <LeftSide />
                    </div>

                    <div className="col-lg-8 px-lg-5">
                        {/*  */}
                        <ButtonWithImg />

                        <div className="mt-5">
                            <form>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="First name"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mt-3 mt-md-0">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Last name"
                                            required
                                        />
                                    </div>
                                </div>

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
                                    <div className="col-md-6">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Create a password"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mt-3 mt-md-0">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Confirm password"
                                        />
                                        <div
                                            className="password-match"
                                            style={{
                                                backgroundImage: `url(${matchbg})`,
                                            }}
                                        >
                                            <img src={rightsmall} alt="" />
                                            <p>
                                                password <br /> matched
                                            </p>
                                        </div>
                                        <div className="password-progress">
                                            <div className="progress">
                                                <div
                                                    className="progress-bar bg-progress"
                                                    role="progressbar"
                                                    style={{ width: "40%" }}
                                                    aria-valuenow="25"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                            <div>
                                                <p className="week-pass">
                                                    WEAK password
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* card field */}
                                <div className="row mb-3">
                                    <div className="col-lg-9">
                                        <div className="form-control">
                                            <div
                                                style={{
                                                    position: "relative",
                                                    top: "-18px",
                                                    display: "flex",
                                                }}
                                            >
                                                <div className="dropdown">
                                                    <button
                                                        className="btn dropdown-toggle"
                                                        type="button"
                                                        id="dropdownMenuButton"
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        style={{
                                                            borderRight:
                                                                "1px solid rgba(34, 34, 59, 0.22)",
                                                            borderRadius: "0",
                                                        }}
                                                    >
                                                        <img
                                                            src={card}
                                                            alt=""
                                                        />
                                                    </button>
                                                    <div
                                                        className="dropdown-menu"
                                                        aria-labelledby="dropdownMenuButton"
                                                    >
                                                        <div className="dropdown-item">
                                                            <img
                                                                src={card}
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    className="d-flex align-items-center"
                                                    style={{
                                                        width: "70%",
                                                        marginLeft: "20px",
                                                    }}
                                                >
                                                    <span>+372</span>
                                                    <input
                                                        type="text"
                                                        className="mobile-input"
                                                        placeholder="Enter your mobile number"
                                                        style={{
                                                            width: "100%",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-8 col-md-4 col-lg-3 mt-3 mt-lg-0">
                                        <div className="form-control">
                                            <div
                                                style={{
                                                    position: "relative",
                                                    top: "-10px",
                                                }}
                                            >
                                                <img src={translate} alt="" />
                                                <select
                                                    name=""
                                                    id=""
                                                    style={{
                                                        marginLeft: "5px",
                                                        width: "70%",
                                                        border: "none",
                                                    }}
                                                >
                                                    <option value="">
                                                        ENG
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* checkbox text */}
                                <div className="row">
                                    <div className="col-12 mb-2">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="defaultCheck1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="defaultCheck1"
                                            >
                                                By creating an account you agree
                                                to our <a>Booking Policy</a>.
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="defaultCheck2"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="defaultCheck2"
                                            >
                                                I would love to receive
                                                personalized emails containing
                                                style tips and offers. <br />{" "}
                                                You can change your preferences
                                                at any time, you can read about
                                                it in our
                                                <a> Privacy Policy</a>.
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <input
                                    type="submit"
                                    className="btn get-green mb-3 mb-lg-0"
                                    value="GET STARTED"
                                ></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
