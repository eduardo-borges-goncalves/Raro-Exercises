// 1. As rosas não falam
var desafio1asRosasNaoFalam1 = function () {
    var geraIntervaloAleatório = function () { return Math.floor(Math.random() * 3 * 1000); };
    var queixoMeAsRosas = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () {
                resolve(console.log('Queixo-me às rosas'));
            }, geraIntervaloAleatório());
        });
    };
    var masQueBobagem = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () {
                resolve(console.log('Mas que bobagem'));
            }, geraIntervaloAleatório());
        });
    };
    var asRosasNaoFalam = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () {
                resolve(console.log('As rosas não falam'));
            }, geraIntervaloAleatório());
        });
    };
    var simplesmenteAsRosasExalam = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () {
                resolve(console.log('Simplesmente as rosas exalam'));
            }, geraIntervaloAleatório());
        });
    };
    var oPerfumeQueRoubamDeTi = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () {
                resolve(console.log('O perfume que roubam de ti, ai'));
            }, geraIntervaloAleatório());
        });
    };
    // Tentativa de cantar a música. 
    queixoMeAsRosas()
        .then(function () { return masQueBobagem(); })
        .then(function () { return asRosasNaoFalam(); })
        .then(function () { return simplesmenteAsRosasExalam(); })
        .then(function () { return oPerfumeQueRoubamDeTi(); })["catch"](function (error) { return console.log(error); });
};
desafio1asRosasNaoFalam1();
