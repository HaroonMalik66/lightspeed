import React from "react";
import styles from "./Footer.module.css";

function Footer(props) {
  const scrollToSection = props.scrollToSection;
  return (
    <div className={styles.Footer}>
      <div className={styles.container}>
        <ul className={styles.footbar}>
          <li
            onClick={() => {
              scrollToSection("Home");
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              scrollToSection("Pricing");
            }}
          >
            Pricing
          </li>
          <li
            onClick={() => {
              scrollToSection("About");
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              scrollToSection("Contact");
            }}
          >
            Contact
          </li>
        </ul>
        <hr />
        <p className={styles.footerText}>
          copyright (c) 2022. All rights reserved
        </p>
        <small>
          *Note: This website doesn't belong to a real ISP. it's just a practice
          project created by Haroon Ahmed (haroonmalik4219855@gmail.com).
        </small>
      </div>
    </div>
  );
}
export default Footer;
