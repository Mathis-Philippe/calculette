const { addition, soustraction, multiplication } = require('./calculatrice');

test('additionne 2 + 3 pour donner 5', () => {
  expect(addition(2, 3)).toBe(5);
});

test('soustrait 5 - 2 pour donner 3', () => {
  expect(soustraction(5, 2)).toBe(3);
});

test('multiplie 3 * 4 pour donner 12', () => {
  expect(multiplication(3, 4)).toBe(12);
});