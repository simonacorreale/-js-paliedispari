/* Palidroma ✨
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Domande da farsi quando si crea una funzione:
Come dovrebbe chiamarsi?
Ho bisogno di parametri?
Devo restituire un valore?
Se sì, di che tipo?
Buon lavoro e buon divertimento! :slightly_smiling_face: */

/* ___Task in italiano___ */
/* Cosa deve fare il programma starter pack: 
1) L'utende teve inserire una parola
2) Fare un controllo sulla parola palindroma
3) Selezione pari o dispari
4) Inserire i risultati
*/

function controlWord(word) {

    const pulWord = word.toLowerCase().replace(/\s+/g, '');
    const isPalindrome = pulWord === pulWord.split('').reverse().join('');

    return {
        isPalindrome: isPalindrome,
    };
}

const result = controlWord("Anna");
console.log(result);



