import superagent from 'superagent'


export default class ShopsService {
  async getShops({ southernmost, westernmost, northernmost, easternmost }) {
    const requestUri = `https://overpass-api.de/api/interpreter`;
    const formData = new FormData();
    const bounds = [southernmost, westernmost, northernmost, easternmost].join(',')
    const query = `
      [out:json][timeout:5];
      // gather results
      (
        // query part for: “grocery”
        node["shop"="supermarket"](${bounds});
        node["shop"="grocery"](${bounds});
      );
      // print results
      out body;
      >;
      out skel qt;`;
    formData.append('data', query)
    const response = await superagent
      .post(requestUri)
      .send({ data: query })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return response.body.elements;
  }
}
