import React, { useEffect, useState } from 'react'

function Resturant() {
    const [pizza , setPizza] = useState([]);
    const [onion , setOnion] = useState([]);
    const [salad , setSalad] = useState([]);

    const  getData=async(recip)=>{
        let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${recip}`)
        let data = await response.json();
        return data.recipes
    }
     useEffect(()=>{
        const fetchdata =async()=>{
            let pizzaData = await getData("pizza")
            let onionData = await getData("onion")
            let saladData = await getData("salad")

            setPizza(pizzaData)
            setOnion(onionData)
            setSalad(saladData)
        }
        fetchdata()
    },[])
    
    return (
        <div className='row'>
            <div className="col-md-4">
                 {pizza.map( (ele)=>{
                        return <div  key={ele.recipe_id}>
                                <h2>{ele.title}</h2>
                                <img src={ele.image_url} className='w-50'>
                                </img>
                                </div>
                })}
            </div>
            <div className="col-md-4">
                 {onion.map( (ele)=>{
                        return <div  key={ele.recipe_id}>
                                <h2>{ele.title}</h2>
                                <img src={ele.image_url} className='w-50'>
                                </img>
                                </div>
                })}
            </div>
            <div className="col-md-4">
                 {salad.map( (ele)=>{
                        return <div  key={ele.recipe_id}>
                                <h2>{ele.title}</h2>
                                <img src={ele.image_url} className='w-50'>
                                </img>
                                </div>
                })}
            </div>
       
    </div>
  )
}

export default Resturant