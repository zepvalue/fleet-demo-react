import React, { FC, useEffect, useState, Fragment } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import CarItem from "./CarItem";
import { ICar } from "../interfaces/car_interface";
import AddDialog from "./AddDialog";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const AllCars: FC = () => {
  const [cars, setCars] = useState<ICar[]>([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3000/cars")
      .then((req) => {
        const iCarArr = req.data.cars.Items as ICar[];

        setCars(iCarArr);
      })
      .catch((err) => console.error(err));
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: "none",
    },
    title: {
      flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
    },
    fixedHeight: {
      height: 240,
    },
  }));

  const carsArr: ICar[] = cars.map((car, index) => (
    <CarItem key={index} car={car} />
  ));
  // console.log("State cars", cars);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="absolute">
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Car Fleet
          </Typography>
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid container item xs={12} spacing={3}>
              {carsArr}
            </Grid>
          </Grid>
        </Container>
      </main>

      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Car
      </Button>

      <AddDialog handleClose={handleClose} open={open} />
    </Fragment>
  );
};

export default AllCars;
