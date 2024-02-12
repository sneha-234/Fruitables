import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";


const Billing = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <h1 className="mb-4">Billing details</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            companyName: "",
            address: "",
            city: "",
            country: "",
            zip: "",
            mobile: "",
            email: "",
            createAccount: false,
            shipToDifferentAddress: false,
            orderNotes: "",
            payments: [],
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required("First Name is required"),
            lastName: Yup.string().required("Last Name is required"),
            companyName: Yup.string().required("Company Name is required"),
            address: Yup.string().required("Address is required"),
            city: Yup.string().required("City is required"),
            country: Yup.string().required("Country is required"),
            zip: Yup.string().required("Zip/Postcode is required"),
            mobile: Yup.string().required("Mobile is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            payments: Yup.array().min(
              1,
              "At least one payment option must be selected"
            ),
          })}
          onSubmit={(values, { setSubmitting }) => {
            // Handle form submission
            console.log(values);
            setSubmitting(false);
          }}
        >
          <Form>
            <div className="row g-5">
              <div className="col-md-12 col-lg-6 col-xl-7">
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <div className="form-item w-100">
                      <label className="form-label my-3">
                        First Name<sup>*</sup>
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="firstName"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="error-message"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="form-item w-100">
                      <label className="form-label my-3">
                        Last Name<sup>*</sup>
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="lastName"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="error-message"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Company Name<sup>*</sup>
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    name="companyName"
                  />
                  <ErrorMessage
                    name="companyName"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Address <sup>*</sup>
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    name="address"
                    placeholder="House Number Street Name"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Town/City<sup>*</sup>
                  </label>
                  <Field type="text" className="form-control" name="city" />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Country<sup>*</sup>
                  </label>
                  <Field type="text" className="form-control" name="country" />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Postcode/Zip<sup>*</sup>
                  </label>
                  <Field type="text" className="form-control" name="zip" />
                  <ErrorMessage
                    name="zip"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Mobile<sup>*</sup>
                  </label>
                  <Field type="tel" className="form-control" name="mobile" />
                  <ErrorMessage
                    name="mobile"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Email Address<sup>*</sup>
                  </label>
                  <Field type="email" className="form-control" name="email" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-check my-3">
                  <Field
                    type="checkbox"
                    className="form-check-input"
                    id="createAccount"
                    name="createAccount"
                  />
                  <label className="form-check-label" htmlFor="createAccount">
                    Create an account?
                  </label>
                </div>
                <hr />
                <div className="form-check my-3">
                  <Field
                    type="checkbox"
                    className="form-check-input"
                    id="shipToDifferentAddress"
                    name="shipToDifferentAddress"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="shipToDifferentAddress"
                  >
                    Ship to a different address?
                  </label>
                </div>
                <div className="form-item">
                  <Field
                    as="textarea"
                    className="form-control"
                    name="orderNotes"
                    spellCheck="false"
                    cols="30"
                    rows="11"
                    placeholder="Order Notes (Optional)"
                  />
                </div>
              </div>
              <div class="col-md-12 col-lg-6 col-xl-5">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Products</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <div class="d-flex align-items-center mt-2">
                                                    <Image src="/assests/images/vegetable-item-2.jpg" class="img-fluid rounded-circle" width ={90} height={90}
                                                     alt=""/>
                                                </div>
                                            </th>
                                            <td class="py-5">Awesome Brocoli</td>
                                            <td class="py-5">$69.00</td>
                                            <td class="py-5">2</td>
                                            <td class="py-5">$138.00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div class="d-flex align-items-center mt-2">
                                                    <Image src="/assests/images/vegetable-item-5.jpg" class="img-fluid rounded-circle" width={90} height={90}  alt=""/>
                                                </div>
                                            </th>
                                            <td class="py-5">Potatoes</td>
                                            <td class="py-5">$69.00</td>
                                            <td class="py-5">2</td>
                                            <td class="py-5">$138.00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div class="d-flex align-items-center mt-2">
                                                    <Image src="/assests/images/vegetable-item-3.png" class="img-fluid rounded-circle" height={90} width={90}  alt=""/>
                                                </div>
                                            </th>
                                            <td class="py-5">Big Banana</td>
                                            <td class="py-5">$69.00</td>
                                            <td class="py-5">2</td>
                                            <td class="py-5">$138.00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                            </th>
                                            <td class="py-5"></td>
                                            <td class="py-5"></td>
                                            <td class="py-5">
                                                <p class="mb-0 text-dark py-3">Subtotal</p>
                                            </td>
                                            <td class="py-5">
                                                <div class="py-3 border-bottom border-top">
                                                    <p class="mb-0 text-dark">$414.00</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                            </th>
                                            <td class="py-5">
                                                <p class="mb-0 text-dark py-4">Shipping</p>
                                            </td>
                                            <td colspan="3" class="py-5">
                                                <div class="form-check text-start">
                                                    <input type="checkbox" class="form-check-input bg-primary border-0" id="Shipping-1" name="Shipping-1" value="Shipping"/>
                                                    <label class="form-check-label" for="Shipping-1">Free Shipping</label>
                                                </div>
                                                <div class="form-check text-start">
                                                    <input type="checkbox" class="form-check-input bg-primary border-0" id="Shipping-2" name="Shipping-1" value="Shipping"/>
                                                    <label class="form-check-label" for="Shipping-2">Flat rate: $15.00</label>
                                                </div>
                                                <div class="form-check text-start">
                                                    <input type="checkbox" class="form-check-input bg-primary border-0" id="Shipping-3" name="Shipping-1" value="Shipping"/>
                                                    <label class="form-check-label" for="Shipping-3">Local Pickup: $8.00</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                            </th>
                                            <td class="py-5">
                                                <p class="mb-0 text-dark text-uppercase py-3">TOTAL</p>
                                            </td>
                                            <td class="py-5"></td>
                                            <td class="py-5"></td>
                                            <td class="py-5">
                                                <div class="py-3 border-bottom border-top">
                                                    <p class="mb-0 text-dark">$135.00</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                         <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">
                      <Field
                        type="checkbox"
                        className="form-check-input bg-primary border-0"
                        id="Transfer-1"
                        name="payments"
                        value="Direct Bank Transfer"
                      />
                      <label className="form-check-label" htmlFor="Transfer-1">
                        Direct Bank Transfer
                      </label>
                    </div>
                    <p className="text-start text-dark">
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </p>
                  </div>
                </div>
                {/* More payment options */}
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">
                      <Field
                        type="checkbox"
                        className="form-check-input bg-primary border-0"
                        id="Payments-1"
                        name="payments"
                        value="Check Payments"
                      />
                      <label className="form-check-label" htmlFor="Payments-1">
                        Check Payments
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">
                      <Field
                        type="checkbox"
                        className="form-check-input bg-primary border-0"
                        id="Delivery-1"
                        name="payments"
                        value="Cash On Delivery"
                      />
                      <label className="form-check-label" htmlFor="Delivery-1">
                        Cash On Delivery
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">
                      <Field
                        type="checkbox"
                        className="form-check-input bg-primary border-0"
                        id="Paypal-1"
                        name="payments"
                        value="Paypal"
                      />
                      <label className="form-check-label" htmlFor="Paypal-1">
                        Paypal
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4 text-center align-items-center justify-content-end pt-4">
          <button type="submit" className="btn border-secondary py-3 px-4 text-uppercase text-primary">Place Order</button>
        </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Billing;
