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



//14. Mi solución no está conseguida. Añado la de Vero con filter y reviso después.
/*
function eliminarDuplicados(arrOriginal) {
    let arrSinDuplicados = [];
   
    for (let i=0; i<arrOriginal.length ; i++){
        for (let j=0; j<arrOriginal.length; j++){
            if (arrOriginal[i] !== arrOriginal[j]) { 
              if (arrSinDuplicados.length>0){
                 for (k=0; k< arrSinDuplicados.length; k++){
                    //comprobando que no se ha introducido ya el valor en la lista.
                   while (arrOriginal[i] !=== arrSinDuplicados[k]){
                        arrSinDuplicados.push(arrOriginal[j]);
                    }
                  
            }
        }
    }
    return arrSinDuplicados;
}
 
/*
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
//Solución Alberto eliminarDuplicados también con filter
/*
function eliminarDuplicados(cosota) {
    let resultao = cosota.filter((item, index) => {
        return cosota.indexOf(item) === index;
    });
    return resultao;
};
*/
        //--Iteraciones :european_castle: proyecto :european_castle

        // Arrays: 15, 16, 17, 18


/*
        const arrayNumerosNeg = arrNumNeg => {
            for (i = 0; i > (-9); i--) {
                arrNumNeg.push(i);
                return arrNumNeg;
            }
        }

        let holaMundo = ['Hola', 'Mundo'];

        let loGuardoTodo = ['hola', 'que', '23', '42.33', 'tal'];

        let arrayDeArrays = [[756, 'nombe'], [225, 'apellido'], [298, 'direccion']];

        //Funciones: 19, 20, 21, 22

        const multipicacion = (c, d) => {
            return c * d;
        }

        const division = (e, f) => {
            return e / f;
        }

        const esPar = g => {
            return g % 2 === 0;
        }

        let arrFunciones = [{ suma: (h, j) => (h + j) }, { resta: (k, l) => (k - l) }, { multiplicacion: (m, n) => (m * n) }];

        //Mezclando arrays y funciones: 23, 24, 25, 26.

        const ordenarArray2 = arrArr2 => {
            arrArr2.toSorted((a, b) => (b - a));
        }

        const obtenerImpares = arrObtImp => {
            arrArr2.forEach(arrArr2.[] % 2 === 0);
        }
        */