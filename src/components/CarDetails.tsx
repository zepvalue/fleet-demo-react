import React, { SFC } from "react";
import { ICar } from "../interfaces/car_interface";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MapSection from "./MapSection";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

interface ICarProps {
  car: ICar;
}

const CarDetails: SFC<ICarProps> = ({ car }) => {
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

  const classes = useStyles();
  return (
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
          {/* <MapSection lat={Position.lat} lng={Position.lng} /> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Delete
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => console.log("card")}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CarDetails;
