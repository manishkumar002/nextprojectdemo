
import './contact.css';

export default function Page() {
  return (
    <div className="container-fluid">
      <div className="row con">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
    
          <div className="login-form">
           
          </div>

          <div className="row">
            <div className="col-sm-6">
              <p className="w2">DISCOVER US</p>
              <span className="w3">
                <u>MoonCart is here to help you;</u>
              </span>
              <br />
              <span className="w3">
                Our experts are available to answer any questions you might
                have. We’ve got the answers..
              </span>

              <div className="row mt-5" style={{ marginBottom: '150px' }}>
                <hr className="text-light" />
                <div className="col-sm-5">
                  <span className="w4">Call Us</span> <br />
                  <span className="text-light">+01-123-456-7890</span>
                  <br />
                  <span className="text-light">+01-123-456-7890</span>
                </div>
                <div className="col-sm-6">
                  <span className="w4">Email Us</span> <br />
                  <span className="text-light">help@MoonCart.com</span>
                </div>
              </div>
            </div>
            <div className='col-sm-2'></div>
            <div className="col-sm-5 lo">
          <label className='mt-3'><b>Your Name</b></label>
          <input type="text" className='form-control' style={{height:'50px',background:' #dbdbdb;'}}/>
          <label className='mt-3'><b>Email Address</b></label>
          <input type="text" className='form-control'style={{height:'50px',background:' #dbdbdb;'}}/>
          <label className='mt-3'><b>Phone Number</b></label>
          <input type="text" className='form-control' style={{height:'50px',background:' #dbdbdb;'}}/>
          <label className='mt-3'><b>Massage</b></label>
          <input type="textarea" className='form-control' style={{height:'90px',background:' #dbdbdb;'}}/><br/>
         
          <input type="button" className='form-control' value="SUBMIT" style={{height:'40px',background:'black',color:'white'}}/>
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <iframe
            src="https://www.google.com/maps/d/u/3/embed?mid=14NJdFejStQG9eIu7DrwXNuDtxItYnsU&ehbc=2E312F"
            className="w-100"
            style={{ height: '600px' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

