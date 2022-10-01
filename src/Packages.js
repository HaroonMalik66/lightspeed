import React from "react";
import { Paper, Grid, Card, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import styles from "./Packages.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Packages() {
  return (
    <div className={styles.Packages} id="Packages">
      <Box sx={{ flexGrow: 1 }}>
        <h1 className={styles.heading}>Monthly Packages</h1>
        <Grid container spacing={8} justifyContent="center">
          <Grid item xs={8} sm={5} md={5} lg={3}>
            <Item
              sx={{
                boxShadow:
                  "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
              }}
            >
              <Card variant="outlined" elevation={2}>
                <h2 className={styles.speed} style={{ color: "#5E70B2" }}>
                  10
                </h2>
                <h3 className={styles.mbps}>Mbps</h3>
                <p className={styles.divider}>-</p>
                <div className={styles.pkgcontainer}>
                  <ul className={styles.pkgdetails}>
                    <li>Download: 10 Mpbs</li>
                    <li>Upload: 10 Mpbs</li>
                    <li>Data: Unlimited</li>
                    <li>Validity: 1 month</li>
                  </ul>
                </div>
                <h4 className={styles.price}>Rs: 1500/-</h4>
                <Button
                  variant="contained"
                  color="info"
                  sx={{
                    mb: "2rem",
                    fontSize: "1rem",
                    borderRadius: "5px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                  }}
                >
                  Subscribe
                </Button>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={8} sm={5} md={5} lg={3}>
            <Item
              sx={{
                boxShadow:
                  "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
              }}
            >
              <Card variant="outlined">
                <h2 className={styles.speed} style={{ color: "#00C6D2" }}>
                  15
                </h2>
                <h3 className={styles.mbps}>Mbps</h3>
                <p className={styles.divider}>-</p>
                <div className={styles.pkgcontainer}>
                  <ul className={styles.pkgdetails}>
                    <li>Download: 15 Mpbs</li>
                    <li>Upload: 15 Mpbs</li>
                    <li>Data: Unlimited</li>
                    <li>Validity: 1 month</li>
                  </ul>
                </div>
                <h4 className={styles.price}>Rs: 2000/-</h4>
                <Button
                  variant="contained"
                  color="info"
                  sx={{
                    mb: "2rem",
                    fontSize: "1rem",
                    borderRadius: "5px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                  }}
                >
                  Subscribe
                </Button>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={8} sm={5} md={5} lg={3}>
            <Item
              sx={{
                boxShadow:
                  "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
              }}
            >
              <Card variant="outlined">
                <h2 className={styles.speed} style={{ color: "#00CD52" }}>
                  30
                </h2>
                <h3 className={styles.mbps}>Mbps</h3>
                <p className={styles.divider}>-</p>
                <div className={styles.pkgcontainer}>
                  <ul className={styles.pkgdetails}>
                    <li>Download: 30 Mpbs</li>
                    <li>Upload: 30 Mpbs</li>
                    <li>Data: Unlimited</li>
                    <li>Validity: 1 month</li>
                  </ul>
                </div>
                <h4 className={styles.price}>Rs: 3000/-</h4>
                <Button
                  variant="contained"
                  color="info"
                  sx={{
                    mb: "2rem",
                    fontSize: "1rem",
                    borderRadius: "5px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                  }}
                >
                  Subscribe
                </Button>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default Packages;
