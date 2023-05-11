import React from "react";
import Link from 'next/link';
import { useRouter } from "next/router";

const Header = () => {

  const router = useRouter();


  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          CoderBlogs
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className={router.pathname === '/' ? 'active' : ''}>
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className={router.pathname === '/about' ? 'active' : ''}>
              <Link className="nav-link" href="/about">
                About Us
              </Link>
            </li> 
            <li className={router.pathname === '/service' ? 'active' : ''}>
              <Link className="nav-link" href="/service">
                Services
              </Link>
            </li>            
            <li className={router.pathname === '/contact' ? 'active' : ''}>
              <Link className="nav-link" href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
