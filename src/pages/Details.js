import React from 'react'
import { useParams } from 'react-router-dom'
import { Routes, Route, Link,useparams } from "react-router-dom";
import ProductData from '../Data/ProductData';

export default function Details() {
  let {id}=useParams()
  let Pdata=ProductData.find((e)=>e.id==id)
  return (
    <div className='container py-2'>
     <h3> Details{id}</h3>
     <Link to="/" className='btn btn-primary btn-sm'>Back</Link>
     <div className='row'>
      <div className='col-lg-3'>
        <img className='w-100' src={Pdata.image}/>
      </div>
      <div className='col-lg-9'>
        <h3>{Pdata.title}</h3>
        <p>price: {Pdata.price}</p>
        <p>{Pdata.description}</p>
      </div>
     </div>
      </div>
  )
}

