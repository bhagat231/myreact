import React from 'react'
import CatData from '../Data/CatData'
import ProductData from '../Data/ProductData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Routes, Route, Link } from "react-router-dom";

export default function HOME() {
  return (
    <>
    <div className='container py-2'>
        <div className='row'>
        <div className='col-lg-3'>
        <ul class="list-group">
            {CatData.map((a)=>(
 <li class="list-group-item"><Link to={`/Cat/${a.id}`}>{a.CatName}</Link></li>
            ))}
   </ul>
        </div>
        <div className='col-lg-9'>
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src='https://icms-image.slatic.net/images/ims-web/14ecee81-7242-4301-89be-c30f9cc9ea9e.jpg_1200x1200.jpg'/></SwiperSlide>
      <SwiperSlide><img src='https://icms-image.slatic.net/images/ims-web/8c73d89e-7c1c-4e31-ace8-b3141fb95d8b.png'/></SwiperSlide>
      <SwiperSlide><img src='https://icms-image.slatic.net/images/ims-web/1014c782-6f2f-4d98-b115-d3bc09bb0d3a.jpg'/></SwiperSlide>
    </Swiper>
    </div>
        </div>
        <h2>Latest product</h2>
        <div className='row'>
          
                {ProductData.map((item)=>(
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
    </>
  )
}

