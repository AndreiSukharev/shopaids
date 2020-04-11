import React from 'react';
import { compose, withProps } from "recompose"
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps"

export const ShopsMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 51.522114, lng: -0.157575 }}
  >
    {props.markers && props.markers.map(marker => (
      <Marker position={{ lat: marker.lat, lng: marker.lng }} />
    ))}
  </GoogleMap>
)