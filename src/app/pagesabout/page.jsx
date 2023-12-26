// "use client"
// import './pagesabout.css';
// import { useEffect } from 'react';

// export default function Page() {

//   useEffect(() => {
//     let count = document.querySelectorAll(".count");
//     let arr = Array.from(count);

//     arr.map(function (item) {
//       let startnumber = 0;

//       function counterup() {
//         startnumber++;
//         item.innerHTML = startnumber;

//         if (startnumber === parseInt(item.dataset.number)) {
//           clearInterval(stop);
//         }
//       }

//       let stop = setInterval(function () {
//         counterup();
//       }, 50);

//       return () => clearInterval(stop); // Cleanup interval on component unmount
//     }, []);
//   }, []);

//   return (
//     <div className='container-fluid'>
//       <div className='row mt-5'>
//         <div className='col-sm-2'></div>
//         <div className='col-sm-8'>
//           <div className='row'>
//             <div className='col-sm-8'>
//               <p style={{fontSize:'40px',fontFamily:'sofia'}}><b>Behind MoonCart The People,<br/> The Passion, And The Purpose</b></p>
//               <span>Home ... About</span>
//             </div>
//             <div className='col-sm-2'>
//               <div id="counter">
//                 <div className="item">
//                   <b className="count" data-number="50" style={{fontSize:'100px',fontFamily:'sofia'}}></b>
//                   <span style={{fontSize:'100px',fontFamily:'sofia'}}><b>+</b></span>
//                   <br/>
//                   <span className=' ms-4'>Items Sale</span>
//                 </div>
//               </div>
//             </div>
//             <div className='col-sm-2'>
//               <span style={{fontSize:'100px',fontFamily:'sofia'}} ><b>400%</b></span><br/>
//               <span className=' ms-4'>Return on investment</span>
//             </div>
//           </div>
//         </div>
//         <div className='col-sm-2'></div>
//       </div>
//      <div className='row'>
//      <video autoPlay muted style={{ width: '100%', height: '500px' }}>
//         <source src="https://mooncart.dexignzone.com/xhtml/images/background/bg-video.mp4" type="video/mp4"/>
//       </video>
//      </div>
//     </div>
//   )
// }

"use client";
import "./pagesabout.css";
import React, { useRef } from "react";
import { useEffect } from "react";

export default function Page() {
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

  const videoRef = useRef(null);

  const handleTogglePlay = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-8">
              <p style={{ fontSize: "40px", fontFamily: "sofia" }}>
                <b>
                  Behind MoonCart The People,
                  <br /> The Passion, And The Purpose
                </b>
              </p>
              <span>Home ... About</span>
            </div>
            <div className="col-sm-2">
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
            <div className="col-sm-2">
              <span style={{ fontSize: "100px", fontFamily: "sofia" }}>
                <b>400%</b>
              </span>
              <br />
              <span className=" ms-4">Return on investment</span>
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>

      <div className="row mt-5">
        <video
          autoPlay
          muted
          loop
          ref={videoRef}
          id="myVideo"
          style={{ height: "500px", width: "100%", objectFit: "cover" }}
        >
          <source
            src="https://mooncart.dexignzone.com/xhtml/images/background/bg-video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="col-sm-8"></div>
        <div className="col-sm-4 pbg">
          <p style={{ fontSize: "40px", fontFamily: "sofia", color: "white" }}>
            <b>why MoonCart ?</b>
          </p>
          <p style={{ fontSize: "15px", fontFamily: "sofia", color: "white" }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use
          </p>
        </div>
      </div>
      <div className="row" style={{ transform: "translateY(-70px)" }}>
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-6 imbp m-3"></div>
            <div className="col-sm-6 imbp1 m-3">
              <p
                style={{
                  fontSize: "50px",
                  fontFamily: "sofia",
                  color: "black",
                }}
              >
                <b>About MoonCart Our Story and Mission in Ecommerce</b>
              </p>
              <p
                style={{
                  fontSize: "15px",
                  fontFamily: "sofia",
                  color: "black",
                }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>

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
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
      <div className="row imbp2">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <span style={{ fontSize: "30px", fontFamily: "sofia" }}>
            Postgraduate Student ?
          </span>{" "}
          &nbsp; &nbsp;&nbsp;
          <span
            style={{ fontSize: "20px", fontFamily: "sofia", color: "white" }}
          >
            Our experts will help find the grar that’s right for you
          </span>
        </div>
        <div className="col-sm-2"></div>
      </div>

      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div className="row mt-5">
            <div className="col-sm-6 imbp3 ">
              <p
                style={{
                  fontSize: "40px",
                  fontFamily: "sofia",
                  color: "black",
                }}
              >
                <b>
                  Meet our team of creators, designers, and world-class problem
                  solvers
                </b>
              </p>
              <p
                style={{
                  fontSize: "15px",
                  fontFamily: "sofia",
                  color: "black",
                }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words.
              </p>
              <button
                className="cart-button mt-3"
                style={{
                  fontSize: "14px",
                  height: "50px",
                  width: "150px",
                  background: "black",
                  color: "white",
                }}
              >
                Join Our Team
              </button>
            </div>
            <div className="col-sm-6 imbp3">
              <div className="row">
                <div className="col-sm-6 p-2 ">
                  <div className="pbg1"></div>
                  <center>
                    <span style={{ fontSize: "20px", fontFamily: "sofia" }}>
                      <b>John Doe</b>
                    </span>
                    <br />
                    <span>CEO & Founder</span>
                  </center>
                </div>
                <div className="col-sm-6 p-2">
                  <div className="pbg2"></div>
                  <center>
                    <span style={{ fontSize: "20px", fontFamily: "sofia" }}>
                      <b>Ivan Mathews</b>
                    </span>
                    <br />
                    <span>iOS Developer</span>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
     <div className="row mt-5">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-3 p-2">
              <div className="pbg3"></div>
              <center>
                <span style={{ fontSize: "20px", fontFamily: "sofia" }}>
                  <b>Macauley Herring</b>
                </span>
                <br />
                <span>Customer Success</span>
              </center>
            </div>
            <div className="col-sm-3 p-2">
              <div className="pbg4"></div>
              <center>
                <span style={{ fontSize: "20px", fontFamily: "sofia" }}>
                  <b>Alya Levine</b>
                </span>
                <br />
                <span>CTO</span>
              </center>
            </div>
            <div className="col-sm-3 p-2">
              <div className="pbg5"></div>
              <center>
                <span style={{ fontSize: "20px", fontFamily: "sofia" }}>
                  <b>Rose Hernandez</b>
                </span>
                <br />
                <span>Backend Developer</span>
              </center>
            </div>
            <div className="col-sm-3 p-2">
              <div className="pbg6"></div>
              <center>
                <span style={{ fontSize: "20px", fontFamily: "sofia" }}>
                  <b>Elen Benitez</b>
                </span>
                <br />
                <span>Designer</span>
              </center>
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
}
