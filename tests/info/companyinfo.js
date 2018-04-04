const SpaceXAPI = require('../../index');

let SpaceX = new SpaceXAPI();

SpaceX.getCompanyInfo(function(err, info){
    console.log(err);
    console.log(info);
});