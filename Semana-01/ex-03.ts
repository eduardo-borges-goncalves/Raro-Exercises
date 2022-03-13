//////////// EXERCÍCIO I

// 1. Faça um algoritmo que calcule a fórmula de equação quadrática 
// ("fórmula de bháskara"). 

const qualTriangulo = (a: number,b:number,c:number) => {
    const equilatero = a === b && a === c
    const isosceles =   a === b && b !== c ||
                        b === c && b !== a ||
                        a === c && b !== a;

    if (equilatero) console.log('Este é um triângulo equilatero');
    if (isosceles)  console.log('Este é um triângulo isósceles');
    else console.log('Este é um triângulo escaleno');
}

qualTriangulo(10,11,12)

//////////// EXERCÍCIO 2

// 2. Faça um algoritmo que recebe três valores numéricos, `a`, `b` e `c`.
// A partir dos valores recebidos, você precisa verificar se os valores forma 
// um `triângulo equilátero`, um `triângulo isósceles` ou um triângulo escaleno.

const baskhara = (a:number, b:number, c:number) => {

    let delta:number = b**2 - (4*a*c)
    let denominador = 2*a
    let xI  =   ( -b + Math.sqrt( delta ) )/denominador 
    let xII =   ( -b - Math.sqrt( delta ) )/denominador

    if (delta < 0) console.log("Os valores não apresentam resultados reais."); 
    else console.log(`Aqui estão as raízes de sua equação: x': ${xI}, x": ${xII}.`);
}

baskhara(1,-1,-6)

////////////  EXERCÍCIO 3

// 3. Faça um algoritmo que recebe um array de numeros, e retorne um novo
// array, com os objetos ordenados. 
// Espera-se que você construa o algoritmo por completo. `Dica`: boas escolhas
// para esta implementação: `bubble sort` ou `selection sort`.

let array1:number[] = [399,-20, 398,987,397,6,5,7,-800, 40,1,2,2,2,2, 3,50, 50, 50, 50, 50, 3,100,1,75,-10]

const ordenadorDeArray = (array: number[]) => {

    let arrayCopy: number[] = [...array]
    let index:number = 0;
    let novoArray:number[]  = [];
    
    while (arrayCopy.length) {
        let lowerValue:number = arrayCopy[0]
        index= 0;

        for (let j:number = 0; j < arrayCopy.length; j++ ) {

            if (lowerValue > arrayCopy[j+1]) { 
                lowerValue = arrayCopy[j+1] 
                index = j+1
            }
            if (j+1 === arrayCopy.length) {
                arrayCopy.splice(index, 1)
                novoArray.push(lowerValue)
            }
        }
    }
    console.log(`Aqui está seu array com os números em ordem crescente:
     ${novoArray}.`)
}

ordenadorDeArray(array1)

//////////// EXERCÍCIO 4

// 4. Implementar a união dos grupos a e b. Os valores do objeto resultante 
// devem ser todos únicos

let novoArray:number[] = [] 
const a:number[] = [1, 2, 3, 4, 5, 6]
const b:number[] = [4, 4, 5, 6, 7, 8]

const union = (a:number[],b:number[]) => {
    novoArray = [...a, ...b]
    
    for (let index = 0; index < novoArray.length; index++) {
        for (let j = 1; j < novoArray.length; j++){
            if (index !== j) {
                novoArray[index] === novoArray[j] ? 
                    novoArray.splice(j, 1): 
                    novoArray; 
            }  
        }
    }
    console.log(`Aqui está a união de seus dois arrays: ${novoArray}`)
}

union(a,b)

//////////// EXERCÍCIO 5

// 5. Implementar a interseção dos gupos a e b.

const intersecao = (a:number[],b:number[]) => {
    novoArray = []
    
    for (let index of a) {
        for (let j of b) 
           if (index === j) { 
                novoArray.push(index);
                break
            }
    }
    console.log(`Aqui está a interseção de seus dois arrays: ${novoArray}`)
}

intersecao(a,b)

////////// EXERCÍCIO 6

// 6. Implementar a diferença de a e b

const diferenca = (a:number[],b:number[]) => {
    novoArray = []
    let diferentElement:number = 0
    let diferentExist:boolean = true

    for (let aElement of a){
        for (let bElement  of b){

            if ( aElement !== bElement ) diferentElement = aElement  
            else {
                diferentExist = false;
                break; 
            }  
        }   
        diferentExist? novoArray.push(diferentElement): novoArray; 
    }
    return console.log(`Aqui está a diferenca de seus dois arrays: ${novoArray}`)
}

diferenca(a,b)