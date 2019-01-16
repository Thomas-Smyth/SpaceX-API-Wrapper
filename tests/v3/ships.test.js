import SpaceX from '../../src/index';

// ------------------------------------------------------------
//                       All Ships
// ------------------------------------------------------------

test('It should return all ships', async () => {
  const data = await SpaceX.getAllShips();
  data.forEach(event => {
    expect(event).toHaveProperty('ship_id', expect.any(String));
    expect(event).toHaveProperty('ship_name', expect.any(String));
    expect(event).toHaveProperty('ship_model');
    expect(event).toHaveProperty('ship_type');
    expect(event).toHaveProperty('roles', expect.any(Array));
    expect(event).toHaveProperty('active', expect.any(Boolean));
    expect(event).toHaveProperty('imo');
    expect(event).toHaveProperty('mmsi');
    expect(event).toHaveProperty('abs');
    expect(event).toHaveProperty('class');
    expect(event).toHaveProperty('weight_lbs');
    expect(event).toHaveProperty('weight_kg');
    expect(event).toHaveProperty('year_built');
    expect(event).toHaveProperty('home_port');
    expect(event).toHaveProperty('status');
    expect(event).toHaveProperty('speed_kn');
    expect(event).toHaveProperty('course_deg');
    expect(event).toHaveProperty('position.latitude');
    expect(event).toHaveProperty('position.longitude');
    expect(event).toHaveProperty('successful_landings');
    expect(event).toHaveProperty('attempted_landings');
    expect(event).toHaveProperty('missions');
    expect(event).toHaveProperty('url');
  });
});

// ------------------------------------------------------------
//                      All Ships Error
// ------------------------------------------------------------

test('It should return an empty array', async () => {
  const data = await SpaceX.getAllShips({
    ship_id: 'MRSTEVENN'
  });
  expect(data).toEqual([]);
});

// ------------------------------------------------------------
//                      One Ship
// ------------------------------------------------------------

test('It should return one ship', async () => {
  const data = await SpaceX.getShip('MRSTEVEN');
  expect(data).toHaveProperty('ship_id', 'MRSTEVEN');
});

// ------------------------------------------------------------
//                      One Ship Error
// ------------------------------------------------------------

test('It should return a 404 error msg', async () => {
  const data = await SpaceX.getShip('MRSTEVENN');
  expect(data).toEqual(undefined);
});
