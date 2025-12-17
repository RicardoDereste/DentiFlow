import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./NavMenu.module.css";
import Button from "../Button/Button";

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "FAQ", path: "/faq" },
  ];

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  const lineClasses = (isMenuOpen) =>
    `${isMenuOpen ? styles.hamburgerLineOpen : ""} ${
      isMenuOpen ? styles.hamburgerLineOpenColor : ""
    }`;

  return (
    <header className={styles.navHeader}>
      <div className={styles.navContainer}>
        {/* Logo/Branding */}
        <Link to="/" className={styles.logo} onClick={handleNavLinkClick}>
          DentiFlow
        </Link>

        {/* --- 1. Desktop Links --- */}
        <nav className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link to="/contact">
            <Button variant="primary" size="small">
              Book Now
            </Button>
          </Link>
        </nav>

        {/* --- 2. Hamburger Button (Mobile) --- */}
        <button
          className={`${styles.hamburgerButton} ${
            isMenuOpen ? styles.menuOpenScale : ""
          }`} /* FIX: Added scaling class */
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {/* Line 1 */}
          <span
            className={`${styles.hamburgerLine} ${lineClasses(isMenuOpen)}`}
          />
          {/* Line 2 */}
          <span
            className={`${styles.hamburgerLine} ${lineClasses(isMenuOpen)}`}
          />
          {/* Line 3 */}
          <span
            className={`${styles.hamburgerLine} ${lineClasses(isMenuOpen)}`}
          />
        </button>
      </div>

      {/* --- 3. Mobile Menu Overlay --- */}
      <nav
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ""}`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? `${styles.mobileLink} ${styles.activeLink}`
                : styles.mobileLink
            }
            onClick={handleNavLinkClick}
          >
            {link.name}
          </NavLink>
        ))}

        <div className={styles.mobileCta}>
          <Link to="/contact" onClick={handleNavLinkClick}>
            <Button variant="primary" size="large">
              Book an Appointment
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavMenu;
