// vettorre con le parole da indovinare
var parole = ["diritti", "uguaglianza", "diversità", "rispetto", "libertà", "lgbt", "transgender", "omosessuale", "asessuale", "bisessuale", "pansessuale"];
//variabile che prende in input un indice
var indice = retIndice();
// L'indice appena troavt viene usato per trovare una parola random
var parolaSegreta = parole[indice]
// Assegna tentativi rimasti e punteggio rispettivamente a 5 e 0
var tentativiRimanenti = 5;
var punteggio = 0;

//  Vettore con le definizioni
var significati = [
    "Prerogative e libertà riconosciute a un <br>individuo o a un gruppo, garantite dalla legge o dalla società.",
    "Principio di trattamento equo e imparziale<br> di tutte le persone, senza discriminazioni.",
    "Presenza di differenze tra individui o gruppi<br> in termini di caratteristiche, background o identità.",
    "Considerazione positiva e attenzione verso gli <br>altri, mostrando cortesia e considerazione.",
    "Stato di essere libero, privo di costrizioni o <br>limitazioni nelle azioni e nelle scelte.",
    "Acronimo che rappresenta le comunità lesbiche,<br> gay, bisessuali e transgender.",
    "Persona il cui genere di identificazione non <br>corrisponde al sesso assegnato alla nascita.",
    "Attrazione romantica o sessuale tra individui <br>dello stesso sesso.",
    "Assenza di attrazione sessuale <br>verso altri individui.",
    "Attrazione romantica o sessuale <br>verso individui di entrambi i sessi.",
    "Attrazione romantica o sessuale senza<br> considerazione del genere o dell'identità di genere."
];
// mette nella variabile significato il significato della parola random
var significato = significati[indice]

// colora lo schermo con un colore random
document.body.style.backgroundColor = getRandomColor();

// questa funzione restituisce un colore random
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Serve a ricaricare la pagina
function rest() {
    location.reload();
}
// questa è una funzione che dopo il click del bottone crea una funzione che nasconde :la selezione difficoltà,il messaggio con il risultato
// e il regolamento, mentre rende visibile l'input per le parole da indovinare ,il punteggio e i tentativi rimasti
document.getElementById('iniziaGioco').addEventListener('click', function () {
    if (document.getElementById("1").checked === false && document.getElementById("2").checked === false){
        alert("Non hai messo la scelta")
        rest()
    }
    document.querySelector('.diff').style.display = 'none';
    document.getElementById('statoGioco').removeAttribute('hidden');
    document.getElementById('inputUtente').removeAttribute('hidden');
    document.getElementById('messaggioRisultato').setAttribute('hidden', true);
    document.getElementById("Regole").setAttribute('hidden', true);
    creaCampiCasuali();
});
// funzione che ritorna l'indice
function retIndice() {
    var indice = Math.floor(Math.random() * parole.length);
    return indice;
}
// Funzione che crea tanti campi input quanti la lunghezza della parola da indovinare
function creaCampiCasuali() {
    for (var i = 0; i < parolaSegreta.length; i++) {
        // crea l'elemento input
        var nuovoCampo = document.createElement("input");
        // fornisce le caratteristiche dell'input
        nuovoCampo.type = "text";
        nuovoCampo.size = 1;
        nuovoCampo.length = 1;
        nuovoCampo.style.backgroundColor = "white"
        nuovoCampo.id = "p_" + i;
        // Rende note e maiuscole la prima e ultima lettera
        if (i === 0 || i === parolaSegreta.length - 1)
            nuovoCampo.value = parolaSegreta[i].toUpperCase()
        else
            nuovoCampo.value = "";
        var contInput = document.getElementById("in");
        contInput.appendChild(nuovoCampo);
    }
    // nasconde il bottone che fa iniziare il gioco
    document.getElementById("iniziaGioco").hidden = true;
    // chiama la funzione che mostra a che situazione è il gioco
    visualizzaStatoGioco();
    // chiama la funzione che nasconde l'omonino dell'impiccato
    nascondiOminoImpiccato();
}
//funzione che nasconde l'omonino dell'impiccato
function nascondiOminoImpiccato() {
    document.getElementById('asta').style.display = 'none';
    document.getElementById('corda').style.display = 'none';
    document.getElementById('testa').style.display = 'none';
    document.getElementById('busto').style.display = 'none';
    document.getElementById('braccia').style.display = 'none';
}
// funzione che mostra a che situazione è il gioco
function visualizzaStatoGioco() {
    // stampa a schermo i tentativi rimasti e il punteggio
    document.getElementById('punteggio').textContent = punteggio;
    document.getElementById('tentativi').textContent = tenRimasti(true);
    // fa uno switch che si basa sui tentativi rimasti così che mostra a schermo l'omino dell'impiccato
    var sw = tenRimasti(true);
    switch (5 - sw) {
        case 0:
            break;
        case 1:
            document.getElementById('asta').style.display = 'block';
            break;
        case 2:
            document.getElementById('corda').style.display = 'block';
            break;
        case 3:
            document.getElementById('testa').style.display = 'block';
            break;
        case 4:
            document.getElementById('busto').style.display = 'block';
            break;
        case 5:
            document.getElementById('braccia').style.display = 'block';
            document.getElementById("continua").hidden=true
            mostraRisultato();
            break;
        default:
            document.getElementById('braccia').style.display = 'block';
            document.getElementById("continua").hidden=true
            mostraRisultato();
            break;
    }
}
// funzione che controlla che le lettere siano corrette
function controllaLettere() {
    var vetl = [];
    var parolaOccorrenze = [];
    // rende visibile il bottone per continuare, e nasconde i bottoni prova lettera e parola
    document.getElementById("inputUtente").hidden = true
    document.getElementById("continua").hidden = false
    // prende in input i valori dalle caselle input
    for (var i = 0; i < parolaSegreta.length; i++) {
        vetl[i] = document.getElementById("p_" + i).value

        if (vetl[i].length>1)
            alert("Metti una lettera nella casella "+(i+1))
        // se però l'utente non mette nessuna lettera da come valore una stringa vuota
        if (vetl[i] === null) {
            vetl[i] = " ";
        }
    }

    var c = 0
    // fa un controllo in cui se l'utente azzecca una lettera mette nella cella input la lettera e tramite readOnly non potrà più modificare la lettera
    for (var i = 0; i < parolaSegreta.length; i++) {
        if (vetl[i].toUpperCase() === parolaSegreta[i].toUpperCase()) {
            document.getElementById("p_" + i).innerText = vetl[i]
            document.getElementById("p_" + i).value = vetl[i]
            document.getElementById("p_" + i).readOnly = true;
        } else {
            document.getElementById("p_" + i).value = "";
        }
    }
    // calcola le occorenze di ogni lettera ,cosa che ci sarà utile più avanti
    for (var j = 1; j < parolaSegreta.length-1; j++) {
        var lettera = parolaSegreta[j];
        if (!parolaOccorrenze[lettera]) {
            parolaOccorrenze[lettera] = 1;
        } else {
            parolaOccorrenze[lettera]++;
        }
    }

    for (var i = 1; i < parolaSegreta.length - 1; i++) {
        // prende in input la cella dell'input ,a differenza del vettore che prende il valore
        var inputElement = document.getElementById("p_" + i);
        // Controlla se la lettera è maiuscola(ovvero corretta) e che non sia vuota
        if(vetl[i]===parolaSegreta[i].toUpperCase() && vetl[i] !== "")
        {
            //colora la cella di verde
            inputElement.style.backgroundColor = "green"
        }
        else
        {
            vetl[i]=vetl[i].toLowerCase();
            if (vetl[i] !== vetl[i].value && vetl[i] !== "") {
                // controlla se la parola è inserita nella posizione corretta e in quel caso
                if (vetl[i] === parolaSegreta[i]) {
                    // aumenta il punteggio di 5
                    punteggio += 5;
                    // colora la cella di verde
                    inputElement.style.backgroundColor = "green";
                    // decrementa di 1 l'occorrenza della lettera in questione
                    parolaOccorrenze[vetl[i]]--; // Decrementa l'occorrenza della lettera corretta
                } else {
                    // controlla che difficoltà sia
                    if (document.getElementById("1").checked) {
                        //In questo caso la difficoltà è normale e Controllo per verificare se la lettera è presente nella parola, ma posizionata diversamente
                        if (parolaOccorrenze[vetl[i]] > 0) {
                            // colora la cella di giallo
                            inputElement.style.backgroundColor = "yellow";
                            // Decrementa l'occorrenza della lettera posizionata diversamente
                            parolaOccorrenze[vetl[i]]--;
                        } else {
                            // se invece la lettera non c'è proprio nella parola toglie un punto all'utente
                            punteggio -= 1;
                            //colora la cella di rosso ,che indica che è sbagliato
                            inputElement.style.backgroundColor = "red";
                            // assenga a c 1, che più avanti verra usato per decrementare i tentativi
                            c = 1;
                        }
                    } else {
                        // invece in questo caso che la difficoltà è difficile , da direttamente errore se la lettera è nella posizione corretta
                        punteggio -= 1;
                        inputElement.style.backgroundColor = "red";
                        c = 1;
                    }
                }
            }
        }
    }
    // controlla se c è uguale a 1 , e se lo è decrementa i tentativi
    if (c === 1)
        tenRimasti(false)
    // aggiorna a schermo i dati sul gioco
    visualizzaStatoGioco();
    // qui fa un controlla se tutte le lettere sono uguali, e se sono tutte uguali mostra il messaggio finale di vittoria
    for (var i = 0; i < parolaSegreta.length; i++) {
        if (vetl[i].toLowerCase() !== parolaSegreta[i]) {
            break;
        } else if (i === (parolaSegreta.length - 1)) {
            mostraRisultato()
            document.getElementById("continua").hidden = true
        }
    }
    // fa un controllo in cui se i tentativi sono minori di 0 mostra il risultato visto che l'utente non ha più tentativi
    if (tenRimasti(true) <= 0) {
        mostraRisultato()
    }
    for (var i = 0; i < parolaSegreta.length; i++) {
        document.getElementById("p_" + i).value = vetl[i]
    }
}

function tenRimasti(lettera) {
    if (!lettera) {
        tentativiRimanenti -= 1;
    }

    return tentativiRimanenti
}
// questa funzione serve a decolorare le celle e mostrare a schermo le lettere il maiuscolo
function Continua() {
    var vetl = []
    for (var i = 1; i < parolaSegreta.length - 1; i++) {
        //prende in input i valori e gli spazi
        vetl[i] = document.getElementById("p_" + i).value
        var input = document.getElementById("p_" + i)
        // rende lo sfondo bianco
        input.style.backgroundColor = "white"
        // controlla se la lettera è corretta
        if (vetl[i] === parolaSegreta[i]) {
            // Fa diventare la lettera maiuscola e la stampa a schermp
            vetl[i] = vetl[i].toUpperCase()
            document.getElementById("p_" + i).value = vetl[i]

        } else if (vetl[i] !== vetl[i].toUpperCase()) {
            document.getElementById("p_" + i).value = "";
        }
    }
    // riprista il div inputUtente
    document.getElementById("inputUtente").hidden = false
    //Nasconde il bottone continua
    document.getElementById("continua").hidden = true
}

// Funzione che controlla che la parola sia giusta
function controllaParola() {
    var vetl = [];

    for (var i = 0; i < parolaSegreta.length; i++) {
        vetl[i] = document.getElementById("p_" + i).value
        if (vetl[i].length>1)
            alert("Metti una lettera nella casella "+(i+1))
        if (vetl[i] === null) {
            //se non c'è la lettera mette " "
            vetl[i] = " ";
        }
    }
    //fa diventare il vettore una parola per confrontarla
    var p = vetl.join('')
    p = p.toLowerCase()
    // controlla se i tentativi rimasti sono minori di 0 ,in quel caso va alla funzione del risultato
    if (tenRimasti(true) <= 0) {
        mostraRisultato()
    }
    // se la parola è corretta aggiunge 20 punti va al risultato
    if (p === parolaSegreta) {
        punteggio += 20
        mostraRisultato()
    } else {
        // se è sbagliata toglie 5 punti e un tentativo
        punteggio -= 5
        for (var i=1;i<parolaSegreta.length-1;i++)
        {
            if (vetl[i]!==vetl[i].toUpperCase())
                document.getElementById("p_" + i).value = "";
        }
        tenRimasti(false)
        alert("Parola sbagliata!!!")
        visualizzaStatoGioco()
    }
}
// mostra a schermo il risultatp
function mostraRisultato() {
// nasconde tutto tranne il messaggi del risultato
    document.getElementById("rigioca").hidden=false
    document.getElementById("inputUtente").hidden=true
    document.getElementById("statoGioco").hidden = true
    document.getElementById('messaggioRisultato').hidden = false
    document.getElementById('provaLettera').hidden = true
    document.getElementById('provaParola').hidden = true

    // crea la variabile clas che fa un commento il base al punteggio e tentativi rimasti
    var clas
    if (tenRimasti(true) <= 0)
        clas = "Non c'è la hai fatta..."
    else if (tenRimasti(true) > 0 && punteggio > 0 && punteggio <= 20)
        clas = "Hai fatto qualcosa di buono!"
    else if (tenRimasti(true) > 0 && punteggio > 20)
        clas = "Sei uno stratega, hai sfruttato bene le lettere per darti una mano."
    else
        clas = "Impossibile"
    // tramite un operatore ternario dice all'utente se ha vinto
    var messaggio = (tenRimasti(true) <= 0) ? "Hai perso! La parola era: " + parolaSegreta : "Hai indovinato la parola!";
    // aggiunge al messaggio il commento sul punteggio e anche il punteggio
    messaggio += "<br> " + clas + " (" + punteggio + ")"
    // aggiunge al messaggio il significato della parola
    messaggio += "<br><br> In ogni caso, la parola segreta è: " + parolaSegreta + ", che significa: " + significato
    // mostra a schermo il messaggio completo
    document.getElementById('messaggioRisultato').innerHTML = messaggio;
}