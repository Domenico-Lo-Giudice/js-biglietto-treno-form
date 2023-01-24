//Descrizione:

// Scrivere un programma che chieda all'utente:

// Il numero di chilometri da percorrere
// Età del passeggero

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// Il prezzo del biglietto è definito in base ai km(0.21 € al km)
// Va applicato uno sconto del 20 % per i minorenni
// Va applicato uno sconto del 40 % per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone(non stilizzati), realizziamo le specifiche scritte sopra.La risposta finale(o output) sarà anch'essa da scrivere in console.

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).


    const Button = document.getElementById('ButtonGenera');

    Button.addEventListener(
        'click',

    function () {

        //const & if
        const User = document.getElementById('nome').value;
        const Km = parseInt(document.getElementById('km').value);
        const Anni = document.getElementById('age').value;
        const DefaultPrice = Km * 0.21;
        let Price;

        if (!isNaN(Km)) {

        } else {
            alert('RIPROVARE: inserire valore numerico')
        }


        if (Anni < 18) {

            Price = (DefaultPrice - (20 / 100) * (DefaultPrice)); 

        } else if (Anni > 64) {

            Price = (DefaultPrice - (40 / 100) * (DefaultPrice));

        } else {

             Price = DefaultPrice;

        }

       
       //toFixed
        Price = Price.toFixed(2);

       //Output
        document.getElementById('h2').innerHTML = `Il prezzo totale per il tuo viaggio è di ${Price} €`;

    }
)


