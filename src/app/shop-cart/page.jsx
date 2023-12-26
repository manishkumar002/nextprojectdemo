"use client";
import React, { useState } from 'react';

import "./shopcart.css";

function Page() {
  const [counts, setCounts] = useState([0, 0, 0, 0, 0,]);

  const images = [
    "https://mooncart.dexignzone.com/xhtml/images/shop/shop-cart/pic1.jpg",
    "https://mooncart.dexignzone.com/xhtml/images/shop/shop-cart/pic2.jpg",
    "https://mooncart.dexignzone.com/xhtml/images/shop/shop-cart/pic3.jpg",
    "https://mooncart.dexignzone.com/xhtml/images/shop/shop-cart/pic1.jpg",
    "https://mooncart.dexignzone.com/xhtml/images/shop/shop-cart/pic2.jpg",
  ];

  const incrementCount = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const decrementCount = (index) => {
    if (counts[index] > 0) {
      const newCounts = [...counts];
      newCounts[index] -= 1;
      setCounts(newCounts);
    }
  };

  return (
    <div>
      <div className='row'>
        <div className='pc'>
          <p className='pc1 mt-5'><b>Cart</b></p>
          <p className='pc2'>Home Cart</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-8">
              {/* Your existing code */}
              <div class="container table-responsive py-5">
                <table class="table table-hover">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Product	</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Subtotal</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {counts.map((count, index) => (
                      <tr key={index}>
                        {/* Your existing code for each item */}
                        <td >
                          <img src={images[index]} height="70px" alt={`Product ${index + 1}`} />
                          Wooden Water Bottles
                        </td>
                        <td style={{ marginTop: '' }}>$40.00</td>
                        <td>
                          <span className='p-2'>
                            <button onClick={() => decrementCount(index)} style={{ height: '30px', width: '40px', background: 'black', color: 'white' }}>-</button>
                          </span>
                          <span className='p-2'>
                            <button style={{ height: '30px', width: '40px' }}>{count}</button>
                          </span>
                          <span className='p-2'>
                            <button onClick={() => incrementCount(index)} style={{ height: '30px', width: '40px', background: 'black', color: 'white' }}>+</button>
                          </span>
                        </td>
                        <td>$120.00</td>
                        <td className="fs-5 text-danger"><i className="bi bi-x-circle-fill"></i></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='row'>
 
              <div className='col-sm-7'>
             <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Coupon Code..." style={{ height: '50px', width: '150px', background: '#dbdbdb'}}/>
            <div className="input-group-append">
      <span className="input-group-text" id="basic-addon2" style={{ height: '50px', width: '150px', background: '#dbdbdb',color:'black'}}><b>Apply Coupon</b></span>
    </div>
  </div>
</div>
            <div className='col-sm-2'></div>
            <div className='col-sm-3'>
            <button style={{ height: '50px', width: '150px', background: 'black', color: 'white' }}>UPDATED CART</button>

            </div>
             </div>
              </div>


          <div className="col-sm-4">
                <p className='mt-5' style={{fontFamily:'sofia',fontSize:'20px'}}><b>Cart Total</b> </p>
            <div className='pc3'>
            <div className='p-3'>
            <button className='pcb'>
               <b>Bank offer 5% Cachback</b> 
            </button>
            </div>
            <div className='p-3'>
            <button className='pcb1'>


            <div className='row'>
                <div className='col-sm-2 mt-2'>
                <img src="https://cdn-icons-png.flaticon.com/512/4320/4320227.png" height="70px"/>   
                </div>
                <div className='col-sm-8'>
                <span className='text-danger'>FREE</span><br/>
               <span><b  style={{fontFamily:'sofia',fontSize:'20px'}}>Enjoy The Product</b></span>
                </div>
            </div>
                
              
            </button>
            </div>
            <div className='p-3'>
            <button className='pcb1'>
            <div className='row'>
                <div className='col-sm-2 mt-2'>
                <img src="https://mooncart.dexignzone.com/xhtml/images/svg/icon-bx/box-tick.svg" height="70px"/>   
                </div>
                <div className='col-sm-8'>
                <span><b  style={{fontFamily:'sofia',fontSize:'20px'}}>Enjoy The Product</b></span><br/>
               <span style={{fontFamily:'sofia',fontSize:'14px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting</span>
                </div>
            </div>
            </button>
            </div>
            <div className='p-3'>
            <p  style={{fontFamily:'sofia',fontSize:'22px',color:'red'}}> <span className="fs-3 text-danger"><i class="bi bi-check2-circle"></i></span>You will save ₹504 on this order</p>
          <hr/>
          <span><b>Total</b></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><b>$125.75</b></span>
            </div>
            <div className='p-3'>
            <button className='pcb2'>PLACE ORDER</button>
            </div>
            </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
}

export default Page;






