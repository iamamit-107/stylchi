import React, { useEffect, useState } from "react";
import "../../assets/scss/home.scss";

import img from "../../assets/img/home/message.png";

import home from "../../assets/img/home/home.png";
import venue from "../../assets/img/home/venue.png";
import haircut from "../../assets/img/home/haircut.png";
import arrow from "../../assets/img/home/arrow.png";
import bg from "../../assets/img/home/bg.png";
import SliderCategory from "./components/Slider";
import Navbar from "./components/Navbar";
import SecondSlider from "./components/SecondSlider";
import BookNow from "./components/BookNow";
import Deals from "./components/Deals";
import Offers from "./components/Offers";
import Refer from "./components/Refer";
import Safety from "./components/Safety";
import Footer from "./components/Footer";
import Customer from "./components/Customer";

const Home = () => {
    const [display, setDisplay] = useState("d-none");
    useEffect(() => {
        const ab = document.getElementById("messenger");
        document.addEventListener("scroll", () => {
            const scrollY = window.scrollY > 400 ? "d-block" : "d-none";

            if (window.scrollY > 400) {
                ab.classList.remove("d-block");
            } else {
                ab.classList.add("d-none");
            }

            setDisplay(scrollY);
        });
    }, []);
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
                            <div className="d-flex pt-5 btn-group-banner">
                                <button className="btn btn-venue">
                                    <img
                                        src={venue}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </button>
                                <button className="btn btn-home">
                                    <img
                                        src={home}
                                        alt=""
                                        className="img-fluid"
                                    />
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

            {/* second slider */}
            <SecondSlider />

            {/* Book now section */}
            <BookNow />

            {/* DEals */}
            <Deals />

            {/* offers section */}
            <Offers />

            {/* refer section */}
            <Refer />

            {/* customer */}
            <Customer />

            {/* safety section */}
            <Safety />

            {/* footer */}
            <Footer />

            <div
                id="messenger"
                className={`${display} === 'd-none' ? 'd-none' : 'd-block messanger'`}
            >
                <img src={img} alt="" className="img-fluid" />
            </div>
        </>
    );
};

export default Home;
