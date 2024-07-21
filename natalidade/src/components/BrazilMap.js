import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import brazilTopoJson from "./brazilStatesTopoJson.json";

const BrazilMap = ({ onStateClick }) => {
  const handleStateClick = (geo) => {
    const stateName = geo.properties.name;
    onStateClick(stateName);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <ComposableMap
        projection="geoMercator"
        className="w-full h-full border border-gray-300 shadow-lg"
      >
        <Geographies geography={brazilTopoJson}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => handleStateClick(geo)}
                className="cursor-pointer"
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
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
