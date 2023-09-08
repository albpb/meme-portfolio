
//Crearemos una función ‘conjetura’ a la que le pasaremos un número y nos los pasos por pantalla
let conjecture = function(n, cad = "") {
    console.log(n, cad);
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
console.log(
conjecture(13));

//Función que dado un número de teléfono nos diga si es válido (true) o no (false).
//Un número de teléfono es válido si tiene una longitud de nueve cifras y todas son números

let validateTelephone = function(t) {
    
    if (t.toString().match(/^\d{9}$/)) {
        return true;
    }else{
        return false;
    }
} 

console.log(validateTelephone(666999666));

let formatTelephone = function (t) {
    let newT = "";
    
    if (validateTelephone(t)){
        for (let index = 0; index < t.toString().length; index++) {
            if (index % 3 == 0 && index > 0) {
                newT +="-" + t.toString()[index] ;
            }else{
                newT += t.toString()[index];
            }

        }
        return newT;
        
    }
}
console.log(formatTelephone(666999666));
console.log(formatTelephone("666999666"));

let validateCIF = function (cif){
    if (cif[0].match(/[a-zA-Z]/) && cif.length == 9) {
        return true;
    }else{
        return false;
    }

}
console.log(validateCIF("B1312412"));
console.log(validateCIF("B1312441j"));

let longer = function (s1, s2) {
    if (s1.length > s2.length) {
        return s1;
    }else{
        return s2;
    }
}
console.log(longer("hola","adios"));

let longerUnlimited = function(s1) {
    let longest = s1.toString();

    for (let i = 1; i < arguments.length; i++) {
        if(arguments[i].length > longest.length){
            longest = arguments[i];
        }
    }

    return longest;

}

console.log(longerUnlimited("hola","adios", "buenas", "como estas"));
