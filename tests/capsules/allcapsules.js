const SpaceXAPI = require('../../index');

let SpaceX = new SpaceXAPI();

SpaceX.getAllCapsules(function(err, info){
    console.log(err);
    console.log(info);
});