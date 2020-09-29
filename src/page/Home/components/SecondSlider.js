import React from "react";
import vector from "../../../assets/img/home/slider-v2.png";
import rating from "../../../assets/img/home/rating.png";
import slider from "../../../assets/img/home/slider1.png";
import slider2 from "../../../assets/img/home/slider2.png";
import slider3 from "../../../assets/img/home/slider3.png";
import slider4 from "../../../assets/img/home/slider4.png";

// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SecondSlider = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <section id="second-slider">
            <div className="container">
                <div className="row upper-text">
                    <div className="col-12">
                        <h2>Experts you will love</h2>
                        <p>
                            Your feedback matters! Here’s a curated list of
                            experts you rated highly.
                        </p>
                    </div>
                </div>
                <Slider {...settings}>
                    <div className="main-slider-sec">
                        <div>
                            <div className="slider-box">
                                <div
                                    className="slider-divider slider-box"
                                    style={{
                                        backgroundImage: `url(${slider})`,
                                        borderRadius: "30px",
                                    }}
                                >
                                    <div className="clearfix heading-top">
                                        <div className="float-left">
                                            <h5>
                                                Oud Metha Road, Wafi Mall 1st
                                                floor Colonnade
                                            </h5>
                                        </div>
                                        <div className="float-right">
                                            <div>
                                                <img src={vector} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="heading-bottom">
                                        <h4>Renate Mollie</h4>
                                        <div className="d-flex align-items-center mb-3">
                                            <img
                                                src={rating}
                                                alt=""
                                                className="img-fluid"
                                            />
                                            <p className="mb-0 ml-3">
                                                (400 Ratings)
                                            </p>
                                        </div>
                                        <p className="mb-0">Price: €</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-slider-sec">
                        <div>
                            <div className="slider-box">
                                <div
                                    className="slider-divider slider-box"
                                    style={{
                                        backgroundImage: `url(${slider2})`,
                                        borderRadius: "30px",
                                    }}
                                >
                                    <div className="clearfix heading-top">
                                        <div className="float-left">
                                            <h5>
                                                Oud Metha Road, Wafi Mall 1st
                                                floor Colonnade
                                            </h5>
                                        </div>
                                        <div className="float-right">
                                            <div>
                                                <img src={vector} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="heading-bottom">
                                        <h4>Mary Jones</h4>
                                        <div className="d-flex align-items-center mb-3">
                                            <img
                                                src={rating}
                                                alt=""
                                                className="img-fluid"
                                            />
                                            <p className="mb-0 ml-3">
                                                (400 Ratings)
                                            </p>
                                        </div>
                                        <p className="mb-0">Price: €€€</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-slider-sec">
                        <div>
                            <div className="slider-box">
                                <div
                                    className="slider-divider slider-box"
                                    style={{
                                        backgroundImage: `url(${slider3})`,
                                        borderRadius: "30px",
                                    }}
                                >
                                    <div className="clearfix heading-top">
                                        <div className="float-left">
                                            <h5>
                                                Oud Metha Road, Wafi Mall 1st
                                                floor Colonnade
                                            </h5>
                                        </div>
                                        <div className="float-right">
                                            <div>
                                                <img src={vector} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="heading-bottom">
                                        <h4>Jules Jacbos</h4>
                                        <div className="d-flex align-items-center mb-3">
                                            <img
                                                src={rating}
                                                alt=""
                                                className="img-fluid"
                                            />
                                            <p className="mb-0 ml-3">
                                                (400 Ratings)
                                            </p>
                                        </div>
                                        <p className="mb-0">Price: €€€</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-slider-sec">
                        <div>
                            <div className="slider-box">
                                <div
                                    className="slider-divider slider-box"
                                    style={{
                                        backgroundImage: `url(${slider4})`,
                                        borderRadius: "30px",
                                    }}
                                >
                                    <div className="clearfix heading-top">
                                        <div className="float-left">
                                            <h5>
                                                Oud Metha Road, Wafi Mall 1st
                                                floor Colonnade
                                            </h5>
                                        </div>
                                        <div className="float-right">
                                            <div>
                                                <img src={vector} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="heading-bottom">
                                        <h4>Jack Sparrow</h4>
                                        <div className="d-flex align-items-center mb-3">
                                            <img
                                                src={rating}
                                                alt=""
                                                className="img-fluid"
                                            />
                                            <p className="mb-0 ml-3">
                                                (400 Ratings)
                                            </p>
                                        </div>
                                        <p className="mb-0">Price: €€€</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-slider-sec">
                        <div>
                            <div className="slider-box">
                                <div
                                    className="slider-divider slider-box"
                                    style={{
                                        backgroundImage: `url(${slider})`,
                                        borderRadius: "30px",
                                    }}
                                >
                                    <div className="clearfix heading-top">
                                        <div className="float-left">
                                            <h5>
                                                Oud Metha Road, Wafi Mall 1st
                                                floor Colonnade
                                            </h5>
                                        </div>
                                        <div className="float-right">
                                            <div>
                                                <img src={vector} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="heading-bottom">
                                        <h4>Renate Mollie</h4>
                                        <div className="d-flex align-items-center mb-3">
                                            <img
                                                src={rating}
                                                alt=""
                                                className="img-fluid"
                                            />
                                            <p className="mb-0 ml-3">
                                                (400 Ratings)
                                            </p>
                                        </div>
                                        <p className="mb-0">Price: €</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default SecondSlider;
