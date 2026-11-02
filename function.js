
// 1. Déclarer et appeler
// Créez une fonction greet qui prend un paramètre name et retourne "Hello, [name]!"
// Créez une fonction calculateArea qui prend deux paramètres width et height et retourne l'aire d'un rectangle
// Créez une fonction isEven qui prend un nombre et retourne true si le nombre est pair, false sinon
// Appelez chaque fonction et affichez le résultat dans la console
function greet (name){
    return "Hello, "+ name + "!"
};

function calculateArea (width,height){
    return width * height
};

function isEven(number){
    if (number % 2 === 0){return true;}
    return false;
};
console.log(greet("Anthony")); 
console.log (calculateArea(10,5));
console.log (isEven(15));


// 2. return ou console.log ?
// Copiez ce code et exécutez-le:


// function getPrice(quantity) {
// 	console.log(quantity * 2.5);
// }

// const price = getPrice(4);
// console.log(`Total: ${price} €`);
// Qu'affiche la console ? Pourquoi price ne contient-il pas le prix ?
// Corrigez la fonction pour que la dernière ligne affiche Total: 10 €.
function getPrice(quantity) {
	return(quantity * 2.5);
}

const price = getPrice(4);
console.log(`Total: ${price} €`);
// 10
// Total: undefined €
// le getPrice (4) execute le console.log pas un return
// la fonction n'a pas de return:donc  elle renvoie undefined 
// il faut changer le console.log par un return


// 3. Paramètres et valeurs par défaut
// Créez une fonction createUser qui prend trois paramètres:
// name (obligatoire)
// age (optionnel, valeur par défaut: 18)
// isActive (optionnel, valeur par défaut: true)
// La fonction doit retourner un objet avec ces propriétés
// Appelez createUser('Bob'), puis createUser('Charlie', 25, false), et affichez les résultats
// Retirez la valeur par défaut de age et rappelez createUser('Bob'): que vaut age ?

function createUser (name,age,isActive = true){
return {name , age, isActive};
};
console.log(createUser("Bob"));
console.log(createUser("Charlie", 25, false));
console.log(createUser("BOb"));

// 4. Trois syntaxes
// Réécrivez greet sous forme d'expression de fonction, dans une constante greetExpression
// Réécrivez-la encore sous forme de fonction fléchée, dans une constante greetArrow
// Pour chacune des trois versions, déplacez l'appel avant la déclaration. Testez-les une par une: que se passe-t-il ?
// Comment expliquer la différence ?
const greetexpression = function greet(name){
    return "Hello, "+ name + "!"
}

// 5. Portée
// Créez une variable globalVar avec la valeur 'global'
// Créez une fonction testScope qui:
// Déclare une variable localVar avec la valeur 'local'
// Affiche la valeur de globalVar
// Affiche la valeur de localVar
// Appelez la fonction et observez les résultats
// Essayez d'afficher localVar en dehors de la fonction: que se passe-t-il ?
 const globalVar = "global";
 console.log(globalVar)
function testScope (){
    const localVar ="local";
};
console.log(testScope)


// 6. Pure ou pas ?
// Pour chacune de ces fonctions, dites si elle est pure, et pourquoi.


// function add(a, b) {
// 	return a + b;
// } pure  car il utilise que a et b  rien dne change a lexterieur 

// let total = 0;
// function addToTotal(n) {
// 	total += n;
// 	return total;
// }pas pure car total change 

// function rollDice() {
// 	return Math.floor(Math.random() * 6) + 1;
// } pas pure = agit comme un des


// 7. Bonus: un compteur privé
// Pour aller plus loin.

// Créez une fonction createCounter qui retourne un objet avec deux méthodes:
// increment() ajoute 1 au compteur et retourne sa valeur
// getCount() retourne la valeur du compteur
// Le compteur ne doit pas être accessible directement depuis l'extérieur
// Créez deux compteurs: sont-ils indépendants ?
function createCounter() {
	let count = 0; 

	return {
		increment: function () {
			count++;
			return count;
		},
		getCount: function () {
			return count;
		}
	};
}

const counterA = createCounter();
const counterB = createCounter();

console.log(counterA.increment()); // 1
console.log(counterA.increment()); // 2
console.log(counterB.increment()); // 1
console.log(counterA.getCount()); // 2
console.log(counterB.getCount()); // 1
console.log(counterA.count); 