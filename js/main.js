'use strict';

// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca!


const nomePasseggero = document.getElementById("name");
const lungKm = document.getElementById("km");
const eta = document.getElementById("eta");
const biglietto = document.querySelector('.biglietto');
const genera = document.getElementById("genera");
console.log(genera);
const randomNum = document.querySelector('.random-num');

// Evento click genera mostrerà il biglietto
genera.addEventListener('click',
    function () {
        biglietto.classList.add('show');
        //Utente nome e cognome
        const nomePasseggeroValue = nomePasseggero.value;
        console.log(nomePasseggeroValue);

        //Numero di chilometri che vuole percorrere
        const lungKmValue = parseFloat(lungKm.value);
        console.log(lungKmValue);

        //Età
        const etaValue = eta.value;
        console.log(etaValue);

        // Moltiplichiamo il prezzo del biglietto per la costante(0.21 € al km) 
        const Km = 0.21;
        console.log(Km);

        let prezzo = (lungKmValue * Km);
        let carrozza='';
        // Calcoliamo lo sconto
        let under = ((prezzo * 20) / 100);
        console.log(under);

        let over = ((prezzo * 40) / 100);
        console.log(over);

        // Applichiamo lo sconto tramite la condizione e stampiamolo sia in console e sia in h1
        if (eta.value === 'minorenne') {
            prezzo -= under;
            carrozza='Biglietto per Minore';
        } else if (eta.value === 'over') {
            prezzo -= over;
            carrozza='Biglietto Over';
        } else {
            prezzo = prezzo;
            carrozza='Biglietto Standard';
        }
        // Stampo il prezzo
        const prezzoFinale = prezzo.toFixed(2);
        console.log(`Il prezzo del tuo biglietto è ${prezzoFinale}€`);
        
        let randomNum= Math.floor((Math.random() * 10000) + 1);
        let randomCarrozza= Math.floor((Math.random() * 10) + 1);
        // Stampiamo nel biglietto il valore delle variabili
        document.querySelector(".nome-cognome").innerHTML = nomePasseggero.value;
        document.querySelector(".prezzo").innerHTML = `${prezzoFinale}€`;
        document.querySelector(".offerta").innerHTML = carrozza;
        document.querySelector(".random-num").innerHTML = randomNum;
        document.querySelector(".randomCar").innerHTML = randomCarrozza;
    });
// Adesso tramite l'evento del click col bottone annulla, dovrà sparire tutto rimuovendo la classe .show
const annulla = document.getElementById("annulla");
annulla.addEventListener('click',
    function () {
        biglietto.classList.remove('show');
    });
