
// For In percorre as chaves de um object

const data = {band: 'Iron Maide', album: 'Killers', year: 1982 };

for(const prop in data) {
    console.log('Busca disco: ', prop, data[prop]);
}