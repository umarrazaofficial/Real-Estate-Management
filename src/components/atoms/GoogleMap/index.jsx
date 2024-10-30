/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { GoogleMap as Map, useJsApiLoader, Marker } from '@react-google-maps/api';
import markerlogo from '../../../assets/markerGoogle.svg';

function GoogleMap({ onLoad, onUnmount, zoom, markers, marker, open, ...rest }) {
  const ref = useRef(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyARhFVFYkqqbvJ1moa2_73JMEa8Z5LeVaM',
  });
  // googleMapsApiKey: "AIzaSyB0gq-rFU2D-URzDgIQOkqa_fL6fBAz9qI",
  const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '30px',
    backgroundColor: '#000',
  };

  const options = {
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: true,
    zoomControl: false,
    keyboardShortcuts: false,
    streetViewControl: false,
  };

  return isLoaded ? (
    <Map
      {...rest}
      ref={ref}
      zoom={zoom || 15}
      onLoad={onLoad}
      onUnmount={onUnmount}
      mapContainerStyle={containerStyle}
      center={marker}
      options={options}>
      {marker && (
        <Marker
          // setting the position of the marker to the current position
          position={marker}
          icon={{
            url: markerlogo,
            scaledSize: new google.maps.Size(30, 44),
          }}
        />
      )}
      {markers}
    </Map>
  ) : (
    'Loading Map ...'
  );
}

export default GoogleMap;
