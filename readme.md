<!-- Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo, come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). -->

Milestone 1
--Creiamo due input e un selettore dove inseriremo la distanza percorsa, il nome e se è maggiorenne/minorenne/over65
--Tutto ciò che viene scritto all'interno di questi input sarà inserito in una variabile come fatto con i prompt.
--Creiamo un bottone a cui sarà connesso l'evento al click e un altro che invece avrà l'evento annulla

--Milestone 2
--Creiamo una variabile costante per il prezzo finale
--Creiamo un form dove inseriremo il calcolo finale e i dati.
--Creiamo un altra costante con all'interno il prezzo del biglietto a km, in modo tale da moltiplicarla successivamente.
-Creiamo variabili con all'interno lo sconto del 20% in una e del 40% nell'altra
--Creiamo delle condizioni dove inseriamo uno sconto del 20% a chi ha meno di 18 anni e un 40% a chi ha più di 65 anni
--Una volta premuto il bottone con l'evento (click), sarà visibile grazie all'inserimento di una classe altrimenti sarà nascosto con display:none



