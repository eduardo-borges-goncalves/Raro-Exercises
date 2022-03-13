type myObj = Record< string, unknown >

const alunos = [
    { nome: 'João', nota: 8.2, bolsista: false },
    { nome: 'Maria', nota: 7.3, bolsista: true },
    { nome: 'Pedro', nota: 9.5, bolsista: false },
    { nome: 'Ana', nota: 9.8, bolsista: true }
];

const pick = (array:myObj[], chaves:string[] ) => {
    let result:myObj[] = []
    array.map(object => {
        let resultObject:myObj = {}
        chaves.forEach( chave => resultObject[chave] = object[chave] )
        result.push(resultObject) 
    })
    return result
}

const order = (array, chaves) =>{
    let result = pick(array, chaves)
    chaves.forEach(chave => {
        result.sort( (a,b) => {
              if (a[chave] < b[chave] ) return -1;
              b[chave] < a[chave] ? 1: 0;
        })
    })
    return result
}

const orderBy = (array:myObj[], chaves:string[]) => {

    if (typeof array[0][chaves[0]] === 'number') {
        chaves.reverse()
        return order(array, chaves)
    }
    return order(array, chaves)
}

console.log(orderBy(alunos, [ "nota","nome"]))

