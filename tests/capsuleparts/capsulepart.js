const SpaceXAPI = require('../../index');

let SpaceX = new SpaceXAPI();

SpaceX.getCapsulePart('C113', function(err, info){
    console.log(err);
    console.log(info);
});