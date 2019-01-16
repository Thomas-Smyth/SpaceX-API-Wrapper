import SpaceX from '../../src/index';

// ------------------------------------------------------------
//                     All Payloads Test
// ------------------------------------------------------------

test('It should return all payloads', async () => {
  const data = await SpaceX.getAllPayloads();
  expect(data[0]).toHaveProperty('payload_id', 'FalconSAT-2');
});

test('It should return all Dragon 1.0 payloads', async () => {
  const data = await SpaceX.getAllPayloads({
    payload_type: 'Dragon 1.0'
  });
  expect(data.length).toBe(5);
});

test('It should return 5 Satellite payloads in decending order', async () => {
  const data = await SpaceX.getAllPayloads({
    payload_type: 'Satellite',
    order: 'desc',
    limit: 5
  });
  expect(data.length).toBe(5);
});

// ------------------------------------------------------------
//                     One Payload Test
// ------------------------------------------------------------

test('It should return only the CASSIOPE payload', async () => {
  const data = await SpaceX.getPayload('CASSIOPE');
  expect(data.payload_id).toBe('CASSIOPE');
});

// ------------------------------------------------------------
//                     One Payload Error Test
// ------------------------------------------------------------

test('It should return 404 with error msg', async () => {
  const data = await SpaceX.getPayload('CASSIOP');
  expect(data).toEqual(undefined);
});
