import Link from 'next/link'
import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import Image from 'next/image'

const Topsection = () => {
  return (
    <div className="container-fluid py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-md-12 col-lg-7">
            <h4 className="mb-3 text-secondary">100% Organic Foods</h4>
            <h1 className="mb-5 display-3 text-primary">Organic Veggies & Fruits Foods</h1>
            <div className="position-relative mx-auto">
              <input className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill" type="number" placeholder="Search"/>
              <Button type="submit" className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100" style={{top: "0" ,right: "25%"}}>Submit Now</Button>
            </div>
          </div>
          <div className="col-md-12 col-lg-5">
            <Carousel fade interval={null} nextIcon={<span className="carousel-control-next-icon" aria-hidden="true"></span>} prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true"></span>}>
              <Carousel.Item>
                <Image src="/assests/images/hero-img-1.png" className="d-block w-100" alt="First slide" width={300} height={300} />
                <Carousel.Caption>
                  <Link href="#" className="btn px-4 py-2 text-white rounded">Fruits</Link>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image src="/assests/images/hero-img-2.jpg" className="d-block w-100" alt="Second slide" width={300} height={300} />
                <Carousel.Caption>
                  <Link href="#" className="btn px-4 py-2 text-white rounded">Vegetables</Link>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topsection
