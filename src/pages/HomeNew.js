
import './../App.css';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsPage from './ProductsPage';
import Product from '../components/Product';
import { useLocation } from 'react-router-dom';



function HomeNew() {
  const [products, setProducts] =useState([]);
  const [search, setSearch] = useState('');
  
  // Step 1
  // You will need to declear the local storage useState() as well...
  const [localStorageProducts, setLocalStorageProducts] = useState([])

  async function getProduct(){
    try{
      let product;
      if(!search.trim()){
        product = await axios('https://dummyjson.com/products?limit=12');
      }else{
      product = await axios(`https://dummyjson.com/products/search?q=${search}`);
      }
      if(product.status === 200){
        setProducts(product.data.products)
      }
    }catch(err){
      console.log(err)
    }
  } 

    // Step 2  --> Fetch from local storage
    // Use if else statement or ternary operator to check if products is available in the local storage and set it to a useState().
    function getLocalStorageProducts() {
        const localProducts = localStorage.getItem('products')
        if(localProducts){
          setLocalStorageProducts(JSON.parse(localProducts))
        }else{
          setLocalStorageProducts([])
        }
    }
  
  
    useEffect(() => {
        getProduct();

        // Step 3
        // You will need to call the local storage products function as well...
        getLocalStorageProducts();
      }, [search]);

  
    return(
        <>
            <p>
            <input type='search' name="search" placeholder="Search by product name" onChange={(e)=> setSearch(e.target.value)} />
            </p>
        <div className="main">
            
            {products.length > 0 ? products.map((value, index)=>{
              return(
                <Product key={index}  value={value} />
              )
            }) :"Loading..."}
            

            { // Step 4
            // You will need to call the local storage products function as well...
            localStorageProducts.length > 0 ? localStorageProducts.map((value, index)=>{
              return(
                <Product key={index} value={value} />
              )
            }) :"Loading..."}
        </div>
        </>
    )
}

export default HomeNew;