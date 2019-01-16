import SpaceX from '../../src/index';

test('It should return company info', async () => {
  let data = await SpaceX.info();
  expect(data).toHaveProperty('name', 'SpaceX');
  expect(data).toHaveProperty('founder', 'Elon Musk');
  expect(data).toHaveProperty('founded', 2002);
  expect(data).toHaveProperty('employees');
  expect(data).toHaveProperty('vehicles');
  expect(data).toHaveProperty('launch_sites');
  expect(data).toHaveProperty('test_sites');
  expect(data).toHaveProperty('ceo');
  expect(data).toHaveProperty('cto');
  expect(data).toHaveProperty('coo');
  expect(data).toHaveProperty('cto_propulsion');
  expect(data).toHaveProperty('valuation');
  expect(data).toHaveProperty('headquarters.address', 'Rocket Road');
  expect(data).toHaveProperty('headquarters.city', 'Hawthorne');
  expect(data).toHaveProperty('headquarters.state', 'California');
  expect(data).toHaveProperty('summary');
});
