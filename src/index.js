import axios from 'axios';
import queryString from 'query-string';

class SpaceX {
  static async makeRequest(route, query, settings = {}) {
    try {
      let response = await axios({
        method: settings.method || 'get',
        baseURL:
          (settings.ssl ? 'https://' : 'http://') +
          (settings.baseURL || 'api.spacexdata.com') +
          '/' +
          (settings.version || 'v3'),
        url: route + '?' + queryString.stringify(query),
        timeout: settings.timeout
      });

      return response.data;
    } catch (err) {
      if (err.response) {
        if (err.response.status === 400) return undefined;
      }
    }
  }

  static getAllCapsules(query, settings) {
    return SpaceX.makeRequest('/capsules', query, settings);
  }

  static getCapsule(id, query, settings) {
    return SpaceX.makeRequest('/capsules/' + id, query, settings);
  }

  static getUpcomingCapsules(query, settings) {
    return SpaceX.makeRequest('/capsules/upcoming', query, settings);
  }

  static getPastCapsules(query, settings) {
    return SpaceX.makeRequest('/capsules/past', query, settings);
  }

  static getAllCores(query, settings) {
    return SpaceX.makeRequest('/cores', query, settings);
  }

  static getCore(id, query, settings) {
    return SpaceX.makeRequest('/cores/' + id, query, settings);
  }

  static getUpcomingCores(query, settings) {
    return SpaceX.makeRequest('/cores/upcoming', query, settings);
  }

  static getPastCores(query, settings) {
    return SpaceX.makeRequest('/cores/past', query, settings);
  }

  static getAllDragons(query, settings) {
    return SpaceX.makeRequest('/dragons', query, settings);
  }

  static getDragon(id, query, settings) {
    return SpaceX.makeRequest('/dragons/' + id, query, settings);
  }

  static getAllHistory(query, settings) {
    return SpaceX.makeRequest('/history', query, settings);
  }

  static getHistory(id, query, settings) {
    return SpaceX.makeRequest('/history/' + id, query, settings);
  }

  static info(settings) {
    return SpaceX.makeRequest('/info', settings);
  }

  static apiInfo(settings) {
    return SpaceX.makeRequest('/', settings);
  }

  static getAllLandingPads(query, settings) {
    return SpaceX.makeRequest('/landpads', query, settings);
  }

  static getLandingPad(id, query, settings) {
    return SpaceX.makeRequest('/landpads/' + id, query, settings);
  }

  static getAllLaunches(query, settings) {
    return SpaceX.makeRequest('/launches', query, settings);
  }

  static getLaunch(id, query, settings) {
    return SpaceX.makeRequest('/launches' + id, query, settings);
  }

  static getPastLaunches(query, settings) {
    return SpaceX.makeRequest('/launches/past', query, settings);
  }

  static getUpcomingLaunches(query, settings) {
    return SpaceX.makeRequest('/launches/upcoming', query, settings);
  }

  static getLatestLaunch(settings) {
    return SpaceX.makeRequest('/launches/latest', settings);
  }

  static getNextLaunch(settings) {
    return SpaceX.makeRequest('/launches/next', settings);
  }

  static getAllLaunchPads(query, settings) {
    return SpaceX.makeRequest('/launchpads', query, settings);
  }

  static getLaunchPad(id, query, settings) {
    return SpaceX.makeRequest('/launchpads/' + id, query, settings);
  }

  static getAllMissions(query, settings) {
    return SpaceX.makeRequest('/missions', query, settings);
  }

  static getMission(id, query, settings) {
    return SpaceX.makeRequest('/missions', query, settings);
  }

  static getAllPayloads(query, settings) {
    return SpaceX.makeRequest('/payloads', query, settings);
  }

  static getPayload(id, query, settings) {
    return SpaceX.makeRequest('/payloads/' + id, query, settings);
  }

  static getAllRockets(query, settings) {
    return SpaceX.makeRequest('/rockets', query, settings);
  }

  static getRocket(id, query, settings) {
    return SpaceX.makeRequest('/rockets/' + id, query, settings);
  }

  static getRoadster(settings) {
    return SpaceX.makeRequest('/roadster', settings);
  }

  static getAllShips(query, settings) {
    return SpaceX.makeRequest('/ships', query, settings);
  }

  static getShip(id, query, settings) {
    return SpaceX.makeRequest('/ships/' + id, query, settings);
  }
}

module.exports = SpaceX;
