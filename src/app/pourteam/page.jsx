"use client";
import "./pourteam.css";
export default function Page() {

  return (
    <div className="container-fluid">
          <div className='row'>
      <div className='pou'>
        <p className='pou1 mt-5'><b>Our Team</b></p>
        <p className='pou2'>Home Our Team</p>
          </div>
            </div>

      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div className="row mt-5">
            <div className="col-sm-6">
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
                  <div className="pou3"></div>
                  <center>
                    <span style={{ fontSize: "20px", fontFamily: "sofia" }}>
                      <b>John Doe</b>
                    </span>
                    <br />
                    <span>CEO & Founder</span>
                  </center>
                </div>
                <div className="col-sm-6 p-2">
                  <div className="pou4"></div>
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
              <div className="pou5"></div>
              <center>
                <span style={{ fontSize: "20px", fontFamily: "sofia" }}>
                  <b>Macauley Herring</b>
                </span>
                <br />
                <span>Customer Success</span>
              </center>
            </div>
            <div className="col-sm-3 p-2">
              <div className="pou6"></div>
              <center>
                <span style={{ fontSize: "20px", fontFamily: "sofia" }}>
                  <b>Alya Levine</b>
                </span>
                <br />
                <span>CTO</span>
              </center>
            </div>
            <div className="col-sm-3 p-2">
              <div className="pou7"></div>
              <center>
                <span style={{ fontSize: "20px", fontFamily: "sofia" }}>
                  <b>Rose Hernandez</b>
                </span>
                <br />
                <span>Backend Developer</span>
              </center>
            </div>
            <div className="col-sm-3 p-2">
              <div className="pou8"></div>
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
