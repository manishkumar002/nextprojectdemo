"use client"
import './pagesaboutme.css'
import Sliders from "../Homecart/sliders";
import { useEffect } from "react";
import React, { useState } from 'react';
const FAQItem = ({ question, answer, onClick, isActive }) => {
    return (
      <div className={`faq-item ${isActive ? 'active' : ''}`} style={{}}>
        <div className="question-container" onClick={onClick} style={{ display: 'flex', alignItems: 'center' }}>
        <span>
          <span style={{fontFamily:"sofia",fontSize:'18px'}}><b>{question}</b></span>
          <span className={`icon ${isActive ? 'active' : ''}`} style={{ marginLeft: '300px' }}> {isActive ? '-' : '+'} </span>
          </span>
        </div>
        {isActive && <p className="answer" style={{fontFamily:"sofia",fontSize:'15px'}}>{answer}</p>}
      </div>
    );
  };
export default function page() {
 
    const [activeIndex, setActiveIndex] = useState(null);
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const faqItems = [
        {
          question: "How can I cont customer support",
          answer: "De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.",
        },
        {
          question: "Can I cancel customer  my order?",
          answer: "Topping cupcake lollipop lemon drops tart tootsie roll gummi bears jujubes gummies. Lollipop sweet dessert gummi bears marzipan. Donut sweet danish liquorice jelly-o bonbon toffee.",
        },
        {
          question: "Do you  international shipping?",
          answer: "Porchetta beef prosciutto flank meatloaf short loin t-bone alcatra jowl tri-tip venison shoulder swine. Tongue bacon boudin, jerky pork chop corned beef fatback ribeye turkey.",
        },
        {
            question: "Can I track my order real-time?",
            answer: "Porchetta beef prosciutto flank meatloaf short loin t-bone alcatra jowl tri-tip venison shoulder swine. Tongue bacon boudin, jerky pork chop corned beef fatback ribeye turkey.",
          },
          
          {
            question: "How do I know  product stock?",
            answer: "Porchetta beef prosciutto flank meatloaf short loin t-bone alcatra jowl tri-tip venison shoulder swine. Tongue bacon boudin, jerky pork chop corned beef fatback ribeye turkey.",
          },
      ];


      useEffect(() => {
        let count = document.querySelectorAll(".count");
        let arr = Array.from(count);
    
        arr.map(function (item) {
          let startnumber = 0;
    
          function counterup() {
            startnumber++;
            item.innerHTML = startnumber;
    
            if (startnumber === parseInt(item.dataset.number)) {
              clearInterval(stop);
            }
          }
    
          let stop = setInterval(function () {
            counterup();
          }, 50);
    
          return () => clearInterval(stop); // Cleanup interval on component unmount
        }, []);
      }, []);

  return (
    <div className='container-fluid'>
      <div className='row'>
      <div className='pm'>
        <p className='pgm1 mt-5'><b>About Us</b></p>
        <p className='pgm2'>Home About Us</p>
      </div>
      </div>
      <div className='row'>
        <div className='col-sm-2'></div>
        <div className='col-sm-8'>
        <div className='row'>
            <div className='col-sm-6'>
            <p className='pgm11 mt-5'><b>The Importance of Regular Exercise for Maintaining a Healthy Lifestyle</b></p> 
            <p className='pgm21'>Regular exercise is crucial for maintaining a healthy lifestyle.
             Exercise not only helps to keep your body in shape but also benefits your mental 
            health by reducing stress and improving mood.
             It can also reduce your risk of developing chronic diseases such as heart disease,</p>
             <div className="row">
                <div className="col-sm-2">
                  <img
                    src="https://mooncart.dexignzone.com/xhtml/images/testimonial/testimonial4.jpg"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="col-sm-8 mt-3">
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  <span
                    style={{
                      fontSize: "20px",
                      fontFamily: "sofia",
                      color: "black",
                    }}
                  >
                    <b>Kenneth Fong</b>
                  </span>{" "}
                  <br />
                  &nbsp; &nbsp;&nbsp; &nbsp;
                  <span
                    style={{
                      fontSize: "15px",
                      fontFamily: "sofia",
                      color: "black",
                    }}
                  >
                    Postgraduate Student
                  </span>
                </div>
              </div>

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
        <div className="col-sm-6">
              <div id="counter">
                <div className="item">
                  <b
                    className="count"
                    data-number="50"
                    style={{ fontSize: "100px", fontFamily: "sofia" }}
                  ></b>
                  <span style={{ fontSize: "100px", fontFamily: "sofia" }}>
                    <b>+</b>
                  </span>
                  <br />
                  <span className=" ms-4">Items Sale</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <span style={{ fontSize: "100px", fontFamily: "sofia" }}>
                <b>400%</b>
              </span>
              <br />
              <span className=" ms-4">Return on investment</span>
            </div>
</div>




            </div>
            <div className='col-sm-6'>

              <div className='row mt-5'>
                <div className='col-sm-8 p-2'>
                  <div className='pgI'></div>
                </div>
                <div className='col-sm-4 p-2'>
                <div className='pgI1'>

                </div>
                </div>
              </div>
              <div className='row p-2'>
                <div className='pgI2'></div>
              </div>
              <div className='row p-2'>
                <div className='pgI3'></div>
              </div>
            </div>
        </div>
        </div>
        <div className='col-sm-2'></div>
      </div>
      <div className='row'>
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
      </div>
      <div className='row mt-5 mb-5'>
        <div className='col-sm-2'></div>
        <div className='col-sm-8'>
          <div className='row mt-5'>
            <div className='col-sm-4'>
              <p className='text-center' style={{fontFamily:'sofia',fontSize:'30px'}}><b>We’re just keep growing with 6.3k trusted companies</b></p>
              <p className='text-center' style={{fontFamily:'sofia',fontSize:'17px'}}>Nullam nec ipsum luctus, vehicula massa in,
               dictum sapien. Aenean quis luctus ert nulla quam augue.</p>
            </div>
            <div className='col-sm-8'>
              <div className='row'>




                <div className='col-sm-3'>
               <div class="button">
            <span class="label-up">
            <img src="https://mooncart.dexignzone.com/xhtml/images/companies/logo1.png"/>
            </span>
          <span class="label-up">
            <img src="https://mooncart.dexignzone.com/xhtml/images/companies/logo1.png"/>
          </span>
         </div>
          </div>

          <div className='col-sm-3'>
               <div class="button">
            <span class="label-up">
            <img src="https://mooncart.dexignzone.com/xhtml/images/companies/logo2.png"/>
            </span>
          <span class="label-up">
            <img src="https://mooncart.dexignzone.com/xhtml/images/companies/logo2.png"/>
          </span>
         </div>
          </div>

          <div className='col-sm-3'>
               <div class="button">
            <span class="label-up">
            <img src="https://mooncart.dexignzone.com/xhtml/images/companies/logo3.png"/>
            </span>
          <span class="label-up">
            <img src="https://mooncart.dexignzone.com/xhtml/images/companies/logo3.png"/>
          </span>
         </div>
          </div>

          <div className='col-sm-3'>
               <div class="button">
            <span class="label-up">
            <img src="https://mooncart.dexignzone.com/xhtml/images/companies/logo4.png"/>
            </span>
          <span class="label-up">
            <img src="https://mooncart.dexignzone.com/xhtml/images/companies/logo4.png"/>
          </span>
         </div>
          </div>

          <div className='col-sm-3'>
               <div class="button">
            <span class="label-up">
            <img src="https://mooncart.dexignzone.com/xhtml/images/companies/logo5.png"/>
            </span>
          <span class="label-up">
            <img src="https://mooncart.dexignzone.com/xhtml/images/companies/logo5.png"/>
          </span>
         </div>
          </div>

          <div className='col-sm-3'>
               <div class="button">
            <span class="label-up">
            <img src="https://mooncart.dexignzone.com/xhtml/images/companies/logo6.png"/>
            </span>
          <span class="label-up">
            <img src="https://mooncart.dexignzone.com/xhtml/images/companies/logo6.png"/>
          </span>
         </div>
          </div>

          <div className='col-sm-3'>
               <div class="button">
            <span class="label-up">
            <img src="https://mooncart.dexignzone.com/xhtml/images/companies/logo7.png"/>
            </span>
          <span class="label-up">
            <img src="https://mooncart.dexignzone.com/xhtml/images/companies/logo7.png"/>
          </span>
         </div>
          </div>

          <div className='col-sm-3'>
               <div class="button">
            <span class="label-up">
            <img src="https://mooncart.dexignzone.com/xhtml/images/companies/logo8.png"/>
            </span>
          <span class="label-up">
            <img src="https://mooncart.dexignzone.com/xhtml/images/companies/logo8.png"/>
          </span>
         </div>
          </div>

      
                     
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-2'></div>
      </div>
    </div>
  )
}
