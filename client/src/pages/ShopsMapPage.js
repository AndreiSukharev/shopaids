import * as React from 'react'
import classnames from 'classnames'
import ShopsMap from '../components/Map'
import { Typography, withStyles } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

class ShopsMapPage extends React.Component {
  mapRef = (c) => {
    if (c) this.map = c
  }

  state = {
    selectedShop: null,
    showCurtain: true,
    userPosition: {
      lat: 51.521114,
      lng: -0.157275,
    },
    shops: [
      {
        lat: 51.513117,
        lng: -0.157235,
        name: 'S2 Giddy Grocer',
        travelTime: 10,
        workTime: 'Open Now | Closes 7:00PM',
        address: '27 Well St, Hackney',
        crowd: [3, 4, 5, 2, 1, 0],
        inStock: '3/3',
      },
      {
        lat: 51.522114,
        lng: -0.157575,
        name: 'S1 Tesco Superstore',
        travelTime: 23,
        workTime: 'Open Now | Closes 10:00PM',
        address: '15 Great Suffolk St',
        crowd: [3, 4, 5, 9, 7, 8],
        inStock: '2/3',
      },
    ]
  }

  selectShop = (selectedShop) => {
    this.setState({ selectedShop })
  }

  focusesSelectedStore = () => {
    this.map.panTo(this.state.selectedShop)
    this.setState({
      selectedShop: null,
      showCurtain: false,
      route: [this.state.selectedShop, this.state.userPosition]
    })
  }

  toggleCurtain = () => {
    this.setState({ showCurtain: !this.state.showCurtain })
  }

  render() {
    return (
      <div>
        <ShopsMap
          markers={this.state.shops}
          userPosition={this.state.userPosition}
          ref={this.mapRef}
          route={this.state.route}
        />
        <div className={classnames("bottom-curtain", {'bottom-curtain_hidden': !this.state.showCurtain})}>
          <div className="bottom-curtain-handle" onClick={this.toggleCurtain}/>
          <div className="bottom-curtain-content">
            {this.state.shops.map(s => {
              return (
                <div className="bottom-curtain-list-item" onClick={() => this.selectShop(s)}>
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
                      {s.crowd.map((cv) => (
                        <div style={{
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
              <Button color="primary" variant="outlined" onClick={this.focusesSelectedStore}>no</Button>
              <Button color="primary" variant="contained" component={Link} to="/shopaid/list">yes</Button>
            </DialogActions>
          </Dialog>
        )}
      </div>
    )
  }
}

export default ShopsMapPage
