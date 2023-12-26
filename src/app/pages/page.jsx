

"use client"
import "./pages.css";
import Link from "next/link";
export default function page() {


  return (
    <div className="container-fluid">
    <div className="row">
   <div className="col-sm-4"></div>
   <div className="col-sm-4 pages mt-4">
   <Link href="/pagesabout"  style={{color:'black',textDecoration:'none'}}><span className="w1 me-5">About Us</span><br/></Link>
   <Link href="/pagesaboutme"  style={{color:'black',textDecoration:'none'}}><span className="w1 me-5">About Me </span><br/></Link>
   <Link href="/princing"  style={{color:'black',textDecoration:'none'}}><span className="w1 me-4">Pricing Table</span><br/></Link>
   <Link href="/pourgift"  style={{color:'black',textDecoration:'none'}}><span className="w1 ms-1"> Our Gift Vouchers</span><br/></Link>
   <Link href="/pwhat-we-do"  style={{color:'black',textDecoration:'none'}}><span className="w1 me-4">What We Do</span><br/></Link>
   <Link href="/pfaqs"  style={{color:'black',textDecoration:'none'}}><span className="w me-4">Faqs</span><br/></Link>
   <Link href="/pourteam"  style={{color:'black',textDecoration:'none'}}><span className="w1 me-5">Our Team</span><br/></Link>
   <Link href="contact"  style={{color:'black',textDecoration:'none'}}><span className="w1 me-5"> Contact Us</span><br/></Link>
   <Link href="/perror"  style={{color:'black',textDecoration:'none'}}><span className=' w1 me-5'>Error 404</span><br /></Link>
   <Link href="/punder"  style={{color:'black',textDecoration:'none'}}><span className="w1 ms-1">Under Construction</span><br/></Link>
   <Link href="/pcomming"  style={{color:'black',textDecoration:'none'}}><span className="w1 me-4"> Coming Soon</span><br/></Link>
   </div>
   <div className="col-sm-4"></div>
 

    </div>
    </div>
  )
}







