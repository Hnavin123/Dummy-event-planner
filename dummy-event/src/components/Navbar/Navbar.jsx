import { Link } from "react-router-dom";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import "./Navbar.css";

// const Navbar = () =>
  
//   {
//     const [showMenu, setShowMenu] = React.useState(false);
//     const handleButtonToggle = () => {
//       setShowMenu(!showMenu);
//     };
//     return (

      //       <ul className="flex gap-6 text-gray-700 font-medium text-xl">
      //         <li><Link to='/venues'>Venue</Link></li>
      //         <li><Link to='/vendors'>Vendor</Link></li>
      //         <li><Link to='/photos'>Photo</Link></li>
      //         <li><Link to='/e-invite'>E-Invite</Link></li>
      //         <li><Link to='/about'>About</Link></li>
      //         <li><Link to='/contact'>Contact</Link></li>
      //       </ul>
      //     </div>
      // </nav>

    //   <header>
    //     <div className="container">
    //       <div className="grid navbar-grid ">
    //         <div className="logo">
    //           <h1>Event Planner</h1>
    //         </div>
            {/* <nav className={showMenu ? "menu-mobile" : "menu-web"}> */}

{/*             
            <nav className="main-menu">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/venues">Venue</a>
                </li>
                <li>
                  <a href="/vendors">Vendor</a>
                </li>
                <li>
                  <a href="/photos">Photo</a>
                </li>
                <li>
                  <a href="/e-invite">E-Invite</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="ham-menu">
              <button onClick={handleButtonToggle}>
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  };

export default Navbar; */}














const Navbar = () => {
  return (
    <>
      <header>
        <div className="container header-flex">
          <div className="company-logo">
            <img
              src="https://jaiswalevents.in/wp-content/uploads/2025/02/jaiswal-event-logo-1.png"
              alt="Company Logo"
            />
          </div>
          <div className="main-menu">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/venues">Venue</a>
              </li>
              <li>
                <a href="/vendors">Vendor</a>
              </li>
              <li>
                <a href="/photos">Photos</a>
              </li>
              <li>
                <a href="/e-invite">E-Invite</a>
              </li>
               <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
            </ul>
          </div>
        </div>
      </header>

      <section className="banner-section">
        <div className="banner-content container">
          {/* <h1>Premier Event Management Company in Kolkata</h1> */}
        </div>
      </section>
    </>
  );
};

export default Navbar;