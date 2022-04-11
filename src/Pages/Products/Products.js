import React from 'react';

const Products = ({ paintingData }) => {
    // const {name,img,bullet,capacity,action,price}=gunData;
    const { id, name, img, category, seller, shipping, price } = paintingData;
    return (
        <div className='productCard_items'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Product Id : <b>{id}</b></p>
            <p>Seller Name: <b>{seller}</b></p>
            <p>Category : {category}</p>
            <p>Shipping : {shipping}</p>
            <p>Price : <b>{price}$</b></p>
        </div>
    );
};
export default Products;
