// 1. As rosas não falam

const desafio1asRosasNaoFalam1 = () => {

    const geraIntervaloAleatório = (): number => Math.floor(Math.random() * 3 * 1000);

    const queixoMeAsRosas = (): Promise<void> => {
        return new Promise(resolve => 
            setTimeout(() => { 
                resolve( console.log('Queixo-me às rosas'))
            }, geraIntervaloAleatório())
        );
    };
  
    const masQueBobagem = (): Promise<void> => {
        return new Promise(resolve => 
            setTimeout(() => { 
                resolve( console.log('Mas que bobagem'))
            }, geraIntervaloAleatório())
        );
    };
  
    const asRosasNaoFalam = (): Promise<void> => {
        return new Promise(resolve => 
            setTimeout(() => {
                resolve( console.log('As rosas não falam'))
            }, geraIntervaloAleatório())
        );
    };
  
    const simplesmenteAsRosasExalam = (): Promise<void> => {
        return new Promise(resolve => 
            setTimeout(() => {
                resolve( console.log('Simplesmente as rosas exalam'))
            }, geraIntervaloAleatório())
        );
    };
  
    const oPerfumeQueRoubamDeTi = (): Promise<void> => {
        return new Promise(resolve => 
            setTimeout(() => {
                resolve( console.log('O perfume que roubam de ti, ai'))
            }, geraIntervaloAleatório())
        );
    };
  
    // Tentativa de cantar a música. 
    queixoMeAsRosas()
        .then( () => masQueBobagem() )
        .then( () => asRosasNaoFalam() )
        .then( () => simplesmenteAsRosasExalam() )
        .then( () => oPerfumeQueRoubamDeTi() )
        .catch( error => console.log(error) )
}
  
desafio1asRosasNaoFalam1();

