const { sum, multiply } = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// This test is intentionally incorrect to demonstrate a failing test case
test('multiplies 3 * 4 to equal 12', () => {
  expect(multiply(3, 4)).toBe(11);
});
