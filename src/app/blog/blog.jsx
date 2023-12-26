

import './blog.css';
import Link from "next/link";
const Blog = () => {


  return (
    <div className="container-fluid">
      <div className="row blog">
        <div className="col-sm-4 mt-3">
          <b>Blog Dark Style</b><br />
          <Link href="/blog2Column"  style={{color:'black',textDecoration:'none'}}><span className="w me-2">Blog 2 Column</span><br/></Link>
          <Link href="/blog2sidebar"  style={{color:'black',textDecoration:'none'}}><span className="w ms-5">Blog 2 Column Sidebar </span><br/></Link>
          <Link href="/blog3Column"  style={{color:'black',textDecoration:'none'}}><span className="w me-2">Blog 3 Column</span><br/></Link>
          <Link href="/bloghalfImage"  style={{color:'black',textDecoration:'none'}}><span className="w ms-1"> Blog 3 Half Image</span><br/></Link>
    <b>Blog Light Style</b><br />
    <Link href="/blog2ColumnLight"  style={{color:'black',textDecoration:'none'}} ><span className="w me-4">Blog 2 Column</span><br/></Link>
    <Link href="/blog2sidebarLight"  style={{color:'black',textDecoration:'none'}}><span className="w ms-4">Blog 2 Column Sidebar </span><br/></Link>
  <Link href="/blog3ColumnLight"  style={{color:'black',textDecoration:'none'}}><span className="w me-4">Blog 3 Column</span><br/></Link>
  <Link href="/bloghalfImageLight"  style={{color:'black',textDecoration:'none'}}><span className="w me-3"> Blog 3 Half Image</span><br/></Link>
    <b className='me-5'>Blog Details</b><br />
    <Link href="/postStandard"  style={{color:'black',textDecoration:'none'}}><span className="w me-5">Post Standard</span><br/></Link>
    <Link href="/postHeaderImage"  style={{color:'black',textDecoration:'none'}}><span className="w me-4"> Post Header Image</span><br/></Link>
        </div>
        <div className="col-sm-8 mt-3">
          <b className='me-5'>Recent Posts</b><br />
          <div className='row'>
            <div className='col-sm-2'>
            <img src="https://mooncart.dexignzone.com/xhtml/images/shop/product/small/1.png" height="60" className='ms-4'/>
            </div>
            <div className='col-sm-8 me-2'>
            <span className='me-5'><b>Bamboo toothbrushes</b></span><br/>
            <span className='me-5'>July 23, 2023</span>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-2'>
            <img src="https://mooncart.dexignzone.com/xhtml/images/shop/product/small/2.png" height="60" className='ms-4'/>
            </div>
            <div className='col-sm-8 me-2'>
            <span className='me-5'><b>Eco Friendly Bags</b></span><br/>
            <span className='me-5'>July 23, 2023</span>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-2'>
            <img src="https://mooncart.dexignzone.com/xhtml/images/shop/product/small/3.png" height="60" className='ms-4'/>
            </div>
            <div className='col-sm-8 me-2'>
            <span className='me-5'><b>Bamboo toothbrushes</b></span><br/>
            <span className='me-5'>July 23, 2023</span>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-2'>
            <img src="https://mooncart.dexignzone.com/xhtml/images/shop/product/small/2.png" height="60" className='ms-4'/>
            </div>
            <div className='col-sm-8 me-2'>
            <span className='me-5'><b>Eco Friendly Bags</b></span><br/>
            <span className='me-5'>July 23, 2023</span>
            </div>
          </div>
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
  );
};
export default Blog;

