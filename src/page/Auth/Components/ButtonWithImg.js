import React from "react";
import right from "../../../assets/img/login/right.svg";
import user from "../../../assets/img/login/user.svg";
import partner from "../../../assets/img/login/partner.png";
import { Link } from "react-router-dom";

const ButtonWithImg = () => {
    return (
        <div className="d-flex mt-5 mt-lg-0 btn-with-img">
            <button className="btn customer-btn">
                <img src={user} alt="" className="img-fluid" />
                <p className="btn-text">
                    I’m a <br /> Customer
                </p>
                <img className="icon" src={right} alt="" />
            </button>

            <button className="btn partner-btn">
                <img src={partner} alt="" className="img-fluid" />
                <p className="btn-text">
                    I’m a <br /> Partner
                </p>
            </button>
        </div>
    );
};

export default ButtonWithImg;
