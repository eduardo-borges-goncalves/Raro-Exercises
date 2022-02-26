## exercícios de manipulação de arrays em javascript

O propósito dos exercícios abaixo é que você pratique os conhecimentos adquiridos na aula sobre os métodos de manipulação de arrays. Pede-se que você faça ao máximo o uso dos métodos do protótipo do array, ou seja, **não vale utilizar os iteradores `for`, `while` e `do`**.


1. Abaixo você tem a lista de todos os ingredientes necessários para fazer um Hambúrguer. Utilizando o reduce, como você pode fazer para unir todos os itens do array em uma única string?

```ts
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
  // escrever seu código aqui
};

fazUmBigMac(ingredientes);
```

2. A lista de meses abaixo está incompleta (e incorreta!). Utilize os métodos do array para adicionar os meses faltantes.

```ts
const meses = [
  'jan', 'mar', 'mar', 'abr', 'jun', 'jul', 'set', 'out', 'dez',
];

// como adicionar os meses de "fev", "mai", "ago", "nov" nas posições corretas?
```

3. Implementar o método de `pick` que receba um parâmetro do tipo array de objetos, e outro parâmetro do tipo array de strings. Este método deverá retornar todos os itens do array original, porém, mantendo somente os atributos com os nomes passados no segundo atributo. Importante: o array original deve ser mantido intacto. Abaixo, segue um exemplo do funcionamento esperado:

```ts
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
];

pick(alunos, ['nome', 'nota']);
// resultado esperado:
// [
//   { nome: 'João', nota: 7.3 },
//   { nome: 'Maria', nota: 9.2 },
//   { nome: 'Pedro', nota: 9.8 },
//   { nome: 'Ana', nota: 8.7 }
// ]

// forma alternativa de implementação
// pick(alunos, 'nome', 'nome')

// se preferir uma assinatura de typescript, segue:
// export const pick = <T extends Record>(record: T, ...args: (keyof T)[]): Record => {
//   return null;
// };
```

4. ainda com o mesmo exemplo dos alunos, implementar agora um método chamado `orderBy`. Esse método deverá receber um parâmetro do tipo array de objetos, e outro parâmetro, um array de strings. O método deverá retornar um novo array, com os objetos ordenados de acordo com o critério do array de strings. Importante: O array original deve ser mantido intacto. Abaixo, segue um exemplo do funcionamento esperado:

```ts
const alunos = [/* mesmo objeto de alunos do exercício anteior */];
orderBy(alunos, ['nota', 'nome']);

// resultado esperado:
// [
//   { nome: 'João', nota: 7.3 },
//   { nome: 'Ana', nota: 8.7 }
//   { nome: 'Maria', nota: 9.2 },
//   { nome: 'Pedro', nota: 9.8 },
// ]

// forma alternativa de implementação
// orderBy(alunos, 'nota', 'nome')

// se preferir uma assinatura de typescript, segue:
// export const orderBy = <T extends Record>(record: T, ...args: (keyof T)[]): Record => {
//   return null;
// };
```

5. Na computação, estudamos algumas estruturas de dados importantes, muitas delas baseadas em arrays. Aqui em destaque, dois tipos diferentes, as `filas` e as `pilhas`. As filas são arrays que estabelecem a política de FIFO (First In, First Out), ou seja, o primeiro elemento adicionado é o primeiro a ser removido. As pilhas, por sua vez, são arrays que estabelecem a política de LIFO (Last In, First Out), ou seja, o último elemento adicionado é o primeiro a ser removido. Abaixo, foram iniciadas estruturas de código que implementam ambas estruturas. Pede-se que, utilizando os métodos de adicionar e remover os itens nos arrays, sejam implementados os movimentos corretos para cada estrutura.

```ts
function fila() {
  const fila = [];

  const adicionar = (elemento) => {
    // aqui, você deve utilizar o método correto para adicionar um novo elemento à variável de fila.
  };

  const remover = () => {
    // aqui, você deve utilizar o método correto para remover um novo elemento à variável de fila.
  };

  return { adicionar, remover };
}

function pilha() {
  const pilha = [];

  const adicionar = (elemento) => {
    // aqui, você deve utilizar o método correto para adicionar um novo elemento à variável de pilha.
  };

  const remover = () => {
    // aqui, você deve utilizar o método correto para remover um novo elemento à variável de pilha.
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
```

6. Dada a lista de usuarios do nosso sistema, manipule o array, para gerar em duas estruturas separadas a coleção de usuários que estão ativos e a coleção de usuários que estão inativos.
```ts
const usuarios = [
  { nome: 'Diego', idade: 23, ativo: true },
  { nome: 'Gabriel', idade: 15, ativo: false },
  { nome: 'Lucas', idade: 30, ativo: false },
];

const usuariosAtivos = [] // ???
const usuariosInativos = [] // ???
```