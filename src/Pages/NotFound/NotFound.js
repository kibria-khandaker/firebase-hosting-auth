import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 mx-auto py-5  text-center">
                    <p className='fs-1'>404 : Not Found</p>
                    <p> Here is Nothing, Which is looking </p>
                    <Link to="/" >Back Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;