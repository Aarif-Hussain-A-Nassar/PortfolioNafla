import React, { useContext, useState } from "react";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import isEmail from "validator/lib/isEmail";
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import { FiAtSign, FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";

import { ThemeContext } from "../../contexts/ThemeContext";
import { socialsData } from "../../data/socialsData";
import { contactsData } from "../../data/contactsData";
import "./Contacts.css";
import axios from "axios";

function Contacts() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const { theme } = useContext(ThemeContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const useStyles = makeStyles(() => ({
    input: {
      border: `4px solid ${theme.tertiary}`,
      backgroundColor: `${theme.primary}`,
      color: `${theme.secondary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 500,
      transition: "border 0.2s ease-in-out",
      "&:focus": {
        border: `4px solid ${theme.tertiary}`,
      },
    },
    message: {
      border: `4px solid ${theme.tertiary}`,
      backgroundColor: `${theme.primary}`,
      color: `${theme.secondary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 500,
      transition: "border 0.2s ease-in-out",
      "&:focus": {
        border: `4px solid ${theme.tertiary}`,
      },
    },
    label: {
      backgroundColor: `${theme.primary}`,
      color: `${theme.secondary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 600,
      fontSize: "0.9rem",
      padding: "0 5px",
      transform: "translate(25px,50%)",
      display: "inline-flex",
    },
    socialIcon: {
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "21px",
      backgroundColor: theme.secondary,
      color: theme.primary,
      transition: "250ms ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
        color: theme.primary,
        backgroundColor: theme.textPrimary,
      },
    },
    detailsIcon: {
      backgroundColor: theme.secondary,
      color: theme.primary,
      borderRadius: "50%",
      width: "45px",
      height: "45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "23px",
      transition: "250ms ease-in-out",
      flexShrink: 0,
      "&:hover": {
        transform: "scale(1.1)",
        color: theme.primary,
        backgroundColor: theme.textPrimary,
      },
    },
    submitBtn: {
      backgroundColor: theme.secondary,
      color: theme.primary,
      transition: "250ms ease-in-out",
      "&:hover": {
        transform: "scale(1.08)",
        color: theme.primary,
        backgroundColor: theme.textPrimary,
      },
    },
  }));

  const classes = useStyles();

  const handleContactForm = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrMsg("Please fill all fields");
      setOpen(true);
      return;
    }
    if (!isEmail(email)) {
      setErrMsg("Invalid email");
      setOpen(true);
      return;
    }

    const responseData = {
      name,
      email,
      message,
      _replyto: email, // tells Formspree where to reply
    };

    axios
      .post(contactsData.sheetAPI, responseData)
      .then(() => {
        setSuccess(true);
        setErrMsg("");
        setName("");
        setEmail("");
        setMessage("");
        setOpen(false);
      })
      .catch(() => {
        setErrMsg("Failed to send message. Try again.");
        setOpen(true);
      });
  };

  return (
    <div className="contacts" id="contacts" style={{ backgroundColor: theme.primary }}>
      <div className="contacts--container">
        <h1 style={{ color: theme.secondary }}>Contacts</h1>
        <div className="contacts-body">
          <div className="contacts-form">
            <form onSubmit={handleContactForm}>
              <div className="input-container">
                <label htmlFor="Name" className={classes.label}>Name</label>
                <input
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="Name"
                  className={`form-input ${classes.input}`}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Email" className={classes.label}>Email</label>
                <input
                  placeholder="John@doe.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="Email"
                  className={`form-input ${classes.input}`}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Message" className={classes.label}>Message</label>
                <textarea
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  name="Message"
                  className={`form-message ${classes.message}`}
                />
              </div>

              <div className="submit-btn">
                <button type="submit" className={classes.submitBtn}>
                  <p>{!success ? "Send" : "Sent"}</p>
                  <div className="submit-icon">
                    <AiOutlineSend
                      className="send-icon"
                      style={{
                        animation: !success ? "initial" : "fly 0.8s linear both",
                        position: success ? "absolute" : "initial",
                      }}
                    />
                    <AiOutlineCheckCircle
                      className="success-icon"
                      style={{
                        display: !success ? "none" : "inline-flex",
                        opacity: !success ? "0" : "1",
                      }}
                    />
                  </div>
                </button>
              </div>
            </form>

            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={open}
              autoHideDuration={4000}
              onClose={handleClose}
            >
              <SnackbarContent
                action={
                  <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                }
                style={{
                  backgroundColor: theme.secondary,
                  color: theme.primary,
                  fontFamily: "var(--primaryFont)",
                }}
                message={errMsg}
              />
            </Snackbar>
          </div>

          <div className="contacts-details">
            <a href={`mailto:${contactsData.email}`} className="personal-details">
              <div className={classes.detailsIcon}><FiAtSign /></div>
              <p style={{ color: theme.secondary }}>{contactsData.email}</p>
            </a>
            <div className="personal-details">
              <div className={classes.detailsIcon}><HiOutlineLocationMarker /></div>
              <p style={{ color: theme.secondary }}>{contactsData.address}</p>
            </div>

            <div className="socialmedia-icons">
              {socialsData.github && <a href={socialsData.github} target="_blank" rel="noreferrer" className={classes.socialIcon}><FaGithub /></a>}
              {socialsData.linkedIn && <a href={socialsData.linkedIn} target="_blank" rel="noreferrer" className={classes.socialIcon}><FaLinkedinIn /></a>}
              {socialsData.instagram && <a href={socialsData.instagram} target="_blank" rel="noreferrer" className={classes.socialIcon}><FaInstagram /></a>}
              {socialsData.email && <a href={`mailto:${socialsData.email}`} className={classes.socialIcon}><FaEnvelope /></a>}
            </div>
          </div>
        </div>
      </div>
      <img src={theme.contactsimg} alt="contacts" className="contacts--img" />
    </div>
  );
}

export default Contacts;
