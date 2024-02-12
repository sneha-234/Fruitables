import React from 'react'
import { Card, Button } from 'react-bootstrap'

const CheckoutCard = () => {
  return (

    <div className="row g-4 justify-content-end">
    <div className="col-8"></div>
    <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
        <Card>
            <div className="bg-light rounded">
                <div className="p-4">
                    <h1 className="display-6 mb-4">
                        <Card.Title style={{ fontSize: "5rem" }}>Card Total</Card.Title>
                    </h1>
                    <div className="d-flex justify-content-between mb-4">
                        <h5 className="mb-0 me-4"><Card.Text>Subtotal:</Card.Text></h5>
                        <p className="mb-0"><Card.Text>$96.00</Card.Text></p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5 className="mb-0 me-4"><Card.Text>Shipping</Card.Text></h5>
                        <div className="">
                            <p className="mb-0"><Card.Text>Flat rate: $3.00</Card.Text></p>
                        </div>
                    </div>
                    <p className="mb-0 text-end"><Card.Text>Shipping to Ukraine.</Card.Text></p>
                </div>
                <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                    <h5 className="mb-0 ps-4 me-4"><Card.Text>Total</Card.Text></h5>
                    <p className="mb-0 pe-4"><Card.Text>$99.00</Card.Text></p>
                </div>
                <Button className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4" type="button">Proceed Checkout</Button>
            </div>
        </Card>
    </div>
</div>

  )
}

export default CheckoutCard;
