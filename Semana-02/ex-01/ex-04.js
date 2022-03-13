var alunos = [
    { nome: 'João', nota: 8.2, bolsista: false },
    { nome: 'Maria', nota: 7.3, bolsista: true },
    { nome: 'Pedro', nota: 9.5, bolsista: false },
    { nome: 'Ana', nota: 9.8, bolsista: true }
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
