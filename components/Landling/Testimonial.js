import Image from 'next/image'
import React from 'react'
import { FaQuoteRight, FaStar } from 'react-icons/fa'



const TESTIMONIAL_DATA = [
    {
        ClientName : "Client Name",
        Profession : "Profession",
        Description : "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        ClientName : "Client Name",
        Profession : "Profession",
        Description : "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s"
    }
]
const Testimonial = () => {
  return (

      <div class="container-fluid testimonial py-5">
            <div class="container py-5">
                <div class="testimonial-header text-center">
                    <h4 class="text-primary">Our Testimonial</h4>
                    <h1 class="display-5 mb-5 text-dark">Our Client Saying!</h1>
                </div>
                <div class="owl-carousel testimonial-carousel">
                    {TESTIMONIAL_DATA.map ((data, index)=>
                    {
                        return (
                            <div  key = {index}className="testimonial-item img-border-radius bg-light rounded p-4">
                            <div className="position-relative">
                                <FaQuoteRight className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{bottom: "30px", right: "10"}}/>
                                <div className="mb-4 pb-4 border-bottom border-secondary">
                                    <p className="mb-0">{data.Description}
                                    </p>
                                </div>
                                <div className="d-flex align-items-center flex-nowrap">
                                    <div className="bg-secondary rounded">
                                        <Image src="/assests/images/testimonial-1.jpg" className="img-fluid rounded"  alt="" height={100} width={100}/>
                                    </div>
                                    <div className="ms-4 d-block">
                                        <h4 className="text-dark">{data.ClientName}</h4>
                                        <p className="m-0 pb-3">{data.Profession}</p>
                                        <div className="d-flex pe-5">
                                            <FaStar className="fas fa-star text-primary"/>
                                            <FaStar className="fas fa-star text-primary"/>
                                            <FaStar className="fas fa-star text-primary"/>
                                            <FaStar className="fas fa-star text-primary"/>
                                            <FaStar className="fas fa-star"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        )
                    })}

                </div>
            </div>
        </div>
        
  )
}

export default Testimonial
