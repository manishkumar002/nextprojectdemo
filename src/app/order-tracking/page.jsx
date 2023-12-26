
import Link from "next/link"
import "./ordertracking.css"
export default function page() {
  return (
    <div className="container-fluid">
     
<div className="row">
<div className="col-sm-6">
  <div className="row or">
 <div className="col-sm-4">
 <div className="p-2">
  <p style={{fontSize:'40px', fontFamily:'sofia'}}><b>Order Tracking</b></p>
  <p style={{fontSize:'20px', fontFamily:'sofia'}}>Home Order Tracking</p>
  </div>
  </div>
  <div className="col-sm-8">
  <img src="https://mooncart.dexignzone.com/xhtml/images/registration/pic1.png " style={{width:'100%'}}/>
  </div>
  </div>
</div>
<div className="col-sm-6">
  <div className="or1 ">
  <p className="or2"><b>Track Your Order</b></p>
  <p className="or3">welcome please login to your account</p>
  <div className="p-3">
  <lable>Order ID</lable>
  <input type="text" className="form-control" placeholder="ID" style={{height:'50px',background:'#dbdbdb'}}/>
  </div>
  <div className="p-3">
  <lable>Billing email</lable>
  <input type="email" className="form-control" placeholder="Email Address" style={{height:'50px',background:'#dbdbdb'}}/>
  </div>
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
                  TRACK
                      </button>
                      
                  </center>
  </div>
</div>
</div>
    </div>
  )
}
