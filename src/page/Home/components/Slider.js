import React from "react";

// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import beautysalon from "../../../assets/img/home/b-salon.png";
import hairsalon from "../../../assets/img/home/hair-salon.png";
import eyebrow from "../../../assets/img/home/eyebrow.png";
import beard from "../../../assets/img/home/beard.png";
import hairdry from "../../../assets/img/home/hair-dry.png";
import nails from "../../../assets/img/home/nails.png";
import spa from "../../../assets/img/home/spa.png";
import spray from "../../../assets/img/home/spray.png";
import therapy from "../../../assets/img/home/therapy.png";
import wahsing from "../../../assets/img/home/washing.png";

const SliderCategory = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <section id="slider">
            <div className="container">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className="text-center slider-box">
                            <img
                                src={beautysalon}
                                alt=""
                                className="img-fluid"
                            />

                            <h5>Beauty salon</h5>
                        </div>

                        <div className="text-center slider-box">
                            <img src={hairsalon} alt="" className="img-fluid" />
                            <h5>Hair salon</h5>
                        </div>

                        <div className="text-center slider-box">
                            <img src={beard} alt="" className="img-fluid" />
                            <h5>Beard</h5>
                        </div>

                        <div className="text-center slider-box">
                            <img src={nails} alt="" className="img-fluid" />
                            <h5>Nails</h5>
                        </div>

                        <div className="text-center slider-box">
                            <img src={eyebrow} alt="" className="img-fluid" />
                            <h5>Eyebrows & Lashes</h5>
                        </div>

                        <div className="text-center slider-box">
                            <img src={wahsing} alt="" className="img-fluid" />
                            <h5>Waxing</h5>
                        </div>

                        <div className="text-center slider-box">
                            <img src={spa} alt="" className="img-fluid" />
                            <h5>Spa</h5>
                        </div>

                        <div className="text-center slider-box">
                            <img src={therapy} alt="" className="img-fluid" />
                            <h5>Therapy Center</h5>
                        </div>

                        <div className="text-center slider-box">
                            <img src={spray} alt="" className="img-fluid" />
                            <h5>Spray Tanning</h5>
                        </div>

                        <div className="text-center slider-box">
                            <img src={hairdry} alt="" className="img-fluid" />
                            <h5>Hair Dry</h5>
                        </div>

                        <div className="text-center slider-box">
                            <img
                                src={beautysalon}
                                alt=""
                                className="img-fluid"
                            />

                            <h5>Beauty salon</h5>
                        </div>

                        <div className="text-center slider-box">
                            <img src={hairsalon} alt="" className="img-fluid" />
                            <h5>Hair salon</h5>
                        </div>

                        <div className="text-center slider-box">
                            <img src={beard} alt="" className="img-fluid" />
                            <h5>Beard</h5>
                        </div>

                        <div className="text-center slider-box">
                            <img src={nails} alt="" className="img-fluid" />
                            <h5>Nails</h5>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default SliderCategory;
