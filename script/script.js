/* Variables locales */
let nbAffiche = 0;
let total = 0;
let nombre1 = 0;
let nombre2 = 0;

/* Querys */
let boutons = document.querySelectorAll("button");
let affichage = document.querySelector("#affichage label");
let btnEgal = document.querySelector(".egal");

const disableBtnEgal = () => {
  btnEgal.disabled = true;
};

const enableBtnEgal = () => {
  btnEgal.disabled = false;
};

/* Fonctions */

// disableBtnEgal();

const peuplerNombre = (e) => {
  if (nbAffiche === 0) {
    nbAffiche = e.target.value;
  } else {
    nbAffiche += e.target.value;
  }
  affichage.textContent = nbAffiche;
};

/* Ajout des event listener */
boutons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if ((e.target.value >= 0 && e.target.value < 10) || e.target.value == ".") {
      peuplerNombre(e);
    } else if (e.target.value == "clr") {
      clear();
    } else {
      operation(e.target.value);
    }
  });
});

const test = () => {
  console.log("test");
};

const operation = (op) => {
  if (nombre1 !== 0) {
    nombre2 = nombre1;
    nombre1 = parseFloat(nbAffiche);
    switch (operateur) {
      case "+":
        total = parseFloat(nombre1 + nombre2);
        affichageEtAjustementValeur(op);
        break;
      case "-":
        total = parseFloat(nombre2 - nombre1);
        affichageEtAjustementValeur(op);
        break;
      case "*":
        total = parseFloat(nombre1 * nombre2);
        affichageEtAjustementValeur(op);
        break;
      case "/":
        diviser(nombre1, nombre2, op);
        break;
      case "=":
        affichageEtAjustementValeur(op);
        break;
    }
  } else {
    operateur = op;
    nombre1 = parseFloat(nbAffiche);
    affichage.textContent = nombre1;
    nbAffiche = 0;
  }
};

const affichageEtAjustementValeur = (op) => {
  affichage.textContent = total;
  nbAffiche = 0;
  nombre1 = total;
  operateur = op;
};

const diviser = (nb1, nb2, op) => {
  if (nb1 === 0) {
    clear();
    affichage.textContent = "Division par zéro impossible";
    return;
  }
  total = parseFloat(nb2 / nb1);
  affichage.textContent = total;
  operateur = op;
  nbAffiche = 0;
};

const clear = () => {
  nbAffiche = 0;
  total = 0;
  nombre1 = 0;
  nombre2 = 0;
  affichage.textContent = 0;
};
