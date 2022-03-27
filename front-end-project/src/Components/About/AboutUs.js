import React from "react";
import { useState,useEffect } from "react";
import "./about.css";
import { Card } from "react-bootstrap";
import Loader from '../Loader/Loader'
export default function AboutUs() {
  // const [loading,setLoading]=useState(false);
  // useEffect(()=>{
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 1500);
  // },[])
  return (<>
   {/* {loading ? <Loader/>: */}
     <div>
    <div className="About-us-section">
      <div className="container-fluid bg-img mb-4">
        <div className="row justify-content-center align-items-center fw-bold text-center ">
          <div className="col-sm-12 col-md-6 mt-5 m-0 p-0">
            <h1 className="text-light about-H  ">ABOUT US</h1>
            <p className="text-light">
              We are industry-leading organic food delivering the best products
              that boost your daily life energy and potential.
            </p>
          </div>
        </div>
      </div>

      <div className="container marg mb-3">
        <div className="row ">
          <div className="col-sm-12 col-md-6">
            <h4 className="secnd-H mb-3">
              <i aria-hidden="true" className="fas fa-quote-left quot"></i>NEW
              GENERATION OF FOOD<i aria-hidden="true" className="fas fa-quote-right quot"></i>
            </h4>

            <div className="col-sm-12 col-md-6">
              <div className="row">
                <ul className="frst-ul ">
                 <li> OUR VISION</li>
                </ul>
              </div>

              <p>
                {/* Since its foundation, Orange offers best organic fruits for
                local residents, fruit markets, and guests of our city. We are
                dedicated to improving your healthy food standards. */}
We wake up every day to inspire people to overcome this noisy food world,  to discover their food values, and to live happier, healthier lives
                
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 p-0 m-0">
            <div className="row mx-auto my-auto justify-content-center">
              <div
                id="recipeCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <div className="col-sm-3   col-md-3">
                      <div className="card">
                        <div className="card-img">
                          <img src={require("./imgs/11.jpg")} />
                        </div>
                        {/* <div className="card-img-overlay">Slide 1</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col-md-3">
                      <div className="card">
                        <div className="card-img">
                          <img src={require("./imgs/33.jpg")} />
                        </div>
                        {/* <div className="card-img-overlay">Slide 2</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col-sm-3   col-md-3">
                      <div className="card">
                        <div className="card-img">
                          <img src={require("./imgs/22.jpg")} />
                        </div>
                        {/* <div className="card-img-overlay">Slide 3</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className=" col-sm-3  col-md-3">
                      <div className="card">
                        <div className="card-img">
                          <img src={require("./imgs/44.jpg")} />
                        </div>
                        {/* <div className="card-img-overlay">Slide 4</div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev bg-transparent w-aut"
                  href="#recipeCarousel"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </a>
                <a
                  className="carousel-control-next bg-transparent w-aut"
                  href="#recipeCarousel"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid marg bg-img2  mb-3">
        <div className="row justify-content-center align-items-center ">
          <div className="col-12 mb-4 text-center">
            <h2 className="p-4 m-3"> OUR HISTORY </h2>
          </div>

          <div className="d-flex flex-wrap gap-4 justify-content-center align-items-center ">
            <div className="col ">
              <div className="card card-style">
                <div className="card-body">
                  <h5 className="card-title">Establishment</h5>
                  <p className="card-text">
                  When Our Company first started, we offered health consultations only.
                   The general feedback received was that there was a  high quality healthy  meals that were tasty enough to keep people 
                   Preparing natural wholesome food from scratch was inconvenient since most clients tended to have busy schedules.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-style">
                <div className="card-body">
                  <h5 className="card-title">First Success</h5>
                  <p className="card-text">
                  our Company aspires to live up to clients’ expectations and beyond. 
                  Thus, our team spares no effort to present our customers with proficient services, 
                  in order to build up customer trust and friendship.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card  card-style">
                <div className="card-body">
                  <h5 className="card-title">New Technologies</h5>
                  <p className="card-text">
                  we want to change the way people eat.
                   We tailor your package to give you back time,
                   health and energy so you can enjoy more life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
</div>
</div>
</>

  );
}