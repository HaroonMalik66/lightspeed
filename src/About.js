import React from "react";
import { Grid } from "@mui/material";
import logo from "./assets/images/logo.png";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.About} id="About">
      <div className={styles.aboutBox}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <div className={styles.item}>
              <img src={logo} alt="LightSpeed logo" className={styles.logo} />
              <h1 className={styles.Heading}>
                Providing Internet to thousand of customers since 2005
              </h1>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={styles.item}>
              <h2 className={styles.title}>About LightSpeed Internet</h2>
              <p className={styles.text}>
                Light Speed was introduced in 2005 since then we are serving the
                society.
              </p>
              <p className={styles.text}>
                Our aim is to make sure that internet is accessible for everyone
                in affordable price. thousands of customers including students
                to big companies are using our services and are 100% satisfied
              </p>
              <h2 className={styles.title}>Features</h2>
              <ul className={styles.text}>
                <li>Full Speed</li>
                <li>Low Ping best for gaming</li>
                <li>24/7 costomer support</li>
                <li>Packages for different price segments</li>
                <li>Competetive Prices</li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default About;
