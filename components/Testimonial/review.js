import Image from "next/image";
import React from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";

const TEST_DATA = [
  {
    client: "Client Name",
    profession: "Profession",
    Description:
      "lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,",
    Image: "/assests/images/testimonial-1.jpg",
  },
  {
    client: "Client Name",
    profession: "Profession",
    Description:
      "lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,",
    Image: "/assests/images/testimonial-1.jpg",
  },
  {
    client: "Client Name",
    profession: "Profession",
    Description:
      "lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,",
    Image: "/assests/images/testimonial-1.jpg",
  },
];
const Review = () => {
  return (
    <div>
      <div class="container-fluid testimonial py-5">
        <div class="container py-5">
          <div class="testimonial-header text-center">
            <h4 class="text-primary">Our Testimonial</h4>
            <h1 class="display-5 mb-5 text-dark">Our Client Saying!</h1>
          </div>
          <div class="owl-carousel testimonial-carousel">
            {TEST_DATA.map((data, index) => {
              return (
                <div
                  key={index}
                  class="testimonial-item img-border-radius bg-light rounded p-4"
                >
                  <div class="position-relative">
                    <FaQuoteRight
                      class="fa fa-quote-right fa-2x text-secondary position-absolute"
                      style={{ bottom: "30px", right: "0;" }}
                    ></FaQuoteRight>
                    <div class="mb-4 pb-4 border-bottom border-secondary">
                      <p class="mb-0">{data.Description}</p>
                    </div>
                    <div class="d-flex align-items-center flex-nowrap">
                      <div class="bg-secondary rounded">
                        <Image
                          src={data.Image}
                          class="img-fluid rounded"
                          height={100}
                          width={100}
                          alt=""
                        />
                      </div>
                      <div class="ms-4 d-block">
                        <h4 class="text-dark">{data.client}</h4>
                        <p class="m-0 pb-3">{data.profession}</p>
                        <div class="d-flex pe-5">
                          <FaStar class="fas fa-star text-primary"></FaStar>
                          <FaStar class="fas fa-star text-primary"></FaStar>
                          <FaStar class="fas fa-star text-primary"></FaStar>
                          <FaStar class="fas fa-star text-primary"></FaStar>
                          <FaStar class="fas fa-star"></FaStar>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
