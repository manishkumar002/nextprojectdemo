"use client"
import React, { useState, useEffect } from 'react';
import "./shop.css";
import Link from 'next/link';
export default function page() {

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
    const intervalId = setInterval(() => { 
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });

 
      if (distance < 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="container-fluid">
    <div className="row">
    <div className="col-sm-2"></div>
    <div className="col-sm-8">
      <div className="row mt-2">
      <div className="col-sm-2"></div>
      <div className="col-sm-8">
        <div className="row sh mt-5">
        <div className="col-sm-4 mt-3">
        <b className="ms-4" >Shop Structure</b><br/>
        <Link href="/shop-standard" style={{color:'black',textDecoration:'none'}} ><p className="m ms-4">Shop Standard</p></Link>
        <Link href="/shop-list" style={{color:'black',textDecoration:'none'}}><p className="m ms-4">Shop List </p></Link>
        <Link href="/shopcategory" style={{color:'black',textDecoration:'none'}}><p className="m ms-4">Shop With Category</p></Link>
        <Link href="/shop-filters" style={{color:'black',textDecoration:'none'}}><p className="m ms-4">Shop Filters Top Bar</p></Link>
        <Link href="/shop-sidebar" style={{color:'black',textDecoration:'none'}}><p className="m ms-4">Shop Sidebar</p></Link>
        <Link href="/shop-style" style={{color:'black',textDecoration:'none'}}><p className="m ms-4">Shop Style 1</p></Link>
    <b className="ms-4">Product Structure</b><br/>
    <Link href="/shopdefault" style={{color:'black',textDecoration:'none'}}><p className="m ms-4">Default</p></Link>
    <Link href="/shopthumbnail" style={{color:'black',textDecoration:'none'}}><p className="m ms-4">Thumbnail</p></Link>
        </div>
        <div className="col-sm-3 mt-3">
        <b className="ms-4">Shop Pages</b><br/>
        <Link href="/wishlist" style={{color:'black',textDecoration:'none'}}><p className="m ms-4">Wishlist</p></Link>
        <Link href="/shop-cart" style={{color:'black',textDecoration:'none'}}><p className="m ms-4">Cart</p></Link>
        <Link href="/pcheckout" style={{color:'black',textDecoration:'none'}}><p className="m ms-4">Checkout</p></Link>
        <Link href="/order-tracking" style={{color:'black',textDecoration:'none'}}><p className="m ms-4">Order Tracking</p></Link>
        <Link href="/shopsign" style={{color:'black',textDecoration:'none'}}><p className="m ms-4">My Account</p></Link>
        <Link href="/shop-register" style={{color:'black',textDecoration:'none'}}><p className="m ms-4">Registration</p></Link>
        </div>
        <div className="col-sm-5 mt-3">
        <img src="https://mooncart.dexignzone.com/xhtml/images/adv-1.png"/>
        </div>
        <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-12">
          <div className="row bbe ms-2">

          <div className="col-sm-8 mt-3">
          <span style={{ fontFamily: 'sofia', fontSize: '30px',}}><b>Deal of the month</b></span><br />
          <span style={{ fontFamily: 'sofia', fontSize: '17px' }}>Yes! Send me exclusive offers, personalised,
            and unique gift</span><br />
          <span style={{ fontFamily: 'sofia', fontSize: '17px' }}> ideas, tips for
            shopping on MoonCart View All Products</span>
        </div>
        <div className="col-sm-4">
        <div className='row mt-5'>
            <div className='col-sm-3 bbbe m-2'><span>
            {countdown.days}
            </span><br/><br/>
            <p style={{ fontFamily: 'sofia', fontSize: '12px',marginLeft: '-13px' ,color:'black' }}>DAYS</p>
            </div>
            <div className='col-sm-3 bbbe m-2'>
            <span>
            {countdown.hours}
            </span><br/><br/>
            <p style={{ fontFamily: 'sofia', fontSize: '12px',marginLeft: '-17px' ,color:'black'}}> HOURS</p>
            </div>
            <div className='col-sm-3 bbbe m-2'>
            <span>
            {countdown.minutes}
            </span><br/><br/>
            <p style={{ fontFamily: 'sofia', fontSize: '12px' ,marginLeft: '-20px',color:'black'}}>MINUTES</p>
            </div>
            <div className='col-sm-3 bbbe m-2'>
            <span>
            {countdown.seconds}
            </span><br/><br/>
            <p style={{ fontFamily: 'sofia', fontSize: '12px',marginLeft: '-15px',color:'black'}}> SECONDS</p>
            </div>
        </div>
        </div>
          </div>
        </div>
        <div className="col-sm-1"></div>

        </div>
        </div>
      </div>
      <div className="col-sm-2"></div>

      </div>
    </div>
 

    </div>
    </div>
  )
}







