// Arrays: Pegando dados de arrays aninhados

const data = [4, 8, 12, ['a', 'b', 'c', [null, false, 'javascript'], 30], 'd'];
/*   posição |0  1  2   3|
                posição  |0    1    2   3|
                                posição   |0      1         2|  

*/
console.log(data[3][3][2]);