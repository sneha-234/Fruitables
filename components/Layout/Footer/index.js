import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Form } from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <div>
      <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
        <div className="container py-5">
          <div
            className="pb-4 mb-4"
            style={{ borderBottom: "1px solid rgba(226, 175, 24, 0.5) " }}
          >
            <div className="row g-4">
              <div className="col-lg-3">
                <Link href="#">
                  <h1 className="text-primary mb-0">Fruitables</h1>
                  <p className="text-secondary mb-0">Fresh products</p>
                </Link>
              </div>
              <Form className="col-lg-6">
                <div className="position-relative mx-auto">
                  <input
                    className="form-control border-0 w-100 py-3 px-4 rounded-pill"
                    type="number"
                    placeholder="Your Email"
                  />
                  <Button
                    type="submit"
                    className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white"
                    style={{ top: "0", right: "0" }}
                  >
                    Subscribe Now
                  </Button>
                </div>
              </Form>
              <div className="col-lg-3">
                <div className="d-flex justify-content-end pt-3">
                  <Link
                    className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle"
                    href=""
                  >
                    <FaTwitter className="fab fa-twitter"></FaTwitter>
                  </Link>
                  <Link
                    className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                    href=""
                  >
                    <FaFacebook className="fab fa-facebook-f"></FaFacebook>
                  </Link>
                  <Link
                    className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                    href=""
                  >
                    <FaYoutube className="fab fa-youtube"></FaYoutube>
                  </Link>
                  <Link
                    className="btn btn-outline-secondary btn-md-square rounded-circle"
                    href=""
                  >
                    <FaLinkedin className="fab fa-linkedin-in"></FaLinkedin >
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 className="text-light mb-3">Why People Like us!</h4>
                <p className="mb-4">
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the like Aldus PageMaker
                  including of Lorem Ipsum.
                </p>
                <Link
                  href=""
                  className="btn border-secondary py-2 px-4 rounded-pill text-primary"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column text-start footer-item">
                <h4 className="text-light mb-3">Shop Info</h4>
                <Link className="btn-link" href="">
                  About Us
                </Link>
                <Link className="btn-link" href="">
                  Contact Us
                </Link>
                <Link className="btn-link" href="">
                  Privacy Policy
                </Link>
                <Link className="btn-link" href="">
                  Terms & Condition
                </Link>
                <Link className="btn-link" href="">
                  Return Policy
                </Link>
                <Link className="btn-link" href="">
                  FAQs & Help
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column text-start footer-item">
                <h4 className="text-light mb-3">Account</h4>
                <Link className="btn-link" href="">
                  My Account
                </Link>
                <Link className="btn-link" href="">
                  Shop details
                </Link>
                <Link className="btn-link" href="">
                  Shopping Cart
                </Link>
                <Link className="btn-link" href="">
                  Wishlist
                </Link>
                <Link className="btn-link" href="">
                  Order History
                </Link>
                <Link className="btn-link" href="">
                  International Orders
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 className="text-light mb-3">Contact</h4>
                <p>Address: 1429 Netus Rd, NY 48247</p>
                <p>Email: Example@gmail.com</p>
                <p>Phone: +0123 4567 8910</p>
                <p>Payment Accepted</p>
                <Image
                  src="/assests/images/payment.png"
                  height={200}
                  width={400}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
