
"use client"
import { useState, useEffect } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex < 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex < 1 ? prevIndex + 1 : 0));
    }, 4000);

    return () => clearInterval(interval); 

  }, []);

  return (
    <div id="robotcarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#robotcarousel"
          data-bs-slide-to="0"
          className={activeIndex === 0 ? 'active' : ''}
          aria-current={activeIndex === 0}
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#robotcarousel"
          data-bs-slide-to="1"
          className={activeIndex === 1 ? 'active' : ''}
          aria-label="Slide 2"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
         <p style={{fontFamily:'sofia',fontSize:'18px'}}>"It is a long established fact that a reader will be distracted by 
         the readable content <br/>of a page when looking at its layout. The point 
         of using Lorem Ipsum is that it has<br/> a more-or-less normal distribution 
         of letters, as opposed to using 'Content here,<br/> content here' making it 
         look like readable English."</p>
         <div className='row mt-5'>
          <div className='col-sm-2'>
            <img src="https://mooncart.dexignzone.com/xhtml/images/testimonial/testimonial4.jpg" style={{height:'100px',width:'100px',borderRadius:'100%'}}/>
          </div>
          <div className='col-sm-4'>
            <p style={{fontFamily:'sofia',fontSize:'38px'}}>Manish Kumar</p>
            <p>Mern stack developer</p>
          </div>
       
        </div>
        </div>
      
        <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
        <p style={{fontFamily:'sofia',fontSize:'18px'}}>"Our vast library of meticulously maintained packages means you're ready <br/>
        for anything. Let Laravel Octane supercharge your application's performance, <br/>and experience 
        infinite scale on Laravel Vapor, our serverless <br/>deployment platform powered by AWS Lambda."</p>
         <div className='row mt-5'>
          <div className='col-sm-2'>
            <img src="https://mooncart.dexignzone.com/xhtml/images/testimonial/testimonial4.jpg" style={{height:'100px',width:'100px',borderRadius:'100%'}}/>
          </div>
          <div className='col-sm-4'>
            <p style={{fontFamily:'sofia',fontSize:'38px'}}>Vijay Kumar</p>
            <p>Laravel developer</p>
          </div>
       
        </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#robotcarousel"
        data-bs-slide="prev"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#robotcarousel"
        data-bs-slide="next"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
