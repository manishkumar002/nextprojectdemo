
import Link from "next/link"
import "./shopsign.css"
export default function page() {
  return (
    <div className="container-fluid">
     
<div className="row">
<div className="col-sm-6">
  <div className="row ps">
 <div className="col-sm-4">
 <div className="p-2">
  <p style={{fontSize:'50px', fontFamily:'sofia'}}><b>My Account</b></p>
  <p style={{fontSize:'20px', fontFamily:'sofia'}}>Home My Account</p>
  </div>
  </div>
  <div className="col-sm-8">
  <img src="https://mooncart.dexignzone.com/xhtml/images/registration/pic2.png " style={{width:'100%'}}/>
  </div>
  </div>
</div>
<div className="col-sm-6">
  <div className="ps1 ">
  <p className="ps2"><b>Welcome Back</b></p>
  <p className="ps3">welcome please login to your account</p>
  <div className="p-3">
  <lable>Email Address</lable>
  <input type="email" className="form-control" placeholder="Email" style={{height:'50px',background:'#dbdbdb'}}/>
  </div>
  <div className="p-3">
  <lable>Password</lable>
  <input type="password" className="form-control" placeholder="Password" style={{height:'50px',background:'#dbdbdb'}}/>
  </div>
  <span className="ps3 p-4">                  
  <input type="checkbox"/>
  welcome please </span>
  <span className="ps3 p-3 text-danger">Forgot Password </span>
  <center>
<button
                        className="cart-button mt-3 m-2"
                        style={{
                          fontSize: "14px",
                          height: "50px",
                          width: "100px",
                          background:'black',
                          color:'white'
                        }}
                      >
                   SIGN IN
                      </button>
                      <Link href="/shop-register"> <button
                        className="cart-button mt-3 m-2 bps"
                        style={{
                        
                          width: "120px",
                        
                        }}
                      >
                 REGISTER 
                      </button></Link>
                      
                  </center>
  </div>
</div>
</div>
    </div>
  )
}
