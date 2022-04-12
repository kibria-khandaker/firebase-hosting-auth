import React from 'react';
import { Button } from 'react-bootstrap';

const GetDiscount = () => {

    let couponNumber = (min, max) => {
        return document.getElementById('countCode').innerHTML = Math.floor(Math.random() * (max - min)) + min;
    }

    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-md-6 mx-auto ">
                    <p>Click the button for Get your Coupon code </p>
                    <div className='d-flex  justify-content-start gap-3 my-3'>
                        <Button variant="outline-info text-dark" onClick={() => couponNumber(10000, 99999)} > Get Code </Button>
                        <h3 className='text-success' id='countCode'> </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetDiscount;