import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Sidebar from "./sidebar";

const states = [
  { name: "Acre", coords: [-9.0238, -70.811] },
  { name: "Alagoas", coords: [-9.5713, -36.782] },
  { name: "Amapá", coords: [0.902, -52.003] },
  { name: "Amazonas", coords: [-3.4168, -65.8561] },
  { name: "Bahia", coords: [-12.5797, -41.7007] },
  { name: "Ceará", coords: [-5.4984, -39.3206] },
  { name: "Espírito Santo", coords: [-19.1834, -40.3089] },
  { name: "Goiás", coords: [-15.827, -49.8362] },
  { name: "Maranhão", coords: [-4.9609, -45.2744] },
  { name: "Mato Grosso", coords: [-12.6819, -56.9211] },
  { name: "Mato Grosso do Sul", coords: [-20.7722, -54.7852] },
  { name: "Minas Gerais", coords: [-18.5122, -44.555] },
  { name: "Pará", coords: [-3.4168, -52.9921] },
  { name: "Paraíba", coords: [-7.2399, -36.7819] },
  { name: "Paraná", coords: [-24.587, -51.6654] },
  { name: "Pernambuco", coords: [-8.8137, -36.9541] },
  { name: "Piauí", coords: [-7.7183, -42.7289] },
  { name: "Rio de Janeiro", coords: [-22.9068, -43.1729] },
  { name: "Rio Grande do Norte", coords: [-5.7945, -36.354] },
  { name: "Rio Grande do Sul", coords: [-30.0346, -51.2177] },
  { name: "Rondônia", coords: [-11.5057, -63.5806] },
  { name: "Roraima", coords: [2.7376, -62.0751] },
  { name: "Santa Catarina", coords: [-27.2423, -50.2189] },
  { name: "São Paulo", coords: [-23.5505, -46.6333] },
  { name: "Sergipe", coords: [-10.5741, -37.3857] },
  { name: "Tocantins", coords: [-9.4637, -48.3966] },
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

const Map = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [mapCenter, setMapCenter] = useState([-14.235, -51.9253]);
  const [mapZoom, setMapZoom] = useState(4.5);

  const handleStateChange = (event) => {
    const selectedName = event.target.value;
    const state = states.find((s) => s.name === selectedName);
    setSelectedState(state);
    if (state) {
      setMapCenter(state.coords);
      setMapZoom(7); // Define o zoom desejado ao selecionar um estado
    } else {
      // Caso não haja estado selecionado, volta ao centro original e ao zoom original
      setMapCenter([-14.235, -51.9253]);
      setMapZoom(4);
    }
  };

  return (
    <div className="ml-56  mb-2">
      <div>
        <Sidebar>
          <div>
            <div className="w-64">
              <label
                htmlFor="opcion"
                className="block text-sm font-medium text-gray-700"
              >
                Escolha um estado
              </label>
              <select
                id="opcion"
                placeholder="Selecione um estado"
                name="opcion"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handleStateChange}
              >
                <option value="">Selecione um estado</option>
                {states.map((state, index) => (
                  <option key={index} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Sidebar>
        <MapContainer
          center={mapCenter}
          zoom={mapZoom}
          style={{ height: "100vh", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors "
          />
          {states.map((state, index) => (
            <Marker key={index} position={state.coords} icon={customIcon}>
              <Popup>
                <div className="grid grid-rows-2 gap-2">
                  <div>{state.name}</div>
                  <div>Botão </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
