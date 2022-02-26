// 1 - Abaixo você tem a lista de todos os ingredientes necessários para fazer um 
// Hambúrguer. Utilizando o reduce, como você pode fazer para unir todos os 
// itens do array em uma única string?

const ingredientes = [
  '2 hambúrgueres',
  'alface',
  'queijo',
  'molho especial',
  'cebola',
  'picles',
  'pão com gergelim'
];

const fazUmBigMac = (ingredientes: string[]): string => {

  let result:string = `${ ingredientes.reduce((previousValue, currentValue) => `${previousValue}, ${currentValue}`) }.`

  return result
};

console.log(fazUmBigMac(ingredientes));

// 2- A lista de meses abaixo está incompleta (e incorreta!). Utilize os métodos
// do array para adicionar os meses faltantes.

const meses = [
  'jan', 'mar', 'mar', 'abr', 'jun', 'jul', 'set', 'out', 'dez',
];

function correctMonths (months:string[]) {
 
  months.splice(1,0, "fev") 
  months.splice(5,0, "mai") 
  months.splice(8,0, "ago")
  months.splice(11,0, "nov")

  let uniqueMonths = new Set() 
  months.forEach(month => {uniqueMonths.add(month)})
  return uniqueMonths
}

console.log(correctMonths(meses))

// 3 - Implementar o método de pick que receba um parâmetro do tipo array de 
// objetos, e outro parâmetro do tipo array de strings. Este método deverá retornar
// todos os itens do array original, porém, mantendo somente os atributos com os
// nomes passados no segundo atributo. Importante: o array original deve ser 
// mantido intacto. Abaixo, segue um exemplo do funcionamento esperado:

type myObj = Record< string, unknown >

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
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

console.log(pick(alunos, ["nome", "nota"] ))

// 4 - ainda com o mesmo exemplo dos alunos, implementar agora um método chamado
// orderBy. Esse método deverá receber um parâmetro do tipo array de objetos, 
// e outro parâmetro, um array de strings. O método deverá retornar um novo array,
// com os objetos ordenados de acordo com o critério do array de strings. 
// Importante: O array original deve ser mantido intacto. Abaixo, segue um exemplo
// do funcionamento esperado:

type myObj2 = Record< string, number >

const orderBy = (array:myObj[], elem1:string, elem2:string) => {

    let result:myObj2[] = pick(array, [(elem2), elem1] );

    result.sort( ( a , b ) => {
        if ( a[elem1] > b[elem1] ) return 1
        if ( b[elem1] > a[elem1]) return -1
        else return 0
    })

    console.log(result)
}

orderBy(alunos, 'nota', 'nome')

// 5 - Na computação, estudamos algumas estruturas de dados importantes, muitas 
// delas baseadas em arrays. Aqui em destaque, dois tipos diferentes, as filas 
// e as pilhas. As filas são arrays que estabelecem a política de FIFO 
// (First In, First Out), ou seja, o primeiro elemento adicionado é o primeiro
// a ser removido. As pilhas, por sua vez, são arrays que estabelecem a política
// de LIFO (Last In, First Out), ou seja, o último elemento adicionado é o 
// primeiro a ser removido. Abaixo, foram iniciadas estruturas de código que 
// implementam ambas estruturas. Pede-se que, utilizando os métodos de adicionar
// e remover os itens nos arrays, sejam implementados os movimentos corretos 
// para cada estrutura.

function fila(elemento:number) {
  const fila:number[] = [];

  const adicionar = (elemento:number) => {
        fila.push(elemento)
      };

  const remover = () => {
        let removed = fila.splice(0, 1)
        return removed[0]
  };

  return { adicionar, remover };
}



function pilha(elemento:number) {
  const pilha:number[] = [];

  const adicionar = (elemento:number) => {
    pilha.push(elemento)
  };

  const remover = () => {
    let i = pilha.length-1
    let removed = pilha.splice(i, 1)
    return removed[0]
  };

  return { adicionar, remover };
}

const fila1 = fila();
fila1.adicionar(1);
fila1.adicionar(2);
fila1.adicionar(3);

console.log('valor esperado: 1; valor recebido: ', fila1.remover());
console.log('valor esperado: 2; valor recebido: ', fila1.remover());
console.log('valor esperado: 3; valor recebido: ', fila1.remover());

const pilha1 = pilha();
pilha1.adicionar(1);
pilha1.adicionar(2);
pilha1.adicionar(3);

console.log('valor esperado: 3; valor recebido: ', pilha1.remover());
console.log('valor esperado: 2; valor recebido: ', pilha1.remover());
console.log('valor esperado: 1; valor recebido: ', pilha1.remover());

// 6 - Dada a lista de usuarios do nosso sistema, manipule o array, para gerar
// em duas estruturas separadas a coleção de usuários que estão ativos e a 
// coleção de usuários que estão inativos.

const usuarios = [
  { nome: 'Diego', idade: 23, ativo: true },
  { nome: 'Gabriel', idade: 15, ativo: false },
  { nome: 'Lucas', idade: 30, ativo: false },
];

const usuariosAtivos:myObj[] = [] // ???
const usuariosInativos:myObj[] = [] // ???

const userFilter = (users:myObj[], attribute:any) => {

    users.forEach( user => {
      user[attribute] ? usuariosAtivos.push(user): usuariosInativos.push(user);
    })
}

userFilter(usuarios, "ativo")

console.log(usuariosInativos)
console.log(usuariosAtivos)