"use client"
import React, { useState, useEffect } from 'react';
import "./pcomming.css"
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
        <div className="col-sm-6 mt-5">
            <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-10">
            <p style={{fontFamily:'sofia', fontSize:'60px'}}><b>Our Awesome New Site Is Almost Ready To Launch!</b></p>
            <p style={{fontFamily:'sofia', fontSize:'40px'}}>In the meantime, sign up for our monthly
             Newsletter to stay up yo date.</p>
        </div>
        <div className="col-sm-2"></div>
         

     </div>
            <div className="row pc mt-5">
                <div className="col-sm-2"> </div>
                <div className="col-sm-7 mt-5">
                <input type="email" className="form-control" placeholder="Enter The Email..."/> 


                <div className='row mt-5'>
            <div className='col-sm-2 m-2' style={{fontSize:'60px',fontFamily:'sofia'}}><span>
            <b>{countdown.days}</b>
            </span><br/>
            <p style={{ fontFamily: 'sofia', fontSize: '12px',color:'black' }}>DAYS</p>
            </div>
            <div className='col-sm-2 m-2 ' style={{fontSize:'60px',fontFamily:'sofia'}}>
            <span>
            <b>{countdown.hours} </b>
            </span><br/>
            <p style={{ fontFamily: 'sofia', fontSize: '12px' ,color:'black'}}> HOURS</p>
            </div>
            <div className='col-sm-2 m-2' style={{fontSize:'60px',fontFamily:'sofia'}}>
            <span>
            <b>{countdown.minutes} </b>
            </span><br/>
            <p style={{ fontFamily: 'sofia', fontSize: '12px' ,color:'black'}}>MINUTES</p>
            </div>
            <div className='col-sm-2  m-2' style={{fontSize:'60px',fontFamily:'sofia'}}>
            <span>
            <b>{countdown.seconds}</b>
            </span><br/>
            <p style={{ fontFamily: 'sofia', fontSize: '12px',color:'black'}}> SECONDS</p>
            </div>
        </div>

                 </div>
                <div className="col-sm-2"></div>
                 
               
            </div>
        </div>
        <div className="col-sm-6 pc3">
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <div className="pc2">
                    <img src="https://mooncart.dexignzone.com/xhtml/images/lady.png" style={{width:'100%',height:'830px'}}/>
                    </div>
                </div>
                <div className="col-sm-3"></div>
            </div>
        </div>
    </div>
    </div>
  )
}
