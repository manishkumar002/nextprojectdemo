
import './perror.css'
export default function page() {
  return (
    <div className='container-fluid'>
    <div className='row mt-5'>
        <div className='col-sm-3'></div>
        <div className='col-sm-6'>
            <div className='row mt-5'>
                <div className='col-sm-6'>
                    <img src="https://mooncart.dexignzone.com/xhtml/images/pic-404.png" className='ms-5'/>
                   
                </div>
                <div className='col-sm-6'>
                    <span style={{fontSize:'150px',fontFamily:'sofia'}}><b>404</b></span><br/> 
                    <span style={{fontSize:'30px',fontFamily:'sofia'}}><b>Oh, no! This page does not exist.</b></span><br/>
                    <span >   <button
                    className="cart-button fs-6 text-light"
                    style={{
                      marginLeft:'40px',
                      height: "40px",
                      width: "200px",
                      lineHeight: "18px",
                      background:'black',
                      border:"none",
                      marginTop:'30px'
                    }}
                  >
                    <b>GO TO MAIN PAGE</b>
                  </button></span>
                 
                </div>
            </div>
        </div>
        <div className='col-sm-3'></div>
    </div>
    
    </div>
  )
}
