import React from "react";
import img from "../../../assets/img/home/safety-arrow.png";

const Safety = () => {
    return (
        <div id="safety">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h1>Safety, first.</h1>
                        <p>
                            With the spread of COVID-19, the importance of safe
                            practices has become the primary concern for service
                            providers and customers. As a strong advocate for
                            safe and hygienic practices in the beauty and
                            personal care industry, Arzoou commits to...
                        </p>
                        <a href="!#">
                            Learn more{" "}
                            <span>
                                <img src={img} className="img-fluid" alt="" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Safety;
