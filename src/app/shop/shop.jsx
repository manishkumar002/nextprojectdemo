
import React, { useState, useEffect } from 'react';
import './shop.css';
import Link from 'next/link';

const Shop = () => {
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
      <div className="row shop">
        <div className="col-sm-3 mt-5">
          <b>Shop Structure</b><br />
          <Link href="/shop-standard" style={{color:'black',textDecoration:'none'}}><span className="w me-2">Shop Standard</span><br/></Link>
          <Link href="/shop-list" style={{color:'black',textDecoration:'none'}}><span className="w me-5">Shop List </span><br/></Link>
          <Link href="/shopcategory" style={{color:'black',textDecoration:'none'}}><span className="w ms-4">Shop With Category</span><br/></Link>
          <Link href="/shop-filters" style={{color:'black',textDecoration:'none'}}><span className="w ms-4"> Shop Filters Top Bar</span><br/></Link>
    <Link href="/shop-sidebar" style={{color:'black',textDecoration:'none'}}><span className="w me-4">Shop Sidebar</span><br/></Link>
    <Link href="/shop-style" style={{color:'black',textDecoration:'none'}}><span className="w me-4">Shop Style 1</span><br/></Link>
    <b className="ms-3">Product Structure</b><br/>
    <Link href="/shopdefault" style={{color:'black',textDecoration:'none'}}><span className="w me-5">Default</span><br/></Link>
    <Link href="/shopthumbnail" style={{color:'black',textDecoration:'none'}}><span className="w me-5">Thumbnail</span><br/></Link>
        </div>
        <div className="col-sm-2 mt-5">
          <b>Shop Pages</b><br />
          <Link href="/wishlist" style={{color:'black',textDecoration:'none'}}><span className="w me-4">Wishlist</span><br/></Link>
          <Link href="/shop-cart" style={{color:'black',textDecoration:'none'}}><span className="w me-5">Cart</span><br/></Link>
          <Link href="/pcheckout" style={{color:'black',textDecoration:'none'}}><span className="w me-3">Checkout</span><br/></Link>
   <Link href="/order-tracking" style={{color:'black',textDecoration:'none'}}><span className="w ms-3">Order Tracking</span><br/></Link>
   <Link href="/shopsign" style={{color:'black',textDecoration:'none'}}><span className="w">My Account</span><br/></Link>
   <Link href="/shop-register" style={{color:'black',textDecoration:'none'}}><span className="w ">Registration</span><br/></Link>
        </div>
        <div className="col-sm-2 ms-3">
          <img src="https://mooncart.dexignzone.com/xhtml/images/adv-1.png" className="mt-5" alt="Shop Advertisement" />
        </div>
      </div>
      <div className="row bb ms-3">
        <div className="col-sm-8">
          <span style={{ fontFamily: 'sofia', fontSize: '30px', marginLeft: '-200px' }}><b>Deal of the month</b></span><br />
          <span style={{ fontFamily: 'sofia', fontSize: '17px', marginLeft: '-14px' }}>Yes! Send me exclusive offers, personalised,
            and unique gift</span><br />
          <span style={{ fontFamily: 'sofia', fontSize: '17px', marginLeft: '-25px' }}> ideas, tips for
            shopping on MoonCart View All Products</span>
        </div>
        <div className="col-sm-4">
        <div className='row mt-5'>
            <div className='col-sm-2 bbb m-2'><span>
            {countdown.days}
            </span><br/>
            <p style={{ fontFamily: 'sofia', fontSize: '12px',marginLeft: '-13px' ,color:'black' }}>DAYS</p>
            </div>
            <div className='col-sm-2 bbb m-2'>
            <span>
            {countdown.hours}
            </span><br/>
            <p style={{ fontFamily: 'sofia', fontSize: '12px',marginLeft: '-17px' ,color:'black'}}> HOURS</p>
            </div>
            <div className='col-sm-2 bbb m-2'>
            <span>
            {countdown.minutes}
            </span><br/>
            <p style={{ fontFamily: 'sofia', fontSize: '12px' ,marginLeft: '-20px',color:'black'}}>MINUTES</p>
            </div>
            <div className='col-sm-2 bbb m-2'>
            <span>
            {countdown.seconds}
            </span><br/>
            <p style={{ fontFamily: 'sofia', fontSize: '12px',marginLeft: '-15px',color:'black'}}> SECONDS</p>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
