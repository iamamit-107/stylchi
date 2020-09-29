import React from "react";
import img from "../../../assets/img/home/deals.png";

const Deals = () => {
    return (
        <div id="deals">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 right-side">
                        <h1>Deals, offers, discounts</h1>
                        <div>
                            <p>
                                Explore exclusive offers for Arzoou users,
                                updated daily!
                            </p>
                            <button className="btn btn-explore">
                                Explore Offers
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-5 text-center">
                        <img src={img} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deals;
