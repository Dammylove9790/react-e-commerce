import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";


function AddProduct() {
  

   const navigate= useNavigate()
    const [product, setProduct] = useState({
        title: '',
        price: '',
        images: [],
        description: '',
        discountPercentage: '',
        brand: '',
        category: '',

    })
    const handleInput = (e)=>{
      let value = e.target.value;
      let name = e.target.name;
      setProduct({
        ...product,
        [name]: value
    })
    }

    function submitData(e){
    e.preventDefault()
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push({


    title: product.title,
        price: product.price,
        images: product.images,
        description: product.description,
        discountPercentage: product.discountPercentage,
        brand: product.brand,
        category: product.category
   

    });
    localStorage.setItem('products', JSON.stringify(products));

    axios.post('https://dummyjson.com/products/add',{
      title: product.title,
      price: product.price,
      images: product.images,
      description: product.description,
      discountPercentage: product.discountPercentage,
      brand: product.brand,
      category: product.category
  })
    .then(res => {
      navigate('/');
     
    })
    .catch(err => {
      console.error(err);
    })
    }
  
  function clearData() {
    localStorage.clear();
  }

   
  return (
    <div style={{textAlign: 'center', margin: '20px 0 40px'}}>
        <fieldset>
        <div>Add Product</div>
        
        <form onSubmit={submitData}>
        <p>
        <label>Brand</label> <br />
        <input type="text" name="brand" onChange={handleInput} />
       </p>
        <p>
        <label>Category</label> <br />
        <input type="text" name="category" onChange={handleInput} />
       </p>
       <p>
        <label>Description</label> <br />
        <input type="text" name="description" onChange={handleInput} />
       </p>
       <p>
        <label>DIscountPercentage</label> <br />
        <input type="text" name="discountPercentage" onChange={handleInput} />
       </p>
       <p>
        <label>Price</label> <br />
        <input type="number" name="price"  step="0.01" onChange={handleInput}/>
       </p>
       <p>
       <label>Image Url</label> <br />
        <input type="url" name="images"  onChange={handleInput}/>
       </p>
       <button type="submit"> Add Product</button>
        </form>
        </fieldset>
    </div>
  )
}

export default AddProduct 