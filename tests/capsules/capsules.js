const SpaceXAPI = require('../../index');

let SpaceX = new SpaceXAPI();

SpaceX.getCapsule('dragon67', function(err, info){
    console.log(err);
    console.log(info);
});