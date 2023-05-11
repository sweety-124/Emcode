import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

import CustomMarker from "./marker";
import {
  getVehiclesAction,
  updateToggleSidebar,
} from "../Store/actions/vehiclesAction";
import { useDispatch, useSelector } from "react-redux";
import {
  vehicleSelect,
  sideBarView,
  choosenVehicleFromLists,
} from "../Store/selectors/VehicleSelector";
import L from "leaflet";
import Sidebar from "react-sidebar";
import SidebarContent from "./sideBar";
import { FaBars, FaArrowLeft } from "react-icons/fa";
const HYBRID_MAP_URL = "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}";

export default function MapView() {
  const dispatch = useDispatch();
  const [map, setMap] = useState();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mapRef = useRef();
  // const maps = useMap();
  const listVehicle = useSelector(vehicleSelect);
  const sidebarValue = useSelector(sideBarView);
  const choosenVehicleFromList = useSelector(choosenVehicleFromLists);
  useEffect(() => {
    dispatch(getVehiclesAction());
  }, []);
  function ChangeView({ center, zoom }) {
    const map = useMap();

    if (choosenVehicleFromList.lat != undefined) {
      const latngs = L.latLng(
        choosenVehicleFromList.lat,
        choosenVehicleFromList.lang
      );
      map.flyTo(latngs, 18);
    }
    return null;
  }

  useEffect(() => {
    if (sidebarValue == false) {
      setSidebarOpen(false);
    }
  }, [sidebarValue]);

  const toggleSidebar = () => {
    if (sidebarOpen == true) {
      dispatch(updateToggleSidebar(true));
      setSidebarOpen(false);
    } else {
      dispatch(updateToggleSidebar(true));
      setSidebarOpen(true);
    }
  };

  return (
    <div>
      <Sidebar
        sidebar={<SidebarContent listVehicle={listVehicle} />}
        open={sidebarValue}
        onSetOpen={toggleSidebar}
        styles={{ sidebar: { background: "white", width: 300 } }}
        docked={sidebarOpen}
      >
        <MapContainer
          style={{ width: "100%", height: "100vh" }}
          zoom={16}
          attributionControl={false}
          center={[25.18933660085513, 55.297072471775266]}
          scrollWheelZoom={true}
          fadeAnimation={true}
          markerZoomAnimation={true}
          whenReady={(mapInt) => {
            mapRef.current = mapInt;
            setMap(mapInt);
          }}
        >
          <ChangeView
            center={[25.18933660085513, 55.297072471775266]}
            zoom={18}
          />
          <TileLayer
            attribution={"location based intelligence system"}
            url={HYBRID_MAP_URL}
          />
          <button className="toggleButton" onClick={toggleSidebar}>
            <FaArrowLeft color="#0000007a" />
          </button>
          {listVehicle?.vehicles?.map((data) => (
            <CustomMarker
              key={data.id}
              name={data.name}
              status={data.status}
              position={[data.lat, data.lang]}
            />
          ))}
        </MapContainer>
      </Sidebar>
    </div>
  );
}
