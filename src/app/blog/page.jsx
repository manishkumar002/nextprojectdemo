"use client"
import "./blog.css";
import Link from "next/link";
export default function page() {


  return (
    <div className="container-fluid">
    <div className="row">
    <div className="col-sm-2"></div>
    <div className="col-sm-8">
      <div className="row mt-2">
      <div className="col-sm-2"></div>
      <div className="col-sm-8">
        <div className="row bgo mt-5">
        <div className="col-sm-4 mt-3">
        <b className="ms-4" >Blog Dark Style</b><br/>
        <Link href="/blog2Column"  style={{color:'black',textDecoration:'none'}}><p className="m ms-4">Blog 2 Column</p></Link>
        <Link href="/blog2sidebar"  style={{color:'black',textDecoration:'none'}}><p className="m ms-4">Blog 2 Column Sidebar</p></Link>
        <Link href="/blog3Column"  style={{color:'black',textDecoration:'none'}}><p className="m ms-4">Blog 3 Column</p></Link>
        <Link href="/bloghalfImage"  style={{color:'black',textDecoration:'none'}}><p className="m ms-4">Blog 3 Half Image</p></Link>
    <b className="ms-4">Blog Light Style</b><br />
    <Link href="/blog2ColumnLight"  style={{color:'black',textDecoration:'none'}}><p className="m ms-4">Blog 2 Column</p></Link>
    <Link href="/blog2sidebarLight"  style={{color:'black',textDecoration:'none'}}><p className="m ms-4">Blog 2 Column Sidebar</p></Link>
    <Link href="/blog3ColumnLight"  style={{color:'black',textDecoration:'none'}}><p className="ms-4">Blog 3 Column</p></Link>
    <Link href="/bloghalfImageLight"  style={{color:'black',textDecoration:'none'}}><p className="m ms-4">Blog 3 Half Image</p></Link>
    <b className='ms-4'>Blog Details</b><br/>
    <Link href="/postStandard"  style={{color:'black',textDecoration:'none'}}><p className="m ms-4">Post Standard</p></Link>
    <Link href="/postHeaderImage"  style={{color:'black',textDecoration:'none'}}><p className="m ms-4">Post Header Image</p></Link>
        </div>
        <div className="col-sm-8 mt-3">
        <div className='row'>
            <div className='col-sm-2'>
            <img src="https://mooncart.dexignzone.com/xhtml/images/shop/product/small/1.png" height="60" className='ms-4'/>
            </div>
            <div className='col-sm-8 me-2'>
            <span className='me-5'><b>Bamboo toothbrushes</b></span><br/>
            <span className='me-5'>July 23, 2023</span>
            </div>
          </div><br/>
          <div className='row'>
            <div className='col-sm-2'>
            <img src="https://mooncart.dexignzone.com/xhtml/images/shop/product/small/2.png" height="60" className='ms-4'/>
            </div>
            <div className='col-sm-8 me-2'>
            <span className='me-5'><b>Eco Friendly Bags</b></span><br/>
            <span className='me-5'>July 23, 2023</span>
            </div>
          </div><br/>
          <div className='row'>
            <div className='col-sm-2'>
            <img src="https://mooncart.dexignzone.com/xhtml/images/shop/product/small/2.png" height="60" className='ms-4'/>
            </div>
            <div className='col-sm-8 me-2'>
            <span className='me-5'><b>Eco Friendly Bags</b></span><br/>
            <span className='me-5'>July 23, 2023</span>
            </div>
          </div><br/>
          <div className='row'>
            <div className='col-sm-2'>
            <img src="https://mooncart.dexignzone.com/xhtml/images/shop/product/small/1.png" height="60" className='ms-4'/>
            </div>
            <div className='col-sm-8 me-2'>
            <span className='me-5'><b>Wooden Water Bottles</b></span><br/>
            <span className='me-5'>July 23, 2023</span>
            </div>
          </div><br/>
          <div className='row'>
            <div className='col-sm-2'>
            <img src="https://mooncart.dexignzone.com/xhtml/images/shop/product/small/1.png" height="60" className='ms-4'/>
            </div>
            <div className='col-sm-8 me-2'>
            <span className='me-5'><b>Wooden Water Bottles</b></span><br/>
            <span className='me-5'>July 23, 2023</span>
            </div>
          </div>
        </div>
     
        </div>
      </div>
      <div className="col-sm-2"></div>

      </div>
    </div>
 

    </div>
    </div>
  )
}







