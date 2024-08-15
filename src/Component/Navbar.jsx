import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../src/img/Asset 1.png';



export default function Navbar() {
  return (<>
<nav className="sticky-top navbar navbar-expand-lg bg-white shadow-sm" >
  <div className="container">
    <Link to='/' style={{width: "20%"}}> 
      <img src={Logo} alt="Logo" className='w-100' />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-lg-0 fw-bolder fs-5 ">
           
      <li className="nav-item ms-3">
          <Link className="nav-link" to="/">الرئيسية</Link>
        </li>
        <li className="nav-item ms-3">
        <Link className="nav-link" to="business">اعمالنا</Link>
        </li>
        <li className="nav-item ms-3">
        <Link className="nav-link" to="service">خدمتنا</Link>
        </li>
        <li className="nav-item ms-5">
        <Link className="nav-link" to="contact">تواصل معنا</Link>
        </li>
      </ul>
      <Link className="btn-custom me-4" to="contact">تواصل معنا</Link>


    </div>
  </div>
</nav>



</>
    )
  }