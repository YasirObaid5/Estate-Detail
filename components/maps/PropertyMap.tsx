"use client";

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import LeafletMapWrapper from './LeafletMapWrapper';

// Fix for default marker icon in Leaflet with Next.js
const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Sample property data
const properties = [
  // Your properties data...
];

const PropertyMap = () => {
  const [mapCenter, setMapCenter] = useState([39.8283, -98.5795]); // Center of US
  const [zoom, setZoom] = useState(4);
  const [selectedProperty, setSelectedProperty] = useState(null);

  // Handle property selection
  const handlePropertySelect = (property) => {
    setSelectedProperty(property);
    setMapCenter(property.position);
    setZoom(15);
  };

  return (
    <div className="h-[500px] relative">
      {/* Property selector */}
      <div className="absolute top-4 left-4 z-10 bg-white p-3 rounded-lg shadow-md max-w-xs w-full">
        <h3 className="text-gray-800 font-semibold mb-2">Select Property</h3>
        <select 
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            const property = properties.find(p => p.id === parseInt(e.target.value));
            if (property) handlePropertySelect(property);
          }}
          value={selectedProperty?.id || ""}
        >
          <option value="">All Properties</option>
          {properties.map(property => (
            <option key={property.id} value={property.id}>
              {property.title} - {property.price}
            </option>
          ))}
        </select>
      </div>

      {/* Map wrapped in the special wrapper component */}
      <LeafletMapWrapper>
        <MapContainer 
          key={`map-${selectedProperty?.id || 'default'}`}
          center={mapCenter} 
          zoom={zoom} 
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {properties.map(property => (
            <Marker 
              key={property.id} 
              position={property.position}
              icon={customIcon}
            >
              <Popup>
                <div className="p-1">
                  <h3 className="font-bold text-blue-600">{property.title}</h3>
                  <p className="text-sm text-gray-600">{property.address}</p>
                  <p className="font-semibold text-gray-800 my-1">{property.price}</p>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>{property.bedrooms} Beds</span>
                    <span>{property.bathrooms} Baths</span>
                    <span>{property.area}</span>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </LeafletMapWrapper>
    </div>
  );
};

export default PropertyMap;