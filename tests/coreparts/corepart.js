const SpaceXAPI = require('../../index');

let SpaceX = new SpaceXAPI();

SpaceX.getCorePart('B1041', function(err, info){
    console.log(err);
    console.log(info);
});