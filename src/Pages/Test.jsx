import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';

const Map = () => {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [nearestHospital, setNearestHospital] = useState(null);

  // Function to fetch user's current location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  // Function to fetch nearest hospital using Google Places API
  const getNearestHospital = async () => {
    if (userLocation) {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLocation.lat},${userLocation.lng}&radius=5000&type=hospital&key=AIzaSyDplkjHt2pjl6bWCGRNyexCs0m4DNpFyTY`
      );
      setNearestHospital(response.data.results[0].geometry.location);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    getNearestHospital();
  }, [userLocation]);

  const mapStyles = {
    height: '400px',
    width: '100%'
  };

  return (
    <div className="flex justify-center">
      <LoadScript googleMapsApiKey="AIzaSyDplkjHt2pjl6bWCGRNyexCs0m4DNpFyTY">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={userLocation}
          onLoad={map => setMap(map)}
        >
          {userLocation && (
            <Marker position={userLocation} title="Your Location" />
          )}
          {nearestHospital && (
            <Marker
              position={nearestHospital}
              title="Nearest Hospital"
              icon={{
                url: 'https://maps.google.com/mapfiles/ms/icons/hospitals.png'
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
