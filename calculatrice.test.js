const { addition, soustraction } = require('./calculatrice');

test('additionne 2 + 3 pour donner 5', () => {
  expect(addition(2, 3)).toBe(5);
});

test('soustrait 5 - 2 pour donner 3', () => {
  expect(soustraction(5, 2)).toBe(3);
});