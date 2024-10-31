import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.712776, // Example: Latitude for New York
  lng: -74.005974, // Example: Longitude for New York
};

const locations = [
  { lat: 40.712776, lng: -74.005974 }, // New York
  { lat: 34.052235, lng: -118.243683 }, // Los Angeles
];

interface GoogleMapComponentProps {
  apiKey: string;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ apiKey }) => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={4}
        center={center}
      >
        {locations.map((location, index) => (
          <Marker key={index} position={location} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
