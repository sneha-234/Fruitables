import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaShoppingBag } from 'react-icons/fa';
import Image from 'next/image';

const RELATED_PRODUCTS = [
    {
        title: "Parsely",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        image: "/assests/images/vegetable-item-6.jpg",
        rate: "$4.99"
    },
    {
        title: "Tomato",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        image: "/assests/images/vegetable-item-1.jpg",
        rate: "$3.99"
    },
    {
        title: "Banana",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        image: "/assests/images/vegetable-item-3.png",
        rate: "$7.99"
    },
    {
        title: "Bell Papper",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        image: "/assests/images/vegetable-item-4.jpg",
        rate: "$5.99"
    },
    {
        title: "Potatoes",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        image: "/assests/images/vegetable-item-5.jpg",
        rate: "$9.99"
    },
    {
        title: "Parsely",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        image: "/assests/images/vegetable-item-6.jpg",
        rate: "$7.99"
    },
    {
        title: "Bell Papper",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        image: "/assests/images/vegetable-item-4.jpg",
        rate: "$6.99"
    }
];

function RelatedProducts() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <h1 className="fw-bold mb-0">Related products</h1>
            <Slider {...settings}>
                {RELATED_PRODUCTS.map((product, index) => (
                    <div key={index}  className="col-lg-4 mb-4"> 
                        <div className="border border-primary rounded position-relative vesitable-item mb-4">
                            <div className="vesitable-img">
                                <Image src={product.image} className="img-fluid w-100 rounded-top" alt="" height={100} width={100} />
                            </div>
                            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>Vegetable</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h4>{product.title}</h4>
                                <p>{product.Description}</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">{product.rate}/ kg</p>
                                    <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><FaShoppingBag className="fa fa-shopping-bag me-2 text-primary"/> Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default RelatedProducts;
