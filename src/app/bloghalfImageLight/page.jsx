import React from "react";
import "./bloghalfImageLight.css";
export default function page() {
  return (
    <div className="container-fluid">
      <center>
        <p
          style={{ fontFamily: "sofia", fontSize: "40px", marginTop: "100px" }}
        >
          <b>Blog Dark Half Image</b>
        </p>
        <p style={{ fontFamily: "sofia", fontSize: "20px" }}>
          Home :- Blog Dark Half Image
        </p>
      </center>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div className="row">
          <div className="col-sm-6 bc2 m-3">
            <div className="row ">
                <div className="col-sm-6 imb1">
            </div>
            <div className="col-sm-6 bg-light">
                <button
                        className="cart-button"
                        style={{
                          fontSize: "14px",
                          height: "25px",
                          width: "100px",
                          border:"none",
                          color:'red'
                        }}
                      >
                        10 Sep 2023
                      </button>
                      <p style={{ fontSize: "20px",marginTop:'30px',color:'black',fontFamily:'sofia'}}>
                        <b>
                        Embrace Luxury Living with our Couches
                        </b>
                      </p>
                      <p style={{fontSize:'14px',color:'black',marginTop:'70px' }}>
                        Read more <i class="bi bi-chevron-right"></i>
                      </p>
                </div>
            </div>
          </div>
          <div className="col-sm-6 bc2 m-3 ">
          <div className="row">
                <div className="col-sm-6 imb2">
            </div>
                <div className="col-sm-6 bg-light">
                <button
                        className="cart-button mt-3"
                        style={{
                          fontSize: "14px",
                          height: "25px",
                          width: "100px",
                          border:"none",
                          color:'red'
                        }}
                      >
                      27 Mar 2023
                      </button>
                      <p style={{ fontSize: "20px", marginTop:'30px',color:'black',fontFamily:'sofia'}}>
                        <b>
                        Sink into Comfort with our Couch Collection
                        </b>
                      </p>
                      <p style={{fontSize:'14px' , marginTop:'70px',color:'red'}}>
                        Read more <i class="bi bi-chevron-right"></i>
                      </p>
                </div>
            </div>
          </div>
          <div className="col-sm-6 bc2 m-3 ">
          <div className="row">
                <div className="col-sm-6 imb3">
            </div>
                <div className="col-sm-6 bg-light">
                <button
                        className="cart-button mt-3"
                        style={{
                          fontSize: "14px",
                          height: "25px",
                          width: "100px",
                          border:"none",
                          color:'red'
                        }}
                      >
                       20 Apr 2023
                      </button>
                      <p style={{ fontSize: "20px", marginTop:'30px',color:'black',fontFamily:'sofia'}}>
                        <b>
                        Transform Skin with Plant-Based Skincare
                        </b>
                      </p>
                      <p style={{fontSize:'14px' , marginTop:'70px',color:'black'}}>
                        Read more <i class="bi bi-chevron-right"></i>
                      </p>
                </div>
            </div>
          </div>
          <div className="col-sm-6 bc2 m-3 ">
          <div className="row">
                <div className="col-sm-6 imb4">
            </div>
                <div className="col-sm-6 bg-light">
                <button
                        className="cart-button mt-3"
                        style={{
                          fontSize: "14px",
                          height: "25px",
                          width: "100px",
                          border:"none",
                          color:'red'
                        }}
                      >
                        15 Mar 2023
                      </button>
                      <p style={{ fontSize: "20px", marginTop:'30px',color:'black',fontFamily:'sofia'}}>
                        <b>
                        Maintain Health with our Product
                        </b>
                      </p>
                      <p style={{fontSize:'14px' , marginTop:'70px',color:'black'}}>
                        Read more <i class="bi bi-chevron-right"></i>
                      </p>
                </div>
            </div>
          </div>
          <div className="col-sm-6 bc2 m-3 ">
          <div className="row">
                <div className="col-sm-6 imb5">
            </div>
                <div className="col-sm-6 bg-light">
                <button
                        className="cart-button mt-3"
                        style={{
                          fontSize: "14px",
                          height: "25px",
                          width: "100px",
                          border:"none",
                          color:'red'
                        }}
                      >
                      27 June 2023
                      </button>
                      <p style={{ fontSize: "20px", marginTop:'30px',color:'black',fontFamily:'sofia'}}>
                        <b>
                        Organic Skincare for Glowing Complexion.
                        </b>
                      </p>
                      <p style={{fontSize:'14px' , marginTop:'70px' ,color:'black'}}>
                        Read more <i class="bi bi-chevron-right"></i>
                      </p>
                </div>
            </div>
          </div>
          <div className="col-sm-6 bc2 m-3 ">
          <div className="row">
                <div className="col-sm-6 imb6">
            </div>
                <div className="col-sm-6 bg-light">
                <button
                        className="cart-button mt-3"
                        style={{
                          fontSize: "14px",
                          height: "25px",
                          width: "100px",
                          border:"none",
                          color:'red'
                        }}
                      >
                       10 May 2023
                      </button>
                      <p style={{ fontSize: "20px", marginTop:'30px',color:'black',fontFamily:'sofia'}}>
                        <b>
                        Plant-Based Skincare for a Fresh Glow Skin
                        </b>
                      </p>
                      <p style={{fontSize:'14px' , marginTop:'70px',color:'black'}}>
                        Read more <i class="bi bi-chevron-right"></i>
                      </p>
                </div>
            </div>
          </div>

                <center>
                  {" "}
                  <button
                    className="cart-button mt-3"
                    style={{
                      fontSize: "14px",
                      height: "40px",
                      width: "160px",
                      background: "black",
                      color: "red",
                    }}
                  >
                    <i class="bi bi-sun-fill fs-5"></i>
                    {} {} {} {}Loadmore
                  </button>
                </center>
            
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
}
