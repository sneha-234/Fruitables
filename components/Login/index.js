import React from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Field, Formik } from "formik";
import { useRouter } from "next/router";
import styles from "./style.module.css"
import * as yup from "yup";
import { InputField } from "../fields";
import { loginService } from "@/services/authService";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HeadPage from "../Layout/headPage";
import HEAD_TITLE from "@/utils/title";

const defaultValues = {
  email: "",
  password: "",
};

function LoginPe() {
  const router = useRouter();

  const handleFormSubmit = async (values) => {
    const res = await loginService({
      password: values.password,
      email: values.email,
    });

    if (res.success) {
      router.replace("/Home");
    } else {
      alert(res.message);
    }
    
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(20),

  });

  return (
    <>
        <HeadPage title={HEAD_TITLE.login}>
        <section>
          <div className="container my-3 pt-5">
            <div className="row d-flex justify-content-center mt-3">
              <div className="col-lg-5 col-md-7 col-12">
                
                <Formik
                  validationSchema={validationSchema}
                  onSubmit={handleFormSubmit}
                  initialValues={defaultValues}
                >
                  {({ handleSubmit, isSubmitting }) => {
                    return (
                      <Form noValidate onSubmit={handleSubmit}>
                        <div
                          className={`${styles.contactFormWrapper} bg-primary bg-opacity-10 p-md-5 p-2 pt-4 rounded`}
                        >
                          <div className="row my-2">
                            <div className="col-12">
                              <h2
                                className={`${styles.contactFormHeading} text-center`}
                              >
                                Get In Touch
                              </h2>
                              <p
                                className={`${styles.contactFormParagh} text-center text-dark`}
                              >
                                faucibus ultrices facilisis odio amet, luctus
                                vehicula, turpis elit. Sed placerat.
                              </p>
                            </div>
                            <div className="col-12 my-2">
                              <Field
                                name="email"
                                placeholder="Email Address"
                                label="Email"
                                component={InputField}
                              />
                            </div>
                            <div className="col-12 my-2">
                              <Field
                                type="password"
                                name="password"
                                label="Password"
                                placeholder="Enter your password"
                                component={InputField}
                              />
                            </div>

                            <div className="col-12 mx-auto my-2 mt-4">
                              <Button
                                disabled={isSubmitting}
                                type="submit"
    
                                className={`btn w-100 ${
                                  isSubmitting ? "bg-secondary" : "bg-primary"
                                } bg-opacity-50 py-3 text-white me-2 mb-4 mb-sm-0`}
                              >
                            
                                {isSubmitting ? (
                                  <Spinner animation="border" role="status">
                                    <span className="visually-hidden">
                                      Loading...
                                    </span>
                                  </Spinner>
                                ) : (
                                  "Login"
                                )}
                              </Button>
                            </div>

                            <div className="col-12 mt-4 d-flex justify-content-between">
                              <a href="./home">
                                <FaArrowLeft/> back
                              </a>
                              <a href="./signup">
                                {" "}
                                Singup <FaArrowRight/>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </section>
        </HeadPage>
      
    </>
  );
}

export default LoginPe;