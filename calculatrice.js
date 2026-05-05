function addition(a, b) {
  return a + b;
}

function soustraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

let historique = [];

function ajouterHistorique(calcul) {
  historique.push(calcul); 
}

function recupererHistorique() {
  return historique;
}

function effacerHistorique() {
  historique = [];
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { addition, soustraction, multiplication, division, ajouterHistorique, recupererHistorique, effacerHistorique };
}