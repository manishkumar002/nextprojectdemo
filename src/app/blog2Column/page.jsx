import React from 'react'
import './blog2column.css'
export default function page() {
  return (
    <div className='container-fluid'>
       <center>
     <p style={{fontFamily:'sofia',fontSize:'40px',marginTop:'100px'}}><b>Blog Dark 2 Column</b></p>
     <p style={{fontFamily:'sofia',fontSize:'20px'}}>Home :-Blog Dark 2 Column</p>    
     </center>
    <div className='row'>
  
     <div className='col-sm-2'></div>
     <div className='col-sm-8'>
        <div className='row'>
            <div className='col-sm-6 imbc m-3'>
            <div className='row'>
                <div className='col-sm-10 bcbg'>
                <button
                className="cart-button mt-3"
                style={{ fontSize: "14px", height: "30px", width: "100px" }}
              >
              17 May 2023
              </button>
              <p style={{fontSize:'30px'}}><b>Embrace Luxury Living with our Elegant Couches</b></p>
              <p>Read more <i class="bi bi-chevron-right"></i></p>
                </div>
                <div className='col-sm-2'></div>
            </div>
            </div>
            <div className='col-sm-6 imbc1 m-3'>
            <div className='row'>
                <div className='col-sm-10 bcbg'>
                <button
                className="cart-button mt-3"
                style={{ fontSize: "14px", height: "30px", width: "100px" }}
              >
             10 June 2023
              </button>
              <p style={{fontSize:'30px'}}><b>Sink into Comfort with our Luxurious Couch Collection</b></p>
              <p>Read more <i class="bi bi-chevron-right"></i></p>
                </div>
                <div className='col-sm-2'></div>
            </div>
            </div>
            <div className='col-sm-6 imbc2 m-3'>
            <div className='row'>
                <div className='col-sm-10 bcbg'>
                <button
                className="cart-button mt-3"
                style={{ fontSize: "14px", height: "30px", width: "100px" }}
              >
           15 May 2023
              </button>
              <p style={{fontSize:'30px'}}><b>Embrace Luxury Living with our Elegant Couches</b></p>
              <p>Read more <i class="bi bi-chevron-right"></i></p>
                </div>
                <div className='col-sm-2'></div>
            </div>
            </div>
            <div className='col-sm-6 imbc3 m-3'>
            <div className='row'>
                <div className='col-sm-10 bcbg'>
                <button
                className="cart-button mt-3"
                style={{ fontSize: "14px", height: "30px", width: "100px" }}
              >
           7 Sep 2023
              </button>
              <p style={{fontSize:'30px'}}><b>Showcasing the Organic Beauty of Wooden Glass</b></p>
              <p>Read more <i class="bi bi-chevron-right"></i></p>
                </div>
                <div className='col-sm-2'></div>
            </div>
            </div>
        </div>
     </div>
     <div className='col-sm-2'></div>
    </div>
    <center> <button
                className="cart-button mt-3"
                style={{ fontSize: "14px", height: "40px", width: "160px" ,background:'black',color:'white'}}
              >
          <i class="bi bi-sun-fill fs-5"></i>{ } { } { } { }Loadmore
              </button></center>
    </div>
  )
}
