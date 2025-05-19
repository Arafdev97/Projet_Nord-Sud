import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  ZoomControl
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Correction des icônes Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const nord = [
  { name: "Ouaké", position: [9.7414, 1.6602] },
  { name: "Djougou", position: [9.7085, 1.6652] },
  { name: "Bassila", position: [9.0083, 1.6667] },
  { name: "Natitingou", position: [10.3041, 1.3796] },
];

const sud = [
  { name: "Cotonou", position: [6.3703, 2.3912] },
  { name: "Ouidah", position: [6.3667, 2.0833] },
  { name: "Porto-Novo", position: [6.4969, 2.6283] },
];

const CarteZones = () => {
  const lignes = nord.flatMap((villeNord) =>
    sud.map((villeSud) => [villeNord.position, villeSud.position])
  );

  return (
    <div className="h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden border-2 border-green-100 shadow-lg z-0">
      <MapContainer
        center={[8.5, 2.4]}
        zoom={6.5}
        scrollWheelZoom={true}
        zoomControl={false}
        dragging={true}
        style={{ height: "100%", width: "100%" }}
      >
        <ZoomControl position="bottomright" />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        />

        {[...nord, ...sud].map((ville, index) => (
          <Marker key={index} position={ville.position}>
            <Popup>
              <strong>{ville.name}</strong>
            </Popup>
          </Marker>
        ))}

        {lignes.map((coords, i) => (
          <Polyline key={i} positions={coords} color="green" weight={2} />
        ))}
      </MapContainer>
    </div>
  );
};

export default CarteZones;
