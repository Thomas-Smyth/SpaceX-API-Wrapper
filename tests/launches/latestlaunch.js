const SpaceXAPI = require('../../index');

let SpaceX = new SpaceXAPI();

SpaceX.getLatestLaunch(function(err, info){
    console.log(err);
    console.log(info);
});