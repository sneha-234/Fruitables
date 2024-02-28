import Image from 'next/image';
import React, { useState } from 'react';
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';

const CardMain = () => {
  // State to manage quantity of each product
  const [quantities, setQuantities] = useState({
    bigBanana: 1,
    potatoes: 1,
    awesomeBroccoli: 1,
  });

  // Function to handle incrementing quantity
  const incrementQuantity = (product) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product]: prevQuantities[product] + 1,
    }));
  };

  // Function to handle decrementing quantity
  const decrementQuantity = (product) => {
    if (quantities[product] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [product]: prevQuantities[product] - 1,
      }));
    }
  };

  // Function to handle removing product from the card
  const removeProduct = (product) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product]: 0,
    }));
  };

  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Products</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <Image
                        src="/assests/images/vegetable-item-3.png"
                        className="img-fluid me-5 rounded-circle"
                        style={{ width: "80px", height: "80px" }}
                        alt=""
                        height={80}
                        width={80}
                      />
                    </div>
                  </th>
                  <td>
                    <p className="mb-0 mt-4">Big Banana</p>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">2.99 $</p>
                  </td>
                  <td>
                    <div className="input-group quantity mt-4" style={{ width: "100px" }}>
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-minus rounded-circle bg-light border" onClick={() => decrementQuantity('bigBanana')}>
                          <FaMinus className="fa fa-minus" />
                        </button>
                      </div>
                      <input type="text" className="form-control form-control-sm text-center border-0" value={quantities.bigBanana} readOnly />
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-plus rounded-circle bg-light border" onClick={() => incrementQuantity('bigBanana')}>
                          <FaPlus className="fa fa-plus" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">{(quantities.bigBanana * 2.99).toFixed(2)} $</p>
                  </td>
                  <td>
                    <button className="btn btn-md rounded-circle bg-light border mt-4" onClick={() => removeProduct('bigBanana')}>
                      <FaTimes className="fa fa-times text-danger" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <Image
                        src="/assests/images/vegetable-item-5.jpg"
                        className="img-fluid me-5 rounded-circle"
                        style={{ width: "80px", height: "80px" }}
                        alt=""
                        height={80}
                        width={80}
                      />
                    </div>
                  </th>
                  <td>
                    <p className="mb-0 mt-4">Potatoes</p>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">2.99 $</p>
                  </td>
                  <td>
                    <div className="input-group quantity mt-4" style={{ width: "100px" }}>
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-minus rounded-circle bg-light border" onClick={() => decrementQuantity('potatoes')}>
                          <FaMinus className="fa fa-minus" />
                        </button>
                      </div>
                      <input type="text" className="form-control form-control-sm text-center border-0" value={quantities.potatoes} readOnly />
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-plus rounded-circle bg-light border" onClick={() => incrementQuantity('potatoes')}>
                          <FaPlus className="fa fa-plus" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">{(quantities.potatoes * 2.99).toFixed(2)} $</p>
                  </td>
                  <td>
                    <button className="btn btn-md rounded-circle bg-light border mt-4" onClick={() => removeProduct('potatoes')}>
                      <FaTimes className="fa fa-times text-danger" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <Image
                        src="/assests/images/vegetable-item-2.jpg"
                        className="img-fluid me-5 rounded-circle"
                        style={{ width: "80px", height: "80px" }}
                        alt=""
                        height={80}
                        width={80}
                      />
                    </div>
                  </th>
                  <td>
                    <p className="mb-0 mt-4">Awesome Broccoli</p>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">2.99 $</p>
                  </td>
                  <td>
                    <div className="input-group quantity mt-4" style={{ width: "100px" }}>
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-minus rounded-circle bg-light border" onClick={() => decrementQuantity('awesomeBroccoli')}>
                          <FaMinus className="fa fa-minus" />
                        </button>
                      </div>
                      <input type="text" className="form-control form-control-sm text-center border-0" value={quantities.awesomeBroccoli} readOnly />
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-plus rounded-circle bg-light border" onClick={() => incrementQuantity('awesomeBroccoli')}>
                          <FaPlus className="fa fa-plus" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">{(quantities.awesomeBroccoli * 2.99).toFixed(2)} $</p>
                  </td>
                  <td>
                    <button className="btn btn-md rounded-circle bg-light border mt-4" onClick={() => removeProduct('awesomeBroccoli')}>
                      <FaTimes className="fa fa-times text-danger" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5">
            <input type="text" className="border-0 border-bottom rounded me-5 py-3 mb-4" placeholder="Coupon Code" />
            <button className="btn border-secondary rounded-pill px-4 py-3 text-primary" type="button">Apply Coupon</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMain;
