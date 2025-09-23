import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../contexts/ThemeContext";

import eduImgWhite from "../../assets/svg/education/eduImgWhite.svg";
import eduImgBlack from "../../assets/svg/education/eduImgBlack.svg";
import "./Education.css";

function EducationCard({ id, institution, course, startYear, endYear }) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    educationCard: {
      backgroundColor: theme.primary,
      "&:hover": {
        backgroundColor: theme.tertiary80,
      },
    },
  }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <div key={id} className={`education-card ${classes.educationCard}`}>
        <div className="educard-img" style={{ backgroundColor: theme.primary }}>
          <img
            src={theme.type === "light" ? eduImgWhite : eduImgBlack}
            alt=""
          />
        </div>
        <div className="education-details">
          <h6 style={{ color: theme.textPrimary }}>
            {startYear}-{endYear}
          </h6>
          <h4 style={{ color: theme.textPrimary }}>{course}</h4>
          <h5 style={{ color: theme.textPrimary, whiteSpace: "pre" }}>
            {institution}
          </h5>
        </div>
      </div>
    </Fade>
  );
}

export default EducationCard;
