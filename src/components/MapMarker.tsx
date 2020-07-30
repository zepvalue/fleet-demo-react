import React, { SFC } from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";

interface MapMarkerProps {
  lat?: number;
  lng?: number;
  address?: string;
  color?: string;
  name?: string;
}

const MapMarker: SFC<MapMarkerProps> = ({ lat, lng, address, color, name }) => (
  <div className="pin">
    <LocationOnIcon color="primary" />
    <p className="pin-text">{"ADDRESS"}</p>
    <div
      className="marker"
      style={{ backgroundColor: color, cursor: "pointer" }}
      title={name}
    />
  </div>
);

export default MapMarker;
