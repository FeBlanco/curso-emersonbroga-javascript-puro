// Remover propriedades de um objeto

const movie = {title: 'De volta parav o futuro', year: 1985, originalTitle: 'Back to the future'}

delete movie.originalTitle;

console.log(movie);
console.log(movie.originalTitle);