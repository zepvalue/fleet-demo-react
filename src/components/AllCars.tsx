import React, { FC, useEffect, useState, Fragment } from "react";
import axios from "axios";
import CarItem from "./CarItem";
import { ICar } from "../interfaces/car_interface";

const AllCars: FC = () => {
  const [cars, setCars] = useState<ICar[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/cars")
      .then((req) => {
        const iCarArr = req.data.cars.Items as ICar[];

        setCars(iCarArr);
      })
      .catch((err) => console.error(err));
  }, []);

  const carsArr: ICar[] = cars.map((car, index) => (
    <CarItem key={index} name={car.name} />
  ));
  console.log("State cars", cars);

  return (
    <Fragment>
      <h1>Cars</h1>
      {carsArr}
    </Fragment>
  );
};

export default AllCars;
