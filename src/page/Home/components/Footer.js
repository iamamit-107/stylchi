import React from "react";
import logo from "../../../assets/img/home/logo-white.png";
import fb from "../../../assets/img/home/fb.png";
import insta from "../../../assets/img/home/insta.png";
import linkedin from "../../../assets/img/home/linkedin.png";

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="logo">
                            <img src={logo} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-6 text-lg-right">
                        <div className="social">
                            <a href="!#" className="mr-3">
                                <img src={fb} alt="" className="img-fluid" />
                            </a>

                            <a href="!#" className="mr-3">
                                <img src={insta} alt="" className="img-fluid" />
                            </a>

                            <a href="!#" className="mr-3">
                                <img
                                    src={linkedin}
                                    alt=""
                                    className="img-fluid"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row second-sec">
                    <div className="col-lg-5 first-col">
                        <h1>Our locations</h1>
                        <div>
                            <button className="btn btn-white1">Tallinn</button>
                        </div>
                        <div>
                            <button className="btn btn-white2">
                                More locations coming soon
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6">
                        <h5>Company</h5>
                        <div className="border"></div>
                        <li>
                            <a href="!#">About us</a>
                        </li>
                        <li>
                            <a href="!#">Blog</a>
                        </li>
                        <li>
                            <a href="!#">Career</a>
                        </li>
                    </div>
                    <div className="col-lg-2 col-6">
                        <h5>Product</h5>
                        <div className="border"></div>
                        <li>
                            <a href="!#">FAQs</a>
                        </li>
                        <li>
                            <a href="!#">Support</a>
                        </li>
                    </div>
                    <div className="col-lg-3 ">
                        <h5>Legal</h5>
                        <div className="border"></div>
                        <li>
                            <a href="!#">Privacy policy</a>
                        </li>
                        <li>
                            <a href="!#">Booking policy</a>
                        </li>
                        <li>
                            <a href="!#">Partner policy</a>
                        </li>
                    </div>
                </div>

                <div className="row pt-5 pb-4">
                    <div className="col-12 text-center">
                        <p className="copy">
                            Stylchi is a company registered in Estonia with
                            registration number 16062115.{" "}
                        </p>
                        <p className="copy">© 2020 Stylchi.com OU</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
