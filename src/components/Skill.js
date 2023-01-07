import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({

    mainContainer: {
        background: "#233",
        opacity: 0.8
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both"
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase",
    },
    subHeading: {
        color: "#fff",
        padding: 0,
        textTransform: "uppercase",
    },
    body1: {
        color: "tomato",
    },
    subtitle1: {
        color: "tan",
    },
}));

const Skill = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Skill list
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Fronend Tech
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            HTML5, React, CSS, javascript, Angular, Bootstrap.
          </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Backend Tech
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            C#, ASP .NET Core, Spring MVC, Java, JavaScript/Node.js, Python, SQL Server, MySQL
          </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Other Tech
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            GitHub, GitLab, Azure basic and AWS basic, Windows, Linus, JIRA.
            Xunit
            IDE like Visual Studio, Eclipse, Netbeans, VS Code, IntelliJ, PyCharm, Android Studio.
          </Typography>
        </Box>  
      </Box>
    </Box>
  );
};

export default Skill;
