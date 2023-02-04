import Button from './Button';
import { useParams } from 'react-router-dom';
import './Product.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Product(props){
  
    const{id, title, description,price, discountPercentage, rating, stock, brand, category, thumbnail, images } = props.value;
    
    console.log(props)
    return(
        <>
        {/* {JSON.stringify(props)} */}
        <div className='product'>
            <h3 className='center'> {title}</h3>
            <img src={images[0]} alt={title} />
            <p style={{marginTop:'2%'}}> Price: {price}   <span style={{marginLeft:'2%'}}>Discount: {discountPercentage}</span></p>
            <Link to={`/product/${id}`} className="btn btn-warning">Details</Link>
            <Button  />
        </div>
        </>
    )
}


export default Product