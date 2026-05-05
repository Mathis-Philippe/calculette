const { addition, soustraction, multiplication, ajouterHistorique, recupererHistorique } = require('./calculatrice');

test('additionne 2 + 3 pour donner 5', () => {
  expect(addition(2, 3)).toBe(5);
});

test('soustrait 5 - 2 pour donner 3', () => {
  expect(soustraction(5, 2)).toBe(3);
});

test('multiplie 3 * 4 pour donner 12', () => {
  expect(multiplication(3, 4)).toBe(12);
});

test("ajoute un calcul à l'historique et le récupère", () => {
  ajouterHistorique('2 + 3 = 5');
  const historique = recupererHistorique();
  expect(historique).toContain('2 + 3 = 5');
});