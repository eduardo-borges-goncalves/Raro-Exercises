// 1. As rosas não falam
var desafio1asRosasNaoFalam = function () {
    var geraIntervaloAleatório = function () { return Math.floor(Math.random() * 3 * 1000); };
    // métodos de versos. Estes métodos deverão ser modificados.
    var queixoMeAsRosas = function (callback) {
        setTimeout(function () {
            console.log('Queixo-me às rosas');
            return callback();
        }, geraIntervaloAleatório());
    };
    var masQueBobagem = function (callback) {
        setTimeout(function () {
            console.log('Mas que bobagem');
            return callback();
        }, geraIntervaloAleatório());
    };
    var asRosasNaoFalam = function (callback) {
        setTimeout(function () {
            console.log('As rosas não falam');
            return callback();
        }, geraIntervaloAleatório());
    };
    var simplesmenteAsRosasExalam = function (callback) {
        setTimeout(function () {
            console.log('Simplesmente as rosas exalam');
            return callback();
        }, geraIntervaloAleatório());
    };
    var oPerfumeQueRoubamDeTi = function () {
        setTimeout(function () {
            console.log('O perfume que roubam de ti, ai');
        }, geraIntervaloAleatório());
    };
    // Tentativa de cantar a música. Este bloco precisa ser modificado.
    queixoMeAsRosas(function () {
        masQueBobagem(function () {
            asRosasNaoFalam(function () {
                simplesmenteAsRosasExalam(function () {
                    oPerfumeQueRoubamDeTi();
                });
            });
        });
    });
};
desafio1asRosasNaoFalam();
// 2. relógio e despertador
var despertador = function (intervaloEmSegundos) {
    var intervaloEmMilisegundos = intervaloEmSegundos * 1000;
    setTimeout(function () {
        console.log("passaram-se os ".concat(intervaloEmSegundos, " segundos"));
    }, intervaloEmMilisegundos);
};
var relogio = function () {
    setInterval(function () {
        var now = new Date();
        console.log("".concat(now.getHours(), ":").concat(now.getMinutes(), ":").concat(now.getSeconds()));
    }, 1000);
};
despertador(5);
relogio();
