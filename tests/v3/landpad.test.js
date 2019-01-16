import SpaceX from '../../src/index';

// ------------------------------------------------------------
//                        Landpads
// ------------------------------------------------------------

test('It should return all landing pads', async () => {
  const data = await SpaceX.getAllLandPads();
  data.forEach(item => {
    expect(item).toHaveProperty('id');
    expect(item).toHaveProperty('full_name');
    expect(item).toHaveProperty('status');
    expect(item).toHaveProperty('landing_type');
    expect(item).toHaveProperty('successful_landings');
    expect(item).toHaveProperty('attempted_landings');
  });
});

test('It should return LZ-4 info', async () => {
  const data = await SpaceX.getLandPad('LZ-4');
  expect(data).toHaveProperty('id', 'LZ-4');
});

test('It should return undefined', async () => {
  const data = await SpaceX.getLandPad('LZ-25');
  expect(data).toEqual(undefined);
});
