import SpaceX from '../../src/index';

// ------------------------------------------------------------
//                Falcon Heavy Roadster Info
// ------------------------------------------------------------

test('It should return roadster info', async () => {
  const data = await SpaceX.getRoadster();
  expect(data).toHaveProperty('name', "Elon Musk's Tesla Roadster");
  expect(data).toHaveProperty('apoapsis_au', expect.any(Number));
  expect(data).toHaveProperty('periapsis_au', expect.any(Number));
  expect(data).toHaveProperty('semi_major_axis_au', expect.any(Number));
  expect(data).toHaveProperty('eccentricity', expect.any(Number));
  expect(data).toHaveProperty('inclination', expect.any(Number));
  expect(data).toHaveProperty('longitude', expect.any(Number));
  expect(data).toHaveProperty('periapsis_arg', expect.any(Number));
  expect(data).toHaveProperty('period_days', expect.any(Number));
  expect(data).toHaveProperty('speed_kph', expect.any(Number));
  expect(data).toHaveProperty('speed_mph', expect.any(Number));
  expect(data).toHaveProperty('earth_distance_km', expect.any(Number));
  expect(data).toHaveProperty('earth_distance_mi', expect.any(Number));
  expect(data).toHaveProperty('mars_distance_km', expect.any(Number));
  expect(data).toHaveProperty('mars_distance_mi', expect.any(Number));
  expect(data).toHaveProperty('flickr_images');
});
