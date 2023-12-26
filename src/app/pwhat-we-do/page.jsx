

"use client"

import React from "react";
import "./pwhat-we-do.css";
import { useEffect } from "react"
function page(){

  useEffect(() => {
    let count = document.querySelectorAll(".count");
    let arr = Array.from(count);

    arr.map(function (item) {
      let startnumber = 0;

      function counterup() {
        startnumber++;
        item.innerHTML = startnumber;

        if (startnumber === parseInt(item.dataset.number)) {
          clearInterval(stop);
        }
      }

      let stop = setInterval(function () {
        counterup();
      }, 50);

      return () => clearInterval(stop); // Cleanup interval on component unmount
    }, []);
  }, []);
    return(
        <div className="container-fluid">
            <div className='row pw'>
             <div className="col-sm-2"></div>
             <div className="col-sm-8">
             <div className="row">
                <div className="col-sm-6 pw1">
                 <div className=" p-1">
                 <p style={{fontFamily:'sofia',fontSize:'40px'}}><b>The Impact of What We Do How We Make a Difference</b></p>
                 <p>Home About Us</p>
                    <div className="pw2 mt-5"></div>
                 </div>
                </div>
             </div>
             </div>
             <div className="col-sm-2"></div>
             </div>


             <div className="row mt-5">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <div className="row mt-3">
                        <div className="col-sm-6">
                        <p style={{fontFamily:'sofia',fontSize:'30px'}}><b>Our Mission</b></p>  
                        <p style={{fontFamily:'sofia',fontSize:'18px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p> 


                          <p style={{fontFamily:'sofia',fontSize:'30px'}}><b>Our Vision</b></p>  
                        <p style={{fontFamily:'sofia',fontSize:'18px'}}>All the Lorem Ipsum generators on the Internet
                         tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
                         It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
                          to generate Lorem Ipsum which looks reasonable.
                         The generated Lorem Ipsum is therefore always free from repetition, injected humour, 
                         or non-characteristic words etc.</p>  
                         <div className="row">
                            <div className="col-sm-4">
                            <div id="counter">
                <div className="item">
                  <b
                    className="count"
                    data-number="40"
                    style={{ fontSize: "70px", fontFamily: "sofia" }}
                  ></b>
                  <span style={{ fontSize: "70px", fontFamily: "sofia" }}>
                    <b>K+</b>
                  </span>
                  <br />
                  <span className=" ms-4">Happy Customer</span>
                </div>
              </div>
                            </div>

                            <div className="col-sm-4">
                            <div id="counter">
                <div className="item">
                  <b
                    className="count"
                    data-number="21"
                    style={{ fontSize: "70px", fontFamily: "sofia" }}
                  ></b>
                  <span style={{ fontSize: "70px", fontFamily: "sofia" }}>
                    <b>+</b>
                  </span>
                  <br />
                  <span className=" ms-4">Years in Business</span>
                </div>
              </div>
                            </div>


                            <div className="col-sm-4">
                            <div id="counter">
                <div className="item">
                  <b
                    className="count"
                    data-number="98"
                    style={{ fontSize: "70px", fontFamily: "sofia" }}
                  ></b>
                  <span style={{ fontSize: "70px", fontFamily: "sofia" }}>
                    <b>%</b>
                  </span>
                  <br />
                  <span className=" ms-4">Return Clients</span>
                </div>
              </div>
                            </div>
                            {/* <div className="col-sm-4">vv</div>
                            <div className="col-sm-4">vvv</div> */}
                         </div> 
                        </div>
                        <div className="col-sm-6 pw3">
                        <div className="pw4"></div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2"></div>
             </div>


             <div className="row pw5 mt-5">
        <div className="col-sm-2"></div>
        <div className="col-sm-8 mt-4">
          <span style={{ fontSize: "30px", fontFamily: "sofia" ,color: "white" }}>
            Postgraduate Student ?
          </span>{" "}
          &nbsp; &nbsp;&nbsp;
          <span
            style={{ fontSize: "20px", fontFamily: "sofia", color: "white" }}
          >
            Our experts will help find the grar that’s right for you
          </span>
        </div>
        <div className="col-sm-2"></div>
      </div>
            </div>
      
    )
}

export default page;