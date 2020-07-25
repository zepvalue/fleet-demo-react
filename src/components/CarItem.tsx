import React, { SFC } from "react";
import { ICar } from "../interfaces/car_interface";

const CarItem: SFC<ICar> = ({
  id,
  name,
  vin,
  make,
  model,
  year,
  fuelType,
  type,
  Position,
  odometer,
  fuel,
  battery,
}) => {
  return (
    <div>
      <div>{name}</div>
    </div>
  );
};

export default CarItem;
