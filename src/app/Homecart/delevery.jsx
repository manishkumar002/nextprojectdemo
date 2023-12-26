
import "./delevery.css";
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { Carousel as AntdCarousel } from 'antd';
import Sliders from "./sliders";


export default function delevery() {



  return (
    <div className="container-fluid">
      <div className="row dele">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-4">
              <div id="cards_landscape_wrap-2">
                <div class="row m-1">
                  <div class="card-flyer">
                    <div class="text-box">
                      <div class="image-box">
                        <img
                          src="https://cdn.dribbble.com/users/1024957/screenshots/6800596/01.gif"
                          alt=""
                        />
                      </div>
                      <div class="text-container">
                        <h4 style={{color:'red'}}>FREE SHIPPING</h4>
                        <b style={{fontFamily:'sofia'}}>
                        Enjoy Free Shipping On All Orders - No Minimum Purchase Required.
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
            <div id="cards_landscape_wrap-2">
                <div class="row m-1">
                  <div class="card-flyer">
                    <div class="text-box">
                      <div class="image-box">
                        <img
                          src="https://cdn.pixabay.com/animation/2022/11/16/11/48/11-48-15-802_512.gif"
                          alt=""
                        />
                      </div>
                      <div class="text-container">
                      <h4 style={{color:'red'}}>24/7 SUPPORT</h4>
                        <b style={{fontFamily:'sofia'}}>
                        Our Team Is Available 24/7 To Help With Any Questions Or Concerns.
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
            <div id="cards_landscape_wrap-2">
                <div class="row m-1">
                  <div class="card-flyer">
                    <div class="text-box">
                      <div class="image-box">
                        <img
                          src="https://i.pinimg.com/originals/7b/cb/a5/7bcba55187df137b234567a0337e27df.gif"
                          alt=""
                        />
                      </div>
                      <div class="text-container">
                      <h4 style={{color:'red'}}>MONEY BACK</h4>
                        <b style={{fontFamily:'sofia'}}>
                        We Offer A 100% Money-Back Guarantee For Your Satisfaction.
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row del">
            <div className="col-sm-2 text-light mt-2 ms-5" style={{fontSize:'100px'}}>
            <i class="bi bi-chat-text-fill"></i>
            </div>
            <div className="col-sm-4 text-light mt-5">
            <b style={{fontFamily:'sofia',fontSize:'23px'}}>
            SUBSCRIBE TO OUR NEWSLETTER
            </b><br/>
            
            Get Latest News, Offers And Discounts.
            
            </div>
            <div className="col-sm-5 text-light mt-5">
           <input type="email" value="" placeholder="name@email.com" style={{ width:'100%',height:'50px'}}/>
          </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-6 imags">
                   <button
                    className="cart-button fs-6 text-light"
                    style={{
                      marginLeft:'40px',
                      height: "30px",
                      width: "150px",
                      lineHeight: "18px",
                      background:'red',
                      border:"none",
                      marginTop:'100px'
                    }}
                  >
                    <b>From $29.05</b>
                  </button><br/>
                  <p className="fo"><b>Organic Skincare for</b><br/><b> Glowing Complexion.</b></p>
                  <p className="ms-5">Lorem Ipsum is simply dummy text of
                  It’s easy<br/>to get lost in the world of 
                  lovely valley vapour<br/> around and the
                   meridian sun strikes the upper surface.</p>
                   <Link href="/shop-list" style={{color:'black',textDecoration:'none'}}><button
                className="cart-button ms-5 mt-4"
                style={{ fontSize: "14px", height: "60px", width: "150px" }}
              >
                Shop Now
              </button></Link>
        </div>
        <div className="col-sm-6 imagss mt-5">
        <button
                    className="cart-button fs-6 text-light"
                    style={{
                      marginLeft:'40px',
                      height: "30px",
                      width: "300px",
                      lineHeight: "18px",
                      background:'red',
                      border:"none",
                      marginTop:'100px'
                    }}
                  >
                    <b>Free Shipping On All Orders Over $59</b>
                  </button><br/>
                  <p className="fo"><b>Shop & shipment acrossthe</b><br/><b> whole North America.</b></p>
                  <p className="ms-5">Lorem Ipsum is simply dummy text of It’s easy 
                  to get lost in<br/> the world of lovely valley vapour around and 
                  the meridian<br/> sun strikes the upper surface.</p>
                  <Link href="/shop-list" style={{color:'black',textDecoration:'none'}}><button
                className="cart-button ms-5 mt-4"
                style={{ fontSize: "14px", height: "60px", width: "150px" }}
              >
                Shop Now
              </button></Link>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          {/* ''''''''''''''''''''''''''''''''cart slider''''''''''''''''''''''''''''' */}
    
        <div className='row'>
          <div className='col-sm-4'>
          <h3 style={{fontFamily:'sofia',fontSize:'38px'}}><b>What's trending now</b></h3>
        <p>Discover the most trending products in Ciseco.

</p>
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
        <div className="col-sm-2"></div>
      </div>
      <div className="row ab">
      <div className="col-sm-12">
      <div className=" row abc">
      <div className="col-sm-6">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6 abg">
           <div className="row">
            <div className="col-sm-8"></div>
            <div className="col-sm-4" style={{marginTop:'250px'}}>
            <div class="box">
              <span className="text-light fs-4 ms-2" style={{fontFamily:'sofia'}}>Our Satisfied</span><br/>
              <span className="text-light fs-4 ms-2" style={{fontFamily:'sofia'}}>User...</span>
              {/* <center>
              <div className="ib ms-3"></div>
              <div className="ib1"></div>
              <div className="ib2 text-danger">+12K</div>
           </center> */}
    <div class="center">
  <div class="ib ms-3"></div>

  <div class="ib1"></div>
  <div class="ib2 text-danger">+12K</div>
</div>
            
            </div>
            </div>
           </div>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
      <div className="col-sm-6">
      <p style={{fontFamily:'sofia',fontSize:'45px',marginTop:'60px'}}><b>What our clients say<br/>
       about us..</b></p>
        <div>
  {/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;about us slider ;;;;;;;;;;;;;;;;;;;;;;;; */}

       <Sliders/>

  {/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;about us slider ;;;;;;;;;;;;;;;;;;;;;;;; */}

        </div>
      </div>
      </div>
      </div>
      </div>
{/* .................blog post........................... */}
      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-sm-2"></div>
        <div className="col-sm-4 imgae m-3">
          <div className="row " style={{ marginTop: "400px" }}>
            <div className="col-sm-8">
              <div className="row">
                <div className="col-sm-11 ba mt-5">
                <button
                  className="cart-button  ms-3"
                  style={{ fontSize: "12px", height: "30px", width: "90px" }}
                >
                  10 Mar 2023
                </button>
                <p style={{fontSize:'24px',fontFamily:'sofia',color:'white',marginLeft:'20px' }}>
                <b>Uncovering The Benefits of Wooden Based Furniture</b></p>
                <p className="text-light ms-4">Read more </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="row">
          <div className="col-sm-12 m-3">
          <div className="row">
            <div className="col-sm-6 imga1e"></div>
              <div className="col-sm-6 bg-dark">
              <button 
                  className="cart-button mt-5 ms-4"
                  style={{ fontSize: "12px", height: "30px", width: "90px" }}
                >
                 17 April 2023
                </button>
                <p style={{fontSize:'24px',color:'white',fontFamily:'sofia' ,marginLeft:'20px'}}>
                <b>Uncovering The Benefits<br/> of Wooden Based<br/> Furniture</b></p>
                <p className="text-light ms-4 mt-5">Read more </p>
              </div>
              </div>
              </div>
              <div className="col-sm-12 m-3">
          <div className="row">
          <div className="col-sm-6 imga2e"> </div>
              <div className="col-sm-6 bg-dark">
              <button
                  className="cart-button mt-5 ms-4"
                  style={{ fontSize: "12px", height: "30px", width: "90px"}}
                >
                  20 Jan 2023
                </button>
                <p style={{fontSize:'24px',color:'white',fontFamily:'sofia',marginLeft:'20px' }}>
                <b>Uncovering The Benefits<br/> of Wooden Based<br/>Furniture</b></p>
                <p className="text-light ms-4 mt-5">Read more </p>
              </div>
            
              </div>
              </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
 {/* .................blog post........................... */}

 {/* .....................card rated------------------- */}


  <div className='row mt-5'>
                <div className='col-sm-2' id="grid">
                    <img src="https://mooncart.dexignzone.com/xhtml/images/feature/2.png" alt='tt' width="100%" />
                </div>
                <div className='col-sm-2' id="grid">
                <img src="https://mooncart.dexignzone.com/xhtml/images/feature/3.png" alt='tt' width="100%" />
                </div>
                <div className='col-sm-2' id="grid"> 
                 <img src="https://mooncart.dexignzone.com/xhtml/images/feature/1.png"alt='tt' width="100%"/>
                 </div>
                <div className='col-sm-2' id="grid">
                <img src="https://mooncart.dexignzone.com/xhtml/images/feature/4.png" alt='tt' width="100%"/>
                </div>
                <div className='col-sm-2' id="grid">
                <img src="https://mooncart.dexignzone.com/xhtml/images/feature/5.png" alt='tt' width="100%"/>
                </div>
                <div className='col-sm-2' id="grid">
                <img src="https://mooncart.dexignzone.com/xhtml/images/feature/6.png" alt='tt' width="100%"/>
                </div>
               </div> 


 {/* .....................card rated------------------- */}
 

{/* <div className='row'>
    <div className='col-sm-3'>
        <div className='row mt-5'>
            <div className='col-sm-3'>
            <img src="https://mooncart.dexignzone.com/xhtml/images/svg/icon-bx/password-check.svg" alt='tt'/>
            </div>
            <div className='col-sm-6'>
                <h5 style={{textAlign:"justify"}}>Filter & Discover</h5>
                <h6 style={{textAlign:"justify"}}>Lorem Ipsum is simply dummy text of the printing and typesetting</h6>
            </div>
            <div className='col-sm-3'>
            <p className='nums' style={{marginLeft:"-30px"}}>01</p>
            </div>
        </div>
    </div>
    <div className='col-sm-3'>
    <div className='row mt-5'>
            <div className='col-sm-3'>
            <img src="https://mooncart.dexignzone.com/xhtml/images/svg/icon-bx/cart.svg" alt='tt'/>
            </div>
            <div className='col-sm-6'>
                <h5 style={{textAlign:"justify"}}>Add to cart</h5>
                <h6 style={{textAlign:"justify"}}>Lorem Ipsum is simply dummy text of the printing and typesetting</h6>
            </div>
            <div className='col-sm-3'>
            <p className='nums' style={{marginLeft:"-40px"}}>01</p>
            </div>
        </div>
    </div>
    <div className='col-sm-3'>
    <div className='row mt-5'>
            <div className='col-sm-3'>
            <img src="https://mooncart.dexignzone.com/xhtml/images/svg/icon-bx/discovery.svg" alt='tt'/>
            </div>
            <div className='col-sm-6'>
                <h5 style={{textAlign:"justify"}}>Fast Shipping</h5>
                <h6 style={{textAlign:"justify"}}>Lorem Ipsum is simply dummy text of the printing and typesetting</h6>
            </div>
            <div className='col-sm-3'>
            <p className='nums' style={{marginLeft:"-40px"}}>01</p>
            </div>
        </div>
    </div>
    <div className='col-sm-3'>
    <div className='row mt-5'>
            <div className='col-sm-3'>
            <img src="https://mooncart.dexignzone.com/xhtml/images/svg/icon-bx/box-tick.svg" alt='tt'/>
            </div>
            <div className='col-sm-6'>
                <h5 style={{textAlign:"justify"}}>Enjoy the Shipping</h5>
                <h6 style={{textAlign:"justify"}}>Lorem Ipsum is simply dummy text of the printing and typesetting</h6>
            </div>
            <div className='col-sm-3'>
            <p className='nums' style={{marginLeft:"-40px"}}>01</p>
            </div>
        </div>
    </div>
</div> */}

    </div>
  );
}
