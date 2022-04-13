import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import usePaintings from '../../hooks/usePaintings';

const DetailsProduct = () => {
    const { paintings } = usePaintings();
    // console.log(paintings);
    const { productId } = useParams();

    const [singleItems, setSingleItems] = useState({});

    useEffect(() => {
        let product = paintings.find(p => p.id == productId)
        setSingleItems(product);
        // console.log(product);
    }, [productId, paintings])

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-8 mx-auto py-5">
                    <div className='productCard_items'>
                        <img src={singleItems?.img} alt="" />
                        <h2 className='mt-5 mb-3' >{singleItems?.name}</h2>
                        <div className='details_items_meta_info d-flex gap-2'>
                            <p>Product Id : {singleItems?.id}</p>
                            <p>Seller: {singleItems?.seller}</p>
                            <p>Category : {singleItems?.category} </p>
                            <p>Shipping : {singleItems?.shipping} </p>
                        </div>
                        <div className='mt-4'>
                            <p>Price : <b>{singleItems?.price}$ </b></p>
                            <p> <b> Description: </b>{singleItems?.body}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailsProduct;