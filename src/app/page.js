"use client";
import React, { useState } from "react";
import Card from "./Homecart/card";
import Delevery from "./Homecart/delevery";
import Link from 'next/link';
const Home = () => {
  const images = [
    "https://mooncart.dexignzone.com/xhtml/images/banner/banner-media.png",
    "https://mooncart.dexignzone.com/xhtml/images/banner/banner-media-2.png",
  ];

  const textData = ["Explore Wooden Products", "Natural Wooden Products"];

  const [num, setNum] = useState(0);

  const nextSlide = () => {
    setNum((prevNum) => (prevNum + 1) % images.length);
  };

  const previousSlide = () => {
    setNum((prevNum) => (prevNum - 1 + images.length) % images.length);
  };

  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12">
        {/* .................slider start---------------------------- */}
        <div className="row">
          <div
            className="col-sm-6"
            style={{
              maxWidth: "100%",
              height: "auto",
              minHeight: "800px",
              background: "lightgrey",
            }}
          >
            <p className="font">
              <b>{textData[num]}</b>
            </p>
            <div className="small-font">
              Sell globally in minutes with localized currencies, languages
              <br />
              and experiences in every market
              <br />
              <br />
              <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-3">
                  <span>Price</span>
                  <br />
                  <b>$120.80</b>
                </div>
                <div className="col-sm-4">
                  <span>Color</span>
                  <br />
                  <input type="radio" />
                  {} {}
                  <input type="radio" />
                  {} {}
                  <input type="radio" />
                  {} {}
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-3">
                <Link href="/shop-cart" style={{color:'black',textDecoration:'none'}}><button
                    className="cart-button bg-dark text-light"
                    style={{ fontSize: "14px", height: "40px", width: "200px" }}
                  >
                    ADD TO CART
                  </button></Link>
                </div>
                <div className="col-sm-4 ">
                <Link href="/shopdefault" style={{color:'black',textDecoration:'none'}}> <button
                    className="details-button"
                    style={{ fontSize: "14px", height: "40px", width: "200px" }}
                  >
                    VIEW DETAILS
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-11">
                <center>
                  <img
                    id="slider"
                    src={images[num]}
                    alt={`Slide ${num}`}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      maxHeight: "800px",
                    }}
                  />
                  <div
                    className="buttons"
                    style={{
                      position: "absolute",
                      top: "91%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <button
                      id="prev-btn"
                      onClick={previousSlide}
                      style={{ background: "white", color: "black" }}
                    >
                      Pre
                    </button>
                    <button
                      id="next-btn"
                      onClick={nextSlide}
                      className="bg-dark text-light"
                    >
                      Next
                    </button>
                  </div>
                </center>
              </div>
              <div className="col-sm-1 bro">
                <div className="row">
                  <div className="col-sm-12 ">
                    <p
                      style={{
                        transform: "rotate(90deg)",
                        whiteSpace: "nowrap",
                        color: "white",
                        marginTop: "160px",
                      }}
                    >
                      INSTAGRAM
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <p
                      style={{
                        transform: "rotate(90deg)",
                        whiteSpace: "nowrap",
                        color: "white",
                        marginTop: "90px",
                      }}
                    >
                      FACEBOOK
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <p
                      style={{
                        transform: "rotate(90deg)",
                        whiteSpace: "nowrap",
                        color: "white",
                        marginTop: "70px",
                      }}
                    >
                      TWITTER
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <p
                      style={{
                        transform: "rotate(90deg)",
                        whiteSpace: "nowrap",
                        color: "white",
                        marginTop: "70px",
                      }}
                    >
                      WHATSAPP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* .......................slider end......................... */}

      {/* .......................box images start......................... */}

      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-sm-2"></div>
        <div className="col-sm-4 imga m-3">
          {/* <div className='ab fontt'>
        
              <b> Wooden<br/>
              Water Bottles</b> <br/>
              <span className="fs-6 ms-3">UP TO 60% OFF</span>
           
          <div className='abc'>
          <button  style={{fontSize:'14px',height:'40px',width:'150px'}}>Shop Now</button>
          </div>
         </div> */}

          <div className="row " style={{ marginTop: "400px" }}>
            <div className="col-sm-8 fontt">
              <b>
                {" "}
                Wooden
                <br />
                Water Bottles
              </b>{" "}
              <br />
              <span className="fs-6 ms-3">UP TO 60% OFF</span>
            </div>

            <div className="col-sm-4" style={{ marginTop: "70px" }}>
            <Link href="/shop-standard" style={{color:'black',textDecoration:'none'}}> <button
                className="cart-button"
                style={{ fontSize: "14px", height: "60px", width: "150px" }}
              >
                Shop Now
              </button></Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="row">
            <div className="col-sm-12 imga1 m-3">
              <div className=" fontts mt-4">
                <b>
                  {" "}
                  Bamboo
                  <br />
                  toothbrushes
                </b>{" "}
                <br />
                <span className="fs-6 ms-3">UP TO 60% OFF</span>
                <br />
                <Link href="/shop-standard" style={{color:'black',textDecoration:'none'}}>  <button
                  className="cart-button"
                  style={{ fontSize: "14px", height: "40px", width: "150px" }}
                >
                  Shop Now
                </button></Link>
              </div>
            </div>
            <div className="col-sm-12 imga2 m-3">
              <div className=" fonttss mt-4">
                <b>
                  {" "}
                  Reusable
                  <br />
                  Eco friendly bags
                </b>{" "}
                <br />
                <span className="fs-6 ms-3">UP TO 60% OFF</span>
                <br />
                <Link href="/shop-standard" style={{color:'black',textDecoration:'none'}}>  <button
                  className="cart-button"
                  style={{ fontSize: "14px", height: "40px", width: "150px" }}
                >
                  Shop Now
                </button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
      {/* .......................box images start......................... */}
    
    
    </div>
    <Card/>
    <Delevery/>
    </div>
  );
};

export default Home;
