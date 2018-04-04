const SpaceXAPI = require('../../index');

let SpaceX = new SpaceXAPI();

SpaceX.getAllRockets(function(err, info){
    console.log(err);
    console.log(info);
});