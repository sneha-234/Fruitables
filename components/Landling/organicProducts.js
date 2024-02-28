import Image from "next/image";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const ORGANIC_PRODUCTS = [
  {
    FruitName: "Grapes",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    image: "/assests/images/fruite-item-5.jpg",
  },
  {
    FruitName: "Grapes",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    image: "/assests/images/fruite-item-5.jpg",
  },

  {
    FruitName: "Rasberriess",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    image: "/assests/images/fruite-item-2.jpg",
  },
  {
    FruitName: "Apricots",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    image: "/assests/images/fruite-item-4.jpg",
  },
  {
    FruitName: "Banana",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    image: "/assests/images/fruite-item-3.jpg",
  },
  {
    FruitName: "Oranges",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    image: "/assests/images/fruite-item-1.jpg",
  },

  {
    FruitName: "Rasberriess",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    image: "/assests/images/fruite-item-2.jpg",
  },
  {
    FruitName: "Apricots",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    image: "/assests/images/fruite-item-4.jpg",
  },
];

const OrganicProducts = () => {
  return (
    <div>
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <div className="tab-class text-center">
            <div className="row g-4">
              <div className="col-lg-4 text-start">
                <h1>Our Organic Products</h1>
              </div>
              <div className="col-lg-8 text-end">
                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill active"
                      data-bs-toggle="pill"
                      href="#tab-1"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        All Products
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex py-2 m-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-2"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Vegetables
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-3"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Fruits
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-4"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Bread
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-5"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Meat
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  {ORGANIC_PRODUCTS.map((data, index) => (
                    <div key={index} className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <Image
                            src={data.image}
                            className="img-fluid w-100 rounded-top"
                            alt=""
                            height={100}
                            width={100}
                          />
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>{data.FruitName}</h4>
                          <p>{data.Description}</p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
                            </p>
                            <a
                              href="#"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <FaShoppingBag className="fa fa-shopping-bag me-2 text-primary"></FaShoppingBag>
                              Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                                  
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    </div>
  )
                    
};

export default OrganicProducts;
