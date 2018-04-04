<div align="center">

# SpaceX API Wrapper (Node.js)

[![GitHub release](https://img.shields.io/github/release/Thomas-Smyth/SpaceX-API-Wrapper.svg)](https://github.com/Thomas-Smyth/SpaceX-API-Wrapper/releases)
[![GitHub issues](https://img.shields.io/github/issues/Thomas-Smyth/SpaceX-API-Wrapper.svg)](https://github.com/Thomas-Smyth/SpaceX-API-Wrapper/issues)
[![GitHub stars](https://img.shields.io/github/stars/Thomas-Smyth/SpaceX-API-Wrapper.svg)](https://github.com/Thomas-Smyth/SpaceX-API-Wrapper/stargazers)
[![GitHub license](https://img.shields.io/github/license/Thomas-Smyth/SpaceX-API-Wrapper.svg)](https://github.com/Thomas-Smyth/SpaceX-API-Wrapper)

### Simple and Easy API Wrapper for [r-spacex/SpaceX-API](https://github.com/r-spacex/SpaceX-API)!

<br><br>

</div>

## Documentation
See the [Wiki](https://github.com/Thomas-Smyth/SpaceX-API-Wrapper/wiki) for full wrapper documentation.

Documentation for the API can be found [here](https://github.com/r-spacex/SpaceX-API/wiki).

## Installation
To install via `npm` use:
`npm i spacex-api-wrapper`

## Basic Usage
To use the wrapper, require the module and initialise the module:
```js
const SpaceXAPI = require('SpaceX-API-Wrapper');

let SpaceX = new SpaceXAPI();

SpaceX.getCompanyInfo(function(err, info){
    console.log(info);
});
```

```
{
  "name": "SpaceX",
  "founder": "Elon Musk",
  "founded": 2002,
  "employees": 7000,
  "vehicles": 3,
  "launch_sites": 3,
  "test_sites": 1,
  "ceo": "Elon Musk",
  "cto": "Elon Musk",
  "coo": "Gwynne Shotwell",
  "cto_propulsion": "Tom Mueller",
  "valuation": 15000000000,
  "headquarters": {
    "address": "Rocket Road",
    "city": "Hawthorne",
    "state": "California"
  },
  "summary": "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets."
}
```
