import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Technology() {
    var [post,setpost]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
          console.log(res.data);
          setpost(res.data)
        },[]);
    } )
  return (
    <>
     <div className='container'>Technology
        <ol>
      {post.map((y)=>(
        <li>{y.title}</li>
      ))}
        </ol>
     </div>
    </>
   
  )
}
