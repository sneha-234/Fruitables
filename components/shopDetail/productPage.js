import Image from 'next/image';
import React, { useState } from 'react';
import { FaShoppingBag, FaStar ,FaMinus, FaPlus } from 'react-icons/fa';

function ProductPage() {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="container-fluid py-5 mt-5">
            <div className="container py-5">
                <div className="row g-4 mb-5">
                    <div className="col-lg-8 col-xl-9">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="border rounded">
                                    <a href="#">
                                        <Image src="/assests/images/single-item.jpg" className="img-fluid rounded" alt="Image" height={500} width={500} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h4 className="fw-bold mb-3">Broccoli</h4>
                                <p className="mb-3">Category: Vegetables</p>
                                <h5 className="fw-bold mb-3">3.35 $</h5>
                                <div className="d-flex mb-4">
                                    <FaStar className="fa fa-star text-secondary" />
                                    <FaStar className="fa fa-star text-secondary" />
                                    <FaStar className="fa fa-star text-secondary" />
                                    <FaStar className="fa fa-star text-secondary" />
                                    <FaStar className="fa fa-star" />
                                </div>
                                <p className="mb-4">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                                <p className="mb-4">Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish</p>
                                <div className="input-group quantity mb-5" style={{ width: "100px" }}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-minus rounded-circle bg-light border" onClick={decrementQuantity}>
                                        <FaMinus className="fa fa-minus" />
                                        </button>
                                    </div>
                                    <input type="text" className="form-control form-control-sm text-center border-0" value={quantity} readOnly />
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-plus rounded-circle bg-light border" onClick={incrementQuantity}>
                                        <FaPlus className="fa fa-plus" />
                                        </button>
                                    </div>
                                </div>
                                <a href="#" className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary">
                                    <FaShoppingBag className="fa fa-shopping-bag me-2 text-primary" /> Add to cart
                                </a>
                            </div>
                            <div className="col-lg-12">
                                <nav>
                                    <div className="nav nav-tabs mb-3">
                                        <button className="nav-link active border-white border-bottom-0" type="button" role="tab" id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about" aria-controls="nav-about" aria-selected="true">Description</button>
                                        <button className="nav-link border-white border-bottom-0" type="button" role="tab" id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission" aria-controls="nav-mission" aria-selected="false">Reviews</button>
                                    </div>
                                </nav>
                                <div className="tab-content mb-5">
                                    <div className="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                                        <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit</p>
                                        <p>Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish filefish Antarctic icefish goldeye aholehole trumpetfish pilot fish airbreathing catfish, electric ray sweeper.</p>
                                        <div className="px-2">
                                            <div className="row g-4">
                                                <div className="col-6">
                                                    <div className="row bg-light align-items-center text-center justify-content-center py-2">
                                                        <div className="col-6">
                                                            <p className="mb-0">Weight</p>
                                                        </div>
                                                        <div className="col-6">
                                                            <p className="mb-0">1 kg</p>
                                                        </div>
                                                    </div>
                                                    <div className="row text-center align-items-center justify-content-center py-2">
                                                        <div className="col-6">
                                                            <p className="mb-0">Country of Origin</p>
                                                        </div>
                                                        <div className="col-6">
                                                            <p className="mb-0">Agro Farm</p>
                                                        </div>
                                                    </div>
                                                    <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                                        <div className="col-6">
                                                            <p className="mb-0">Quality</p>
                                                        </div>
                                                        <div className="col-6">
                                                            <p className="mb-0">Organic</p>
                                                        </div>
                                                    </div>
                                                    <div className="row text-center align-items-center justify-content-center py-2">
                                                        <div className="col-6">
                                                            <p className="mb-0">Check</p>
                                                        </div>
                                                        <div className="col-6">
                                                            <p className="mb-0">Healthy</p>
                                                        </div>
                                                    </div>
                                                    <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                                        <div className="col-6">
                                                            <p className="mb-0">Min Weight</p>
                                                        </div>
                                                        <div className="col-6">
                                                            <p className="mb-0">250 Kg</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                                        <div className="d-flex">
                                            <Image src="/assests/images/avatar.jpg" className="img-fluid rounded-circle p-3"  width ={100} height= {100}  alt="" />
                                            <div>
                                                <p className="mb-2" style={{ fontSize: "14px" }}>April 12, 2024</p>
                                                <div className="d-flex justify-content-between">
                                                    <h5>Jason Smith</h5>
                                                    <div className="d-flex mb-3">
                                                        <FaStar className="fa fa-star text-secondary" />
                                                        <FaStar className="fa fa-star text-secondary" />
                                                        <FaStar className="fa fa-star text-secondary" />
                                                        <FaStar className="fa fa-star text-secondary" />
                                                        <FaStar className="fa fa-star text-secondary" />
                                                    </div>
                                                </div>
                                                <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <Image src="/assests/images/avatar.jpg" className="img-fluid rounded-circle p-3"  width = {100} height= {100} alt="" />
                                            <div>
                                                <p className="mb-2" style={{ fontSize: "14px" }}>April 12, 2024</p>
                                                <div className="d-flex justify-content-between">
                                                    <h5>Sam Peters</h5>
                                                    <div className="d-flex mb-3">
                                                        <FaStar className="fa fa-star text-secondary" />
                                                        <FaStar className="fa fa-star text-secondary" />
                                                        <FaStar className="fa fa-star text-secondary" />
                                                        <FaStar className="fa fa-star" />
                                                        <FaStar className="fa fa-star" />
                                                    </div>
                                                </div>
                                                <p className="text-dark">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <form action="#">
                                <h4 className="mb-5 fw-bold">Leave a Reply</h4>
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="border-bottom rounded">
                                            <input type="text" className="form-control border-0 me-4" placeholder="Your Name *" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="border-bottom rounded">
                                            <input type="email" className="form-control border-0" placeholder="Your Email *" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="border-bottom rounded my-4">
                                            <textarea name="" id="" className="form-control border-0" cols="30" rows="8" placeholder="Your Review *" spellCheck="false"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="d-flex justify-content-between py-3 mb-5">
                                            <div className="d-flex align-items-center">
                                                <p className="mb-0 me-3">Please rate:</p>
                                                <div className="d-flex align-items-center" style={{ fontSize: "12px" }}>
                                                    <FaStar className="fa fa-star text-muted" />
                                                    <FaStar className="fa fa-star " />
                                                    <FaStar className="fa fa-star " />
                                                    <FaStar className="fa fa-star " />
                                                    <FaStar className="fa fa-star " />
                                                </div>
                                            </div>
                                            <a href="#" className="btn border border-secondary text-primary rounded-pill px-4 py-3"> Post Comment</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-3">
                        <div className="row g-4 fruite">
                            {/* Sidebar Content */}
                            {/* ... */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
