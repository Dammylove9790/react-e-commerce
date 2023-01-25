import './../App.css';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsPage from './ProductsPage';
import Product from '../components/Product';


function CarouselFadeExample() {

  // const [producs, setProducts] = useState([])
  // async function getProducts(){
  //   try{
  //     let product = await axios('https://dummyjson.com/products');
  //     if(product.status === 200){
  //       setProducts(product.data.products)
  //     }
  //     // console.log(product.data.products[1].title)
  //   }catch(err){
  //     console.log(err)
  //   }
  // }
    
  //   useEffect(()=>{
  //     getProducts()
      
  //   }, [])
  //   console.log(producs[8].title)

  


  return (
    <>
       
                      
      <input id='input' type= 'text' 
      name = 'name' placeholder='Search products/categories here' />
                 
       
        <div id='concon'>
          
          <div id="contain">
        <Carousel fade>
      <Carousel.Item>
        <img
          
          src="/images/carousel.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/images/carousel3.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    
    </Carousel>
   </div>
   {/* <Product/> */}

   <div id='box2'>
      <img src = "/images/2nd slide.png" />
      <img src = "/images/3rd slide.jpg" />
    </div>
   
   </div>
<div>
  <ProductsPage/>
</div>
   

    </>
   
  
  );
}

export default CarouselFadeExample;