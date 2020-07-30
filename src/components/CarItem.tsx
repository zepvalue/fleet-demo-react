import React, { FC, useState, Fragment } from "react";
import { ICar } from "../interfaces/car_interface";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DetailsDialog from "./DetailsDialog";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

interface ICarProps {
  car: ICar;
}

const CarItem: FC<ICarProps> = ({ car }) => {
  const [open, setOpen] = useState(false);
  // console.log("car", car);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  const {
    name,
    vin,
    make,
    model,
    year,
    fuelType,
    type,
    odometer,
    Position,
    fuel,
    battery,
  } = car;

  return (
    <Fragment>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Car Preview"
            height="140"
            image="https://i2.wp.com/blog.alexdevero.com/wp-content/uploads/2019/11/how-to-build-a-todo-list-app-with-react-hooks-and-typescript.jpg"
            title="Car Preview"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {vin}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {make}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {model}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {year}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {fuelType}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {type}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {odometer}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {fuel}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {battery}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Delete
          </Button>
          <Button size="small" color="primary" onClick={handleClickOpen}>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <DetailsDialog handleClose={handleClose} open={open} car={car} />
    </Fragment>
  );
};

export default CarItem;
