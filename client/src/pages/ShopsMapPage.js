import * as React from 'react'
import { ShopsMap } from '../components/Map'

export default class ShopsMapPage extends React.Component {
  state = {
    markers: [
      { lat: 51.522114, lng: -0.157575 },
      { lat: 51.513117, lng: -0.157235 }
    ]
  }
  render() {
    return <ShopsMap markers={this.state.markers}/>
  }
}