import React from "react";
import Navbar from "./Navbar";
import { Button } from "@mui/material";
import styles from "./Header.module.css";

function jumpToPackages() {
  let packagesId = "Packages";
  let packages = document.getElementById(packagesId);
  packages.scrollIntoView({ behavior: "smooth" });
}

function Header(props) {
  const scrollToSection = props.scrollToSection;
  return (
    <div className={styles.Header} id="Header">
      <Navbar scrollToSection={scrollToSection} />
      <div className={styles.headMain}>
        <div className={styles.headbox}>
          <h1 className={styles.headline}>
            Best Internet Service Provider in Pakistan
          </h1>
          <p className={styles.subheading}>
            Full speed, low ping and 24/7 support
          </p>
          <Button
            variant="contained"
            color="info"
            sx={{
              padding: "10px 16px",
              textTransform: "none",
              fontSize: "20px",
              borderRadius: "5px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            }}
            onClick={jumpToPackages}
          >
            Packages
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Header;
