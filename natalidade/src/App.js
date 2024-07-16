// src/Map.js
import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import brazilGeo from "./brazilGeo.json";

const Map = () => {
  return (
    <div>
      <MapContainer
        center={[-14.235, -51.9253]}
        zoom={4}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON data={brazilGeo} />
      </MapContainer>
    </div>
  );
};

export default Map;
