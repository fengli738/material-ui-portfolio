import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Latest Resume",
    description: `Here is my latest resume`,
    image: project1,
    link: "https://docs.google.com/document/d/1Ilbu-o_8zCXi4SXSgg6ZRRX-eUlmLh6u/edit#heading=h.30j0zll",
  },
  {
    name: "React-Cal",
    description: `a simple calculator app built with React.js`,
    image: project2,
    link: "https://github.com/fengli738/REACT-CAL",
  },
  {
    name: ".Net Calendar with DayPilot API", 
    description: `A .net calendar app with DayPilot API, can create and edit events
    and save to database`,
    image: project3,
    link: "https://github.com/fengli738/.Net_Project_with_Daypilot",
  },
  {
    name: "Acedemic Project shopping system",
    description: `A project use Java and Spring MVC framework, 
    can add, delete, update products, have different user roles`,
    image: project4,
    link: "https://github.com/itmd4515/itmd4515-s22-fp-fengli738",
  },
  {
    name: "NGO project",
    description: `Web Application created by using C# and ASP.NET MVC 
    framework, can upload image, create, edit, delete events, also save to database
    by using Entity Framework database first approach using GearHost for database saftey.
    P.S this is a 2 man project.`,
    image: project5,
    link: "https://github.com/RJSchaber/NGOEvents"
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>     
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" disabled>
                  Large
                </Button>
                <Button size="small" color="primary" disabled= {!project.link} onClick={()=> {window.location.href = project.link}}>
                  Source
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

  );
};

export default Portfolio;
