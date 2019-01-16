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

To install via `yarn` use:
`yarn add spacex-api-wrapper`

## Basic Usage
To use the wrapper, require the module and initialise the module:
```js
import SpaceX from 'SpaceX-API-Wrapper';

let info = await SpaceX.info();

console.log(info);
```

```
{
   "name":"SpaceX",
   "founder":"Elon Musk",
   "founded":2002,
   "employees":7000,
   "vehicles":3,
   "launch_sites":3,
   "test_sites":1,
   "ceo":"Elon Musk",
   "cto":"Elon Musk",
   "coo":"Gwynne Shotwell",
   "cto_propulsion":"Tom Mueller",
   "valuation":27500000000,
   "headquarters":{
      "address":"Rocket Road",
      "city":"Hawthorne",
      "state":"California"
   },
   "links":{
      "website":"https://www.spacex.com/",
      "flickr":"https://www.flickr.com/photos/spacex/",
      "twitter":"https://twitter.com/SpaceX",
      "elon_twitter":"https://twitter.com/elonmusk"
   },
   "summary":"SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets."
}

## FAQs
* What is returned in replace of a 404?
    - When the API returns a 404, it occurs usually when an id in an endpoint was not valid. This has been handled in this repository by returning `undefined`.
* Why does <insert function name here> have a filter option or an option to obtain a specific id?
    - The tests used for this wrapper are copies of [r-spacex/SpaceX-API tests](https://github.com/r-spacex/SpaceX-API/tree/master/test). If that feature has not been tested in their repository it has not yet been implemented. It is my aim to improve these tests over time, for both repositories, and then implement the additions as features to this wrapper.
```
