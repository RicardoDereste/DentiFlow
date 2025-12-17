import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Book Now", path: "/contact" },
  ];

  const contactInfo = {
    phone: "+44 99 9999 9999",
    email: "info@dentiflow.com",
    address: "123 Strand, London, United Kingdom",
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* 1. Branding & Social Links */}
        <div className={styles.footerBrand}>
          <Link to="/" className={styles.footerLogo}>
            DentiFlow
          </Link>
          <p className={styles.missionText}>
            Dedicated to gentle care and brighter smiles in London. Join our
            family for a lifetime of dental health.
          </p>
          <div className={styles.socialIcons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>

        {/* 2. Quick Links */}
        <div className={styles.footerLinks}>
          <h3 className={styles.footerTitle}>Quick Links</h3>
          <ul className={styles.linkList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className={styles.linkItem}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Contact Information */}
        <div className={styles.footerContact}>
          <h3 className={styles.footerTitle}>Contact Us</h3>
          <p className={styles.contactItem}>
            <i className="fa-solid fa-phone"></i>
            <a href={`tel:${contactInfo.phone}`} className={styles.linkItem}>
              {contactInfo.phone}
            </a>
          </p>
          <p className={styles.contactItem}>
            <i className="fa-solid fa-envelope"></i>
            <a href={`mailto:${contactInfo.email}`} className={styles.linkItem}>
              {contactInfo.email}
            </a>
          </p>
          <p className={styles.contactItem}>
            <i className="fa-solid fa-location-dot"></i>
            <span>{contactInfo.address}</span>
          </p>
        </div>
      </div>

      {/* 4. Copyright and Legal Section */}
      <div className={styles.footerBottom}>
        <p>
          © {new Date().getFullYear()} DentiFlow Clinic. All rights reserved.
        </p>
        <div className={styles.legalLinks}>
          <Link to="/privacy" className={styles.legalItem}>
            Privacy Policy
          </Link>
          <Link to="/terms" className={styles.legalItem}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
