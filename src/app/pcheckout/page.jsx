"use client";
import React, { useState } from 'react';

import "./checkout.css";
const FAQItem = ({ question, answer, onClick, isActive }) => {
    return (
      <div className={`faq-item ${isActive ? 'active' : ''}`} style={{}}>
        <div className="question-container" onClick={onClick} style={{ display: 'flex', alignItems: 'center' }}>
        <span>
          <span style={{fontFamily:"sofia",fontSize:'18px'}}><b>{question}</b></span>
          <span className={`icon ${isActive ? 'active' : ''} pck3`} > {isActive ? <i class="bi bi-chevron-up"></i> : <i class="bi bi-chevron-down"></i>} </span>
          </span>
        </div>
        {isActive && <p className="answer" style={{fontFamily:"sofia",fontSize:'15px'}}>{answer}</p>}
      </div>
    );
  };
function Page() {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const faqItems = [
        {
          question: "How can I cont customer support",
          answer: "If your order has not yet shipped, you can contact us to change your shipping address",
        },
        {
          question: "Can I cancel customer  my order?",
          answer: "If your order has not yet shipped, you can contact us to change your shipping address",
        },

      ];


  return (
    <div>
      <div className='row'>
        <div className='pck'>
          <p className='pck1 mt-5'><b>Checkout</b></p>
          <p className='pck2'>Home Checkout</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-8">


            {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            className="form-control"
            answer={item.answer}
            onClick={() => handleItemClick(index)}
            isActive={activeIndex === index}
          />
        ))}

        <div className='row'>
          <div className='col-sm-6'>
         <label><b>First Name</b></label>
            <input type="text" className='form-control' style={{height:'50px',background:'#f0f0f0'}}/>
          </div>
          <div className='col-sm-6'>
          <label><b>Last Name</b></label>
          <input type="text" className='form-control' style={{height:'50px',background:'#f0f0f0'}}/>
          </div>
        </div>
<br/>
        <label><b>Company name (optional)</b></label>
          <input type="text" className='form-control' style={{height:'50px',background:'#f0f0f0'}}/>

<br/>
<label><b>Country / Region *</b></label>
<select class="form-select" required style={{height:'50px'}}>
  <option value="1">India</option>
  <option value="2">Uk</option>
  <option value="3">Iraq</option>
</select>

<br/>

<label><b>Street address *</b></label>
          <input type="text" className='form-control' placeholder='House Number and street name' style={{height:'50px',background:'#f0f0f0'}}/><br/>
          <input type="text" className='form-control'  placeholder='Apartment, suite ,unit,etc.(optional)' style={{height:'50px',background:'#f0f0f0'}}/>


          <br/>
<label><b>Town / City *</b></label>
<select class="form-select" required style={{height:'50px'}}>
  <option value="1">Lucknow</option>
  <option value="1">Mihinpurwa</option>
  <option value="2">Baharaich</option>
  <option value="3">Nanapara</option>
</select>

<br/>
<label><b>State *</b></label>
<select class="form-select" style={{height:'50px'}}>
<option selected>Utter Pradesh</option>
  <option value="2">Uk</option>
  <option value="3">Mp</option>
</select>


<br/>
<label><b>ZIP Code * </b></label>
<input type="text" className='form-control' placeholder='Zip code' style={{height:'50px',background:'#f0f0f0'}}/>

<br/>
<label><b>Phone *</b></label>
<input type="text" className='form-control' placeholder='Phone Number' style={{height:'50px',background:'#f0f0f0'}}/>

<br/>
<label><b>Email address *</b></label>
<input type="text" className='form-control' placeholder='Email Address' style={{height:'50px',background:'#f0f0f0'}}/>
<br/>

<input type="checkbox"/>
  <label> Create an account?</label><br/>

  <input type="checkbox"/>
  <label> Create an account?</label>


  <br/>
  <br/>
<label class="form-label"><b>Order notes (optional)</b></label>
  <textarea class="form-control" placeholder='Notes about your order,e.g.spacial notes for delivery' rows="4"  style={{background:'#f0f0f0'}}></textarea> 
            </div>



            <div className="col-sm-4 ">
            <div className='chbc'>
            <div style={{fontFamily:'sofia',fontSize:'24px'}}><b>Your Order</b></div>
          
           
              <div className='row'>
                <div className='col-sm-3 text-center mt-3'>
                <img src="https://mooncart.dexignzone.com/xhtml/images/shop/shop-cart/pic1.jpg"/>
                </div>
                <div className='col-sm-6 mt-5 text-center'>
               <b> Wooden Water Bottles</b>
                </div>
                <div className='col-sm-3  mt-5  text-center text-danger'>
                <b>$40.00</b>
                </div>
              
            </div>
            <hr/>
            <div className='row'>
                <div className='col-sm-3 text-center mt-3'>
                <img src="https://mooncart.dexignzone.com/xhtml/images/shop/shop-cart/pic1.jpg"/>
                </div>
                <div className='col-sm-6 mt-5 text-center'>
                <b> Wooden Water Bottles</b>
                </div>
                <div className='col-sm-3 mt-5  text-center text-danger'>
                <b>$40.00</b>
                </div>
               
            </div>
            <hr/>
            <div className='row'>
                <div className='col-sm-9 '>
                <b> Subtotal</b>
                </div>
                <div className='col-sm-3 text-danger'>
                <b>$40.00</b>
                </div>
            
            </div>
            <hr/>
            <div className='row'>
             <span><b>Shipping</b></span>
             <div className='col-sm-9 '>
               <input type="radio"  style={{height:'15px',width:'15px'}}/>
               <lable  style={{fontFamily:'sofia',fontSize:'24px'}} >Free shipping</lable><br/>

               <input type="radio"  style={{height:'15px',width:'15px'}}/>
               <lable  style={{fontFamily:'sofia',fontSize:'24px'}} >Free shipping</lable><br/>
                </div>
                <div className='col-sm-3 mt-5 text-danger'>
               <b> $40.00</b>
                </div>
               
            </div>
            <hr/>
            <div className='row'>
             <div className='col-sm-8'>
            Total
                </div>

                <div className='col-sm-4 text-danger fs-2'>
               <b> $125.75</b>
                </div>
            </div>

            <input type="radio"/>
               <lable  style={{fontFamily:'sofia',fontSize:'18px'}} >Direct bank transfer</lable><br/>

               <input type="radio"/>
               <lable  style={{fontFamily:'sofia',fontSize:'18px'}} >Cash on delivery</lable><br/>
               <input type="radio"/>
               <lable  style={{fontFamily:'sofia',fontSize:'18px'}} >Paypal
               <img src="https://mooncart.dexignzone.com/xhtml/images/shop/payment.jpg"/>
               <u  style={{fontFamily:'sofia',fontSize:'13px'}} >What is PayPal?</u>
               </lable><br/>

<hr/>

<p  style={{fontFamily:'sofia',fontSize:'18px'}} >Your personal data will be used 
to process your order,
 support your experience throughout this
  website, and for other purposes
  described in our privacy policy.</p>

  <input type="checkbox"/>
  <span  style={{fontFamily:'sofia',fontSize:'18px'}}>&nbsp; &nbsp;I have read and agree to the website terms and conditions</span><br/><br/>


<button className="form-control text-light" style={{background:'black'}}>PLACE ORDER</button>
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






