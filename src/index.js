import axios from 'axios';
import queryString from 'query-string';

class SpaceX {
  static async makeRequest(route, settings = {}) {
    try {
      let response = await axios({
        method: settings.method || 'get',
        baseURL:
          (settings.ssl ? 'https://' : 'http://') +
          (settings.baseURL || 'api.spacexdata.com') +
          '/' +
          (settings.version || 'v3'),
        url: route,
        timeout: settings.timeout
      });

      return response.data;
    } catch (err) {
      if (err.response) {
        if (err.response.status === 400) return undefined;
      }
    }
  }

  static buildFilter(filter) {
    return '?' + queryString.stringify(filter);
  }

  static info(settings) {
    return SpaceX.makeRequest('/info', settings);
  }

  static getAllCapsules(filter, settings) {
    return SpaceX.makeRequest(
      '/capsules' + SpaceX.buildFilter(filter),
      settings
    );
  }

  static getCapsule(id, settings) {
    return SpaceX.makeRequest('/capsules/' + id, settings);
  }

  static getAllCores(filter, settings) {
    return SpaceX.makeRequest('/cores' + SpaceX.buildFilter(filter), settings);
  }

  static getCore(id, settings) {
    return SpaceX.makeRequest('/cores/' + id, settings);
  }

  static getAllDragons(fitler, settings) {
    return SpaceX.makeRequest('/dragons', settings);
  }

  static getDragon(id, settings) {
    return SpaceX.makeRequest('/dragons/' + id, settings);
  }

  static getAllHistory(settings) {
    return SpaceX.makeRequest('/history', settings);
  }
}

export default SpaceX;
