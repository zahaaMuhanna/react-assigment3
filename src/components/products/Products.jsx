import React, { useEffect, useState } from 'react'

function Products() {
    const [products , setProducts] = useState([]);
    let getProducts=async()=>{
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        setProducts(data);
    }
    useEffect( ()=> {
        getProducts();
    },[])
    return (
        <div className='row'>
        {products.map( (ele)=>{
            return <div className='col-md-4' key={ele.id}>
                <h2>{ele.title}</h2>
                <img src={ele.image} className='w-50'>
                </img>
            </div>
        })}
    </div>
  )
}
export default Products