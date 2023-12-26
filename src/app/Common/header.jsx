

"use client";
import Shop from "../shop/shop"
 import Blog from "../blog/blog"
 import Pages from "../pages/pages"
import "./header.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
const Header = () => {
  const router = useRouter();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2 bac">
          <img
            src="https://mooncart.dexignzone.com/xhtml/images/logo.svg"
            style={{ height: '80px', width: '150px', marginLeft: '30px' }}
            alt="Logo"
          />
        </div>
      
        <div className="col-sm-6 bac">
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <i class="bi bi-x-lg"></i>
            ) : (
              <i class="bi bi-justify"></i>
              
            )}
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link href="/" className="Lin">
                <span className="nav-links" onClick={handleClick}>
                  HOME
                </span>
              </Link>
            </li>

            <li className="nav-item">
          
            <Link href="/shop" className="Lin">
                <span className="nav-links" onClick={handleClick}>
                  SHOP
                </span>
              </Link>
            <div className="xteam">
            <Shop/> 
            </div>
         
            </li>

            <li className="nav-item">
              <Link href="/blog" className="Lin">
                <span className="nav-links" onClick={handleClick}>
                  BLOG
                </span>
              </Link>
              <div className="manish">
            <Blog/> 
            </div>
            </li>

            <li className="nav-item">
              <Link href="/pages" className="Lin">
                <span className="nav-links" onClick={handleClick}>
                  PAGES
                </span>
              </Link>
              <div className="vijay">
            <Pages/> 
            </div>
            </li>

            <li className="nav-item">
              <Link href="/contact" className="Lin">
                <span className="nav-links" onClick={handleClick}>
                  CONTACT
                </span>
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link href="/register" className="Lin">
                <span className="nav-links" onClick={handleClick}>
                  REGISTER
                </span>
              </Link>
            </li> */}

            {/* <li className="nav-item">
              <Link href="/login" className="Lin">
                <span className="nav-links" onClick={handleClick}>
                  LOGIN
                </span>
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="col-sm-4 top">
        <p  className="topp">
            <Link href="/shopsign" className="Lin">
               
                  <span className="text-light ">LOGIN</span>
                
              </Link>
              <Link href="/shop-register" className="Lin">
                <span className="text-light">
                  /REGISTER
                </span>
              </Link>
            <input type="search" placeholder="Search gift...." style={{height:'28px',width:'150px',marginLeft:'30px',borderRadius:'10px'}}/>
              <i class="bi bi-cart-check-fill ms-3"></i>{ } { } { } { } { }
            <i class="bi bi-heart-fill ms-4"></i> 
        </p>
        </div>
      </div>
    </div>
  );
};

export default Header;