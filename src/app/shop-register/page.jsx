
import Link from "next/link"
import "./shopregister.css"
export default function page() {
  return (
    <div className="container-fluid">
     
<div className="row">
<div className="col-sm-6">
  <div className="row pr">
 <div className="col-sm-4">
 <div className="p-2">
  <p style={{fontSize:'50px', fontFamily:'sofia'}}><b>My Account</b></p>
  <p style={{fontSize:'20px', fontFamily:'sofia'}}>Home My Account</p>
  </div>
  </div>
  <div className="col-sm-8">
  <img src="https://mooncart.dexignzone.com/xhtml/images/registration/pic1.png " style={{width:'100%'}}/>
  </div>
  </div>
</div>
<div className="col-sm-6">
  <div className="pr1 ">
  <p className="pr2"><b>My Account</b></p>
  <p className="pr3">Welcome please registration to your account</p>
 <div className="p-3">
  <lable>Username</lable>
  <input type="name" className="form-control" placeholder="Username" style={{height:'50px',background:'#dbdbdb'}}/>
  </div>
  <div className="p-3">
  <lable>Email Address</lable>
  <input type="email" className="form-control" placeholder="Email" style={{height:'50px',background:'#dbdbdb'}}/>
  </div>
  <div className="p-3">
  <lable>Password</lable>
  <input type="password" className="form-control" placeholder="Password" style={{height:'50px',background:'#dbdbdb'}}/>
  </div>
  <center>
  <button
                        className="cart-button mt-3 m-2"
                        style={{
                          fontSize: "14px",
                          height: "50px",
                          width: "120px",
                          background:'black',
                          color:'white'
                        }}
                      >
                    REGISTER
                      </button>
                      <Link href="/shopsign"><button
                        className="cart-button mt-3 m-2 bpr"
                        style={{
                        
                          width: "100px",
                        
                        }}
                      >
                 SIGN IN
                      </button></Link>
                      
                  </center>
  </div>
</div>
</div>
    </div>
  )
}
