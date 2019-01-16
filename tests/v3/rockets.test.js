import SpaceX from '../../src/index';

import customMatchers from '../utilities/custom-asymmetric-matchers';

// ------------------------------------------------------------
//                        Rockets
// ------------------------------------------------------------

test('It should return all rocket info', async () => {
  const data = await SpaceX.getAllRockets();
  expect(data).toHaveLength(4);
  expect(data[0]).toHaveProperty('rocket_name', 'Falcon 1');
  expect(data[1]).toHaveProperty('rocket_name', 'Falcon 9');
  expect(data[2]).toHaveProperty('rocket_name', 'Falcon Heavy');
  expect(data[3]).toHaveProperty('rocket_name', 'Big Falcon Rocket');

  data.forEach(item => {
    expect(item).toHaveProperty('id', expect.any(Number));
    expect(item).toHaveProperty('rocket_id', expect.any(String));
    expect(item).toHaveProperty('rocket_name', expect.any(String));
    expect(item).toHaveProperty(
      'rocket_type',
      expect.stringMatching(/^(?:rocket|capsule)$/)
    );
    expect(item).toHaveProperty('active', expect.any(Boolean));
    expect(item).toHaveProperty('stages', expect.any(Number));
    expect(item).toHaveProperty('boosters', expect.any(Number));
    expect(item).toHaveProperty('cost_per_launch', expect.any(Number));
    expect(item).toHaveProperty('success_rate_pct', expect.any(Number));
    expect(item).toHaveProperty(
      'first_flight',
      expect.stringMatching(/^(?:[0-9]{4}-[0-9]{2}-[0-9]{2}|TBD)$/)
    );
    expect(item).toHaveProperty('country', expect.any(String));
    expect(item).toHaveProperty('company', expect.any(String));
    expect(item).toHaveProperty('height', customMatchers.length());
    expect(item).toHaveProperty('diameter', customMatchers.length());
    expect(item).toHaveProperty('mass', customMatchers.mass());
    expect(item).toHaveProperty('payload_weights', expect.any(Array));
    item.payload_weights.forEach(weight => {
      expect(weight).toEqual(customMatchers.payloadWeight());
    });
    expect(item).toHaveProperty('first_stage', customMatchers.vehicleStage());
    expect(item).toHaveProperty('second_stage', customMatchers.vehicleStage());
    expect(item).toHaveProperty('flickr_images');
    expect(item).toHaveProperty('wikipedia', expect.any(String));
    expect(item).toHaveProperty('description', expect.any(String));
  });
});

test('It should return Falcon 1 info', async () => {
  const data = await SpaceX.getRocket('falcon1');
  expect(data).toHaveProperty('rocket_name', 'Falcon 1');
  expect(data).toHaveProperty('stages', 2);
  expect(data).toHaveProperty('cost_per_launch');
  expect(data).toHaveProperty('success_rate_pct');
  expect(data).toHaveProperty('first_flight', '2006-03-24');
  expect(data).toHaveProperty('country');
  expect(data).toHaveProperty('company', 'SpaceX');
  expect(data).toHaveProperty('flickr_images');
  expect(data).toHaveProperty('wikipedia');
  expect(data).toHaveProperty('description');
});

test('It should return Falcon Heavy info', async () => {
  const data = await SpaceX.getRocket('falconheavy');
  expect(data).toHaveProperty('rocket_name', 'Falcon Heavy');
  expect(data).toHaveProperty('stages', 2);
  expect(data).toHaveProperty('cost_per_launch');
  expect(data).toHaveProperty('success_rate_pct');
  expect(data).toHaveProperty('first_flight');
  expect(data).toHaveProperty('country');
  expect(data).toHaveProperty('company', 'SpaceX');
  expect(data).toHaveProperty('flickr_images');
  expect(data).toHaveProperty('wikipedia');
  expect(data).toHaveProperty('description');
});
