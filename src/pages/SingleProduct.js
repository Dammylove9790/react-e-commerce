import { useParams } from "react-router-dom"
import axios from 'axios';


import './../App.css';
import { useEffect, useState } from "react";

function SingleProduct() { 

  const [data, setdata] = useState('');
  const {id}= useParams();
  const  getSingleProduct = async ()=>{
  try{
        let prod = await axios(`https://dummyjson.com/products/${id}`)
         setdata(prod.data)
        //  console.log(prod.data)
      }catch(err){
    console.log(err)
  }
}
 useEffect(()=>{
  getSingleProduct()
  }, []);
  console.log(data.category)

  const  getCategory = async ()=>{
    try{
          let prod = await axios(`https://dummyjson.com/products/${data.category}`)
           setdata(prod.data)
           console.log(prod.data)
        }catch(err){
      console.log(err)
    }
  }

  // const firstImage = data.images[0];
  return (
    <>
    {data ?   
    <div>


      <div className="con">
        <div className="con1">
        <img src ={data.images.length > 0 ? data.images[0] : data.thumbnail} />
        </div>
        <div className="con11">
           <h3>Price: <span>{data.title}</span></h3>
           <h3>Rating: {data.rating}</h3>
           <h3>Brand: {data.brand}</h3>
           <h3>Category: {data.category}</h3>
           <h3>Description: <span>{data.description}</span></h3>
        </div>
      
      </div>

      <div className="con2">
      <img src ={data.images.length > 0 ? data.images[1] : data.thumbnail} /> 
      <img src ={data.images.length > 0 ? data.images[2] : data.thumbnail} /> 
      <img src ={data.images.length > 0 ? data.images[3] : data.thumbnail} /> 
      <img src ={data.images.length > 0 ? data.images[4] : data.thumbnail} /> 
    </div>
    

    </div> : '...loading'}
  
    </>
    
  )
}

export default SingleProduct