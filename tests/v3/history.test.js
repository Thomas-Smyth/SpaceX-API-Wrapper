import SpaceX from '../../src/index';

test('It should return all history', async () => {
  const data = await SpaceX.getAllHistory();
  data.forEach(event => {
    expect(event).toHaveProperty('id', expect.any(Number));
    expect(event).toHaveProperty('title', expect.any(String));
    expect(event).toHaveProperty('event_date_utc', expect.any(String));
    expect(event).toHaveProperty('event_date_unix', expect.any(Number));
    expect(event).toHaveProperty('flight_number');
    expect(event).toHaveProperty('details', expect.any(String));
    expect(event).toHaveProperty('links.reddit');
    expect(event).toHaveProperty('links.article');
    expect(event).toHaveProperty('links.wikipedia');
  });
});
