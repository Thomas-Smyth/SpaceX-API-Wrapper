const SpaceXAPI = require('../../index');

let SpaceX = new SpaceXAPI();

SpaceX.getNextLaunch(function(err, info) {
  console.log(err);
  console.log(info);
});
