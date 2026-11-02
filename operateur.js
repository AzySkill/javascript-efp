// Exercices sur les opérateurs
// Travaillez dans le main.js du setup, ouvrez la page avec Live Server et gardez la console ouverte (F12).

// 1. Opérateurs arithmétiques
// Déclarez a valant 17 et b valant 5
// Affichez leur somme, leur différence, leur produit, leur quotient et le reste de la division de a par b
// Déclarez un nombre n, puis affichez true s'il est pair, false sinon (avec % et ===)
const a = 17;
const b = 5;

console.log("Somme :", a + b);
console.log("Différence :", a - b);
console.log("Produit :", a * b);
console.log("Quotient :", a / b);
console.log("Reste :", a % b);



// 2. Opérateurs d'affectation
// Voici une suite d'opérations:
// let counter = 5;
// counter += 3; 8
// counter *= 2; 16
// counter -= 4; 12
// counter %= 5; 2
// Avant d'exécuter, notez la valeur de counter après chaque ligne
// Vérifiez en affichant counter après chaque ligne

let counter = 5;
console.log(counter);
// 5
counter += 3;
console.log(counter);
// 8
counter *= 2;
console.log(counter);
// 16
counter -= 4;
console.log(counter);
// 12
counter %= 5;
console.log(counter);
// 2

// 3. Conversions automatiques
// Avant d'exécuter, notez ce que chaque ligne va afficher:
// console.log('5' + 1);'51'
// console.log('5' - 1);'4'
// console.log('5' * '2');'10'
// console.log(5 == '5'); true 
// console.log(5 === '5'); false
// Vérifiez, et comparez avec vos prédictions
// Pourquoi préfère-t-on === à == ?
// le triple egale cest stritement le meme  il compare le type et la valeur 
// le double  ne compare pas les types 




// 4. Chaînes de caractères
// Déclarez firstName valant 'Alice' et age valant 30
// Affichez Bonjour Alice, vous avez 30 ans en utilisant +
// Affichez la même phrase avec un template literal
const firstName = "Alice";
let age = 30;
console.log(`Bonjour ${firstName},vous avez ${age} 30 ans. `)
console.log("Bonjour " + firstName +",vous avez " + age + " ans.")




// 5. Opérateurs logiques et ternaire
// Déclarez age valant 30, hasValidEmail valant true et isActive valant false
// Déclarez isValidUser: vrai si l'âge est d'au moins 18 ans, l'email valide et le compte actif
// Déclarez isInRange: vrai si l'âge est compris entre 18 et 65 ans (inclus)

// Avec un ternaire, affichez 'Accès autorisé' si isValidUser est vrai, 'Accès refusé' sinon

// Changez les valeurs de départ et vérifiez que les résultats suivent
const ages = 30;
const hasValidEmail = true;
const isActive = false ;
const isValidUser = ages >= 18 && hasValidEmail && isActive;
const isInRange = ages >= 18 && ages <= 65;

console.log(isValidUser, isInRange);



// 6. Valeur par défaut: || ou ?? ?
// Une quantité de 0 est une valeur valide. Si la quantité est absente (null ou undefined), on veut 1 par défaut.
// Déclarez const quantity = 0;
// Affichez quantity || 1, puis quantity ?? 1
// Lequel des deux donne le bon résultat ? Pourquoi ?



// 7. Chaînage optionnel
// Déclarez const user = { name: 'Alice' };
// Affichez user.address.city: que se passe-t-il ?
// Corrigez avec ?.: qu'affiche la console maintenant ?
// Combinez avec ?? pour afficher 'Ville inconnue' quand la ville est absente



// 8. Bonus: spread
// Pour aller plus loin.
// Déclarez const fruits = ['apple', 'banana'];
// Créez moreFruits, une copie de fruits avec 'cherry' en plus, sans modifier fruits
// Déclarez const profile = { name: 'Alice' }; et const settings = { theme: 'dark' };
// Créez account, qui fusionne les deux objets