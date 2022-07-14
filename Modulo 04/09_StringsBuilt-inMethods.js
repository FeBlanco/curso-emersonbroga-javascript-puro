// Strings: built-in methods (metodos nativos)
const name = 'Felipe';
const teste ='coração'

console.log(name);

//charAt pega a posição de uma letra em uma string
console.log(name.charAt(0));

//charCodeAt  codigo na tabela ASCII referente a letra 
console.log(name.charCodeAt(3));

//concat  concatenar uma string nativamente
console.log(name.concat(' Blanco'));

//endsWith verifica se termina com  o argumento passado
console.log(name.endsWith('pe'));

//fromCharCode pega a letra referente ao numero na tabela ASCII
console.log(String.fromCharCode(105));

//includes se inclui a string passada no argumento
console.log(name.includes('l'));

//indexOf para verificar o indice se alguma string existe dentro da string
console.log(name.indexOf('E'));

//lastIndexOf o indice da ultima ocorrencia 
console.log(name.lastIndexOf('e'));

//localeCompare identificar string com caracteres especial e comparar o local
console.log(teste.localeCompare('coração'));

//match encontrar expressão regular valida dentro de uma string
console.log(name.match(/lip/));

//repeat repete 
console.log(name.repeat(2));

//replace alterar uma string para outra 
console.log(name.replace('Felipe', 'Totti'));

//search mostra o indice da onde a string passada começa
console.log(name.search('pe'));

// slice passa o inicio e o final de onde vc quer pegar uma string
console.log(name.slice(2, 6));

//split dividir uma string no separador quue vc indicar
console.log(name.split('lipe'));

//startsWith se começa com tal string boolean
console.log(name.startsWith('g'));

//substr retorna uma parte da string passada no argumento
console.log(name.substr(2, 6));

//substring mesma coisa do str
console.log(name.substring(2, 6));

//tolocaleLowerCase transforma a string em caixa baixa
console.log(name.toLocaleLowerCase());

//toLocaleUpperCase transforma tudo em caixa alta
console.log(name.toLocaleUpperCase());

//toLowerCase converte para minusculo
console.log(name.toLowerCase());

//toUpperCase converte para maiusculo
console.log(name.toUpperCase());

//tostring converte uma string em uma string 
console.log(name.toString());

//trim retira os espaços da string
console.log(name.trim());

//valueOf retorna o valor da string
console.log(name.valueOf());