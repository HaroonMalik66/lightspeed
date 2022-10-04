import React from "react";
import { Button, TextField } from "@mui/material";
import contactIcon from "./assets/icons/contact.png";
import styles from "./Contact.module.css";

function Contact() {
  const [formData, changeFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const updatevalue = (val) => {
    changeFormData({ ...formData, [val.target.name]: val.target.value });
  };
  return (
    <div className={styles.Contact} id="Contact">
      <form>
        <img src={contactIcon} alt="contact Icon" />
        <h1 className={styles.heading}>Contact Us</h1>
        <TextField
          label="Name"
          name="name"
          id="name"
          required
          variant="outlined"
          margin="dense"
          fullWidth
          value={formData.name}
          onChange={(evt) => {
            updatevalue(evt);
          }}
        />
        <TextField
          label="Email"
          name="email"
          id="email"
          type="email"
          required
          variant="outlined"
          margin="dense"
          fullWidth
          value={formData.email}
          onChange={(evt) => {
            updatevalue(evt);
          }}
        />
        <TextField
          label="Your Message"
          name="message"
          id="message"
          required
          variant="outlined"
          margin="normal"
          fullWidth
          multiline
          minRows={3}
          maxRows={5}
          value={formData.message}
          onChange={(evt) => {
            updatevalue(evt);
          }}
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
          onClick={() => {
            if (
              formData.name === "" ||
              formData.email === "" ||
              formData.message === ""
            ) {
              alert("please fill out all fields to submit");
            } else {
              window.alert("Thank you for contacting us.");
              changeFormData({ name: "", email: "", message: "" });
            }
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Contact;
