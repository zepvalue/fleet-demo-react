import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

const MapSection = (props: any) => {
  const [center, setCenter] = useState({ lat: 11.0168, lng: 76.9558 });
  const [zoom, setZoom] = useState(11);
  return (
    <div style={{ height: "100vh", width: "100vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA7DeEBPtJLXbet5rlRWePU-9Im2T9v_J0" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <MapMarker lat={11.0168} lng={76.9558} address="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default MapSection;
