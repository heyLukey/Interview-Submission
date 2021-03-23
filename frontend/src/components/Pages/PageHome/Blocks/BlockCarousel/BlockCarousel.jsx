import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "./BlockCarousel.css";

// Carousel block
// Displays a swiper using images and text taken from the API
SwiperCore.use([Navigation, Pagination]);
const BlockCarousel = () => {
  // Send to ContactUs page
  const history = useHistory();
  const toContactUs = () => {
    history.push("/contact-us");
    window.scrollTo(0, 0);
  };

  // Slides state
  // Default displays loading text
  const [slides, setSlides] = useState([
    <SwiperSlide key={`loading-slide`} tag="li">
      {/* Text overlay */}
      <div className="constant-text">
        <h1>Loading Slides...</h1>
        <p>Loading Slides...</p>
        <button className="btn-contact" onClick={toContactUs}>
          Contact us
        </button>
      </div>
    </SwiperSlide>,
  ]);

  // Get slides from API call on page render
  useEffect(() => {
    const getBanner = () => {
      axios
        .get(
          "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details"
        )
        .then((res) => {
          if (res.data.Errors.length === 0) {
            const details = res.data.Details;
            const tmp_slides = [];
            // Iterate over recieved details and push html for swiper
            for (let i = 0; i < details.length; i++) {
              tmp_slides.push(
                <SwiperSlide key={`slide-${i}`} tag="li">
                  {/* Text overlay */}
                  <div className="constant-text">
                    <h1>{details[i].Title}</h1>
                    <p>{details[i].Subtitle}</p>
                    <button className="btn-contact" onClick={toContactUs}>
                      Contact us
                    </button>
                  </div>
                  {/* Image */}
                  <img
                    className="image"
                    src={details[i].ImageUrl}
                    alt={`slide-${i}`}
                  />
                  {/* Shadow box */}
                  <div className="shadow"></div>
                </SwiperSlide>
              );
            }
            setSlides(tmp_slides);
          }
        })
        .catch((err) => {
          console.log("test");
          console.log(err);
          setSlides([
            <SwiperSlide key={`loading-slide`} tag="li">
              {/* Text overlay */}
              <div className="constant-text">
                <h1>Error occured</h1>
                <p>Something went wrong with getting info from the API!</p>
                <button className="btn-contact" onClick={toContactUs}>
                  Contact us
                </button>
              </div>
              <div className="black-div"></div>
            </SwiperSlide>,
          ]);
        });
    };
    getBanner();
  }, [setSlides]);

  return (
    <React.Fragment>
      <div id="block-carousel">
        <Swiper
          tag="section"
          wrapperTag="ul"
          id="main"
          loop={true}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
        >
          {slides}
        </Swiper>
      </div>
    </React.Fragment>
  );
};
export default BlockCarousel;
