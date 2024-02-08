import Image from "next/image";
import React from "react";
import { FaShoppingBag, FaStar } from "react-icons/fa";

const BESTSALLER_DATA_2 = [
  {
    title: "Oranges",
    rate: "3.12 $",
    image: "/assests/images/fruite-item-1.jpg",
  },
  {
    title: "Rassberies",
    rate: "2.12 $",
    image: "/assests/images/fruite-item-2.jpg",
  },
  {
    title: "Banana",
    rate: "3.00 $",
    image: "/assests/images/fruite-item-3.jpg"
  },
  {
    title: "Papaya",
    rate: "2.12",
    image: "/assests/images/fruite-item-4.jpg"
  }
];

const BestSeller2 = () => {
  return (

      <div className="row g-4">
        {BESTSALLER_DATA_2.map((data,index)=>
        {
            return (
                <div  key = {index}className="col-md-6 col-lg-6 col-xl-3">
                <div className="text-center">
                  <Image
                    src={data.image}
                    className="img-fluid rounded"
                    alt=""
                    height={500}
                    width={500}
                  />
                  <div className="py-4">
                    <a href="#" className="h5">
                      {data.title}
                    </a>
                    <div className="d-flex my-3 justify-content-center">
                      <FaStar className="fas fa-star text-primary"/>
                      <FaStar className="fas fa-star text-primary"/>
                      <FaStar className="fas fa-star text-primary"/>
                      <FaStar className="fas fa-star text-primary"/>
                      <FaStar className="fas fa-star"/>
                    </div>
                    <h4 className="mb-3">{data.rate}</h4>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <FaShoppingBag className="fa fa-shopping-bag me-2 text-primary"/> Add to cart
                    </a>
                  </div>
                </div>
              </div>

            )
        })}
    </div>
  );
};

export default BestSeller2;
