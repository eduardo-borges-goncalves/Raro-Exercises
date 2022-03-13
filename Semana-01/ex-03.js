//////////// EXERCÍCIO I
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 1. Faça um algoritmo que calcule a fórmula de equação quadrática 
// ("fórmula de bháskara"). 
var qualTriangulo = function (a, b, c) {
    var equilatero = a === b && a === c;
    var isosceles = a === b && b !== c ||
        b === c && b !== a ||
        a === c && b !== a;
    if (equilatero)
        console.log('Este é um triângulo equilatero');
    if (isosceles)
        console.log('Este é um triângulo isósceles');
    else
        console.log('Este é um triângulo escaleno');
};
qualTriangulo(10, 11, 12);
//////////// EXERCÍCIO 2
// 2. Faça um algoritmo que recebe três valores numéricos, `a`, `b` e `c`.
// A partir dos valores recebidos, você precisa verificar se os valores forma 
// um `triângulo equilátero`, um `triângulo isósceles` ou um triângulo escaleno.
var baskhara = function (a, b, c) {
    var delta = Math.pow(b, 2) - (4 * a * c);
    var denominador = 2 * a;
    var xI = (-b + Math.sqrt(delta)) / denominador;
    var xII = (-b - Math.sqrt(delta)) / denominador;
    if (delta < 0)
        console.log("Os valores não apresentam resultados reais.");
    else
        console.log("Aqui est\u00E3o as ra\u00EDzes de sua equa\u00E7\u00E3o: x': ".concat(xI, ", x\": ").concat(xII, "."));
};
baskhara(1, -1, -6);
////////////  EXERCÍCIO 3
// 3. Faça um algoritmo que recebe um array de numeros, e retorne um novo
// array, com os objetos ordenados. 
// Espera-se que você construa o algoritmo por completo. `Dica`: boas escolhas
// para esta implementação: `bubble sort` ou `selection sort`.
var array1 = [399, -20, 398, 987, 397, 6, 5, 7, -800, 40, 1, 2, 2, 2, 2, 3, 50, 50, 50, 50, 50, 3, 100, 1, 75, -10];
var ordenadorDeArray = function (array) {
    var arrayCopy = __spreadArray([], array, true);
    var index = 0;
    var novoArray = [];
    while (arrayCopy.length) {
        var lowerValue = arrayCopy[0];
        index = 0;
        for (var j = 0; j < arrayCopy.length; j++) {
            if (lowerValue > arrayCopy[j + 1]) {
                lowerValue = arrayCopy[j + 1];
                index = j + 1;
            }
            if (j + 1 === arrayCopy.length) {
                arrayCopy.splice(index, 1);
                novoArray.push(lowerValue);
            }
        }
    }
    console.log("Aqui est\u00E1 seu array com os n\u00FAmeros em ordem crescente:\n     ".concat(novoArray, "."));
};
ordenadorDeArray(array1);
//////////// EXERCÍCIO 4
// 4. Implementar a união dos grupos a e b. Os valores do objeto resultante 
// devem ser todos únicos
var novoArray = [];
var a = [1, 2, 3, 4, 5, 6];
var b = [4, 4, 5, 6, 7, 8];
var union = function (a, b) {
    novoArray = __spreadArray(__spreadArray([], a, true), b, true);
    for (var index = 0; index < novoArray.length; index++) {
        for (var j = 1; j < novoArray.length; j++) {
            if (index !== j) {
                novoArray[index] === novoArray[j] ?
                    novoArray.splice(j, 1) :
                    novoArray;
            }
        }
    }
    console.log("Aqui est\u00E1 a uni\u00E3o de seus dois arrays: ".concat(novoArray));
};
union(a, b);
//////////// EXERCÍCIO 5
// 5. Implementar a interseção dos gupos a e b.
var intersecao = function (a, b) {
    novoArray = [];
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var index = a_1[_i];
        for (var _a = 0, b_1 = b; _a < b_1.length; _a++) {
            var j = b_1[_a];
            if (index === j) {
                novoArray.push(index);
                break;
            }
        }
    }
    console.log("Aqui est\u00E1 a interse\u00E7\u00E3o de seus dois arrays: ".concat(novoArray));
};
intersecao(a, b);
////////// EXERCÍCIO 6
// 6. Implementar a diferença de a e b
var diferenca = function (a, b) {
    novoArray = [];
    var diferentElement = 0;
    var diferentExist = true;
    for (var _i = 0, a_2 = a; _i < a_2.length; _i++) {
        var aElement = a_2[_i];
        for (var _a = 0, b_2 = b; _a < b_2.length; _a++) {
            var bElement = b_2[_a];
            if (aElement !== bElement)
                diferentElement = aElement;
            else {
                diferentExist = false;
                break;
            }
        }
        diferentExist ? novoArray.push(diferentElement) : novoArray;
    }
    return console.log("Aqui est\u00E1 a diferenca de seus dois arrays: ".concat(novoArray));
};
diferenca(a, b);
