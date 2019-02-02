<div align="center">

# SpaceX API Wrapper (Node.js)

[![GitHub release](https://img.shields.io/github/release/Thomas-Smyth/SpaceX-API-Wrapper.svg)](https://github.com/Thomas-Smyth/SpaceX-API-Wrapper/releases)
[![GitHub issues](https://img.shields.io/github/issues/Thomas-Smyth/SpaceX-API-Wrapper.svg)](https://github.com/Thomas-Smyth/SpaceX-API-Wrapper/issues)
[![GitHub stars](https://img.shields.io/github/stars/Thomas-Smyth/SpaceX-API-Wrapper.svg)](https://github.com/Thomas-Smyth/SpaceX-API-Wrapper/stargazers)
[![GitHub license](https://img.shields.io/github/license/Thomas-Smyth/SpaceX-API-Wrapper.svg)](https://github.com/Thomas-Smyth/SpaceX-API-Wrapper)

### Simple and Easy API Wrapper for [r-spacex/SpaceX-API](https://github.com/r-spacex/SpaceX-API)!

<br><br>

</div>

## Installation
To install via `npm` use:
`npm i spacex-api-wrapper`

To install via `yarn` use:
`yarn add spacex-api-wrapper`

## Basic Usage
To use the wrapper, require the module and initialise the module:
```js
let SpacexApiWrapper = require("spacex-api-wrapper");

SpacexApiWrapper.info().then(function(data) {
    console.log(data);
});
```

```JSON
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
  "valuation": 27500000000,
  "headquarters": {
    "address": "Rocket Road",
    "city": "Hawthorne",
    "state": "California"
  },
  "links": {
    "website": "https://www.spacex.com/",
    "flickr": "https://www.flickr.com/photos/spacex/",
    "twitter": "https://twitter.com/SpaceX",
    "elon_twitter": "https://twitter.com/elonmusk"
  },
  "summary": "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets."
}
```

## Documentation
This wrapper provides the static methods listed below. Each links to the relevant section of the API's documentation.

Arguments:
* `id` - Specifies the id of the entity to retrieve.
* `query` - An object listing any additional options or output controls specified in the API's documentation.
* `settings` - Object used to setup axios:
    - `method` - Method to use when making requests. Default is `get` and is the only method used in the API.
    - `baseURL` - The URL of the API.
    - `ssl` - Use SSL?
    - `version` - Defaults to V3, which this wrapper is designed for. Using other versions may cause the wrapper to stop working or to not cover all endpoints.
    - `timeout` - How long before timing out a request.
    
All arguments other than the `id` argument (only required a small number of methods) are optional.

Documentation for the API can be found [here](https://github.com/r-spacex/SpaceX-API/wiki).

### Capsules
* [`.getAllCapsules(query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#00ac651a-8ba2-4b4c-858a-4034dd1254fa)
* [`.getCapsule(id, query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#4376c913-2589-4afd-a5f2-80ab8adc3fd0)
* [`.getUpcomingCapsules(query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#08eb1220-8c52-4062-8147-d9ad33c2a891)
* [`.getPastCapsules(query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#cc22ddc7-1e9c-47c8-8758-bfa58ca13191)

### Cores
* [`.getAllCores(query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#8841c0cf-4341-4c73-852e-df4d90a7db98)
* [`.getCore(id, query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#dc18b875-5f98-4e44-a124-ad95647335dc)
* [`.getUpcomingCores(query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#a22624ca-36bd-4d20-932c-f5c1897ae75b)
* [`.getPastCores(query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#3e925329-8706-4859-8a7b-d6bcfd1d866a)

### Dragons
* [`.getAllDragons(query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#32f4fc1e-37e8-4d1b-8ec4-ac729441ddb2)
* [`.getDragon(id, query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#a9129d6a-1bab-42a1-af1b-2b1064016f9d)

### History
* [`.getAllHistory(query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#9f1dfdc0-fbe8-4ae5-9209-7f3d649a627c)
* [`.getHistory(id, query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#0eceecb8-c6e1-4e73-92e1-6dadbdbcb9da)

### Info
* [`.info(settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#9b8b053e-cb75-400c-9635-5fe1c771d8a3)
* [`.apiInfo(settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#30c2d33b-4943-43ae-a98a-5ede3ece6388)

### Landing Pads
* [`.getAllLandingPads(query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#c58f85b5-ee5f-4343-80fd-ec893faa9133)
* [`.getLandingPad(id, query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#5fbbc3cc-6409-4607-a679-19be39bc9cea)

### Launches
* [`.getAllLaunches(query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#5fc4c846-c373-43df-a10a-e9faf80a8b0a)
* [`.getLaunch()`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#cfcc49e7-5fe4-4dd3-9701-7c5caf7af9fb)
* [`.getPastLaunches(query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#fce450d6-e064-499a-b88d-34cc22991bcc)
* [`.getUpcomingLaunches(query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#e001c501-9c09-4703-9e29-f91fbbf8db7c)
* [`.getLatestLaunch(query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#07a29989-38e3-47fb-9f64-c132b5842ff0)
* [`.getNextLaunch(query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#c75a20cf-50e7-4a4a-8856-ee729e0d3868)

### Launch Pads
* [`.getAllLaunchPads(query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#58df29dc-5839-42fc-9540-2f572fd13438)
* [`.getLaunchPad(id, query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#fbc2676e-6248-48ce-95c8-c64784638288)

### Missions
* [`.getAllMissions(query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#02badaab-e03e-40c8-ab20-3bc76d95d401)
* [`.getMission(id, query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#ccefcfac-5634-4d8e-885b-f3f21b7c539e)

### Payloads
* [`.getAllPayloads(query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#81150545-5ab3-4552-b1f5-865b7f542033)
* [`.getPayload(id, query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#290f98df-e218-4635-9012-4657cd51f67e)

### Rockets
* [`.getAllRockets(query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#16c58b5e-44de-4183-b858-0fae51d242a5)
* [`.getRocket(id, query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#eda45a06-9f05-40f1-a333-028f647ba797)

### Roadster
* [`.getRoadster(settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#65e19a5a-f67f-46f2-be16-283c1a783c36)

### Ships
* [`.getAllShips(query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#e520e500-0421-4774-8bcb-8d07b7dfa222)
* [`.getShip(id, query, settings)`](https://documenter.getpostman.com/view/2025350/RWaEzAiG#d5b89576-eb1d-4a2f-91eb-3eab2b454aa2)

## FAQs
* What is returned in replace of a 404?
    - When the API returns a 404, it occurs usually when an id in an endpoint was not valid. This has been handled in this repository by returning `undefined`.
* The tests seem a little odd?
    - The tests used for this wrapper are copies of [r-spacex/SpaceX-API tests](https://github.com/r-spacex/SpaceX-API/tree/master/test). It seems that these are out of date for their own API. Once they are updated and improved I will update the tests here.
