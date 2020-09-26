import React from "react";
import "../../assets/scss/home.scss";

import home from "../../assets/img/home/home.png";
import venue from "../../assets/img/home/venue.png";
import haircut from "../../assets/img/home/haircut.png";
import arrow from "../../assets/img/home/arrow.png";
import bg from "../../assets/img/home/bg.png";
import SliderCategory from "./components/Slider";
import Navbar from "./components/Navbar";

const Home = () => {
    return (
        <>
            <section id="banner" style={{ backgroundImage: `url(${bg})` }}>
                {/* navbar component */}
                <Navbar />

                <div className="container h-80 mt-md-5 pt-md-5">
                    <div className="row align-items-center h-100">
                        <div className="col-12">
                            <h2>
                                Beauty & Personal Care: <br /> Anytime, Anywhere
                            </h2>
                            <div className="d-flex pt-5">
                                <button className="btn btn-venue">
                                    <img src={venue} alt="" />
                                </button>
                                <button className="btn btn-home">
                                    <img src={home} alt="" />
                                </button>
                            </div>
                            <div className="d-flex search-box mt-5">
                                <img
                                    src={haircut}
                                    alt=""
                                    className="img-fluid mr-3 d-none d-md-block"
                                />
                                <select name="" id="">
                                    <option value="">Haircut</option>
                                </select>
                                <input
                                    type="text"
                                    className="address-input"
                                    placeholder="Enter your address here to book your home service"
                                />
                                <button className="btn btn-arrow">
                                    <img src={arrow} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Slider section */}
            <SliderCategory />
        </>
    );
};

export default Home;
