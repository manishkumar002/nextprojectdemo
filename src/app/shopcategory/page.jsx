"use client"
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./shopcategory.css";
function page(){
  const [priceGap] = useState(1000);
  const [minPrice, setMinPrice] = useState(2500);
  const [maxPrice, setMaxPrice] = useState(7500);
  const [selectedPerson, setSelectedPerson] = useState('manish');

  const handleButtonClick = (person) => {
    setSelectedPerson(person);
  }

  const handlePriceInputChange = (e) => {
    const inputName = e.target.className;
    const inputValue = parseInt(e.target.value);

    if (inputName === 'input-min') {
      setMinPrice(inputValue);
    } else {
      setMaxPrice(inputValue);
    }
  };

  const handleRangeInputChange = (e) => {
    const inputName = e.target.className;
    const minVal = parseInt(e.target.value);
    const maxVal = inputName === 'range-min' ? maxPrice : minPrice;

    if (maxVal - minVal < priceGap) {
      inputName === 'range-min' ? setMinPrice(maxVal - priceGap) : setMaxPrice(minVal + priceGap);
    } else {
      inputName === 'range-min' ? setMinPrice(minVal) : setMaxPrice(minVal);
    }
  };

  const calculateRangeStyles = () => {
    const leftPercentage = (minPrice / 10000) * 100;
    const rightPercentage = 100 - (maxPrice / 10000) * 100;
    return {
      left: `${leftPercentage}%`,
      right: `${rightPercentage}%`,
    };
  };

    return(
        <div>
        <div className='row'>
      <div className='sd'>
        <p className='sd1 mt-5'><b>Shop Category</b></p>
        <p className='sd2'>Home Shop Category</p>
          </div>
   

          <button className="bdttt1"><i class="bi bi-sliders"></i>&nbsp;&nbsp;&nbsp;Filter</button>
<br/><br/><br/>
  <div className="row">
    <div className="col-sm-3">
    <div className="p-4 ms-5">
<input type="text" className="form-control" placeholder="Search Product..." style={{background:'#dbdbdb'}}/><br/><br/>
<b>Price</b>

<div className="d-flex mt-4">
  <div className="">
    <div className="slider">
      <div className="progress" style={calculateRangeStyles()}></div>
    </div>
    <div className="range-input">
      <input
        type="range"
        className="range-min"
        min="0"
        max="10000"
        value={minPrice}
        step="100"
        onChange={handleRangeInputChange}
      />
      <input
        type="range"
        className="range-max"
        min="0"
        max="10000"
        value={maxPrice}
        step="100"
        onChange={handleRangeInputChange}
      />
    </div>
    <div className="price-input">
      <div className="field">
      <span style={{fontFamily:'sofia',fontSize:'15px'}}>Min Price: ${minPrice}</span>
        <input
          type="number"
          className="input-min"
          onChange={handlePriceInputChange}
        />
      </div>
      <div className="field">
         <span style={{fontFamily:'sofia',fontSize:'15px'}}>Max Price: ${maxPrice}</span>
        <input
          type="number"
          className="input-max"
          onChange={handlePriceInputChange}
        />
      
      </div>
    </div>
  </div>
</div>


<b>color</b><br/><br/>
<div class=" form-check-inline">
<input class="form-check-input bg-danger fs-5" type="radio" />
</div>
 
 <div class=" form-check-inline">
<input class="form-check-input bg-primary fs-5" type="radio" />
</div>

<div class=" form-check-inline">
<input class="form-check-input bg-light fs-5" type="radio" />
</div>

<div class=" form-check-inline">
<input class="form-check-input bg-dark fs-5" type="radio" />
</div>

<div class=" form-check-inline">
<input class="form-check-input bg-secondary fs-5" type="radio" />
</div>

<div class=" form-check-inline">
<input class="form-check-input bg-info fs-5" type="radio" />
</div>

<div class=" form-check-inline">
<input class="form-check-input bg-danger fs-5" type="radio" />
</div>

<div class=" form-check-inline">
<input class="form-check-input bg-primary fs-5" type="radio" />
</div>

<div class=" form-check-inline">
<input class="form-check-input bg-secondary fs-5" type="radio" />
</div>

<div class=" form-check-inline">
<input class="form-check-input bg-danger fs-5" type="radio" />
</div>
<br/><br/><br/><br/>

<b>size</b><br/><br/>

<div className="row">
<div className='col-sm-2 bbbs m-2 text-center'>2<span>
</span>
</div>

<div className='col-sm-2 bbbs m-2 text-center'>4<span>
</span>
</div>

<div className='col-sm-2 bbbs m-2 text-center'>6<span>
</span>
</div>

<div className='col-sm-2 bbbs m-2 text-center'>8<span>
</span>
</div>

<div className='col-sm-2 bbbs m-2 text-center'>10<span>
</span>
</div>

<div className='col-sm-2 bbbs m-2 text-center'>12<span>
</span>
</div>

<div className='col-sm-2 bbbs m-2 text-center'>14<span>
</span>
</div>

<div className='col-sm-2 bbbs m-2 text-center'>16<span>
</span>
</div>

<div className='col-sm-2 bbbs m-2 text-center'>18<span>
</span>
</div>

<div className='col-sm-2 bbbs m-2 text-center'>20<span>
</span>
</div>  
</div><br/><br/>


<b>Category</b><br/><br/>
<span style={{fontSize:'17px',fontFamily:'sofia'}}>Yoga Mats</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(15)<br/><br/>
<span style={{fontSize:'17px',fontFamily:'sofia'}}>Yoga Accessories</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(13)<br/><br/>
<span style={{fontSize:'17px',fontFamily:'sofia'}}>Reusable Bags</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(16)<br/><br/>
<span style={{fontSize:'17px',fontFamily:'sofia'}}>Water Bottles</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(18)<br/><br/>
<span style={{fontSize:'17px',fontFamily:'sofia'}}>Bamboo Toothbrushes</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(15)<br/><br/>
<span style={{fontSize:'17px',fontFamily:'sofia'}}>Fitness Trackers</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(20)<br/><br/>
<span style={{fontSize:'17px',fontFamily:'sofia'}}>Yoga Mats</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(5)<br/><br/>
<span style={{fontSize:'17px',fontFamily:'sofia'}}>Home Fitness Equipment</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(7)<br/>
<br/><br/>



<b>Tags</b><br/>

<button
                        className="cart-button m-1 mt-4"
                        style={{
                          fontSize: "14px",
                          height: "30px",
                          width: "60px",
                          border:"none"
                        }}
                      >
                       Mats
                      </button>
                      <button
                        className="cart-button m-1"
                        style={{
                          fontSize: "14px",
                          height: "30px",
                          width: "100px",
                          border:"none"
                        }}
                      >
                       Accessories
                      </button>
                      <button
                        className="cart-button m-1"
                        style={{
                          fontSize: "14px",
                          height: "30px",
                          width: "80px",
                          border:"none"
                        }}
                      >
                      Bottle
                      </button>
                      <button
                        className="cart-button m-1"
                        style={{
                          fontSize: "14px",
                          height: "30px",
                          width: "100px",
                          border:"none"
                        }}
                      >
                        Website
                      </button>
                      <button
                        className="cart-button m-1"
                        style={{
                          fontSize: "14px",
                          height: "30px",
                          width: "100px",
                          border:"none"
                        }}
                      >
                        Trackers
                      </button>
                      <button
                        className="cart-button m-1"
                        style={{
                          fontSize: "14px",
                          height: "30px",
                          width: "70px",
                          border:"none"
                        }}
                      >
                       Bags
                      </button>
                      <button
                        className="cart-button m-1"
                        style={{
                          fontSize: "14px",
                          height: "30px",
                          width: "70px",
                          border:"none"
                        }}
                      >
                       Cup
                      </button>
                      <button
                        className="cart-button m-1"
                        style={{
                          fontSize: "14px",
                          height: "30px",
                          width: "100px",
                          border:"none"
                        }}
                      >
                      Toothbrushes
                      </button>
<br/><br/><br/><br/>

                      <button
                        className="cart-button m-1"
                        style={{
                          fontSize: "14px",
                          height: "50px",
                          width: "100px",
                          border:"none",
                          background:'red',
                          color:'white'
                        }}
                      >
                    RESET
                      </button>
</div>
    </div>

    <div className="col-sm-9 p-4">

{/* <-----------------------category-------------------------------------------------> */}
<div className='row'>
          <div className='col-sm-4'>
          <h3 style={{fontFamily:'sofia',fontSize:'40px'}}><b>Category</b></h3>
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






{/* <-----------------------category-------------------------------------------------> */}

    <button className="bdttt2">BOTTLE <i class="bi bi-x-lg"></i></button>
          <button className="bdttt3">BEGS <i class="bi bi-x-lg"></i></button>
          <button className="bdttt4">Showing 1–5 Of 50 Results</button>
          <select className="bdttt5">
    <option value="volvo">Default Strong </option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select>
        
  <select className="bdttt6">
    <option value="volvo">Categories</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select>

          <button className="bdttt7 fs-4" onClick={() => handleButtonClick('manish')}><i class="bi bi-grid-3x3-gap-fill"></i></button>
          <button className="bdttt8 fs-4" onClick={() => handleButtonClick('vijay')}><i class="bi bi-grid-fill"></i></button>
          <button className="bdttt9 fs-5  ms-1"  onClick={() => handleButtonClick('yash')}><i class="bi bi-grid-1x2-fill"></i></button>
          <button className="bdttt9 fs-3"  onClick={() => handleButtonClick('dilip')}><i class="bi bi-grid-3x2-gap-fill"></i></button>
    <div  style={{ display: selectedPerson === 'manish' ? 'block' : 'none' }}>



      <div className='row'>
      {/* ------------------4 cart start-------------------------------- */}
    <div className="col-sm-3">
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/1.png" style={{height:'300px'}}
                    alt="sq-sample4"
                  width="100%"/>
                 <div className="add-to-cart">
                 <center><button
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
                      className="cart-button m-2 fs-5 bg-dark text-light "
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                
                    <center>Wooden Water Bottles</center>
               
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


            <div className="col-sm-3">
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/3.png" style={{height:'300px'}}
                    alt="sq-sample4"
                    width="100%" />
                  <div className="add-to-cart">
                  <center> <button
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                <center>Wooden Water Bottles</center>
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
         

            <div className="col-sm-3">
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
                   <b> -27%</b>
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/4.png" style={{height:'300px'}}
                    alt="sq-sample4"
                    width="100%" />
                  <div className="add-to-cart">
                  <center><button
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                <center>Wooden Water Bottles</center>
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



           
            <div className="col-sm-3">
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/5.png" style={{height:'300px'}}
                    alt="sq-sample4"
                    width="100%" />
                  <div className="add-to-cart">
                    <center><button
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
                      className="cart-button m-2 fs-5 bg-dark text-light "
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                
                    <center>Wooden Water Bottles</center>
               
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
            <div className="col-sm-3">
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/6.png" style={{height:'300px'}}
                    alt="sq-sample4"
                    width="100%" />
                  <div className="add-to-cart">
                   <center><button
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                <center>Wooden Water Bottles</center>
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
            <div className="col-sm-3">
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/7.png" style={{height:'300px'}}
                    alt="sq-sample4"
                    width="100%" />
                  <div className="add-to-cart">
                    <center><button
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                <center>Wooden Water Bottles</center>
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
            <div className="col-sm-3">
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
                   <b> -27%</b>
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/8.png" style={{height:'300px'}}
                    alt="sq-sample4"
                    width="100%" />
                  <div className="add-to-cart">
                   <center> <button
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                <center>Wooden Water Bottles</center>
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

            <div className="col-sm-3">
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
                   <b> -27%</b>
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/4.png" style={{height:'300px'}}
                    alt="sq-sample4"
                    width="100%" />
                  <div className="add-to-cart">
                    <center><button
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                <center>Wooden Water Bottles</center>
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
            <div className="col-sm-3">
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/1.png" style={{height:'300px'}}
                    alt="sq-sample4"
                  width="100%"/>
                  <div className="add-to-cart">
                    <center><button
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
                      className="cart-button m-2 fs-5 bg-dark text-light "
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
                    </center>
                  </div>

                </div>
                <figcaption>
                
                    <center>Wooden Water Bottles</center>
               
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



            <div className="col-sm-3">
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
                   <b> -27%</b>
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/6.png" style={{height:'300px'}}
                    alt="sq-sample4"
                    width="100%" />
                  <div className="add-to-cart">
                    <center><button
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                <center>Wooden Water Bottles</center>
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


            <div className="col-sm-3">
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
                   <b> -27%</b>
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/3.png" style={{height:'300px'}}
                    alt="sq-sample4"
                    width="100%" />
                  <div className="add-to-cart">
                    <center><button
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                <center>Wooden Water Bottles</center>
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



            <div className="col-sm-3">
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
                   <b> -27%</b>
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/5.png" style={{height:'300px'}}
                    alt="sq-sample4"
                    width="100%" />
                  <div className="add-to-cart">
                    <center><button
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                <center>Wooden Water Bottles</center>
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
      
</div>
</div>




{/* ------------------4 cart end-------------------------------- */}




      <div  style={{ display: selectedPerson === 'vijay' ? 'block' : 'none' }}>
      <div className="row">
{/* ------------------3 cart start-------------------------------- */}

<div className="col-sm-4">
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
                      marginLeft:'230px',
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/1.png" style={{height:'450px'}}
                    alt="sq-sample4"
                  width="100%"/>
                  <div className="add-to-cart">
                   <center> <button
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
                      className="cart-button m-2 fs-5 bg-dark text-light "
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                
                    <center className="fs-5">Wooden Water Bottles</center>
               
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


            <div className="col-sm-4">
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
                        marginLeft:'230px',
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/2.png" style={{height:'450px'}}
                    alt="sq-sample4"
                    width="100%" />
                  <div className="add-to-cart">
                  <center> <button
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                <center>Wooden Water Bottles</center>
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

            <div className="col-sm-4">
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
                        marginLeft:'230px',
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/3.png" style={{height:'450px'}}
                    alt="sq-sample4"
                  width="100%"/>
                  <div className="add-to-cart">
                   <center> <button
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
                      className="cart-button m-2 fs-5 bg-dark text-light "
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                
                    <center className="fs-5">Wooden Water Bottles</center>
               
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


            <div className="col-sm-4">
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
                      marginLeft:'230px',
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/4.png" style={{height:'450px'}}
                    alt="sq-sample4"
                    width="100%" />
                  <div className="add-to-cart">
                  <center> <button
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                <center>Wooden Water Bottles</center>
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
            <div className="col-sm-4">
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
                      marginLeft:'230px',
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/5.png" style={{height:'450px'}}
                    alt="sq-sample4"
                  width="100%"/>
                  <div className="add-to-cart">
                   <center> <button
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
                      className="cart-button m-2 fs-5 bg-dark text-light "
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                
                    <center className="fs-5">Wooden Water Bottles</center>
               
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


            <div className="col-sm-4">
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
                      marginLeft:'230px',
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/6.png" style={{height:'450px'}}
                    alt="sq-sample4"
                    width="100%" />
                  <div className="add-to-cart">
                  <center> <button
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                <center>Wooden Water Bottles</center>
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


{/* ------------------3 cart end-------------------------------- */}
      </div>
      </div>

      
<div  style={{ display: selectedPerson === 'dilip' ? 'block' : 'none' }}>

{/* ------------------2 text cart start-------------------------------- */}
      <div className="row">
    <div className="col-sm-6">
    <div className="row mt-4">
             <div className="col-sm-4">
               <div className="ssimm">
                   <button
                    className="cart-button fs-6 bg-danger text-light"
                    style={{
                      height: "20px",
                      width: "60px",
                      lineHeight: "18px",
                      border:'none',
                      color:'black'
                    }}
                  >
                    <b> -40%</b>
                  </button>
                  </div>          
                </div>
<div className="col-sm-8">
  <b style={{fontSize:'20px',fontFamily:'sofia'}}>SALE Wooden Water Bottles</b>
  <b className="tex">
  <i class="bi bi-star-fill text-danger"></i>&nbsp;
  <i class="bi bi-star-fill text-danger"></i>&nbsp;
  <i class="bi bi-star-half text-danger"></i>&nbsp;
  <i class="bi bi-star text-danger"></i>&nbsp;
  <i class="bi bi-star text-danger"></i>
  
  </b><br/>
  <b style={{fontSize:'15px',fontFamily:'sofia',color:'red'}}>Accessories,Clocks</b>
  <span className="texs">370 Review</span><br/>
  <p className="para">It is a long established fact that a reader will be distracted by the readable
   content of a page when looking at its layout. The point of using Lorem
    Ipsum is that it has a more-or-less normal distribution of letters,
   as opposed to using 'Content here, content here', making it look like readable English.</p>


   <button className="bdt10"><span className='text-danger fs-5'>Price</span><br/><span>$40.00</span></button>
   <button className="bdt12 ">Add to cart</button>
   <button className="bdt13 fs-4"><i class="bi bi-heart-fill"></i></button>
   <button className="bdt14"><i class="bi bi-cart-plus-fill"></i></button>
</div>
 </div>



    </div>
    <div className="col-sm-6">
    <div className="row mt-4">
             <div className="col-sm-4">
               <div className="ssimm1">
                   <button
                    className="cart-button fs-6 bg-danger text-light"
                    style={{
                      height: "20px",
                      width: "60px",
                      lineHeight: "18px",
                      border:'none',
                      color:'black'
                    }}
                  >
                    <b> -40%</b>
                  </button>
                  </div>          
                </div>
<div className="col-sm-8">
  <b style={{fontSize:'20px',fontFamily:'sofia'}}>SALE Wooden Water Bottles</b>
  <b className="tex">
  <i class="bi bi-star-fill text-danger"></i>&nbsp;
  <i class="bi bi-star-fill text-danger"></i>&nbsp;
  <i class="bi bi-star-half text-danger"></i>&nbsp;
  <i class="bi bi-star text-danger"></i>&nbsp;
  <i class="bi bi-star text-danger"></i>
  
  </b><br/>
  <b style={{fontSize:'15px',fontFamily:'sofia',color:'red'}}>Accessories,Clocks</b>
  <span className="texs">370 Review</span><br/>
  <p className="para">It is a long established fact that a reader will be distracted by the readable
   content of a page when looking at its layout. The point of using Lorem
    Ipsum is that it has a more-or-less normal distribution of letters,
   as opposed to using 'Content here, content here', making it look like readable English.</p>


   <button className="bdt10"><span className='text-danger fs-5'>Price</span><br/><span>$40.00</span></button>
   <button className="bdt12 ">Add to cart</button>
   <button className="bdt13 fs-4"><i class="bi bi-heart-fill"></i></button>
   <button className="bdt14"><i class="bi bi-cart-plus-fill"></i></button>
</div>
 </div>
    </div>

    <div className="col-sm-6">
    <div className="row mt-4">
             <div className="col-sm-4">
               <div className="ssimm2">
                   <button
                    className="cart-button fs-6 bg-danger text-light"
                    style={{
                      height: "20px",
                      width: "60px",
                      lineHeight: "18px",
                      border:'none',
                      color:'black'
                    }}
                  >
                    <b> -40%</b>
                  </button>
                  </div>          
                </div>
<div className="col-sm-8">
  <b style={{fontSize:'20px',fontFamily:'sofia'}}>SALE Wooden Water Bottles</b>
  <b className="tex">
  <i class="bi bi-star-fill text-danger"></i>&nbsp;
  <i class="bi bi-star-fill text-danger"></i>&nbsp;
  <i class="bi bi-star-half text-danger"></i>&nbsp;
  <i class="bi bi-star text-danger"></i>&nbsp;
  <i class="bi bi-star text-danger"></i>
  
  </b><br/>
  <b style={{fontSize:'15px',fontFamily:'sofia',color:'red'}}>Accessories,Clocks</b>
  <span className="texs">370 Review</span><br/>
  <p className="para">It is a long established fact that a reader will be distracted by the readable
   content of a page when looking at its layout. The point of using Lorem
    Ipsum is that it has a more-or-less normal distribution of letters,
   as opposed to using 'Content here, content here', making it look like readable English.</p>


   <button className="bdt10"><span className='text-danger fs-5'>Price</span><br/><span>$40.00</span></button>
   <button className="bdt12 ">Add to cart</button>
   <button className="bdt13 fs-4"><i class="bi bi-heart-fill"></i></button>
   <button className="bdt14"><i class="bi bi-cart-plus-fill"></i></button>
</div>
 </div>



    </div>
    <div className="col-sm-6">
    <div className="row mt-4">
             <div className="col-sm-4">
               <div className="ssimm3">
                   <button
                    className="cart-button fs-6 bg-danger text-light"
                    style={{
                      height: "20px",
                      width: "60px",
                      lineHeight: "18px",
                      border:'none',
                      color:'black'
                    }}
                  >
                    <b> -40%</b>
                  </button>
                  </div>          
                </div>
<div className="col-sm-8">
  <b style={{fontSize:'20px',fontFamily:'sofia'}}>SALE Wooden Water Bottles</b>
  <b className="tex">
  <i class="bi bi-star-fill text-danger"></i>&nbsp;
  <i class="bi bi-star-fill text-danger"></i>&nbsp;
  <i class="bi bi-star-half text-danger"></i>&nbsp;
  <i class="bi bi-star text-danger"></i>&nbsp;
  <i class="bi bi-star text-danger"></i>
  
  </b><br/>
  <b style={{fontSize:'15px',fontFamily:'sofia',color:'red'}}>Accessories,Clocks</b>
  <span className="texs">370 Review</span><br/>
  <p className="para">It is a long established fact that a reader will be distracted by the readable
   content of a page when looking at its layout. The point of using Lorem
    Ipsum is that it has a more-or-less normal distribution of letters,
   as opposed to using 'Content here, content here', making it look like readable English.</p>


   <button className="bdt10"><span className='text-danger fs-5'>Price</span><br/><span>$40.00</span></button>
   <button className="bdt12 ">Add to cart</button>
   <button className="bdt13 fs-4"><i class="bi bi-heart-fill"></i></button>
   <button className="bdt14"><i class="bi bi-cart-plus-fill"></i></button>
</div>
 </div>
    </div>

    <div className="col-sm-6">
    <div className="row mt-4">
             <div className="col-sm-4">
               <div className="ssimm4">
                   <button
                    className="cart-button fs-6 bg-danger text-light"
                    style={{
                      height: "20px",
                      width: "60px",
                      lineHeight: "18px",
                      border:'none',
                      color:'black'
                    }}
                  >
                    <b> -40%</b>
                  </button>
                  </div>          
                </div>
<div className="col-sm-8">
  <b style={{fontSize:'20px',fontFamily:'sofia'}}>SALE Wooden Water Bottles</b>
  <b className="tex">
  <i class="bi bi-star-fill text-danger"></i>&nbsp;
  <i class="bi bi-star-fill text-danger"></i>&nbsp;
  <i class="bi bi-star-half text-danger"></i>&nbsp;
  <i class="bi bi-star text-danger"></i>&nbsp;
  <i class="bi bi-star text-danger"></i>
  
  </b><br/>
  <b style={{fontSize:'15px',fontFamily:'sofia',color:'red'}}>Accessories,Clocks</b>
  <span className="texs">370 Review</span><br/>
  <p className="para">It is a long established fact that a reader will be distracted by the readable
   content of a page when looking at its layout. The point of using Lorem
    Ipsum is that it has a more-or-less normal distribution of letters,
   as opposed to using 'Content here, content here', making it look like readable English.</p>


   <button className="bdt10"><span className='text-danger fs-5'>Price</span><br/><span>$40.00</span></button>
   <button className="bdt12 ">Add to cart</button>
   <button className="bdt13 fs-4"><i class="bi bi-heart-fill"></i></button>
   <button className="bdt14"><i class="bi bi-cart-plus-fill"></i></button>
</div>
 </div>



    </div>
    <div className="col-sm-6">
    <div className="row mt-4">
             <div className="col-sm-4">
               <div className="ssimm5">
                   <button
                    className="cart-button fs-6 bg-danger text-light"
                    style={{
                      height: "20px",
                      width: "60px",
                      lineHeight: "18px",
                      border:'none',
                      color:'black'
                    }}
                  >
                    <b> -40%</b>
                  </button>
                  </div>          
                </div>
<div className="col-sm-8">
  <b style={{fontSize:'20px',fontFamily:'sofia'}}>SALE Wooden Water Bottles</b>
  <b className="tex">
  <i class="bi bi-star-fill text-danger"></i>&nbsp;
  <i class="bi bi-star-fill text-danger"></i>&nbsp;
  <i class="bi bi-star-half text-danger"></i>&nbsp;
  <i class="bi bi-star text-danger"></i>&nbsp;
  <i class="bi bi-star text-danger"></i>
  
  </b><br/>
  <b style={{fontSize:'15px',fontFamily:'sofia',color:'red'}}>Accessories,Clocks</b>
  <span className="texs">370 Review</span><br/>
  <p className="para">It is a long established fact that a reader will be distracted by the readable
   content of a page when looking at its layout. The point of using Lorem
    Ipsum is that it has a more-or-less normal distribution of letters,
   as opposed to using 'Content here, content here', making it look like readable English.</p>


   <button className="bdt10"><span className='text-danger fs-5'>Price</span><br/><span>$40.00</span></button>
   <button className="bdt12 ">Add to cart</button>
   <button className="bdt13 fs-4"><i class="bi bi-heart-fill"></i></button>
   <button className="bdt14"><i class="bi bi-cart-plus-fill"></i></button>
</div>
 </div>
    </div>


    <div className="col-sm-6">
    <div className="row mt-4">
             <div className="col-sm-4">
               <div className="ssimm6">
                   <button
                    className="cart-button fs-6 bg-danger text-light"
                    style={{
                      height: "20px",
                      width: "60px",
                      lineHeight: "18px",
                      border:'none',
                      color:'black'
                    }}
                  >
                    <b> -40%</b>
                  </button>
                  </div>          
                </div>
<div className="col-sm-8">
  <b style={{fontSize:'20px',fontFamily:'sofia'}}>SALE Wooden Water Bottles</b>
  <b className="tex">
  <i class="bi bi-star-fill text-danger"></i>&nbsp;
  <i class="bi bi-star-fill text-danger"></i>&nbsp;
  <i class="bi bi-star-half text-danger"></i>&nbsp;
  <i class="bi bi-star text-danger"></i>&nbsp;
  <i class="bi bi-star text-danger"></i>
  
  </b><br/>
  <b style={{fontSize:'15px',fontFamily:'sofia',color:'red'}}>Accessories,Clocks</b>
  <span className="texs">370 Review</span><br/>
  <p className="para">It is a long established fact that a reader will be distracted by the readable
   content of a page when looking at its layout. The point of using Lorem
    Ipsum is that it has a more-or-less normal distribution of letters,
   as opposed to using 'Content here, content here', making it look like readable English.</p>


   <button className="bdt10"><span className='text-danger fs-5'>Price</span><br/><span>$40.00</span></button>
   <button className="bdt12 ">Add to cart</button>
   <button className="bdt13 fs-4"><i class="bi bi-heart-fill"></i></button>
   <button className="bdt14"><i class="bi bi-cart-plus-fill"></i></button>
</div>
 </div>



    </div>
    <div className="col-sm-6">
    <div className="row mt-4">
             <div className="col-sm-4">
               <div className="ssimm7">
                   <button
                    className="cart-button fs-6 bg-danger text-light"
                    style={{
                      height: "20px",
                      width: "60px",
                      lineHeight: "18px",
                      border:'none',
                      color:'black'
                    }}
                  >
                    <b> -40%</b>
                  </button>
                  </div>          
                </div>
<div className="col-sm-8">
  <b style={{fontSize:'20px',fontFamily:'sofia'}}>SALE Wooden Water Bottles</b>
  <b className="tex">
  <i class="bi bi-star-fill text-danger"></i>&nbsp;
  <i class="bi bi-star-fill text-danger"></i>&nbsp;
  <i class="bi bi-star-half text-danger"></i>&nbsp;
  <i class="bi bi-star text-danger"></i>&nbsp;
  <i class="bi bi-star text-danger"></i>
  
  </b><br/>
  <b style={{fontSize:'15px',fontFamily:'sofia',color:'red'}}>Accessories,Clocks</b>
  <span className="texs">370 Review</span><br/>
  <p className="para">It is a long established fact that a reader will be distracted by the readable
   content of a page when looking at its layout. The point of using Lorem
    Ipsum is that it has a more-or-less normal distribution of letters,
   as opposed to using 'Content here, content here', making it look like readable English.</p>


   <button className="bdt10"><span className='text-danger fs-5'>Price</span><br/><span>$40.00</span></button>
   <button className="bdt12 ">Add to cart</button>
   <button className="bdt13 fs-4"><i class="bi bi-heart-fill"></i></button>
   <button className="bdt14"><i class="bi bi-cart-plus-fill"></i></button>
</div>
 </div>
    </div>
   </div>
      </div>

<div style={{ display: selectedPerson === 'yash' ? 'block' : 'none' }} >
{/* ------------------1cart start-------------------------------- */}
<div className='row'>
  <div className='col-sm-6'>
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
                  <img
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/7.png" style={{height:'650px'}}
                    alt="sq-sample4"
                    width="100%" />
                  <div className="add-to-cart">
                  <center> <button
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                <center>Wooden Water Bottles</center>
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
  <div className='col-sm-6'>
<div className='row'>
  <div className='col-sm-6'>
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/2.png" style={{height:'250px'}}
                    alt="sq-sample4"
                  width="100%"/>
                 <div className="add-to-cart">
                 <center><button
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
                      className="cart-button m-2 fs-5 bg-dark text-light "
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                
                    <center>Wooden Water Bottles</center>
               
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
  <div className='col-sm-6'>
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
                  width="100%"/>
                 <div className="add-to-cart">
                 <center><button
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
                      className="cart-button m-2 fs-5 bg-dark text-light "
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                
                    <center>Wooden Water Bottles</center>
               
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
  <div className='col-sm-6'>
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/4.png" style={{height:'250px'}}
                    alt="sq-sample4"
                  width="100%"/>
                 <div className="add-to-cart">
                 <center><button
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
                      className="cart-button m-2 fs-5 bg-dark text-light "
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                
                    <center>Wooden Water Bottles</center>
               
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
  <div className='col-sm-6'>
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/5.png" style={{height:'250px'}}
                    alt="sq-sample4"
                  width="100%"/>
                 <div className="add-to-cart">
                 <center><button
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
                      className="cart-button m-2 fs-5 bg-dark text-light "
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                
                    <center>Wooden Water Bottles</center>
               
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
</div>
</div>
</div>


<div className='row'>
<div className='col-sm-6'>
<div className='row'>
  <div className='col-sm-6'>
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/2.png" style={{height:'250px'}}
                    alt="sq-sample4"
                  width="100%"/>
                 <div className="add-to-cart">
                 <center><button
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
                      className="cart-button m-2 fs-5 bg-dark text-light "
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                
                    <center>Wooden Water Bottles</center>
               
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
  <div className='col-sm-6'>
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
                  width="100%"/>
                 <div className="add-to-cart">
                 <center><button
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
                      className="cart-button m-2 fs-5 bg-dark text-light "
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                
                    <center>Wooden Water Bottles</center>
               
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
  <div className='col-sm-6'>
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/4.png" style={{height:'250px'}}
                    alt="sq-sample4"
                  width="100%"/>
                 <div className="add-to-cart">
                 <center><button
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
                      className="cart-button m-2 fs-5 bg-dark text-light "
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                
                    <center>Wooden Water Bottles</center>
               
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
  <div className='col-sm-6'>
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/5.png" style={{height:'250px'}}
                    alt="sq-sample4"
                  width="100%"/>
                 <div className="add-to-cart">
                 <center><button
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
                      className="cart-button m-2 fs-5 bg-dark text-light "
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                
                    <center>Wooden Water Bottles</center>
               
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
</div>
</div>
 <div className='col-sm-6'>
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
                  <img
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/1.png" style={{height:'650px'}}
                    alt="sq-sample4"
                    width="100%" />
                  <div className="add-to-cart">
                  <center> <button
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
                    </button></center>
                  </div>
                </div>
                <figcaption>
                <center>Wooden Water Bottles</center>
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
</div>
{/* ------------------1cart end-------------------------------- */}
</div>
      
    </div>
  </div>
</div>

          </div> 
    )
}

export default page;