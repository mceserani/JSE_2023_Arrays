import inquirer from "inquirer";

// Funzione che calcola e restituisce la somma tra due vettori
function vectorAddition(a, b) {
   
  // SCRIVI IL TUO CODICE QUI

}

// Funzione che calcola e restituisce il prodotto scalare tra due vettori
function dotProduct(a, b) {
    
  // SCRIVI IL TUO CODICE QUI

}

// Funzione che calcola e restituisce la norma di un vettore
function norm(a) {
      
    // SCRIVI IL TUO CODICE QUI
  
}

// Funzione che calcola e restituisce il prodotto vettoriale tra due vettori di dimensione 3
function crossProduct(a, b) {
    
  // SCRIVI IL TUO CODICE QUI

}

// Funzione che calcola e restituisce la media di un vettore
function mean(a) {

      // SCRIVI IL TUO CODICE QUI

}

// Funzione che calcola e restituisce la mediana di un vettore
function median(a) {
    
  // SCRIVI IL TUO CODICE QUI

}

// Funzione che calcola e restituisce i valori minimo e massimo di un vettore
function minMax(a) {
    
  // SCRIVI IL TUO CODICE QUI

}
  
// Menù delle opzioni
const menu = [
    {
      type: 'list',
      name: 'operation',
      message: 'Scegli l\'operazione da eseguire:',
      choices: [
        'Somma di due vettori',
        'Prodotto scalare tra due vettori',
        'Norma di un vettore',
        'Prodotto vettoriale tra due vettori',
        'Media di un vettore',
        'Mediana di un vettore',
        'Valori minimo e massimo di un vettore',
        'Esci'
      ]
    }
];

// Menù per la scelta dei vettori
const vectorMenu = [
    {
      type: 'input',
      name: 'vector1',
      message: 'Inserisci il primo vettore separando i valori con uno spazio:',
      validate: function (value) {
        if (value.split(' ').length < 2) {
          return 'Inserisci almeno due valori.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'vector2',
      message: 'Inserisci il secondo vettore separando i valori con uno spazio:',
      validate: function (value) {
        if (value.split(' ').length < 2) {
          return 'Inserisci almeno due valori.';
        }
        return true;
      }
    }
];

// Menù per la scelta del vettore
const vectorMenu2 = [
    {
      type: 'input',
      name: 'vector',
      message: 'Inserisci il vettore separando i valori con uno spazio:',
      validate: function (value) {
        if (value.split(' ').length < 2) {
          return 'Inserisci almeno due valori.';
        }
        return true;
      }
    }
];

// Funzione main
async function main() {
  // Ciclo infinito
  while (true) {
    // Chiede all'utente di scegliere l'operazione da eseguire
    const { operation } = await inquirer.prompt(menu);
    // Se l'utente sceglie di uscire
    if (operation === 'Esci') {
      // Termina il programma
      break;
    }
    // Altrimenti
    else {
      // Se l'operazione scelta dall'utente coinvolge due vettori
      if (operation === 'Somma di due vettori' || operation === 'Prodotto scalare tra due vettori' || operation === 'Prodotto vettoriale tra due vettori') {
        // Chiede all'utente di inserire i vettori
        const { vector1, vector2 } = await inquirer.prompt(vectorMenu);
        // Converte i vettori da stringa a array di numeri
        const a = vector1.split(' ').map(Number);
        const b = vector2.split(' ').map(Number);
        // Esegue l'operazione scelta dall'utente, gestendo eventuali errori
        try {
          switch (operation) {
            case 'Somma di due vettori':
              console.log(vectorAddition(a, b));
              break;
            case 'Prodotto scalare tra due vettori':
              console.log(dotProduct(a, b));
              break;
            case 'Prodotto vettoriale tra due vettori':
              console.log(crossProduct(a, b));
              break;
            default:
              break;
          }
        } catch (error) {
          console.log(error.message);
        }
      } else if (operation === 'Norma di un vettore' || operation === 'Media di un vettore' || operation === 'Mediana di un vettore' || operation === 'Valori minimo e massimo di un vettore') {
        // Chiede all'utente di inserire il vettore
        const { vector } = await inquirer.prompt(vectorMenu2);
        // Converte il vettore da stringa a array di numeri
        const a = vector.split(' ').map(Number);
        // Esegue l'operazione scelta dall'utente gestendo eventuali errori
        try{
          switch (operation) {
            case 'Norma di un vettore':
              console.log(norm(a));
              break;
            case 'Media di un vettore':
              console.log(mean(a));
              break;
            case 'Mediana di un vettore':
              console.log(median(a));
              break;
            case 'Valori minimo e massimo di un vettore':
              console.log(minMax(a));
              break;
            default:
              break;
          }
        } catch (error) {
          console.log(error.message);
        }
      } else {
        throw new Error('Operazione non valida.');
      } 
    }
  }
}

main();
