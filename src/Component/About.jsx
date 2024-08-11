import React from 'react';
import preson from '../../src/img/PhotoGrid_Plus_1718061827508.jpg';
import  { useState, useEffect } from 'react';

export default function About() {

      
  return (<>
           
<div class="container py-5 section-title mt-2">
<h1 className='fw-bolder' style={{color: "#0e776a"}}>فريقنا</h1>
<p className='fw-bold'>قابل مبدعينا</p>
          <div class="row justify-content-between mx-2 mt-5">
              
            <div class=" col-xl-3 col-lg-4 col-md-6 rounded team-item ">
                <div class="itmes  mx-2">
                <div class="team-content">
                            <div class="team-img-icon">
                                <div class="team-img rounded-circle">
                                    <img src={preson} class="img-fluid w-100 rounded-circle" alt=""/>
                                </div>
                                <div class="team-name text-center py-3">
                                    <h4 class="">Full Name</h4>
                                    <p class="m-0">Designation</p>
                                </div>
                                <div class="team-icon d-flex justify-content-center pb-4">
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-instagram"></i></a>
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            <div class=" col-xl-3 col-lg-4 col-md-6 rounded team-item ">
                <div class="itmes  mx-2">
                <div class="team-content">
                            <div class="team-img-icon">
                                <div class="team-img rounded-circle">
                                    <img src={preson} class="img-fluid w-100 rounded-circle" alt=""/>
                                </div>
                                <div class="team-name text-center py-3">
                                    <h4 class="">Full Name</h4>
                                    <p class="m-0">Designation</p>
                                </div>
                                <div class="team-icon d-flex justify-content-center pb-4">
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-instagram"></i></a>
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            <div class=" col-xl-3 col-lg-4 col-md-6 rounded team-item ">
                <div class="itmes  mx-2">
                <div class="team-content">
                            <div class="team-img-icon">
                                <div class="team-img rounded-circle">
                                    <img src={preson} class="img-fluid w-100 rounded-circle" alt=""/>
                                </div>
                                <div class="team-name text-center py-3">
                                    <h4 class="">Full Name</h4>
                                    <p class="m-0">Designation</p>
                                </div>
                                <div class="team-icon d-flex justify-content-center pb-4">
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-instagram"></i></a>
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            <div class=" col-xl-3 col-lg-4 col-md-6 rounded team-item ">
                <div class="itmes  mx-2">
                <div class="team-content">
                            <div class="team-img-icon">
                                <div class="team-img rounded-circle">
                                    <img src={preson} class="img-fluid w-100 rounded-circle" alt=""/>
                                </div>
                                <div class="team-name text-center py-3">
                                    <h4 class="">Full Name</h4>
                                    <p class="m-0">Designation</p>
                                </div>
                                <div class="team-icon d-flex justify-content-center pb-4">
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-instagram"></i></a>
                                    <a class="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            </div>
            </div>



</>
    )
  }