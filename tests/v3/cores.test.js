import SpaceX from '../../src/index';

// ------------------------------------------------------------
//                        All Cores
// ------------------------------------------------------------

test('It should return all v3 cores', async () => {
  const data = await SpaceX.getAllCores();
  data.forEach(item => {
    expect(item).toHaveProperty('core_serial');
    expect(item).toHaveProperty('status');
    expect(item).toHaveProperty('original_launch');
    expect(item).toHaveProperty('original_launch_unix');
    expect(item).toHaveProperty('reuse_count');
    expect(item).toHaveProperty('rtls_attempts');
    expect(item).toHaveProperty('rtls_landings');
    expect(item).toHaveProperty('asds_attempts');
    expect(item).toHaveProperty('asds_landings');
    expect(item).toHaveProperty('water_landing');
    expect(item).toHaveProperty('details');
  });
});

// ------------------------------------------------------------
//                      All Cores Error
// ------------------------------------------------------------

test('It should return an empty cores array', async () => {
  const data = await SpaceX.getAllCores({
    core_serial: 'B1000'
  });
  expect(data).toEqual([]);
});

// ------------------------------------------------------------
//                       One Core
// ------------------------------------------------------------

test('It should return core B0007', async () => {
  const data = await SpaceX.getCore('B0007');
  expect(data).toHaveProperty('core_serial', 'B0007');
});

// ------------------------------------------------------------
//                     One Core Error
// ------------------------------------------------------------

test('It should return undefined', async () => {
  const data = await SpaceX.getCore('B1000');
  expect(data).toEqual(undefined);
});
