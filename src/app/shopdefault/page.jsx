"use client";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './default.css'
import React, { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

const page = () => {
  const [count, setCount] = useState(0);
  const [showManish, setShowManish] = useState(true);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

// ------------------------------------------------

const handleManishClick = () => {
  setShowManish(true);
};

const handleVijayClick = () => {
  setShowManish(false);
};

// ------------------------------------------------


  return (
    <div className="container-fluid">
      <div className="row">
    
        <div className="col-sm-4 p-3">
          <b style={{ fontFamily: "sofia", fontSize: "20px" }}>
            Home Shop Standard With Details
          </b>
          <InnerImageZoom
            src="https://mooncart.dexignzone.com/xhtml/images/feature/product-feature/3.png"
            height="1200px"
            zoomSrc="https://mooncart.dexignzone.com/xhtml/images/feature/product-feature/3.png"
            zoomType="hover"
            zoomPreload={true}
          />
        </div>
        <div className="col-sm-5 p-3">
          <button
            className="cart-button  text-light"
            style={{
              height: "20px",
              width: "150px",
              lineHeight: "18px",
              background: "black",
              border: "none",
            }}
          >
            <b>SALE 20% OFF</b>
          </button>
          <br />
          <b style={{ fontFamily: "sofia", fontSize: "30px" }}>
          Luxury Couch
          </b>
          <br />
          <span style={{ color: "orange" }}>
            <i class="bi bi-star-fill"></i>{" "}
          </span>
          <span style={{ color: "orange" }}>
            <i class="bi bi-star-fill"></i>{" "}
          </span>
          <span style={{ color: "orange" }}>
            <i class="bi bi-star-fill"></i>{" "}
          </span>
          <span style={{ color: "orange" }}>
            <i class="bi bi-star-half"></i>{" "}
          </span>
          <span>
            <i class="bi bi-star"></i>
          </span>
          &nbsp;
          <span>
            <i class="bi bi-star"></i>
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{ fontFamily: "sofia", fontSize: "13px" }}>
            4.7 Rating(5 customer reviews)
          </span>
          <p style={{ fontFamily: "sofia", fontSize: "16px" }}>
            Lorem Ipsum is simply dummy text of and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <span
            style={{ fontFamily: "sofia", fontSize: "20px", color: "#73706f" }}
          >
            Price
          </span>
          <br />
          <b style={{ fontFamily: "sofia", fontSize: "30px" }}>$125.75</b>
          &nbsp;&nbsp;&nbsp;
          <span
            style={{ fontFamily: "sofia", fontSize: "20px", color: "#73706f" }}
          >
            <s>$132.17</s>
          </span>
          <div className="row">
            <div className="col-sm-3">
              <p className=" m fs-5">Quantity</p>
              <button
                className="cart-button fs-6"
                style={{
                  height: "30px",
                  width: "40px",
                  lineHeight: "18px",
                  background: "#d2d2d4",
                  border: "none",
                }}
                onClick={decrement}
              >
                <b>-</b>
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                className="cart-button fs-6"
                style={{
                  height: "30px",
                  width: "40px",
                  lineHeight: "18px",
                  background: "#d2d2d4",
                  border: "none",
                }}
              >
                <b>{count}</b>
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                className="cart-button fs-6"
                style={{
                  height: "30px",
                  width: "40px",
                  lineHeight: "18px",
                  background: "#d2d2d4",
                  border: "none",
                }}
                onClick={increment}
              >
                <b>+</b>
              </button>
            </div>
            <div className="col-sm-3">
              <p className=" m fs-5">Size</p>
              <button
                className="cart-button fs-6"
                style={{
                  height: "30px",
                  width: "40px",
                  lineHeight: "18px",
                  background: "#d2d2d4",
                  border: "none",
                }}
              >
                <b>S</b>
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                className="cart-button fs-6"
                style={{
                  height: "30px",
                  width: "40px",
                  lineHeight: "18px",
                  background: "#d2d2d4",
                  border: "none",
                }}
              >
                <b>M</b>
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                className="cart-button fs-6"
                style={{
                  height: "30px",
                  width: "40px",
                  lineHeight: "18px",
                  background: "#d2d2d4",
                  border: "none",
                }}
                onClick={increment}
              >
                <b>L</b>
              </button>
            </div>
            <div className="col-sm-3">
              <p className="m fs-5">Color</p>

              <div class=" form-check-inline">
                <input class="form-check-input bg-danger fs-4" type="radio" />
              </div>
              <div class=" form-check-inline">
                <input class="form-check-input bg-dark fs-4" type="radio" />
              </div>
              <div class="form-check-inline">
                <input
                  class="form-check-input bg-secondary fs-4"
                  type="radio"
                />
              </div>

              <div class="form-check-inline">
                <input class="form-check-input bg-primary fs-4" type="radio" />
              </div>
            </div>
          </div>
          <hr />
          <p style={{ fontFamily: "sofia", fontSize: "16px" }}>
            <b>SKU:</b>PRT584E63A
          </p>
          <p style={{ fontFamily: "sofia", fontSize: "16px" }}>
            <b>Category:</b>
            Bottles,&nbsp;Accessories,&nbsp;Mats,&nbsp;Bottles,&nbsp;Trackers
          </p>
          <p style={{ fontFamily: "sofia", fontSize: "16px" }}>
            <b>Tags:</b>
            Trackers,&nbsp;&nbsp;Bags,&nbsp;&nbsp;Cup,&nbsp;&nbsp;Toothbrushes
          </p>
          <p style={{ fontFamily: "sofia", fontSize: "16px" }}>
            <b>Share:</b>&nbsp;&nbsp;<i class="bi bi-facebook"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-linkedin"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-instagram"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-twitter"></i>
          </p>
          <div className="row">
            <div className="col-sm-5">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4320/4320227.png"
                height="50px"
              />
              <span style={{ fontFamily: "sofia", fontSize: "16px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="text-danger">EREE</i> <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>Shipping</b>
              </span>
            </div>
            <div className="col-sm-5">
              <img
                src="https://mooncart.dexignzone.com/xhtml/images/svg/icon-bx/box.svg"
                height="50px"
              />
              <span style={{ fontFamily: "sofia", fontSize: "16px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="text-danger">Easy Returns</i> <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>30 Days</b>
              </span>
            </div>
          </div>
        </div>
       

        <div className="col-sm-3 mt-3">
            <div className='pd3'>
            <div className='p-3'>
            <button className='pdb'>
               <b>Bank offer 5% Cachback</b> 
            </button>
            </div>
            <div className='p-3'>
            <button className='pdb1'>


            <div className='row'>
                <div className='col-sm-2 mt-2'>
                <img src="https://cdn-icons-png.flaticon.com/512/4320/4320227.png" height="70px"/>   
                </div>
                <div className='col-sm-8'>
                <span className='text-danger'>FREE</span><br/>
               <span><b  style={{fontFamily:'sofia',fontSize:'20px'}}>Enjoy The Product</b></span>
                </div>
            </div>
                
              
            </button>
            </div>
            <div className='p-3'>
            <button className='pdb1'>
            <div className='row'>
                <div className='col-sm-2 mt-2'>
                <img src="https://mooncart.dexignzone.com/xhtml/images/svg/icon-bx/box-tick.svg" height="70px"/>   
                </div>
                <div className='col-sm-8'>
                <span><b  style={{fontFamily:'sofia',fontSize:'20px'}}>Enjoy The Product</b></span><br/>
               <span style={{fontFamily:'sofia',fontSize:'14px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting</span>
                </div>
            </div>
            </button>
            </div>
            <div className='p-3'>
            <p  style={{fontFamily:'sofia',fontSize:'22px',color:'red'}}> <span className="fs-3 text-danger"><i class="bi bi-check2-circle"></i></span>You will save ₹504 on this order</p>
          <hr/>
          <span><b>Total</b></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><b>$125.75</b></span>
            </div>
            <div className='p-3'>
            <button className='pdb2 bg-danger'> <span className="fs-4 mt-2 text-light">
                  <i class="bi bi-heart"></i>
                </span>
                &nbsp;&nbsp;&nbsp;
                <b>Add TO Wishlist</b>
                </button>
            <button className='pdb2 mt-3'>PLACE ORDER</button>
            </div>
            </div>
            </div>
          </div>
      

      

    {/* '''''''''''''''''''''''''''''''''''''''' */}


      <div className="row mt-5">
      <div className="col-sm-2"></div>
      <div className="col-sm-8">
        <center>
          <button className={`border border-none ${showManish ? 'active' : ''}`} onClick={handleManishClick} style={{border:'none',height:'40px',width:'200px',color:'white',background:'black'}}>
          Description
          </button>
          <button className={`border border-none ${!showManish ? 'active' : ''}`} onClick={handleVijayClick}  style={{border:'none',height:'40px',width:'200px',color:'white',background:'black'}}>
           Reviews
          </button>
        </center>
        <hr />
        <div  id='rigs' style={{ display: showManish ? 'block' : 'none' }}>
       <div className="row mt-5">
       
          <center><b style={{ fontFamily: "sofia", fontSize: "30px" }}>Eco-Friendly Toothbrushes</b>
          <p style={{ fontFamily: "sofia", fontSize: "18px" }}>Lorem Ipsum is simply dummy text of the 
          printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
           ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
           make a type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was popularised in 
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
           and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</center>
<div className="col-sm-4">
<i class="bi bi-check-circle fs-2"></i> &nbsp;Biodegradable, renewable bamboo handle
</div>
<div className="col-sm-4">
<i class="bi bi-check-circle fs-2"></i>Biodegradable, renewable bamboo handle
</div>
<div className="col-sm-4">
<i class="bi bi-check-circle fs-2"></i>Biodegradable, renewable bamboo handle
</div>
 </div>
 <div className="row">
<div className="col-sm-4 p-3">
    <img src="https://mooncart.dexignzone.com/xhtml/images/feature/product-feature/1.png" width="100%"/>
</div>
<div className="col-sm-4 p-3">
<img src="https://mooncart.dexignzone.com/xhtml/images/feature/product-feature/2.png" width="100%"/>
</div>
<div className="col-sm-4 p-3">
<img src="https://mooncart.dexignzone.com/xhtml/images/feature/product-feature/3.png" width="100%"/>
</div>
 </div>      


        </div>
        {/* '''''''''''''''''''''''''''''''''''''''''''''''''''''' */}
        <div id='rigs1' style={{ display: showManish ? 'none' : 'block' }}>
        <p style={{fontSize:'20px',fontFamily:'sofia'}} className="mt-4"><b>Comments (02)</b></p>
             <p style={{fontSize:'15 px',fontFamily:'sofia'}}>There are many variations of passages of Lorem Ipsum available.</p>

             <div className="row">
    <div className="col-sm-2 mt-4">
      <img src="https://mooncart.dexignzone.com/xhtml/images/profile4.jpg" style={{height:'100px',width:'100px',borderRadius:'50%'}}/>
    </div>
    <div className="col-sm-10">
    <div className="row">
      <div className="col-sm-2">
      <p style={{fontSize:'15px',fontFamily:'sofia'}} className="mt-4"><b>Michel Poe</b></p>
      </div>
      <div className="col-sm-8"></div>
      <div className="col-sm-2">
      <button
                        className="cart-button mt-3"
                        style={{
                          fontSize: "14px",
                          height: "23px",
                          width: "60px",
                          background:'black',
                          color:'white'
                        }}
                      >
                     REPLY
                      </button>
      </div>
    </div>
   
    <p style={{fontSize:'15px',fontFamily:'sofia'}} >Lorem Ipsum is simply dummy
     text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
     took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
   </div>
<hr/>

<div className="row ms-5">
    <div className="col-sm-2 mt-4">
      <img src="https://mooncart.dexignzone.com/xhtml/images/profile3.jpg" style={{height:'100px',width:'100px',borderRadius:'50%'}}/>
    </div>
    <div className="col-sm-10">
    <div className="row">
      <div className="col-sm-3">
      <p style={{fontSize:'15px',fontFamily:'sofia'}} className="mt-4"><b>Celesto Anderson</b></p>
      </div>
      <div className="col-sm-7"></div>
      <div className="col-sm-2">
      <button
                        className="cart-button mt-3"
                        style={{
                          fontSize: "14px",
                          height: "23px",
                          width: "60px",
                          background:'black',
                          color:'white'
                        }}
                      >
                     REPLY
                      </button>
      </div>
    </div>
   
    <p style={{fontSize:'15px',fontFamily:'sofia'}} >Lorem Ipsum is simply dummy
     text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
     took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <hr/>
   </div>

   <div className="row">
    <div className="col-sm-2 mt-4">
      <img src="https://mooncart.dexignzone.com/xhtml/images/profile2.jpg" style={{height:'100px',width:'100px',borderRadius:'50%'}}/>
    </div>
    <div className="col-sm-10">
    <div className="row">
      <div className="col-sm-3">
      <p style={{fontSize:'15px',fontFamily:'sofia'}} className="mt-4"><b>Monsur Rahman Lito</b></p>
      </div>
      <div className="col-sm-7"></div>
      <div className="col-sm-2">
      <button
                        className="cart-button mt-3"
                        style={{
                          fontSize: "14px",
                          height: "23px",
                          width: "60px",
                          background:'black',
                          color:'white'
                        }}
                      >
                     REPLY
                      </button>
      </div>
    </div>
   
    <p style={{fontSize:'15px',fontFamily:'sofia'}} >Lorem Ipsum is simply dummy
     text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
     took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
   </div>
<hr/>

<p style={{fontSize:'20px',fontFamily:'sofia'}} ><b>Good Comments</b></p>
<p style={{fontSize:'15px',fontFamily:'sofia'}} >There are many variations of passages of Lorem Ipsum available.</p>

<div className="row">
    <div className="col-sm-6">
      <input type="text" className="form-control" placeholder="Author " style={{height:'50px',background:'#dbdbdb;'}}/>
    </div>
    <div className="col-sm-6">
    <input type="email" className="form-control"  placeholder="Email" style={{height:'50px',background:'#dbdbdb;'}}/>
    </div>
</div>
<div className="row">
  <div className="col-sm-12">
  <input type="textarea" className='form-control mt-3' placeholder="Type Comment Here"  style={{height:'90px',background:' #dbdbdb;'}}/><br/>
  </div>
</div>

<button
                        className="cart-button mt-3"
                        style={{
                          fontSize: "14px",
                          height: "50px",
                          width: "180px",
                          background:'black',
                          color:'white'
                        }}
                      >
                  Submit Now
                      </button>

        </div>
      </div>
      <div className="col-sm-2"></div>
    </div>
    <div className='row mt-5'>
        <div className='col-sm-2'></div>
        <div className='col-sm-8'>
                    {/* ''''''''''''''''''''''''''''''''cart slider''''''''''''''''''''''''''''' */}
    
        <div className='row mt-5'>
          <div className='col-sm-4'>
          <h3 style={{fontFamily:'sofia',fontSize:'40px'}}><b>Related products</b></h3>
      </div>
          <div className='col-sm-6'>
          </div>
          <div className='col-sm-2'>
          See All Products 
          </div>
        </div>
    

      <Slider
        slidesToShow={4}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={2000}
        responsive={[
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
        ]}
      >
        <div className="custom-box">

        <figure className="snip1268">
                <div className="image">
                  <button
                    className="cart-button fs-6 bg-dark text-light"
                    style={{
                      height: "20px",
                      width: "60px",
                      lineHeight: "18px",
                    }}
                  >
                    <b> -20%</b>
                  </button>
                  <button
                    className="cart-button fs-6 text-light"
                    style={{
                      marginLeft:'90px',
                      height: "20px",
                      width: "97px",
                      lineHeight: "18px",
                      background:'red',
                      border:"none"
                    }}
                  >
                    <b>FEATURED</b>
                  </button>
                  <img
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/1.png" style={{height:'250px'}}
                    alt="sq-sample4"
                  />
                  <div className="add-to-cart">
                    <button
                      className="cart-button fs-6 bg-dark text-light ms-4"
                      style={{
                        height: "30px",
                        width: "100px",
                        lineHeight: "26px",
                      }}
                    >
                      Quick View
                    </button>
                    <button
                      className="cart-button m-2 fs-5 bg-dark text-light"
                      style={{
                        height: "30px",
                        width: "40px",
                        lineHeight: "26px",
                      }}
                    >
                      <i class="bi bi-heart-fill"></i>
                    </button>
                    <button
                      className="cart-button fs-5 bg-dark text-light"
                      style={{
                        height: "30px",
                        width: "40px",
                        lineHeight: "26px",
                      }}
                    >
                      <i class="bi bi-cart-dash-fill"></i>
                    </button>
                  </div>
                </div>
                <figcaption>
                <b className="ms-5">Wooden Water Bottles</b>
                  <center>
                    <i
                      class="bi bi-star m-1 fs-5"
                      style={{ color: "orange" }}
                    ></i>
                    <i
                      class="bi bi-star m-1 fs-5"
                      style={{ color: "orange" }}
                    ></i>
                    <i
                      class="bi bi-star m-1 fs-5"
                      style={{ color: "orange" }}
                    ></i>
                    <i
                      class="bi bi-star m-1 fs-5"
                      style={{ color: "orange" }}
                    ></i>
                    <i class="bi bi-star m-1 fs-5"></i>
                    <br />
                    <br />
                    <span className="price">
                      <s>$65.00 </s>
                    </span>
                    {} {}
                    <span style={{ color: "red" }}>$65.00 </span>
                  </center>
                </figcaption>
              </figure>
        </div>
        <div className="custom-box">

<figure className="snip1268">
        <div className="image">
          <button
            className="cart-button fs-6 bg-dark text-light"
            style={{
              height: "20px",
              width: "60px",
              lineHeight: "18px",
            }}
          >
            <b> -30%</b>
          </button>
          <button
            className="cart-button fs-6 text-light"
            style={{
              marginLeft:'90px',
              height: "20px",
              width: "97px",
              lineHeight: "18px",
              background:'red',
              border:"none"
            }}
          >
            <b>FEATURED</b>
          </button>
          <img
            src="https://mooncart.dexignzone.com/xhtml/images/shop/product/2.png" style={{height:'250px'}}
            alt="sq-sample4"
          />
          <div className="add-to-cart">
            <button
              className="cart-button fs-6 bg-dark text-light ms-4"
              style={{
                height: "30px",
                width: "100px",
                lineHeight: "26px",
              }}
            >
              Quick View
            </button>
            <button
              className="cart-button m-2 fs-5 bg-dark text-light"
              style={{
                height: "30px",
                width: "40px",
                lineHeight: "26px",
              }}
            >
              <i class="bi bi-heart-fill"></i>
            </button>
            <button
              className="cart-button fs-5 bg-dark text-light"
              style={{
                height: "30px",
                width: "40px",
                lineHeight: "26px",
              }}
            >
              <i class="bi bi-cart-dash-fill"></i>
            </button>
          </div>
        </div>
        <figcaption>
        <b className="ms-5">Wooden Water Bottles</b>
          <center>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i class="bi bi-star m-1 fs-5"></i>
            <br />
            <br />
            <span className="price">
              <s>$65.00 </s>
            </span>
            {} {}
            <span style={{ color: "red" }}>$65.00 </span>
          </center>
        </figcaption>
      </figure>
</div>
        <div className="custom-box">

<figure className="snip1268">
        <div className="image">
          <button
            className="cart-button fs-6 bg-dark text-light"
            style={{
              height: "20px",
              width: "60px",
              lineHeight: "18px",
            }}
          >
            <b> -40%</b>
          </button>
          <button
            className="cart-button fs-6 text-light"
            style={{
              marginLeft:'130px',
              height: "20px",
              width: "97px",
              lineHeight: "18px",
              background:'red',
              border:"none"
            }}
          >
            <b>FEATURED</b>
          </button>
          <img
            src="https://mooncart.dexignzone.com/xhtml/images/shop/product/3.png" style={{height:'250px'}}
            alt="sq-sample4"
          />
          <div className="add-to-cart">
            <button
              className="cart-button fs-6 bg-dark text-light ms-4"
              style={{
                height: "30px",
                width: "100px",
                lineHeight: "26px",
              }}
            >
              Quick View
            </button>
            <button
              className="cart-button m-2 fs-5 bg-dark text-light"
              style={{
                height: "30px",
                width: "40px",
                lineHeight: "26px",
              }}
            >
              <i class="bi bi-heart-fill"></i>
            </button>
            <button
              className="cart-button fs-5 bg-dark text-light"
              style={{
                height: "30px",
                width: "40px",
                lineHeight: "26px",
              }}
            >
              <i class="bi bi-cart-dash-fill"></i>
            </button>
          </div>
        </div>
        <figcaption>
        <b className="ms-5">Wooden Water Bottles</b>
          <center>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i class="bi bi-star m-1 fs-5"></i>
            <br />
            <br />
            <span className="price">
              <s>$65.00 </s>
            </span>
            {} {}
            <span style={{ color: "red" }}>$65.00 </span>
          </center>
        </figcaption>
      </figure>
</div>
        <div className="custom-box">

<figure className="snip1268">
        <div className="image">
          <button
            className="cart-button fs-6 bg-dark text-light"
            style={{
              height: "20px",
              width: "60px",
              lineHeight: "18px",
            }}
          >
            <b> -20%</b>
          </button>
          <button
            className="cart-button fs-6 text-light"
            style={{
              marginLeft:'90px',
              height: "20px",
              width: "97px",
              lineHeight: "18px",
              background:'red',
              border:"none"
            }}
          >
            <b>FEATURED</b>
          </button>
          <img
            src="https://mooncart.dexignzone.com/xhtml/images/shop/product/7.png" style={{height:'250px'}}
            alt="sq-sample4"
          />
          <div className="add-to-cart">
            <button
              className="cart-button fs-6 bg-dark text-light ms-4"
              style={{
                height: "30px",
                width: "100px",
                lineHeight: "26px",
              }}
            >
              Quick View
            </button>
            <button
              className="cart-button m-2 fs-5 bg-dark text-light"
              style={{
                height: "30px",
                width: "40px",
                lineHeight: "26px",
              }}
            >
              <i class="bi bi-heart-fill"></i>
            </button>
            <button
              className="cart-button fs-5 bg-dark text-light"
              style={{
                height: "30px",
                width: "40px",
                lineHeight: "26px",
              }}
            >
              <i class="bi bi-cart-dash-fill"></i>
            </button>
          </div>
        </div>
        <figcaption>
        <b className="ms-5">Wooden Water Bottles</b>
          <center>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i class="bi bi-star m-1 fs-5"></i>
            <br />
            <br />
            <span className="price">
              <s>$65.00 </s>
            </span>
            {} {}
            <span style={{ color: "red" }}>$65.00 </span>
          </center>
        </figcaption>
      </figure>
</div>
        <div className="custom-box">

<figure className="snip1268">
        <div className="image">
          <button
            className="cart-button fs-6 bg-dark text-light"
            style={{
              height: "20px",
              width: "60px",
              lineHeight: "18px",
            }}
          >
            <b> -40%</b>
          </button>
          <button
            className="cart-button fs-6 text-light"
            style={{
              marginLeft:'90px',
              height: "20px",
              width: "97px",
              lineHeight: "18px",
              background:'red',
              border:"none"
            }}
          >
            <b>FEATURED</b>
          </button>
          <img
            src="https://mooncart.dexignzone.com/xhtml/images/shop/product/5.png" style={{height:'250px'}}
            alt="sq-sample4"
          />
          <div className="add-to-cart">
            <button
              className="cart-button fs-6 bg-dark text-light ms-4"
              style={{
                height: "30px",
                width: "100px",
                lineHeight: "26px",
              }}
            >
              Quick View
            </button>
            <button
              className="cart-button m-2 fs-5 bg-dark text-light"
              style={{
                height: "30px",
                width: "40px",
                lineHeight: "26px",
              }}
            >
              <i class="bi bi-heart-fill"></i>
            </button>
            <button
              className="cart-button fs-5 bg-dark text-light"
              style={{
                height: "30px",
                width: "40px",
                lineHeight: "26px",
              }}
            >
              <i class="bi bi-cart-dash-fill"></i>
            </button>
          </div>
        </div>
        <figcaption>
        <b className="ms-5">Wooden Water Bottles</b>
          <center>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i class="bi bi-star m-1 fs-5"></i>
            <br />
            <br />
            <span className="price">
              <s>$65.00 </s>
            </span>
            {} {}
            <span style={{ color: "red" }}>$65.00 </span>
          </center>
        </figcaption>
      </figure>
</div>
        <div className="custom-box">

<figure className="snip1268">
        <div className="image">
          <button
            className="cart-button fs-6 bg-dark text-light"
            style={{
              height: "20px",
              width: "60px",
              lineHeight: "18px",
            }}
          >
            <b> -40%</b>
          </button>
          <button
            className="cart-button fs-6 text-light"
            style={{
              marginLeft:'90px',
              height: "20px",
              width: "97px",
              lineHeight: "18px",
              background:'red',
              border:"none"
            }}
          >
            <b>FEATURED</b>
          </button>
          <img
            src="https://mooncart.dexignzone.com/xhtml/images/shop/product/6.png" style={{height:'250px'}}
            alt="sq-sample4"
          />
          <div className="add-to-cart">
            <button
              className="cart-button fs-6 bg-dark text-light ms-4"
              style={{
                height: "30px",
                width: "100px",
                lineHeight: "26px",
              }}
            >
              Quick View
            </button>
            <button
              className="cart-button m-2 fs-5 bg-dark text-light"
              style={{
                height: "30px",
                width: "40px",
                lineHeight: "26px",
              }}
            >
              <i class="bi bi-heart-fill"></i>
            </button>
            <button
              className="cart-button fs-5 bg-dark text-light"
              style={{
                height: "30px",
                width: "40px",
                lineHeight: "26px",
              }}
            >
              <i class="bi bi-cart-dash-fill"></i>
            </button>
          </div>
        </div>
        <figcaption>
        <b className="ms-5">Wooden Water Bottles</b>
          <center>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i class="bi bi-star m-1 fs-5"></i>
            <br />
            <br />
            <span className="price">
              <s>$65.00 </s>
            </span>
            {} {}
            <span style={{ color: "red" }}>$65.00 </span>
          </center>
        </figcaption>
      </figure>
</div>
        <div className="custom-box">

<figure className="snip1268">
        <div className="image">
          <button
            className="cart-button fs-6 bg-dark text-light"
            style={{
              height: "20px",
              width: "60px",
              lineHeight: "18px",
            }}
          >
            <b> -40%</b>
          </button>
          <button
            className="cart-button fs-6 text-light"
            style={{
              marginLeft:'90px',
              height: "20px",
              width: "97px",
              lineHeight: "18px",
              background:'red',
              border:"none"
            }}
          >
            <b>FEATURED</b>
          </button>
          <img
            src="https://mooncart.dexignzone.com/xhtml/images/shop/product/7.png" style={{height:'250px'}}
            alt="sq-sample4"
          />
          <div className="add-to-cart">
            <button
              className="cart-button fs-6 bg-dark text-light ms-4"
              style={{
                height: "30px",
                width: "100px",
                lineHeight: "26px",
              }}
            >
              Quick View
            </button>
            <button
              className="cart-button m-2 fs-5 bg-dark text-light"
              style={{
                height: "30px",
                width: "40px",
                lineHeight: "26px",
              }}
            >
              <i class="bi bi-heart-fill"></i>
            </button>
            <button
              className="cart-button fs-5 bg-dark text-light"
              style={{
                height: "30px",
                width: "40px",
                lineHeight: "26px",
              }}
            >
              <i class="bi bi-cart-dash-fill"></i>
            </button>
          </div>
        </div>
        <figcaption>
        <b className="ms-5">Wooden Water Bottles</b>
          <center>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i class="bi bi-star m-1 fs-5"></i>
            <br />
            <br />
            <span className="price">
              <s>$65.00 </s>
            </span>
            {} {}
            <span style={{ color: "red" }}>$65.00 </span>
          </center>
        </figcaption>
      </figure>
</div>
        <div className="custom-box">

<figure className="snip1268">
        <div className="image">
          <button
            className="cart-button fs-6 bg-dark text-light"
            style={{
              height: "20px",
              width: "60px",
              lineHeight: "18px",
            }}
          >
            <b> -40%</b>
          </button>
          <button
            className="cart-button fs-6 text-light"
            style={{
              marginLeft:'90px',
              height: "20px",
              width: "97px",
              lineHeight: "18px",
              background:'red',
              border:"none"
            }}
          >
            <b>FEATURED</b>
          </button>
          <img
            src="https://mooncart.dexignzone.com/xhtml/images/shop/product/8.png" style={{height:'250px'}}
            alt="sq-sample4"
          />
          <div className="add-to-cart">
            <button
              className="cart-button fs-6 bg-dark text-light ms-4"
              style={{
                height: "30px",
                width: "100px",
                lineHeight: "26px",
              }}
            >
              Quick View
            </button>
            <button
              className="cart-button m-2 fs-5 bg-dark text-light"
              style={{
                height: "30px",
                width: "40px",
                lineHeight: "26px",
              }}
            >
              <i class="bi bi-heart-fill"></i>
            </button>
            <button
              className="cart-button fs-5 bg-dark text-light"
              style={{
                height: "30px",
                width: "40px",
                lineHeight: "26px",
              }}
            >
              <i class="bi bi-cart-dash-fill"></i>
            </button>
          </div>
        </div>
        <figcaption>
        <b className="ms-5">Wooden Water Bottles</b>
          <center>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i
              class="bi bi-star m-1 fs-5"
              style={{ color: "orange" }}
            ></i>
            <i class="bi bi-star m-1 fs-5"></i>
            <br />
            <br />
            <span className="price">
              <s>$65.00 </s>
            </span>
            {} {}
            <span style={{ color: "red" }}>$65.00 </span>
          </center>
        </figcaption>
      </figure>
</div>

        
    
      </Slider>
  

          {/* ''''''''''''''''''''''''''''''''''end slide''''''''''''''''''''''''''''''''''' */}
        </div>
        <div className='col-sm-2'></div>
        </div>
     





    </div>
  );
};

export default page;
