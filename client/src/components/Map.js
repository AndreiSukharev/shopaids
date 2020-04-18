import React from 'react'
import { compose, withProps } from 'recompose'
import { GoogleMap, Marker, withScriptjs, withGoogleMap, Polyline } from 'react-google-maps'

export class ShopsMap extends React.Component {
  render() {
    return (
      <GoogleMap
        ref={this.props.forwardedRef}
        defaultZoom={15}
        defaultCenter={{ lat: 51.522114, lng: -0.157575 }}
      >
        {this.props.markers && this.props.markers.map((marker) => (
          <Marker key={marker.id} position={{ lat: marker.lat, lng: marker.lng }} onClick={() => this.props.onMarkerCLick(marker)}/>
        ))}
        {this.props.userPosition && (
          <Marker position={this.props.userPosition} label="me"/>
        )}
        {this.props.route && <Polyline path={this.props.route} options={{ strokeColor: '#E25F3E' }}/>}
      </GoogleMap>
    )
  }
}

const WrappedMap = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }}/>,
    containerElement: <div style={{ height: `100%` }}/>,
    mapElement: <div style={{ height: `100%` }}/>,
  }),
  withScriptjs,
  withGoogleMap
)(ShopsMap)

export default React.forwardRef(({ ...props }, ref) => <WrappedMap {...props} forwardedRef={ref}/>)
