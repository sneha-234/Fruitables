import Link from 'next/link'
import React from 'react'
import { BsExclamationTriangle } from "react-icons/bs"


const ErrorPage = () => {
  return (
  
      <div className="container-fluid py-5">
            <div className="container py-5 text-center">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <BsExclamationTriangle className="bi bi-exclamation-triangle display-1 text-secondary"></BsExclamationTriangle>
                        <h1 className="display-1">404</h1>
                        <h1 className="mb-4">Page Not Found</h1>
                        <p className="mb-4">We are sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                        <Link className="btn border-secondary rounded-pill py-3 px-5" href="/Home">Go Back To Home</Link>
                    </div>
                </div>
            </div>
        </div>
      

  )
}

export default ErrorPage
