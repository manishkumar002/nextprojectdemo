import React from "react";
import "./blog2sidebarLight.css";
export default function page() {
  return (
    <div className="container-fluid">
      <center>
        <p
          style={{ fontFamily: "sofia", fontSize: "40px", marginTop: "100px" }}
        >
          <b>Blog Dark 2 Column Sidebar</b>
        </p>
        <p style={{ fontFamily: "sofia", fontSize: "20px" }}>
          Home :- Blog Dark 2 Column Sidebar
        </p>
      </center>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-8">
              <div className="row">
                <div className="col-sm-6 imbc m-3">
                  <div className="row">
                    <div className="col-sm-12 bcbggg">
                      <button
                        className="cart-button mt-3"
                        style={{
                          fontSize: "14px",
                          height: "30px",
                          width: "100px",
                          border:'none',
                          color:'red'
                        }}
                      >
                        17 May 2023
                      </button>
                      <p style={{ fontSize: "24px" }}>
                        <b>Embrace Luxury Living with our Elegant Couches</b>
                      </p>
                      <p>
                        Read more <i class="bi bi-chevron-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 imbc1 m-3">
                  <div className="row">
                    <div className="col-sm-12 bcbggg">
                      <button
                        className="cart-button mt-3"
                        style={{
                          fontSize: "14px",
                          height: "30px",
                          width: "100px",
                          border:'none',
                          color:'red'
                        }}
                      >
                        10 June 2023
                      </button>
                      <p style={{ fontSize: "24px" }}>
                        <b>
                          Sink into Comfort with our Luxurious Couch Collection
                        </b>
                      </p>
                      <p>
                        Read more <i class="bi bi-chevron-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 imbc2 m-3">
                  <div className="row">
                    <div className="col-sm-12 bcbggg">
                      <button
                        className="cart-button mt-3"
                        style={{
                          fontSize: "14px",
                          height: "30px",
                          width: "100px",
                          border:'none',
                          color:'red'
                        }}
                      >
                        15 May 2023
                      </button>
                      <p style={{ fontSize: "24px" }}>
                        <b>Embrace Luxury Living with our Elegant Couches</b>
                      </p>
                      <p>
                        Read more <i class="bi bi-chevron-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 imbc3 m-3">
                  <div className="row">
                    <div className="col-sm-12 bcbggg">
                      <button
                        className="cart-button mt-3"
                        style={{
                          fontSize: "14px",
                          height: "30px",
                          width: "100px",
                          border:'none',
                          color:'red'
                        }}
                      >
                        7 Sep 2023
                      </button>
                      <p style={{ fontSize: "24px" }}>
                        <b>Showcasing the Organic Beauty of Wooden Glass</b>
                      </p>
                      <p>
                        Read more <i class="bi bi-chevron-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 imbc4 m-3">
                  <div className="row">
                    <div className="col-sm-12 bcbggg">
                      <button
                        className="cart-button mt-3"
                        style={{
                          fontSize: "14px",
                          height: "30px",
                          width: "100px",
                          border:'none',
                          color:'red'
                        }}
                      >
                        9 Nov 2023
                      </button>
                      <p style={{ fontSize: "24px" }}>
                        <b>Nurture Your Skin with Plant-Based Solutions</b>
                      </p>
                      <p>
                        Read more <i class="bi bi-chevron-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 imbc5 m-3">
                  <div className="row">
                    <div className="col-sm-12 bcbggg">
                      <button
                        className="cart-button mt-3"
                        style={{
                          fontSize: "14px",
                          height: "30px",
                          width: "100px",
                          border:'none',
                          color:'red'
                        }}
                      >
                        25 May 2023
                      </button>
                      <p style={{ fontSize: "24px" }}>
                        <b>Experience the Magic of Plant-Based Products</b>
                      </p>
                      <p>
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
                      color: "white",
                      border:'none',
                      color:'red'
                    }}
                  >
                    <i class="bi bi-sun-fill fs-5"></i>
                    {} {} {} {}Loadmore
                  </button>
                </center>
              </div>
            </div>


            <div className="col-sm-4">
                <label><b>Search</b></label>
                <input type="search" className="form-control mt-3" placeholder="search.." style={{height:'60px',background:' #dbdbdb'}}/>
                <br/>
                <label className="mt-5"><b>Category</b></label><br/><br/>
                <i class="bi bi-arrow-right"></i> Bamboo Products <span style={{marginLeft:'150px'}}>(10)</span><br/><br/>
                <i class="bi bi-arrow-right"></i> Fitness Trackers <span style={{marginLeft:'165px'}}>(10)</span><br/><br/>
                <i class="bi bi-arrow-right"></i> Protein Supplements <span style={{marginLeft:'130px'}}>(10)</span><br/><br/>
                <i class="bi bi-arrow-right"></i> Fitness Equipment<span style={{marginLeft:'150px'}}>(10)</span><br/><br/>
                <i class="bi bi-arrow-right"></i> Reusable Bags<span style={{marginLeft:'180px'}}>(10)</span><br/><br/>
                <i class="bi bi-arrow-right"></i> Water Bottles <span style={{marginLeft:'180px'}}>(10)</span><br/><br/>
                <i class="bi bi-arrow-right"></i> Eco-Friendly Products<span style={{marginLeft:'130px'}}>(10)</span><br/><br/>
                <i class="bi bi-arrow-right"></i> Home Assistants<span style={{marginLeft:'170px'}}>(10)</span><br/><br/>
                <i class="bi bi-arrow-right"></i> Water Monitors <span style={{marginLeft:'170px'}}>(10)</span><br/><br/>
           
            <label className="mt-5"><b>Latest Post</b></label><br/><br/> 
            <div className="row mt-4">
            <div className="col-sm-4">
              <img src="https://mooncart.dexignzone.com/xhtml/images/blog/recent-blog/pic1.jpg"/>
            </div>
            <div className="col-sm-6">
            <span className="text-danger">2 Apr, 2023</span><br/>
            <span style={{fontFamily:'sofia'}}><b>Uncovering the Beauty Benefits of Plant-Based Skincare</b></span>
            </div>
            </div>
            <div className="row mt-5">
            <div className="col-sm-4">
              <img src="https://mooncart.dexignzone.com/xhtml/images/blog/recent-blog/pic2.jpg"/>
            </div>
            <div className="col-sm-6">
            <span className="text-danger">25 March, 2023</span><br/>
            <span style={{fontFamily:'sofia'}}><b>Harness the Power of Plants for Healthy Glowing Skin</b></span>
            </div>
            </div>
            <div className="row mt-5">
            <div className="col-sm-4">
              <img src="https://mooncart.dexignzone.com/xhtml/images/blog/recent-blog/pic3.jpg"/>
            </div>
            <div className="col-sm-6">
            <span className="text-danger">7 Dec, 2023</span><br/>
            <span style={{fontFamily:'sofia'}}><b>Embrace the Revitalizing Benefits of Plant-Based Product</b></span>
            </div>
            </div>
            <div className="row mt-5">
            <div className="col-sm-4">
              <img src="https://mooncart.dexignzone.com/xhtml/images/blog/recent-blog/pic1.jpg"/>
            </div>
            <div className="col-sm-6">
            <span className="text-danger">2 Apr, 2023</span><br/>
            <span style={{fontFamily:'sofia'}}><b>Uncovering the Beauty Benefits of Plant-Based Skincare</b></span>
            </div>
            </div>
            <div className="row mt-5">
            <div className="col-sm-4">
              <img src="https://mooncart.dexignzone.com/xhtml/images/blog/recent-blog/pic3.jpg"/>
            </div>
            <div className="col-sm-6">
            <span className="text-danger">7 Dec, 2023</span><br/>
            <span style={{fontFamily:'sofia'}}><b>Embrace the Revitalizing Benefits of Plant-Based Product</b></span>
            </div>
            </div>
            <label className="mt-5"><b>Tags</b></label><br/>
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
                        className="cart-button m-1 mt-3"
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
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
}
