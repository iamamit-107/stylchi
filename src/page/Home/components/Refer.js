import React from "react";
import img from "../../../assets/img/home/refer-main.png";
import img1 from "../../../assets/img/home/refer1.png";
import img2 from "../../../assets/img/home/refer2.png";
import img3 from "../../../assets/img/home/refer3.png";

const Refer = () => {
    return (
        <div id="Refer-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <h1>Refer a friend</h1>
                        <p>
                            A spa day with your friend and a discount? Awesome!
                        </p>
                        <br />
                        <p>
                            Invite your friend to Arzoou and earn €10 in credits
                            when they complete their first booking! Your friend
                            gets €10 off on their first booking too!
                        </p>

                        <div className="d-flex img-text mt-5">
                            <img src={img1} alt="" className="img-fluid" />
                            <p>Log into your Arzoou account</p>
                        </div>

                        <div className="d-flex img-text">
                            <img src={img2} alt="" className="img-fluid" />
                            <p>Copy & share your referral code via email</p>
                        </div>

                        <div className="d-flex img-text">
                            <img src={img3} alt="" className="img-fluid" />
                            <p>
                                Your friend receives a credit and you get yours
                                when your friend completes his first booking
                            </p>
                        </div>

                        <div className="col-md-3 text-lg-center">
                            <button className="btn book-now">
                                Register Now
                            </button>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-6 text-center">
                        <img src={img} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Refer;
