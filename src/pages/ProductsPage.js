import Product from '../components/Product';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function ProductsPage() {
  const [products, setProducts] = useState([])
  
  // Step 1
  // You will need to declear the local storage useState() as well...
  const [localStorageProducts, setLocalStorageProducts] = useState([])

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

    useEffect(()=>{
      getProducts()

      // Step 3
      // You will need to call the local storage products function as well...
      getLocalStorageProducts()
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

                {
                // Step 4
                // You will need to call the local storage products function as well...
                localStorageProducts.length > 0 ? localStorageProducts.map((value, index)=>{
                  const {name, img, price, description, id} = value;
                 return(
                    <Product key={index} id={id}  {...value} />
                 )
                }) :"Loading..."
                }

                
                {/* <Product productName={products[0].name} imageSrc={products[0].img} price={products[0].price} description={products[0].description} />
                <Product productName={products[1].name} imageSrc={products[1].img} price={products[1].price} description={products[1].description}  />
                <Product productName={products[2].name} imageSrc={products[2].img} price={products[2].price} description={products[2].description}  />
                <Product productName={products[3].name} imageSrc={products[3].img} price={products[3].price} description={products[3].description}  /> */}
              </div>
              )
}

export default ProductsPage