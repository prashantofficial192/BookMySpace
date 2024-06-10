import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";
import "./responsive.css"

const Banner = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className='banquet banner-item'>
                    <div className="banner-content">
                        <h2>Celebrate in Style</h2>
                        <p>Find the perfect venue for your weddings, parties, and corporate events.</p>
                        <button>Explore Banquets</button>
                    </div>

                </div>
                <div className='turf banner-item'>
                    <div className="banner-content">
                        <h2>Play on Premium Turfs</h2>
                        <p>Book top-quality turfs for football, cricket, and other sports activities.</p>
                        <button>Explore Turfs</button>
                    </div>
                </div>
                <div className='restaurant banner-item'>
                    <div className="banner-content">
                        <h2>Discover Exquisite Dining</h2>
                        <p>Experience culinary delights from around the world in our top-rated restaurants.</p>
                        <button>Explore Restaurants</button>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Banner;

