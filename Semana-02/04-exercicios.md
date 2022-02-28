# Exercícios: promises e async/await

1. Utilizando o enunciado e código do exercício "as rosas não falam", presentes no bloco de exercícios anterior, você deve implementar a mesma solução, porém utilizando promises e funções async/await (**os dois formatos**). **Dica**: Os `setTimeout`'s dos métodos dos versos devem ser sustituídos por timeouts promisificados. Uma possível implementação de timeout em modo promise é:
```ts
const timeout = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
```