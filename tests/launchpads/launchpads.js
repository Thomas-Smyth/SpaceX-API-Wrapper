const SpaceXAPI = require('../../index');

let SpaceX = new SpaceXAPI();

SpaceX.getLaunchPad('ksc_lc_39a', function(err, info){
    console.log(err);
    console.log(info);
});