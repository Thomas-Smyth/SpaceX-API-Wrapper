const SpaceXAPI = require('../../index');

let SpaceX = new SpaceXAPI();

SpaceX.getRocket('falconheavy', function(err, info){
    console.log(err);
    console.log(info);
});