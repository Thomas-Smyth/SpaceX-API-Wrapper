import SpaceX from '../../src/index';

// ------------------------------------------------------------
//                        All Capsules
// ------------------------------------------------------------

test('It should return all v3 capsules', async () => {
  const data = await SpaceX.getAllCapsules();
  data.forEach(item => {
    expect(item).toHaveProperty('capsule_serial');
    expect(item).toHaveProperty('capsule_id');
    expect(item).toHaveProperty('status');
    expect(item).toHaveProperty('original_launch');
    expect(item).toHaveProperty('original_launch_unix');
    expect(item).toHaveProperty('landings');
    expect(item).toHaveProperty('type');
    expect(item).toHaveProperty('details');
    expect(item).toHaveProperty('reuse_count');
  });
});

// ------------------------------------------------------------
//                    All Capsules Error
// ------------------------------------------------------------

test('It should return an empty capsules array', async () => {
  const data = await SpaceX.getAllCapsules({
    capsule_serial: 'C866'
  });
  expect(data).toEqual([]);
});

// ------------------------------------------------------------
//                       One Capsule
// ------------------------------------------------------------

test('It should return capsule C101', async () => {
  const data = await SpaceX.getCapsule('C101');
  expect(data).toHaveProperty('capsule_serial', 'C101');
});

// ------------------------------------------------------------
//                     One Capsule Error
// ------------------------------------------------------------

test('It should return undefined', async () => {
  const data = await SpaceX.getCapsule('C1011');
  expect(data).toEqual(undefined);
});
