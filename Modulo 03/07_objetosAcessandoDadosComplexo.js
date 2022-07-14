// Objetos  Acessando dados de objeto complexo

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
    ],
};

console.log(band.albums[1].title);