/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, 
la cella cliccata si colora di azzurro se il numero progressivo è pari,
di verde se dispari. Inoltre emette un messaggio in console
con il numero della cella cliccata.
*/

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
const button = document.getElementById('init-button');
button.addEventListener('click', function(){
    console.log('cliccato');

    //prendo l'elemento grid
    const gridElement = document.getElementById('grid');
    gridElement.innerHTML= '';

    // ogni cella ha un numero progressivo da 1 a 100
    for (let index = 1; index <= 100; index++){
        const cellElement = document.createElement('div');
        cellElement.className = 'cell';
        cellElement.innerHTML= index;

        // aggiungo l'elemento cell alla grid
        gridElement.append(cellElement);

    // l'utente clicca sulla cella 
    cellElement.addEventListener('click', function(){

        // emette un messaggio in console con il numero della cella cliccata
        console.log('cella cliccata: ' , index);

        // la cella cliccata si colora di azzurro se il numero progressivo è pari, di verde se dispari.
        const isEven = isNumberEven (index);
        if (isEven){
            cellElement.classList.add('even');
        } else {
            cellElement.classList.add('odd');
        }
    })
   }
})

function isNumberEven(number){
    return number % 2 === 0;
}

