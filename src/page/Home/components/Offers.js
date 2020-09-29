import React from "react";
import img from "../../../assets/img/home/offers.png";

const Offers = () => {
    return (
        <div id="offers">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Our latest offers</h1>
                        <h4>Complete 5 services and get one free</h4>
                    </div>
                    <div className="col-12 text-center py-5">
                        <img src={img} alt="" className="img-fluid" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-9">
                        <h5>Things to keep in mind:</h5>
                        <p>- This offer is valid until 5-10-2020.</p>
                        <p>
                            - After your 5th service, you will receive a promo
                            code by email that you can use on your 6th booking
                            to get the full discount.
                        </p>
                        <p>- Max discount in 50 Euros.</p>
                    </div>
                    <div className="col-md-3 text-lg-center">
                        <button className="btn book-now">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;
