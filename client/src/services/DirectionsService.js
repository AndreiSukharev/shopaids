import superagent from 'superagent'

export const profiles = {
  'driving-car': 'driving-car',
  'driving-hgv': 'driving-hgv',
  'cycling-regular': 'cycling-regular',
  'cycling-road': 'cycling-road',
  'cycling-mountain': 'cycling-mountain',
  'cycling-electric': 'cycling-electric',
  'foot-walking': 'foot-walking',
  'foot-hiking': 'foot-hiking',
  'wheelchair': 'wheelchair',
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
