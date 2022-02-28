// 1 - Abaixo você tem a lista de todos os ingredientes necessários para fazer um 
// Hambúrguer. Utilizando o reduce, como você pode fazer para unir todos os 
// itens do array em uma única string?
var ingredientes = [
    '2 hambúrgueres',
    'alface',
    'queijo',
    'molho especial',
    'cebola',
    'picles',
    'pão com gergelim'
];
var fazUmBigMac = function (ingredientes) {
    var result = "".concat(ingredientes.reduce(function (previousValue, currentValue) { return "".concat(previousValue, ", ").concat(currentValue); }), ".");
    return result;
};
console.log(fazUmBigMac(ingredientes));
// 2- A lista de meses abaixo está incompleta (e incorreta!). Utilize os métodos
// do array para adicionar os meses faltantes.
var meses = [
    'jan', 'mar', 'mar', 'abr', 'jun', 'jul', 'set', 'out', 'dez',
];
function correctMonths(months) {
    months.splice(1, 0, "fev");
    months.splice(5, 0, "mai");
    months.splice(8, 0, "ago");
    months.splice(11, 0, "nov");
    var uniqueMonths = new Set();
    months.forEach(function (month) { uniqueMonths.add(month); });
    return uniqueMonths;
}
console.log(correctMonths(meses));
var alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
];
var pick = function (array, chaves) {
    var result = [];
    array.map(function (object) {
        var resultObject = {};
        chaves.forEach(function (chave) { return resultObject[chave] = object[chave]; });
        result.push(resultObject);
    });
    return result;
};
console.log(pick(alunos, ["nome", "nota"]));
var orderBy = function (array, elem1, elem2) {
    var result = pick(array, [(elem2), elem1]);
    result.sort(function (a, b) {
        if (a[elem1] > b[elem1])
            return 1;
        if (b[elem1] > a[elem1])
            return -1;
        else
            return 0;
    });
    console.log(result);
};
orderBy(alunos, 'nota', 'nome');
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
function fila(elemento) {
    var fila = [];
    var adicionar = function (elemento) {
        fila.push(elemento);
    };
    var remover = function () {
        var removed = fila.splice(0, 1);
        return removed[0];
    };
    return { adicionar: adicionar, remover: remover };
}
function pilha(elemento) {
    var pilha = [];
    var adicionar = function (elemento) {
        pilha.push(elemento);
    };
    var remover = function () {
        var i = pilha.length - 1;
        var removed = pilha.splice(i, 1);
        return removed[0];
    };
    return { adicionar: adicionar, remover: remover };
}
var fila1 = fila();
fila1.adicionar(1);
fila1.adicionar(2);
fila1.adicionar(3);
console.log('valor esperado: 1; valor recebido: ', fila1.remover());
console.log('valor esperado: 2; valor recebido: ', fila1.remover());
console.log('valor esperado: 3; valor recebido: ', fila1.remover());
var pilha1 = pilha();
pilha1.adicionar(1);
pilha1.adicionar(2);
pilha1.adicionar(3);
console.log('valor esperado: 3; valor recebido: ', pilha1.remover());
console.log('valor esperado: 2; valor recebido: ', pilha1.remover());
console.log('valor esperado: 1; valor recebido: ', pilha1.remover());
// 6 - Dada a lista de usuarios do nosso sistema, manipule o array, para gerar
// em duas estruturas separadas a coleção de usuários que estão ativos e a 
// coleção de usuários que estão inativos.
var usuarios = [
    { nome: 'Diego', idade: 23, ativo: true },
    { nome: 'Gabriel', idade: 15, ativo: false },
    { nome: 'Lucas', idade: 30, ativo: false },
];
var usuariosAtivos = []; // ???
var usuariosInativos = []; // ???
var userFilter = function (users, attribute) {
    users.forEach(function (user) {
        user[attribute] ? usuariosAtivos.push(user) : usuariosInativos.push(user);
    });
};
userFilter(usuarios, "ativo");
console.log(usuariosInativos);
console.log(usuariosAtivos);
