import calculateCashback from '../data';

test.each([
  ['above 100000', 1000000, 50000],
  ['on 100000', 100000, 5000],
])('%s', (level, amount, expected) => {
  const calculated = calculateCashback(amount);

  expect(calculated).toBe(expected);
});

test('on 50000', () => {
  const calculated = calculateCashback(50000);
  const expected = 1000;

  expect(calculated).toBe(expected);
});

test('on 10000', () => {
  const calculated = calculateCashback(10000);
  const expected = 200;

  expect(calculated).toBe(expected);
});

test('on 5000', () => {
  const calculated = calculateCashback(5000);
  const expected = 50;

  expect(calculated).toBe(expected);
});

test('on 1001', () => {
  const calculated = calculateCashback(1001);
  const expected = 11;

  expect(calculated).toBe(expected);
});

test('on 1000', () => {
  const calculated = calculateCashback(1000);
  const expected = 10;

  expect(calculated).toBe(expected);
});

test('on 999', () => {
  const calculated = calculateCashback(999);
  const expected = 0;

  expect(calculated).toBe(expected);
});

test('on 100', () => {
  const calculated = calculateCashback(100);
  const expected = 0;

  expect(calculated).toBe(expected);
});
