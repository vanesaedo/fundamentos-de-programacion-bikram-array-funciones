//--Iteraciones :crossed_swords: Pair Programming :crossed_swords:

//Arrays: 1,2,3,4.

let arrayVacio = [];

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayNumerosPares = [0, 2, 4, 6, 8];

const arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

//Funciones: 5, 6, 7, 8, 9.

const suma = (a, b) => { return (a + b); };

const potenciacion = (a, b) => { return (a ** b); };

const separarPalabras = param => {
    return param.split(' ');    
}

function repetirString(word, num) {

    let wordRepeated = [];
    let sentenceResult = '';

    for (let i = 0; i < num; i++) {
        wordRepeated.push(word);
        sentenceResult = wordRepeated.join('');
    }
    return sentenceResult;
}

function esPrimo(numero) {

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}


//Mezclando arrays y funciones: 10, 11, 12, 13, 14.

const ordenarArray = arrNum => {
    return arrNum.toSorted((a, b) => (a - b));
}

const obtenerPares = arrInicial => {
    let arrPares = [];
    for (let i = 0; i < arrInicial.length; i++) {
        if (arrInicial[i] % 2 === 0) {
            arrPares.push(arrInicial[i]);
        }
    }
    return arrPares;
}

function pintarArray(array){
    return `[${array.join(', ')}]`;
  }

const arrayMapi = (arr, fun) => arr.map(fun);

function eliminarDuplicados(arrayOriginal){
    let arraySinDuplicados = [];
        arrayOriginal.sort((a,b) => (a-b));
    for (let i=0; i<arrayOriginal.length; i++){
    if ((arrayOriginal[i] === arrayOriginal[(i+1)]) || (i == 0)){
        i=i;
        } else if(i == ((arrayOriginal.length) - 1)) {
            arraySinDuplicados.push(arrayOriginal[i]);
        } else {   
            arraySinDuplicados.push(arrayOriginal[i]);
        }
    }
        return arraySinDuplicados;
    }

/*

// Solucíon con aporte de Adrián

function eliminarDuplicados(arrayOriginal){
    let arraySinDuplicados = [];
        arrayOriginal.sort((a,b) => (a-b));
    for (let i=0; i<arrayOriginal.length; i++){
        if (arrayOriginal[i] !== arrayOriginal[(i + 1)]) {
            arraySinDuplicados.push(arrayOriginal[i]);
        }
    }
    return arraySinDuplicados;
}

//Solución Vero eliminarDuplicados

function eliminarDuplicados(array) {
  let nuevoArray = [];
  for (i = 0; i < array.length; i++) {
      if (!nuevoArray.includes(array[i])) {
        nuevoArray.push(array[i]);
      }
  }
  return nuevoArray;
}
*/

//--Iteraciones :european_castle: proyecto :european_castle

// Arrays: 15, 16, 17, 18

let arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];

let holaMundo = ['Hola', 'Mundo'];

let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

//Funciones: 19, 20, 21, 22

function multiplicacion (c, d) {
    resultado = c*d;
    return resultado;
}

const division = (e, f) => {
    return e / f;
}

const esPar = g => {
    return g % 2 === 0;
}
  

 arrayFunciones = [function suma (a,b){return (a+b);} ,function resta (a,b) {return (a-b);}, function multiplicacion(a,b){return (a*b);}];

 //Mezclando arrays y funciones: 23, 24, 25, 26.

function ordenarArray2 (arrNum){
            arrNum = arrNum.sort((a, b) => (b - a));
            return arrNum;
        }

function obtenerImpares(arrNum){
    let arrImp = [];
    arrNum = arrNum.sort((a,b)=>(a-b));
    for (let i=0; i < arrNum.length; i++){
        if (arrNum[i]%2 !== 0){
            arrImp.push(arrNum[i]);
        }
    }
    return arrImp;
}

function sumarArray(Array){
    Array = Array.parseInt;
   for (let i=0; i < (Array.length -1); i++){
 
   Array[0] = Array[0] + Array[(i+1)];
   }
   let resultado = Array[0];
   return resultado;
   }
