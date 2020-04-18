import * as React from 'react'
import debounce from 'lodash/debounce'
import classnames from 'classnames'
import ShopsMap from '../components/Map'
import { Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { services } from '../App'
import { profiles } from '../services/DirectionsService'

class ShopsMapPage extends React.Component {
  componentDidMount() {
    setTimeout(() => this.panToUser(), 1000)
  }

  panToUser = () => {
    window.navigator.geolocation.getCurrentPosition((pos) => {
      this.setState({
        userPosition: {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        }
      }, () => {
        this.map.panTo(this.state.userPosition)
      })
      this.onMapMove()
    })
  }

  onMapMove = debounce(async () => {
    if (this.map.getZoom() < 12) return

    const bounds = this.map.getBounds().toJSON()
    const shopsData = await this.findShopsInBox({
      southernmost: bounds.south,
      northernmost: bounds.north,
      westernmost: bounds.west,
      easternmost: bounds.east
    })
    const shops = shopsData.map(s => ({
      id: s.id,
      lat: s.lat,
      lng: s.lon,
      name: s.tags.name,
      travelTime: 'x',
      workTime: s.tags.opening_hours,
      address: [s.tags['addr:city'], s.tags['addr:housenumber'], s.tags['addr:street']].filter(s => !!s).join(' '),
      crowd: [3, 4, 5, 2, 1, 0],
      inStock: 'x',
    }))
    this.setState({ shops })
  }, 500)

  findShopsInBox = async (box) => {
    return await services.shops.getShops(box)
  }

  mapRef = (c) => {
    if (c) {
      if (!this.map) {
        c.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.addListener('bounds_changed', this.onMapMove)

      }
      this.map = c
    }
  }

  state = {
    selectedShop: null,
    showCurtain: true,
    userPosition: {
      lat: 51.521114,
      lng: -0.157275,
    },
    shops: []
  }

  selectShop = (selectedShop) => {
    this.setState({ selectedShop })
  }

  focusesSelectedStore = async () => {
    this.map.panTo(this.state.selectedShop)
    const routeToShop = await services.directions.getRoute(profiles['driving-car'], this.state.userPosition, this.state.selectedShop)
    this.setState({
      selectedShop: null,
      showCurtain: false,
      route: routeToShop.features[0].geometry.coordinates.map(c => ({ lat: c[1], lng: c[0] }))
    })
  }

  toggleCurtain = () => {
    this.setState({ showCurtain: !this.state.showCurtain })
  }

  containerStyle = {
    overflow: 'hidden',
    position: 'relative',
  }

  onMarkerClick = (marker) => {
    this.setState({ showCurtain: true }, () => {
      const div = document.getElementById(this.getShopDOMId(marker))
      div.scrollIntoView()
      div.classList.remove('flash');
      setTimeout(() => div.classList.add('flash'), 100);
    })
  }

  getShopDOMId = (s) => 'shop-' + s.id

  render() {
    return (
      <div style={this.containerStyle}>
        <ShopsMap
          onMarkerCLick={this.onMarkerClick}
          markers={this.state.shops}
          userPosition={this.state.userPosition}
          ref={this.mapRef}
          route={this.state.route}
        />
        <div className={classnames('bottom-curtain', { 'bottom-curtain_hidden': !this.state.showCurtain })}>
          <div className="bottom-curtain-handle" onClick={this.toggleCurtain}/>
          <div className="bottom-curtain-content">
            {this.state.shops.map((s, i) => {
              return (
                <div key={i} className="bottom-curtain-list-item" onClick={() => this.selectShop(s)}
                     id={this.getShopDOMId(s)}>
                  <div style={{ flexGrow: 1 }}>
                    <div>
                      <Typography variant="body1">{s.name}</Typography>
                    </div>
                    <div>
                      <Typography color="textSecondary" variant="caption">{s.workTime}</Typography>
                    </div>
                    <div>
                      <Typography color="textSecondary" variant="caption">{s.address}</Typography>
                    </div>
                    <div>
                      <Typography color="textSecondary" variant="caption">Crowd:</Typography>
                      {s.crowd.map((cv, i) => (
                        <div key={i} style={{
                          marginLeft: 1,
                          width: 2,
                          height: cv * 2,
                          display: 'inline-block',
                          backgroundColor: `rgb(${cv * 30}, ${255 - cv * 50}, 20)`
                        }}/>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div>
                      <Typography color="textSecondary" variant="caption">Travel time</Typography>
                      <Typography color="secondary">{s.travelTime} min</Typography>
                    </div>
                    <Divider/>
                    <div>
                      <Typography color="textSecondary" variant="caption">Availability</Typography>
                      <Typography color="secondary">{s.inStock}</Typography>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {this.state.selectedShop && (
          <Dialog open onClose={() => this.selectShop(null)}>
            <DialogContent>
              <Typography variant="subtitle1">Are you at this store now?</Typography> <br/>
              <Paper>
                <div style={{ padding: 16 }}>
                  <Typography variant="body1">{this.state.selectedShop.name}</Typography>
                  <Typography variant="caption" color="textSecondary">{this.state.selectedShop.address}</Typography>
                </div>
              </Paper>
            </DialogContent>
            <DialogActions>
              <Button color="primary" variant="outlined" onClick={this.focusesSelectedStore}>find</Button>
              <Button color="primary" variant="outlined" onClick={() => this.selectShop(null)}>no</Button>
              <Button color="primary" variant="contained" component={Link} to="/shopaid/list">yes</Button>
            </DialogActions>
          </Dialog>
        )}
      </div>
    )
  }
}

export default ShopsMapPage
