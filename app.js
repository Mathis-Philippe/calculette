let valeurCourante = '0';
let valeurPrecedente = '';
let operationEnCours = null;

const ecran = document.getElementById('ecran');
const listeHistorique = document.getElementById('liste-historique');

function mettreAJourEcran() {
    ecran.value = valeurCourante;
}

function entrerChiffre(chiffre) {
    if (valeurCourante === '0') {
        valeurCourante = chiffre.toString();
    } else {
        valeurCourante += chiffre.toString();
    }
    mettreAJourEcran();
}

function effacerEcran() {
    valeurCourante = '0';
    valeurPrecedente = '';
    operationEnCours = null;
    mettreAJourEcran();
}

function choisirOperation(operation) {
    valeurPrecedente = valeurCourante;
    valeurCourante = '0';
    operationEnCours = operation;
}

function calculer() {
    if (operationEnCours === null || valeurPrecedente === '') {
        return; 
    }

    const a = parseFloat(valeurPrecedente);
    const b = parseFloat(valeurCourante);
    let resultat = 0;

    if (operationEnCours === '+') resultat = addition(a, b);
    if (operationEnCours === '-') resultat = soustraction(a, b);
    if (operationEnCours === '*') resultat = multiplication(a, b);  
    if (operationEnCours === '/') resultat = division(a, b);

    const texteCalcul = `${a} ${operationEnCours} ${b} = ${resultat}`;
    ajouterHistorique(texteCalcul);
    
    valeurCourante = resultat.toString();
    operationEnCours = null;
    valeurPrecedente = '';
    
    mettreAJourEcran();
    afficherHistorique();
}

function afficherHistorique() {
    listeHistorique.innerHTML = '';
    const historique = recupererHistorique();
    
    historique.forEach(calcul => {
        const li = document.createElement('li');
        li.textContent = calcul;
        listeHistorique.appendChild(li);
    });
}

function viderHistorique() {
    effacerHistorique();
    afficherHistorique();
}