/*
var boutonTest = document.querySelector("#boutonTest");

const couleur = () => {
  document.body.style.backgroundColor = "red";
};

boutonTest.addEventListener("click", couleur);
*/

const additioner = (nb1, nb2) => {
  return nb1 + nb2;
};

const soustraitre = (nb1, nb2) => {
  return nb1 - nb2;
};

const multiplier = (nb1, nb2) => {
  return nb1 * nb2;
};

const diviser = (nb1, nb2) => {
  if (nb2 === 0) {
    return "Division par zéro impossible";
  }
  return nb1 / nb2;
};

const operation = (operateur, nb1, nb2) => {
  switch (operateur) {
    case "+":
      return additioner(nb1, nb2);
    case "-":
      return soustraitre(nb1, nb2);
    case "*":
      return multiplier(nb1, nb2);
    case "/":
      return diviser(nb1, nb2);
  }
};
