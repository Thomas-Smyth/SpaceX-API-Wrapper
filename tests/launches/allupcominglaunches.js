const SpaceXAPI = require('../../index');

let SpaceX = new SpaceXAPI();

filters = {};

SpaceX.getAllUpcomingLaunches(filters, function(err, info){
    console.log(err);
    console.log(info);
});