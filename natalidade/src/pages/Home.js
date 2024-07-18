import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useNavigate } from "react-router-dom";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

const states = [
  { id: 12, label: "AC", name: "Acre", coords: [-9.0238, -70.811] },
  { id: 27, label: "AL", name: "Alagoas", coords: [-9.5713, -36.782] },
  { id: 16, label: "AP", name: "Amapá", coords: [0.902, -52.003] },
  { id: 13, label: "AM", name: "Amazonas", coords: [-3.4168, -65.8561] },
  { id: 29, label: "BA", name: "Bahia", coords: [-12.5797, -41.7007] },
  { id: 23, label: "CE", name: "Ceará", coords: [-5.4984, -39.3206] },
  { id: 32, label: "ES", name: "Espírito Santo", coords: [-19.1834, -40.3089] },
  { id: 52, label: "GO", name: "Goiás", coords: [-15.827, -49.8362] },
  { id: 21, label: "MA", name: "Maranhão", coords: [-4.9609, -45.2744] },
  { id: 51, label: "MT", name: "Mato Grosso", coords: [-12.6819, -56.9211] },
  {
    id: 50,
    label: "MS",
    name: "Mato Grosso do Sul",
    coords: [-20.7722, -54.7852],
  },
  { id: 31, label: "MG", name: "Minas Gerais", coords: [-18.5122, -44.555] },
  { id: 15, label: "PA", name: "Pará", coords: [-3.4168, -52.9921] },
  { id: 25, label: "PB", name: "Paraíba", coords: [-7.2399, -36.7819] },
  { id: 41, label: "PR", name: "Paraná", coords: [-24.587, -51.6654] },
  { id: 26, label: "PE", name: "Pernambuco", coords: [-8.8137, -36.9541] },
  { id: 22, label: "PI", name: "Piauí", coords: [-7.7183, -42.7289] },
  { id: 33, label: "RJ", name: "Rio de Janeiro", coords: [-22.9068, -43.1729] },
  {
    id: 24,
    label: "RN",
    name: "Rio Grande do Norte",
    coords: [-5.7945, -36.354],
  },
  {
    id: 43,
    label: "RS",
    name: "Rio Grande do Sul",
    coords: [-30.0346, -51.2177],
  },
  { id: 11, label: "RO", name: "Rondônia", coords: [-11.5057, -63.5806] },
  { id: 14, label: "RR", name: "Roraima", coords: [2.7376, -62.0751] },
  { id: 42, label: "SC", name: "Santa Catarina", coords: [-27.2423, -50.2189] },
  { id: 35, label: "SP", name: "São Paulo", coords: [-23.5505, -46.6333] },
  { id: 28, label: "SE", name: "Sergipe", coords: [-10.5741, -37.3857] },
  { id: 17, label: "TO", name: "Tocantins", coords: [-9.4637, -48.3966] },
];

const customIcon = new L.Icon({
  iconUrl: "pontoIcon",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "pontoIcon", // URL da sombra do ícone
  shadowSize: [41, 41], // Tamanho da sombra
  shadowAnchor: [12, 41], // Ponto de ancoragem da sombra
});

const Home = () => {
  const navigate = useNavigate();
  const [mapCenter, setMapCenter] = useState([-14.235, -51.9253]);
  const [mapZoom, setMapZoom] = useState(4.5);

  const handleButtonClick = (state) => {
    console.log("handleButtonClick", state);
    navigate("/dashboard", { state });
  };

  return (
    <div className="ml-56 mb-2">
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {states.map((state) => (
          <Marker key={state.id} position={state.coords} icon={customIcon}>
            <Popup>
              <div className="grid grid-rows-2 gap-2">
                <div className="font-semibold text-gray-800 p-4 bg-gray-100 rounded shadow-md">
                  {state.name}
                </div>
                <button
                  onClick={() => handleButtonClick(state)}
                  className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 transition duration-300"
                >
                  {state.label} Dashboard
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Home;
