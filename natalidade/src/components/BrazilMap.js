import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import brazilTopoJson from "./brazilStatesTopoJson.json";

const BrazilMap = ({ onStateClick, selectedState }) => {
  const [hoveredState, setHoveredState] = useState("");

  const handleStateClick = (geo) => {
    const stateName = geo.properties.name;
    onStateClick(stateName);
  };

  const handleStateHover = (geo) => {
    const stateName = geo.properties.name;
    setHoveredState(stateName);
  };

  const handleStateLeave = () => {
    setHoveredState("");
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-50 p-4">
      <div className="text-lg h-10 font-semibold text-gray-800 mb-4">
        {hoveredState && `Estado: ${hoveredState}`}
      </div>
      <ComposableMap
        projection="geoMercator"
        className="w-full h-full border border-gray-300 rounded-lg shadow-lg"
      >
        <Geographies geography={brazilTopoJson}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => handleStateClick(geo)}
                onMouseEnter={() => handleStateHover(geo)}
                onMouseLeave={handleStateLeave}
                style={{
                  default: {
                    fill:
                      selectedState === geo.properties.name
                        ? "#F97316"
                        : "#9dc9ea",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F59E0B",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#F97316",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default BrazilMap;
