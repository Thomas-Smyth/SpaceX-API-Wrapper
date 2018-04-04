"use strict";
const url = require('url');
const request = require('request');

class SpaceX{
    constructor(settings) {
        settings = settings || {};

        this.settings = {
            version: 'v2',

            host: settings.host || 'api.spacexdata.com',
            ssl: (typeof settings.ssl === "undefined") ? true : settings.ssl,

            parseJSON: (typeof settings.parseJSON === "undefined") ? true : settings.parseJSON
        };
    }

    request(method, path, post_body, filters, callback) {
        let requestParams = {
            uri: url.format({
                protocol: this.settings.ssl ? 'https:' : 'http:',
                hostname: this.settings.host + "/" + this.settings.version,
                pathname: path,
                query: filters,
            }),
            method: method || 'GET',
        };

        let parseJSON = this.settings.parseJSON;

        request( requestParams, function (err, body, response) {
            if( err || ( response && response.error ) ) {
                if( response && response.error ) {
                    callback( response.error.message );
                } else {
                    callback( err );
                }
            } else {
                response = response || {};

                if( typeof response === 'string' && parseJSON) {
                    response = JSON.parse(response);
                }

                callback( null, response );
            }
        });
    }

    get(path, filters, callback) {
        this.request( 'GET', path, null, filters, callback );
    }

    getCompanyInfo(callback) {
        this.get('/info', null, callback);
    }

    getAllRockets(callback) {
        this.get('/rockets', null, callback);
    }

    getRocket(id, callback) {
        this.get('/rockets/'+id, null, callback);
    }

    getAllCapsules(callback) {
        this.get('/capsules', null, callback);
    }

    getCapsule(id, callback) {
        this.get('/capsules/'+id, null, callback);
    }

    getAllLaunchPads(callback) {
        this.get('/launchpads', null, callback);
    }

    getLaunchPad(id, callback) {
        this.get('/launchpads/'+id, null, callback);
    }

    getLatestLaunch(callback) {
        this.get('/launches/latest', null, callback);
    }

    getAllLaunches(filters, callback){
        this.get('/launches/all', filters, callback);
    }

    getAllPastLaunches(filters, callback) {
        this.get('/launches', filters, callback);
    }

    getAllUpcomingLaunches(filters, callback) {
        this.get('/launches/upcoming', filters, callback);
    }

    getAllCapsuleParts(filters, callback){
        this.get('/parts/caps', filters, callback);
    }

    getCapsulePart(id, callback){
        this.get('/parts/caps/'+id, null, callback);
    }

    getAllCoreParts(filters, callback){
        this.get('/parts/caps', filters, callback);
    }

    getCorePart(id, callback){
        this.get('/parts/caps/'+id, null, callback);
    }
}

module.exports = SpaceX;