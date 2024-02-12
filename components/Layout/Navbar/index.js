import React from "react";
import Link from "next/link";
import {
  FaShoppingBag,
  FaUser,
  FaMap,
  FaEnvelope,
  FaSearch,
} from "react-icons/fa";

const NavBar = () => {
  return (
    <div>
      <div className="container-fluid fixed-top">
        <div className="container topbar bg-primary d-none d-lg-block">
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <FaMap className="fas fa-map-marker-alt me-2 text-secondary"></FaMap>{" "}
                <Link href="#" className="text-white">
                  123 Street, New York
                </Link>
              </small>
              <small className="me-3">
                <FaEnvelope className="fas fa-envelope me-2 text-secondary"></FaEnvelope>
                <Link href="#" className="text-white">
                  Email@Example.com
                </Link>
              </small>
            </div>
            <div className="top-link pe-2">
              <Link href="#" className="text-white">
                <small className="text-white mx-2">Privacy Policy</small>/
              </Link>
              <Link href="#" className="text-white">
                <small className="text-white mx-2">Terms of Use</small>/
              </Link>
              <Link href="#" className="text-white">
                <small className="text-white ms-2">Sales and Refunds</small>
              </Link>
            </div>
          </div>
        </div>
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <Link href="index.html" className="navbar-brand">
              <h1 className="text-primary display-6">Fruitables</h1>
            </Link>
            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div
              className="collapse navbar-collapse bg-white"
              id="navbarCollapse"
            >
              <div className="navbar-nav mx-auto">
                <Link href="/Home" className="nav-item nav-link active">
                  Home
                </Link>
                <Link href="/shop" className="nav-item nav-link">
                  Shop
                </Link>
                <Link href="/shop-detail" className="nav-item nav-link">
                  Shop Detail
                </Link>
                <div className="nav-item dropdown">
                  <Link
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </Link>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <Link href="/cart" className="dropdown-item">
                      Cart
                    </Link>
                    <Link href="/checkout" className="dropdown-item">
                      Checkout
                    </Link>
                    <Link href="/Testimonial" className="dropdown-item">
                      Testimonial
                    </Link>
                    <Link href="/404" className="dropdown-item">
                      404 Page
                    </Link>
                  </div>
                </div>
                <Link href="contact.html" className="nav-item nav-link">
                  Contact
                </Link>
              </div>
              <div className="d-flex m-3 me-0">
                <button
                  className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                >
                  <FaSearch className="fas fa-search text-primary"></FaSearch>
                </button>
                <Link href="#" className="position-relative me-4 my-auto">
                  <FaShoppingBag className="fa fa-shopping-bag fa-2x"></FaShoppingBag>
                  <span
                    className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                    style={{
                      top: "-5px",
                      left: "15px",
                      height: "20px",
                      minWidth: "20px",
                    }}
                  >
                    3
                  </span>
                </Link>
                <Link href="#" className="my-auto">
                  <FaUser className="fas fa-user fa-2x"></FaUser>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
