# ImpiccatoHTML


# 📜 Documentazione Funzioni JavaScript - Gioco "Impiccato"

[cite_start]Questo documento descrive le funzioni JavaScript utilizzate per il gioco "Impiccato" (Hangman), sviluppate da Esposito, Falli e Gallicchio[cite: 1].

---

## 🎨 Funzioni di Inizializzazione e Interfaccia Utente

Queste funzioni gestiscono la configurazione iniziale del gioco e la manipolazione dell'interfaccia utente (UI).

| Funzione | Descrizione | Parametri di Input | Valore di Ritorno |
| :--- | :--- | :--- | :--- |
| **`getRandomColor()`** | [cite_start]Genera e restituisce un **colore casuale** in formato esadecimale (es. `#3F7CBA`), utile per aggiungere varietà visiva allo sfondo della pagina[cite: 2, 5]. | [cite_start]Nessuno [cite: 7] | [cite_start]Colore casuale in formato esadecimale [cite: 10] |
| **`retIndice()`** | [cite_start]Restituisce un **numero intero casuale** [cite: 20] [cite_start]utilizzato per selezionare casualmente una parola dal vettore delle parole[cite: 21]. | [cite_start]Nessuno [cite: 23] | [cite_start]Indice casuale per accedere al vettore delle parole [cite: 25] |
| **`creaCampiCasuali()`** | [cite_start]Genera dinamicamente campi di input corrispondenti a ciascuna lettera della parola segreta[cite: 29]. [cite_start]Formatta l'input in modo che la prima e l'ultima lettera siano in **maiuscolo** come suggerimenti visivi[cite: 30]. | [cite_start]Nessuno [cite: 32] | [cite_start]Nessun valore di ritorno [cite: 34] |
| **`nascondiOminoImpiccato()`** | [cite_start]Nasconde l'illustrazione dell'impiccato [cite: 37][cite_start], offrendo un'esperienza visiva più dinamica[cite: 37]. | [cite_start]Nessuno [cite: 39] | [cite_start]Nessun valore di ritorno [cite: 41] |
| **`visualizzaStatoGioco()`** | [cite_start]**Aggiorna l'interfaccia** mostrando il punteggio, i tentativi rimasti e l'illustrazione dell'impiccato[cite: 45]. [cite_start]Fornisce feedback visivi in tempo reale sullo stato del gioco[cite: 46]. | [cite_start]Nessuno [cite: 47] | [cite_start]Nessun valore di ritorno [cite: 49] |

---

## 🕹️ Funzioni di Logica di Gioco e Controllo

Queste funzioni gestiscono il *gameplay*, i controlli, il punteggio e gli aggiornamenti dello stato.

| Funzione | Descrizione | Parametri di Input | Valore di Ritorno |
| :--- | :--- | :--- | :--- |
| **`controllaLettere()`** | [cite_start]Controlla le lettere inserite dall'utente [cite: 52][cite_start], aggiorna il punteggio e la visualizzazione delle lettere corrette[cite: 52]. [cite_start]Gestisce il feedback visivo **colorando le celle** in base alla correttezza delle lettere inserite[cite: 53]. | [cite_start]Nessuno [cite: 56] | [cite_start]Nessun valore di ritorno [cite: 58] |
| **`tenRimasti(lettera)`** | [cite_start]**Aggiorna il numero di tentativi rimasti**[cite: 61]. [cite_start]Se chiamata dopo il tentativo di inserire una lettera, decrementa il numero di tentativi[cite: 61]. | [cite_start]`lettera` (boolean): Indica se la funzione è chiamata dopo il tentativo di inserire una lettera[cite: 63]. | [cite_start]Numero di tentativi rimasti [cite: 65] |
| **`controllaParola()`** | [cite_start]Controlla se la parola inserita dall'utente è corretta [cite: 76][cite_start], aggiorna il punteggio e fornisce feedback visivo[cite: 76]. [cite_start]Gestisce anche i casi in cui la parola inserita è errata[cite: 77]. | [cite_start]Nessuno [cite: 79] | [cite_start]Nessun valore di ritorno [cite: 81] |

---

## 🔚 Funzioni di Fine Gioco e Reset

Queste funzioni vengono utilizzate per terminare o riavviare una partita.

| Funzione | Descrizione | Parametri di Input | Valore di Ritorno |
| :--- | :--- | :--- | :--- |
| **`Continua()`** | [cite_start]**Decolora le celle** input, mostrando le lettere maiuscole [cite: 69] [cite_start]in modo che l'utente possa visualizzare le lettere corrette[cite: 69]. | [cite_start]Nessuno [cite: 71] | [cite_start]Nessun valore di ritorno [cite: 73] |
| **`mostraRisultato()`** | [cite_start]**Mostra il risultato del gioco** [cite: 84][cite_start], fornendo feedback sul punteggio, sui tentativi rimasti e sul significato della parola segreta[cite: 84]. [cite_start]Nasconde il resto dell'interfaccia di gioco per focalizzarsi sul messaggio del risultato[cite: 85]. | [cite_start]Nessuno [cite: 87] | [cite_start]Nessun valore di ritorno [cite: 89] |
| **`rest()`** | [cite_start]**Ricarica la pagina** [cite: 12][cite_start], consentendo all'utente di iniziare un nuovo gioco[cite: 12]. | [cite_start]Nessuno [cite: 15] | [cite_start]Nessun valore di ritorno [cite: 17] |

---

