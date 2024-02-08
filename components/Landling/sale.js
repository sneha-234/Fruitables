import Image from "next/image";
import React from "react";

const OFFER_DATA = [
  {
    title: "Fresh Apples",
    subtitle: "20% OFF",
    image: "/assests/images/featur-1.jpg",
    containerStyle: "service-item bg-secondary rounded border border-secondary",
  },
  {
    title: "Tasty Fruits",
    subtitle: "Free delivery",
    image: "/assests/images/featur-2.jpg",
    containerStyle: "service-item bg-dark rounded border border-dark",
  },
  {
    title: "Exotic Vegitable",
    subtitle: "Discount 30$",
    image: "/assests/images/featur-3.jpg",
    containerStyle: "service-item bg-primary rounded border border-primary",
  },
];
const Sale = () => {
  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          {OFFER_DATA.map((data, index) => {
            return (
              <div key={index} className="col-md-6 col-lg-4">
                <a href="#">
                  <div className={data.containerStyle}>
                    <Image
                      src={data.image}
                      className="img-fluid rounded-top w-100"
                      height={100}
                      width={100}
                      alt=""
                    />
                    <div className="px-4 rounded-bottom">
                      <div className="service-content bg-primary text-center p-4 rounded">
                        <h5 className="text-white">{data.title}</h5>
                        <h3 className="mb-0">{data.subtitle}</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sale;
