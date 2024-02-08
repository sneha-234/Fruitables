import React from 'react'
import { FaShoppingBag, FaStar } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'


const BESTSALLER_DATA = [
    {
         title : "Organic Orange",
         rate : "3.12$",
         image : "/assests/images/best-product-1.jpg"
    },
    {
        title : "Organic Rassberries",
        rate : "2.12$",
        image : "/assests/images/best-product-2.jpg"
    },
    {
        title : "Fresh Banana ",
        rate : "3.00$",
        image : "/assests/images/best-product-3.jpg"
    },
    {
        title : "Grapes",
        rate : "2.00$",
        image : "/assests/images/best-product-5.jpg"
    },
    {
        title : "Papaya",
        rate : "2.12$",
        image : "/assests/images/best-product-4.jpg"
    },
    {
        title : "Organic Apples",
        rate : "5.00$",
        image : "/assests/images/best-product-6.jpg"
    }
]

const BestSeller = () => {
  return (
    <div>
      <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mx-auto mb-5" style={{maxWidth: "700px;"}}>
                    <h1 className="display-4">Bestseller Products</h1>
                    <p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                </div>
                <div className="row g-4">
                    {BESTSALLER_DATA.map ((data, index)=>
                    {
                        return (
                            <div  key ={index} className="col-lg-6 col-xl-4">
                            <div className="p-4 rounded bg-light">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <Image src={data.image} className="img-fluid rounded-circle w-100" alt="image" height={50} width={50} />
                                    </div>
                                    <div className="col-6">
                                        <a href="#" className="h5">{data.title}</a>
                                        <div className="d-flex my-3">
                                            <FaStar className="fas fa-star text-primary"/>
                                            <FaStar className="fas fa-star text-primary"/>
                                            <FaStar className="fas fa-star text-primary"/>
                                            <FaStar className="fas fa-star text-primary"/>
                                            <FaStar className="fas fa-star"/>
                                        </div>
                                        <h4 className="mb-3">{data.rate}</h4>
                                        <Link href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><FaShoppingBag class="fa fa-shopping-bag me-2 text-primary"/> Add to cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        )
                    })}
                        </div>
                    </div>
                </div>
            </div>
        
  )
}

export default BestSeller
