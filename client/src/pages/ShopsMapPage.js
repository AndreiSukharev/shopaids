import * as React from 'react'
import ShopsMap from '../components/Map'
import { Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'

export default class ShopsMapPage extends React.Component {
  map = React.createRef();

  state = {
    shops: [
      {
        lat: 51.522114,
        lng: -0.157575,
        name: 'Tesco Superstore',
        travelTime: 139,
        workTime: 'Open Now | Closes 10:00PM',
        address: '15 Great Suffolk St',
        crowd: [3, 4, 5, 9, 7, 8],
        inStock: '3/5',
      },
      {
        lat: 51.513117,
        lng: -0.157235,
        name: 'Giddy Grocer',
        travelTime: 1203,
        workTime: 'Open Now | Closes 7:00PM',
        address: '27 Well St, Hackney',
        crowd: [3, 4, 5, 2, 1, 0],
        inStock: '5/5',
      }
    ]
  }

  selectShop = () => {
    console.log(this.map.googleMap);
  }

  render() {
    return (
      <div>
        <ShopsMap markers={this.state.shops} ref={this.map}/>
        <div className="bottom-curtain">
          {this.state.shops.map(s => {
            return (
              <div className="bottom-curtain-list-item" onClick={() => this.selectShop(s)}>
                <div style={{flexGrow: 1}}>
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
                        backgroundColor: `rgb(${cv*30}, ${255 - cv*50}, 20)`
                      }}/>
                    ))}
                  </div>
                </div>
                <div>
                  <div>
                    <Typography color="textSecondary" variant="caption">Travel time</Typography>
                    <Typography color="secondary">{s.travelTime}</Typography>
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
    )
  }
}