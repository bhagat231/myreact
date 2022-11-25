import React from 'react'
import { useParams } from 'react-router-dom'
import { Routes, Route, Link,useparams } from "react-router-dom";
import ProductData from '../Data/ProductData';

export default function Category() {
    let {cid}=useParams()
    let PCdata=ProductData.filter((e)=>e.category==cid)
  return (
    <div className='container py-5'>
     <h3>Category</h3>
     <div className='row'>
          
                {PCdata.map((item)=>(
  <div className='col-lg-3 lproduct'>
    <div className='card'>
    <img src={item.image}/>
    <div className='card-body'>
    <h2>{item.title}</h2>
    <Link to={`/details/${item.id}`} className='btn btn-primary btn-sm'>Read more</Link>
    </div>
    </div>
    </div>
           ))}
        </div>
        </div>
  )
}
