import React, { useRef, useEffect } from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const TEST_DATA = [
  {
    client: "Client Name 1",
    profession: "Profession",
    description:
      "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/assests/images/testimonial-1.jpg",
  },
  {
    client: "Client Name 2",
    profession: "Profession",
    description:
      "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/assests/images/testimonial-1.jpg",
  },
  {
    client: "Client Name 3",
    profession: "Profession",
    description:
      "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/assests/images/testimonial-1.jpg",
  },
];

const Testimonial = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
  
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0); 
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="container-fluid testimonial py-5">
      <div className="container py-5">
        <div className="testimonial-header text-center">
          <h4 className="text-primary">Our Testimonials</h4>
          <h1 className="display-5 mb-5 text-dark">What Our Clients Say</h1>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {TEST_DATA.map((data, index) => (
            <div key={index} className="testimonial-item">
              <div className="position-relative">
                <FaQuoteRight className="quote-icon" />
                <p className="mb-4">{data.description}</p>
                <div className="d-flex align-items-center">
                  <div className="image-container">
                    <Image
                      src={data.image}
                      className="img-fluid rounded"
                      alt={data.client}
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">{data.client}</h4>
                    <p className="m-0 pb-3">{data.profession}</p>
                    <div className="d-flex">
                      <FaStar className="star-icon" />
                      <FaStar className="star-icon" />
                      <FaStar className="star-icon" />
                      <FaStar className="star-icon" />
                      <FaStar className="star-icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
