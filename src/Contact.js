import React from "react";
import { Button, TextField } from "@mui/material";
import contactIcon from "./assets/icons/contact.png";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.Contact} id="Contact">
      <form>
        <img src={contactIcon} alt="contact Icon" />
        <h1 className={styles.heading}>Contact Us</h1>
        <TextField
          label="Name"
          id="name"
          required
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          label="Email"
          id="email"
          required
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          label="Your Message"
          id="message"
          required
          variant="outlined"
          margin="normal"
          fullWidth
          multiline
          minRows={3}
          maxRows={5}
        />
        <Button
          variant="outlined"
          sx={{
            width: "100%",
            fontSize: "1.3rem",
            textTransform: "none",
            margin: "1rem",
            "&:hover": {
              background: "#04a3e2",
              color: "white",
              transition: "ease-in 0.3s",
            },
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Contact;
