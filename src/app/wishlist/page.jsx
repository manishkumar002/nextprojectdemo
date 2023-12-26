



import React from "react";
import "./wishlist.css";
function page(){
    return(
        <div>
            <div className='row'>
      <div className='sw'>
        <p className='sw1 mt-5'><b>Wishlist</b></p>
        <p className='sw2'>Home Faq’s 1</p>
          </div>
           </div>
          <div className="row mt-5">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
            <div className="row">
                <div className="col-sm-6 fs-5 "><b>Product</b></div>
                <div className="col-sm-2 fs-5"><b>Price </b></div>
                <div className="col-sm-2 fs-5"><b>Stock </b></div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-1 text-danger fs-4 mt-3 text-center"><i class="bi bi-x-circle-fill"></i></div>
                <div className="col-sm-2 text-center ">
                    <img src="https://mooncart.dexignzone.com/xhtml/images/shop/shop-cart/pic1.jpg"/>
                </div>
                <div className="col-sm-3 mt-4 fs-5 text-center" style={{fontFamily:'sofia'}}><b>Wooden Water Bottles</b></div>
                <div className="col-sm-2 mt-4 text-center">	<b>$45.00$28.00</b></div>
                <div className="col-sm-2 mt-4 text-center text-danger">	<b>In Stock</b></div>
                <div className="col-sm-2 mt-4 text-center">
                  <button
              className="cart-button fs-6 text-light ms-4 swb ">  Add To Cart
            </button>
            </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-1 text-danger text-center fs-4 mt-3"><i class="bi bi-x-circle-fill"></i></div>
                <div className="col-sm-2 text-center">
                    <img src="https://mooncart.dexignzone.com/xhtml/images/shop/shop-cart/pic1.jpg"/>
                </div>
                <div className="col-sm-3 mt-4 fs-5 text-center" style={{fontFamily:'sofia'}}><b>Wooden Water Bottles</b></div>
                <div className="col-sm-2 mt-4 text-center">	<b>$45.00$28.00</b></div>
                <div className="col-sm-2 mt-4 text-center text-danger">	<b>In Stock</b></div>
                <div className="col-sm-2 mt-4 text-center">
                  <button
              className="cart-button fs-6 text-light ms-4 swb">  Add To Cart
            </button>
            </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-1 text-danger fs-4 mt-3 text-center "><i class="bi bi-x-circle-fill"></i></div>
                <div className="col-sm-2 text-center">
                    <img src="https://mooncart.dexignzone.com/xhtml/images/shop/shop-cart/pic1.jpg"/>
                </div>
                <div className="col-sm-3 mt-4 text-center fs-5" style={{fontFamily:'sofia'}}><b>Wooden Water Bottles</b></div>
                <div className="col-sm-2 mt-4 text-center">	<b>$45.00$28.00</b></div>
                <div className="col-sm-2 mt-4 text-center text-danger">	<b>In Stock</b></div>
                <div className="col-sm-2 mt-4 text-center">
                  <button
              className="cart-button fs-6 text-light ms-4 swb text-center">  Add To Cart
            </button>
            </div>
            </div>
            <hr/>
            </div>
            <div className="col-sm-3"></div>
          </div>
            </div>
      
    )
}

export default page;