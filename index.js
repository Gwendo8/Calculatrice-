const button = document.querySelectorAll(".btn");
const result = document.querySelector("#res");
console.log(button);
console.log(result);

button.forEach((button) => {
  button.addEventListener("click", (e) => {
    // le += va permettre d'ajouter a la suite les nombres car le textContent va écraser a chaque fois qu'on tape un chiffre
    // Le textContent c'est parce qu'on veux le resultat dans un h3
    // On met innerHTML pour que sa nous affiche ce qu'il y'a dans la donnée mais pas dans l'id par exemple pour <button class="btn" id="N1">1</button> ça va nous afficher le 1
    result.textContent += e.target.innerHTML;
  });
});

equal.addEventListener("click", () => {
  // eval permet de donner le resulat du calcul
  result.textContent = eval(result.textContent);
});

clear.addEventListener("click", () => {
  // les "" permet que lorsque l'on clique sur le bouton clear sa efface son contenu car son contenu de base qu'on vient de déclarer y'a rien dedans
  result.textContent = "";
});
