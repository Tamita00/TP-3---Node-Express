const PI = 3.14;

function sumar(x, y) {
    return x + y;
}

function multiplicar(x, y){
    return x * y;
}

function restar(x, y) {
    return x - y;
}
function dividir(x, y) {
    return x / y;
}

function createArray(a, b) { 
    return [a, b]; 
}

export { PI, sumar, multiplicar, restar, dividir, createArray };