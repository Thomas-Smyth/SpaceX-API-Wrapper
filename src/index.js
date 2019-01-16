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

  static async info(settings) {
    return SpaceX.makeRequest('/info', settings);
  }

  static async getAllCapsules(filter, settings) {
    filter = '?' + queryString.stringify(filter);
    return SpaceX.makeRequest('/capsules' + filter, settings);
  }

  static async getCapsule(id, settings) {
    return SpaceX.makeRequest('/capsules/' + id, settings);
  }
}

export default SpaceX;
