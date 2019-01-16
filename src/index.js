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

  static getAllLandPads(settings) {
    return SpaceX.makeRequest('/landpads', settings);
  }

  static getLandPad(id, settings) {
    return SpaceX.makeRequest('/landpads/' + id, settings);
  }

  static getAllLaunches(filter, settings) {
    return SpaceX.makeRequest(
      '/launches' + SpaceX.buildFilter(filter),
      settings
    );
  }

  static getLatestLaunch(settings) {
    return SpaceX.makeRequest('/launches/latest', settings);
  }

  static getNextLaunch(settings) {
    return SpaceX.makeRequest('/launches/next', settings);
  }

  static getAllPastLaunches(filter, settings) {
    return SpaceX.makeRequest('/launches/past', settings);
  }

  static getUpcomingLaunches(filter, settings) {
    return SpaceX.makeRequest('/launches/upcoming', settings);
  }

  static getAllLaunchPads(settings) {
    return SpaceX.makeRequest('/launchpads', settings);
  }

  static getLaunchPad(id, settings) {
    return SpaceX.makeRequest('/launchpads/' + id, settings);
  }

  static getAllPayloads(filter, settings) {
    return SpaceX.makeRequest(
      '/payloads' + SpaceX.buildFilter(filter),
      settings
    );
  }

  static getPayload(id, settings) {
    return SpaceX.makeRequest('/payloads/' + id, settings);
  }

  static getRoadster(settings) {
    return SpaceX.makeRequest('/roadster', settings);
  }

  static getAllRockets(settings) {
    return SpaceX.makeRequest('/rockets', settings);
  }

  static getRocket(id, settings) {
    return SpaceX.makeRequest('/rockets/' + id, settings);
  }

  static getAllShips(filter, settings) {
    return SpaceX.makeRequest('/ships' + SpaceX.buildFilter(filter), settings);
  }

  static getShip(id, settings) {
    return SpaceX.makeRequest('/ships/' + id, settings);
  }
}

export default SpaceX;
