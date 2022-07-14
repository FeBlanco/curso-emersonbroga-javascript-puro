// Objetos Verificar se o objeto tem uma propriedade

const items = {
    fruit: 'laranja',
    car: 'fusca',
    instrument: 'violao',
};

function check(prop) {
    if (items.hasOwnProperty(prop)){
        return items[prop];
    } else {
        return null;
    }
}

console.log(items['car']);