import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/IT-Solera.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.pageYOffset > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("no-scroll", !isOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src={Logo} alt="IT Solera" className="logo-img" />
        </Link>

        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <div className="nav-links">
            <Link to="/" onClick={toggleMenu} className="nav-link">
              Home
            </Link>
            <Link to="/services" onClick={toggleMenu} className="nav-link">
              Services
            </Link>
            <Link to="/about" onClick={toggleMenu} className="nav-link">
              About
            </Link>
            <Link to="/contact" onClick={toggleMenu} className="nav-link">
              Contact
            </Link>
          </div>
        </div>

        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Navigation menu"
        >
          <div className="hamburger-container">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
