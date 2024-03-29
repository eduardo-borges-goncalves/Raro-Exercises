<<<<<<< HEAD
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
    return "".concat(ingredientes.reduce(function (previousValue, currentValue) {
        return "".concat(previousValue, ", ").concat(currentValue);
    }), ".");
};
console.log(fazUmBigMac(ingredientes));
// 2- A lista de meses abaixo está incompleta (e incorreta!). Utilize os métodos
// do array para adicionar os meses faltantes.
var meses = [
    'jan', 'mar', 'mar', 'abr', 'jun', 'jul', 'set', 'out', 'dez',
];
meses.splice(1, 0, "fev");
meses.splice(2, 1);
meses.splice(4, 0, "mai");
meses.splice(7, 0, "ago");
meses.splice(10, 0, "nov");
console.log(meses);
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
// 4 - ainda com o mesmo exemplo dos alunos, implementar agora um método chamado
// orderBy. Esse método deverá receber um parâmetro do tipo array de objetos, 
// e outro parâmetro, um array de strings. O método deverá retornar um novo array,
// com os objetos ordenados de acordo com o critério do array de strings. 
// Importante: O array original deve ser mantido intacto. Abaixo, segue um exemplo
// do funcionamento esperado:
var order = function (array, chaves) {
    var result = pick(array, chaves);
    chaves.forEach(function (chave) {
        result.sort(function (a, b) {
            if (a[chave] < b[chave])
                return -1;
            b[chave] < a[chave] ? 1 : 0;
        });
    });
    return result;
};
var orderBy = function (array, chaves) {
    if (typeof array[0][chaves[0]] === 'number') {
        chaves.reverse();
        return order(array, chaves);
    }
    return order(array, chaves);
};
console.log(orderBy(alunos, ["nota", "nome"]));
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
    var adicionar = function (elemento) { return fila.push(elemento); };
    var remover = function () { return fila.shift(); };
    return { adicionar: adicionar, remover: remover };
}
function pilha(elemento) {
    var pilha = [];
    var adicionar = function (elemento) { return pilha.push(elemento); };
    var remover = function () { return pilha.pop(); };
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
for (var _i = 0, usuarios_1 = usuarios; _i < usuarios_1.length; _i++) {
    var user = usuarios_1[_i];
    if (user.ativo)
        usuariosAtivos.push(user);
    else
        usuariosInativos.push(user);
}
console.log(usuariosInativos);
console.log(usuariosAtivos);
=======
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
    return "".concat(ingredientes.reduce(function (previousValue, currentValue) {
        return "".concat(previousValue, ", ").concat(currentValue);
    }), ".");
};
console.log(fazUmBigMac(ingredientes));
// 2- A lista de meses abaixo está incompleta (e incorreta!). Utilize os métodos
// do array para adicionar os meses faltantes.
var meses = [
    'jan', 'mar', 'mar', 'abr', 'jun', 'jul', 'set', 'out', 'dez',
];
meses.splice(1, 0, "fev");
meses.splice(2, 1);
meses.splice(4, 0, "mai");
meses.splice(7, 0, "ago");
meses.splice(10, 0, "nov");
console.log(meses);
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
// 4 - ainda com o mesmo exemplo dos alunos, implementar agora um método chamado
// orderBy. Esse método deverá receber um parâmetro do tipo array de objetos, 
// e outro parâmetro, um array de strings. O método deverá retornar um novo array,
// com os objetos ordenados de acordo com o critério do array de strings. 
// Importante: O array original deve ser mantido intacto. Abaixo, segue um exemplo
// do funcionamento esperado:
var order = function (array, chaves) {
    var result = pick(array, chaves);
    chaves.forEach(function (chave) {
        result.sort(function (a, b) {
            if (a[chave] < b[chave])
                return -1;
            b[chave] < a[chave] ? 1 : 0;
        });
    });
    return result;
};
var orderBy = function (array, chaves) {
    if (typeof array[0][chaves[0]] === 'number') {
        chaves.reverse();
        return order(array, chaves);
    }
    return order(array, chaves);
};
console.log(orderBy(alunos, ["nota", "nome"]));
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
    var adicionar = function (elemento) { return fila.push(elemento); };
    var remover = function () { return fila.shift(); };
    return { adicionar: adicionar, remover: remover };
}
function pilha(elemento) {
    var pilha = [];
    var adicionar = function (elemento) { return pilha.push(elemento); };
    var remover = function () { return pilha.pop(); };
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
for (var _i = 0, usuarios_1 = usuarios; _i < usuarios_1.length; _i++) {
    var user = usuarios_1[_i];
    if (user.ativo)
        usuariosAtivos.push(user);
    else
        usuariosInativos.push(user);
}
console.log(usuariosInativos);
console.log(usuariosAtivos);
>>>>>>> aaa84dc98b87d382d3348066304ef5a3b3e70203
