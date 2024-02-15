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
    return param.split(',');
};

function repetirString(word, num) {

    let wordRepeated = [];
    let sentenceResult = '';

    for (let i = 0; i < num; i++) {
        wordRepeated.push(word);
        sentenceResult = wordRepeated.join();
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

const pintarArray = arrPintar => {
    return (`'[${arrPintar}]'`);
}

const arrayMapi = (arrMapi, func) => {
    for (let i = 0; i < arrMapi.length; i++) {
        func(arrMapi[i]);
    }
}

//-------HASTA AQUÍ---------

//NO FUNCIONA

/*-------

function eliminarDuplicados(arrOriginal) {
    let arrSinDuplicados = [];
//Miro el primer item del array original
    for (let i = 0; i < arrOriginal.length; i++) {
//Comparo i con los demás items mediante el contador j 
        for (let j = 0; (j < arrOriginal.length); j++) {
//Compruebo con j !=i que no lo estoy comparando consigo mismo.
            while (j != i) {
//Si los valores de ambas posiciones coinciden...
                if (arrOriginal[i] === arrOriginal[j]) {
//... miro a ver si ya está guardado, y si no lo está, lo guardo, si lo está, salgo.
                    for (let l = 0; l < arrSinDuplicados.length; l++) {
                        if (arrOriginal[i] !== arrSinDuplicados[l]) {
                            (arrSinDuplicados).push(arrOriginal[i]);
                        } else {
                            break;
                        }
                    } 
                } else {
                    break;
                }          
            }              
        }
    }
    return arrSinDuplicados;
    }
           
    
        16	arrayOriginal = [22, 22, 7, 9, 9, 8, 3, 1];
        17	eliminarDuplicados(a);

  /*      function eliminarDuplicados(arrOriginal) {
            let arrDuplicados = [];

            for (let i = 0; (i < arrOriginal.length); i++) {
                //let hallado=false;
                for (let j = 0; j < arrDuplicados.length; j++) {
                    if (arrOriginal[i] === arrDuplicados[j]) {
                        hallado = true;
                        break;
                    }

                }
                if (!hallado) arrDuplicados.push(arrOriginal[i])
            }
            return arrDuplicados;
        }
*/
        //--Iteraciones :european_castle: proyecto :european_castle

        // Arrays: 15, 16, 17, 18

/*--No revisado

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
        }*/