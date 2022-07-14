
// Arrays: built-in methods (metodos nativos)

//concat concaterna um array
// const data = [1, 2, 3];
// const result = data.concat([4, 5, 6]);
// console.log(result);


//find busca o proximo maior ou menor do que foi passado
// const datas = [11, 24, 35, 67];
// const results = datas.find(function (item) {
//     return item > 23;
// });

//findIndex faz uma consulta e retorna o indice da consulta
// const data = [11, 24, 35, 67];
// const results = data.findIndex(function (item) {
//     return item > 23;
//  });
    
// indexOf retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
// const data = [11, 24, 35, 67];
// const results = data.findIndex(35);

//lastIndexOf retorna o ultimo índice que um certo elemento pode ser encontrado no array, ou -1 se o elemento não estiver presente. O array é pesquisado de trás para frente, começando pelo
// const data = [11, 24, 35, 67];
// const results = data.lastIndexOf(35);

//includes  determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
// const data = [1, 12, 15, 20, 37,40];
// const result = data.include(3);

// some testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor booleano
// const data = [1, 2, null, 3, 4];
// const results = data.some(function (item) {
//     return item === 23;
//  });

//every testa se todos os elementos do array passam pelo teste implementado pela função fornecida.
// const data = [1, 2, null, 3, 4];
// const results = data.every(function (item) {
//     return item > 23;
//  });

// slice retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário)
// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = data.slice(2, 5);

// splice altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = data.splice(2, 5);

//map invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = data.map(function(item){
//  console.log(item);
//   return item * 2;
// });

//forEach  executa uma dada função em cada elemento de um array.
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = data.forEach(function(item){
 console.log(item);
  return item * 3;
});

console.log(result);