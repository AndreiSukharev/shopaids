import superagent from 'superagent'

export const profiles = {
  drivingCar: 'driving-car',
  drivingHgv: 'driving-hgv',
  cyclingRegular: 'cycling-regular',
  cyclingRoad: 'cycling-road',
  cyclingMountain: 'cycling-mountain',
  cyclingElectric: 'cycling-electric',
  footWalking: 'foot-walking',
  footHiking: 'foot-hiking',
  wheelchair: 'wheelchair',
}

export default class DirectionsService {
  constructor(apiKey) {
    this.apiKey = apiKey
  }

  profiles = profiles

  async getRoute(profile, startPos, endPos) {
    const start = startPos.lng + ',' + startPos.lat
    const end = endPos.lng + ',' + endPos.lat
    const requestUri = `https://api.openrouteservice.org/v2/directions/${profile}?api_key=${this.apiKey}&start=${start}1&end=${end}`
    const response = await superagent.get(requestUri);
    return response.body;
  }
}
