// export default function Header ()
// {
//     return (
//         <>
//         <h1>welcome to the Header part</h1> <h1>sir</h1>
//         </>
//     )
// }

import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import SERVICES from './pages/SERVICES';
import Details from './pages/Details';
import Category from './pages/Category';
import Technology from './pages/Technology';


export default function Header () 
{
  return (
   <>
   <div class='container-fluid py-3'>
    <div class='row'>
      <div class='col-lg-12'>
        <img class='w-100' src='https://bankingkhabar.com/wp-content/uploads/2022/08/Bankingkhabar.com_1140-100.gif'/>
      </div>
    </div>
   </div>
  <div class="container">
    <div class="row ">
      <div class="col-lg-4">
        <img class="w-100" src="https://bankingkhabar.com/wp-content/uploads/2022/08/logo1-1.jpg" />
      </div>
      <div class="col-lg-8">
        <img class="w-100" src="https://bankingkhabar.com/wp-content/uploads/2019/03/prabhumoney.gif" />
      </div>
    </div>
  </div>
 <nav className="navbar navbar-expand-lg bg-danger mt-3 ">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-center px-2 mb-lg-0 text-center text-success">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-primary" to="/About">About<span>&nbsp;us</span> </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Technology">TECHNOLOGY</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">INSTITUION</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">INSURANCE</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">SHARE</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">SPECIAL</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">CONTACT<span>&nbsp;US</span> </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">BANKING<span>&nbsp;NEWS</span> </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">ENGLISH</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Technology" element={<Technology />} />
        <Route path="services" element={<SERVICES />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="cat/:cid" element={<Category />} />

      </Routes>
</>
  )
}
