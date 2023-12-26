import React from 'react'
import "./footer.css"
export default function footer() {
  return (
    <div className='container-fluid'>
    <div className='row mt-5'>
    <div className='col-sm-3' style={{background:'#dbdbdb'}}>
        <div className='row mt-5'>
            <div className='col-sm-2'>
            <img src="https://mooncart.dexignzone.com/xhtml/images/svg/icon-bx/password-check.svg" alt='tt'/>
            </div>
            <div className='col-sm-6'>
                <h5 style={{textAlign:"justify",fontFamily:'sofia'}}>Filter & Discover</h5>
                <h6 style={{textAlign:"justify",fontFamily:'sofia'}}>Lorem Ipsum is simply dummy text of the printing and typesetting</h6>
            </div>
            <div className='col-sm-3'>
            <p className='nums' style={{marginLeft:"-30px"}}>01</p>
            </div>
        </div>
    </div>
    <div className='col-sm-3' style={{background:'#dbdbdb'}}>
    <div className='row mt-5'>
            <div className='col-sm-2'>
            <img src="https://mooncart.dexignzone.com/xhtml/images/svg/icon-bx/cart.svg" alt='tt'/>
            </div>
            <div className='col-sm-6'>
                <h5 style={{textAlign:"justify",fontFamily:'sofia'}}>Add to cart</h5>
                <h6 style={{textAlign:"justify",fontFamily:'sofia'}}>Lorem Ipsum is simply dummy text of the printing and typesetting</h6>
            </div>
            <div className='col-sm-3'>
            <p className='nums' style={{marginLeft:"-40px"}}>01</p>
            </div>
        </div>
    </div>
    <div className='col-sm-3' style={{background:'#dbdbdb'}}>
    <div className='row mt-5'>
            <div className='col-sm-2'>
            <img src="https://mooncart.dexignzone.com/xhtml/images/svg/icon-bx/discovery.svg" alt='tt'/>
            </div>
            <div className='col-sm-6'>
                <h5 style={{textAlign:"justify",fontFamily:'sofia'}}>Fast Shipping</h5>
                <h6 style={{textAlign:"justify",fontFamily:'sofia'}}>Lorem Ipsum is simply dummy text of the printing and typesetting</h6>
            </div>
            <div className='col-sm-3'>
            <p className='nums' style={{marginLeft:"-40px"}}>01</p>
            </div>
        </div>
    </div>
    <div className='col-sm-3' style={{background:'#dbdbdb'}}>
    <div className='row mt-5'>
            <div className='col-sm-2'>
            <img src="https://mooncart.dexignzone.com/xhtml/images/svg/icon-bx/box-tick.svg" alt='tt'/>
            </div>
            <div className='col-sm-6'>
                <b style={{textAlign:"justify",fontFamily:'sofia'}}>Enjoy the Shipping</b>
                <h6 style={{textAlign:"justify",fontFamily:'sofia'}}>Lorem Ipsum is simply dummy text of the printing and typesetting</h6>
            </div>
            <div className='col-sm-3'>
            <p className='nums' style={{marginLeft:"-40px"}}>01</p>
            </div>
        </div>
    </div> 
      <div className='col-sm-2'></div>
      <div className='col-sm-8'>
        <div className='row mt-5'>
            <div className='col-sm-3'>
                <img src="https://mooncart.dexignzone.com/xhtml/images/logo.svg" style={{height:'35px'}}/>
                <p className='mt-3'>Address : 451 Wall Street, UK, London</p>
                <p>E-mail : example@info.com</p>
                <p>Phone : (064) 332-1233</p>
                <p>Subscribe To Our Newsletter</p>
                <input type='email' placeholder='Your Email Address' className='form-control'/>
            </div>
            <div className='col-sm-3'>
                <b>Recent Posts</b>
                <div className='row mt-4'>
                    <div className='col-sm-2'>
                        <img src="https://mooncart.dexignzone.com/xhtml/images/shop/product/small/1.png" height="45"/>
                    </div>
                    <div className='col-sm-9'>
                        <b>Wooden Water Bottles</b>
                        <p>July 23, 2023</p>
                    </div>
                </div>
                <div className='row mt-1'>
                    <div className='col-sm-2'>
                        <img src="https://mooncart.dexignzone.com/xhtml/images/shop/product/small/2.png" height="45"/>
                    </div>
                    <div className='col-sm-9'>
                        <b>Eco friendly bags</b>
                        <p>July 23, 2023</p>
                    </div>
                </div>
                <div className='row mt-1'>
                    <div className='col-sm-2'>
                        <img src="https://mooncart.dexignzone.com/xhtml/images/shop/product/small/3.png" height="45"/>
                    </div>
                    <div className='col-sm-9'>
                        <b>Bamboo toothbrushes</b>
                        <p>July 23, 2023</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-2'>
               <b>Our Stores</b>
                <p className='mt-4'>New York</p>
                <p>London SF</p>
                <p>Edinburgh</p>
                <p>Los Angeles</p>
                <p>chicago</p>
               
            </div>
            <div className='col-sm-2'>
            <b>Useful Links</b>
                <p className='mt-4'>Privacy Policy</p>
                <p>Returns</p>
                <p>Terms & Conditions</p>
                <p>Contact Us</p>
                <p>Latest News</p>
            </div>
            <div className='col-sm-2'>
            <b>Footer Menu</b>
                <p className='mt-4'>Instagram Profile</p>
                <p>New Collection</p>
                <p>Woman Dress</p>
                <p>Contact Us</p>
                <p>Latest News</p>
            </div>
        </div>
      </div>
      <div className='col-sm-2'></div>
    </div>
    </div>
  )
}
