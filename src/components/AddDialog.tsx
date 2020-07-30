import React, { SFC } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ICar } from "../interfaces/car_interface";

interface IDialogProps {
  handleClose: () => void;
  open: boolean;
}

const handleAddCar = (car: ICar) => {
  console.log("handleAddCar -> car", car);
};

const AddDialog: SFC<IDialogProps> = ({ handleClose, open }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add a car</DialogTitle>
      <DialogContent>
        <DialogContentText>Please add a car to the fleet</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="name"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="vin"
          label="vin"
          type="email"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="make"
          label="make"
          type="email"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="model"
          label="model"
          type="email"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="year"
          label="year"
          type="email"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="fuelType"
          label="fuelType"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="type"
          label="type"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="odometer"
          label="odometer"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="fuel"
          label="fuel"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="battery"
          label="battery"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <span>
          <Button onClick={(car) => handleAddCar(car)} color="primary">
            Add
          </Button>
        </span>
      </DialogActions>
    </Dialog>
  );
};

export default AddDialog;
