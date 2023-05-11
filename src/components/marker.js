import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
const CustomMarker = (props) => {
  let { position, name, status } = props;
  //  position =[25.18933660085513, 55.297072471775266]
  if (props != undefined) {
    position = [position[0], position[1]];
  }

  const ConvertText = (data) => {
    let final = data.split("-").join(" ");
    return final;
  };

  const customIcon = L.icon({
    iconUrl: require(`../images/${status}.svg`),
    iconSize: [80, 80],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });
  return (
    <Marker position={position} icon={customIcon} autoPanOnFocus={true}>
      <Popup autoClose={true}>
        <div style={{ textTransform: "capitalize" }}>
          Status:{ConvertText(status)}
        </div>
      </Popup>
    </Marker>
  );
};

export default CustomMarker;
