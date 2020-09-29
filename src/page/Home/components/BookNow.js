import React from "react";
import card from "../../../assets/img/home/card-img.png";
import rating from "../../../assets/img/home/rating2.png";

const BookNow = () => {
    return (
        <section id="book-now">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="left-side">
                            <div>
                                <h2>Can’t make it to the salon?</h2>
                                <h2>The salon comes to you!</h2>
                            </div>

                            <div>
                                <h2>
                                    Book at-home beauty and personal care
                                    services
                                </h2>
                                <button className="btn book-now-btn">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 h-100">
                        <div className="overlay"></div>
                        <div className="right-side-book">
                            <div className="salon-card">
                                <div className="d-flex salon-card-inner">
                                    <img
                                        src={card}
                                        alt=""
                                        className="img-fluid profile-img"
                                    />
                                    <div className="ml-3">
                                        <h5>Renate Mollie</h5>
                                        <img
                                            src={rating}
                                            alt=""
                                            className="img-fluid mb-2 rating"
                                        />
                                        <p>Price: €</p>
                                    </div>
                                </div>
                            </div>

                            <div className="salon-card">
                                <div className="d-flex salon-card-inner">
                                    <img
                                        src={card}
                                        alt=""
                                        className="img-fluid profile-img"
                                    />
                                    <div className="ml-3">
                                        <h5>Renate Mollie</h5>
                                        <img
                                            src={rating}
                                            alt=""
                                            className="img-fluid mb-2 rating"
                                        />
                                        <p>Price: €</p>
                                    </div>
                                </div>
                            </div>

                            <div className="salon-card">
                                <div className="d-flex salon-card-inner">
                                    <img
                                        src={card}
                                        alt=""
                                        className="img-fluid profile-img"
                                    />
                                    <div className="ml-3">
                                        <h5>Renate Mollie</h5>
                                        <img
                                            src={rating}
                                            alt=""
                                            className="img-fluid mb-2 rating"
                                        />
                                        <p>Price: €</p>
                                    </div>
                                </div>
                            </div>

                            <div className="salon-card">
                                <div className="d-flex salon-card-inner">
                                    <img
                                        src={card}
                                        alt=""
                                        className="img-fluid profile-img"
                                    />
                                    <div className="ml-3">
                                        <h5>Renate Mollie</h5>
                                        <img
                                            src={rating}
                                            alt=""
                                            className="img-fluid mb-2 rating"
                                        />
                                        <p>Price: €</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookNow;
