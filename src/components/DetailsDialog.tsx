import React, { SFC } from "react";
import { IDialogProps } from "../interfaces/dialog_interface";
import { ICar } from "../interfaces/car_interface";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import MapSection from "./MapSection";
import Button from "@material-ui/core/Button";

const handleAddCar = (car: ICar) => {
  console.log("handleAddCar -> car", car);
};

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

interface IDetailsDialogProps extends IDialogProps, ICar {
  car?: ICar;
}

const DetailsDialog: SFC<IDetailsDialogProps> = ({
  handleClose,
  open,
  car,
}) => {
  const classes = useStyles();
  console.log("car", car);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Car Details</DialogTitle>
      <DialogContent>
        <DialogContentText>Car Details</DialogContentText>
        <Typography gutterBottom variant="h5" component="h2">
          {car?.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {car?.vin}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {car?.make}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {car?.model}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {car?.year}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {car?.fuelType}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {car?.type}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {car?.odometer}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {car?.fuel}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {car?.battery}
        </Typography>
        <MapSection />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailsDialog;
