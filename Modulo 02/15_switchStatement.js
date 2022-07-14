// Switch Satrtement - switch case

function backToTheFuture(year) {
    let movieName = '';
    switch (year){
        case 1985: {
            movieName = 'De volta para o Futuro 1'
            break;
        }
        case 1989: {
            movieName = 'De volta para o Futuro 2'
            break;
        }
        case 1990: {
            movieName = 'De volta para o Futuro 3'
            break;
        }
        default: {
            movieName = 'Não tem De volta para o Futuro 1'
            break;
        }
    }

    return movieName;
}

console.log(backToTheFuture(1990))