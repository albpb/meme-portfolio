/*

    ejercicio tocho

*/

let validateNumbers = (n) => n > 0;
let validateReference = (str) => str.match(/^[A-Z]{3}\d{5}$/);

function Product(name, reference, price, stock){
    
	if (name == undefined || reference == undefined || price == undefined || stock == undefined
	|| (!validateNumbers(price) || !validateNumbers(stock))
	|| (!validateReference(reference))
	){
		return null;
	}
	this.name = name;
	this.reference = reference;
	this.price = price;
	this.stock = stock;
}
let tname = "Empanadilla", treference = "ABC12345", tprice = 3, tstock = 65;
let test1 = new Product(tname, treference, tprice, tstock);
/*
let test2 = new Product(tname);
let test3 = new Product(tname, treference);
let test4 = new Product(tname, "ASVCX442412", tprice, tstock);
let test5 = new Product(tname, treference, 0, tstock);
let test6 = new Product(tname, treference, tprice, 0);
*/


let sampleProducts = function (quantity) {
    let array = [];

    for (let i = 0; i < quantity; i++) {
        array.push(new Product("product"+i, refGenerator(i), randomizer(50, 2), randomizer(200, 10)));
    }
    return array;
}


let refGenerator = function(index) {
    // lo siento pero no se como hacer para que si es más de 26 q funcione
    let abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 
    let abc3 = abc.map(item => item + item + item);
    let cifras = 5;

    let i = Math.floor(index / 10)
    
    return abc3[i] + insertZeros(index, 5);
        
}

let randomizer = function (max, min) {
    return Math.ceil(Math.random()* (max - min) + min);
}

let insertZeros = function (n, nZeros) {
    let string = "";
    let digitos = n.toString().length;
    nZeros -= digitos;

    for (let i = 0; i < nZeros; i++) {
        string += "0";
    }
    string += n;
    return string;
    
}


let productArray = [];
const quantity = 100;

productArray = sampleProducts(quantity);
console.log(productArray);


/*

EJERCICIOS JS 

*/
let conjecture = function(n, cad = "") {
//    console.log(n, cad);
    if (n != 1) {
        if (n % 2 == 0) {
            return conjecture(n / 2, cad += n + " ");
        }else if (n % 2 == 1) {
            return conjecture(n * 3 + 1, cad += n + " ")
        }
    }else{
        return cad + "1";
    }
    
}
// MODIFICAR PARA QUE SALGA NUMERO Y PASOS
/*
}*/
let topCollatz2 = function (n, ntop) {
    let arr = [];
    let current;
    for (let i = 1; i <= n; i++) {
        current = conjecture(i);
        arr.push( { //es mejor usar push que utilizar indice
            number: getFirstNum(current),
            steps: current,
            numberOfSteps: current.split(" ").length
        });
    }
    arr.sort((a,b) => (b.numberOfSteps - a.numberOfSteps));

    return arr.slice(0, ntop);
}

function compareCollatz(a, b) {
    a = a.numberOfSteps;
    b = b.numberOfSteps;
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
}

let getFirstNum = function (str) {
    return str.substring(0, str.indexOf(" "));;
}
/*
let fillBlanks = function (n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        array[i] = {number: "0", steps: "0"};
    }
    return array;
}*/


/*
 * 
 * mas funciones array
 * 
 */

let getByReference = function(products, ref){
    let arr = [];
    if (ref.length <= 3) {
        // Filter
        products.forEach((item) => {
            if (item.reference.startsWith(ref)) {
                arr.push(item.reference);
            }
        });
    }
    return arr;
}

let getInventory = function(products) {
    let inventory = 0;

    // Reduce
    products.forEach((item) => {
        inventory += item.stock;
    });
    return inventory;
}

let getValuedInventory = function(products) {
    let inventory = 0;

    products.forEach((item) => {
        inventory += item.stock * item.price;
    });
    return inventory;
}

let getPriceRange = function(products, min, max){
    let arr = [];

    products.forEach((item) => {
        if (item.price >= min && item.price <= max) {
            arr.push(item);
        }
    });
    return arr;
}

function compareNumeric(a, b) {
    if (a.price*a.stock < b.price*b.stock) return 1;
    if (a.price*a.stock == b.price*b.stock) return 0;
    if (a.price*a.stock > b.price*b.stock) return -1;
}

let getSortValuedInventory = function(arr) {
    return arr.sort(compareNumeric);
}
