import SpaceX from '../../src/index';

// ------------------------------------------------------------
//                        Launchpads
// ------------------------------------------------------------

test('It should return all launchpads', async () => {
  const data = await SpaceX.getAllLaunchPads();
  expect(data).toHaveLength(6);
  data.forEach(item => {
    expect(item).toHaveProperty('id');
    expect(item).toHaveProperty('site_id');
    expect(item).toHaveProperty('site_name_long');
    expect(item).toHaveProperty('status');
    expect(item).toHaveProperty('vehicles_launched');
    expect(item).toHaveProperty('details');
  });
});

test('It should return LC-39A info', async () => {
  const data = await SpaceX.getLaunchPad('ksc_lc_39a');
  expect(data).toHaveProperty('site_id', 'ksc_lc_39a');
});

test('It should return no launchpad info', async () => {
  const data = await SpaceX.getLaunchPad('ksc_lc_40a');
  expect(data).toBe(undefined);
});
