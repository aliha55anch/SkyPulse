import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function LocationMarker({ position, onMapClick }) {
  useMapEvents({
    click(e) {
      onMapClick(e.latlng);
    },
  });

  return position ? <Marker position={position} /> : null;
}

export default function MapPanel({ onSelectCity }) {
  const [position, setPosition] = useState(null);
  const [locating, setLocating] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;
    const timer = setTimeout(() => {
      mapRef.current?.invalidateSize();
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  async function handleMapClick(latlng) {
    setPosition([latlng.lat, latlng.lng]);
    setLocating(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_NOMINATIM_API_URL}?format=json&lat=${latlng.lat}&lon=${latlng.lng}&zoom=10`,
      );
      const data = await res.json();

      const city =
        data.address?.city ||
        data.address?.town ||
        data.address?.village ||
        data.address?.county ||
        data.address?.state ||
        "Unknown";

      const country = data.address?.country || "";

      onSelectCity({
        name: city,
        country,
        region: data.address?.state || "",
        latitude: latlng.lat,
        longitude: latlng.lng,
      });
    } catch {
      onSelectCity({
        name: "Unknown Location",
        country: "",
        region: "",
        latitude: latlng.lat,
        longitude: latlng.lng,
      });
    } finally {
      setLocating(false);
    }
  }

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-xl">
      {locating && (
        <div className="absolute right-1.5 top-1.5 z-1000 flex items-center gap-1.5 rounded-lg bg-slate-900/90 px-2 py-1 text-[10px] font-bold text-white shadow-lg">
          <span className="h-2.5 w-2.5 animate-spin rounded-full border-2 border-blue-400 border-t-transparent" />
          Locating...
        </div>
      )}
      <MapContainer
        center={[20, 0]}
        zoom={2}
        className="h-full w-full"
        zoomControl={false}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url={import.meta.env.VITE_MAP_TILES_URL}
        />
        <LocationMarker position={position} onMapClick={handleMapClick} />
      </MapContainer>
    </div>
  );
}
