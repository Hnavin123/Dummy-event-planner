import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* <header>
        <div className="container header-flex header">
          <div className="company-logo">
            <img
              src="https://jaiswalevents.in/wp-content/uploads/2025/02/jaiswal-event-logo-1.png"
              alt="Company Logo"
            />
          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <div className={`main-menu ${menuOpen ? 'show' : ''}`}>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/venues">Venue</a></li>
              <li><a href="/vendors">Vendor</a></li>
              <li><a href="/photos">Photos</a></li>
              <li><a href="/e-invite">E-Invite</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </header> */}



      <header className="header">
  <div className="container header-flex">
    <div className="company-logo">
      <img
        src="https://jaiswalevents.in/wp-content/uploads/2025/02/jaiswal-event-logo-1.png"
        alt="Company Logo"
      />
    </div>

    <button
      className="hamburger"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ☰
    </button>
  </div>

  <div className={`main-menu ${menuOpen ? 'show' : ''}`}>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/venues">Venue</a></li>
      <li><a href="/vendors">Vendor</a></li>
      <li><a href="/photos">Photos</a></li>
      <li><a href="/e-invite">E-Invite</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
</header>

    </>
  );
};

export default Navbar;
