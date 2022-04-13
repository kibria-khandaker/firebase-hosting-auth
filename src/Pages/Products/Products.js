import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = ({ paintingData }) => {
    const { id, name, img, category, seller, shipping, price } = paintingData;

    const navigate = useNavigate();    
    const singleItemsDetails = id =>{
        navigate(`/details/${id}`)
        // {paintingData}
    }

    return (
        <div className='productCard_items'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Product Id : <b>{id}</b></p>
            <p>Seller Name: <b>{seller}</b></p>
            <p>Category : {category}</p>
            <p>Shipping : {shipping}</p>
            <p>Price : <b>{price}$</b></p>
            <button onClick={()=>singleItemsDetails(id)} >See Details</button>
        </div>
    );
};
export default Products;
