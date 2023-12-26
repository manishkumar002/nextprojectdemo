import React from "react";
import "./card.css";
export default function cart() {
  return (
    <div className="container-fluid">
      <div className="row boxx">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          {/* .....................button................................ */}
          <p className="fot">
            <b>Most popular products</b>
          </p>
          <div className="row">
            <div className="col-sm-3">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="m-1 but-style fs-6">
                  All product(48)
                </button>
                <button type="button" class="m-1 but-style fs-6">
                  BOTTLES(20)
                </button>
              </div>
            </div>
            <div className="col-sm-3">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="m-1 but-style fs-6">
                  BEGS(40)
                </button>
                <button type="button" class="m-1 but-style  fs-6">
                  TOOTHBRUSHES(30)
                </button>
              </div>
            </div>
            <div className="col-sm-4">
              
            </div>
            <div className="col-sm-2">
              <button type="button" class="m-1 but-style fs-6 ms-5 text-primary">
                See all products ?
              </button>
            </div>
          </div>
          {/* ....................end .button................................ */}
          {/* ....................start card................................ */}

          <div className="row">
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
                    src="https://mooncart.dexignzone.com/xhtml/images/shop/product/4.png" style={{height:'250px'}}
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
          </div>



          <div className="row mt-5">
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
          </div>
          {/* ....................end card................................ */}
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
}
