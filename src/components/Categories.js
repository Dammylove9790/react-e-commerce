import Product from '../components/Product';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Categories() {
  const [products, setProducts] = useState([])
    async function getProducts(){
      try{
        let product = await axios('https://dummyjson.com/products');
        if(product.status === 200){
          setProducts(product.data.products)
        }
      }catch(err){
        console.log(err)
      }
    }
      
      useEffect(()=>{
        getProducts()

      }, [])

          return(
              <div className="main">
                     {/* Greeting {product} */}
                     {products.length > 0 ? products.map((value, index)=>{
                  const {name, img, price, description, id} = value;
                 return(
                    <Product key={index} id={id}  {...value} />
                 )
                }) :"Loading..."}
      
              </div>
              )
}

export default Categories