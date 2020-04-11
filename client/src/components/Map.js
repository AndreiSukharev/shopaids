import React from 'react';
import { compose, withProps } from "recompose"
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps"

export const ShopsMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.markers && props.markers.map(marker => (
      <Marker position={{ lat: marker.lat, lng: marker.lng }} />
    ))}
  </GoogleMap>
)