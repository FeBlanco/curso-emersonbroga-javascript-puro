// Objetos Pegando dados de propriedade indefinida

const band = {
    name: 'Iron Maiden',
    albums: [
        {
            title: 'Iron Maiden',
            year: 1980,
        },
        {
            title: 'Killers',
            year: 1981,
        },
        {
            title: 'The Number of the Beast',
            year: 1982,
        },
        'Qualquer coisa',
    ],
};

if (band && band.albums && band.albums[3]) {
    console.log(band.albums[3].year);
}


console.log(band)
console.log(band.albums);
console.log(band.albums[3]);
console.log(band.albums[3].year);