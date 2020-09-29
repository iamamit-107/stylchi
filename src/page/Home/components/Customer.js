import React from "react";
import rating from "../../../assets/img/home/rating-large.png";
import rating2 from "../../../assets/img/home/rating-small.png";
import btn1 from "../../../assets/img/home/btn-left.png";
import btn2 from "../../../assets/img/home/btn-right.png";
import customer from "../../../assets/img/home/customer.png";

const Customer = () => {
    return (
        <div id="customer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img
                            src={rating}
                            alt=""
                            className="img-fluid rating-big"
                        />
                        <h1>What our customers are saying</h1>
                        <button className="btn btn1">
                            <img src={btn2} alt="" className="img-fluid" />
                        </button>
                        <button className="btn btn1 ml-3">
                            <img src={btn1} alt="" className="img-fluid" />
                        </button>
                    </div>
                    <div className="col-lg-6">
                        <img src={customer} alt="" className="img-fluid" />
                        <h5>
                            Lucky to have come across this Brilliant software
                            and a 1st class company. I would recommend to anyone
                            and my staff love it!
                        </h5>
                        <h6>Jamie Anderson</h6>
                        <img src={rating2} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;
