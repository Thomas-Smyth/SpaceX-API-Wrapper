const SpaceXAPI = require('../../index');

let SpaceX = new SpaceXAPI();

filters = {};

SpaceX.getAllCapsuleParts(filters, function(err, info){
    console.log(err);
    console.log(info);
});