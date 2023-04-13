import inquirer from 'inquirer';

// Creiamo un vettore vuoto che rappresenta la nostra lista della spesa
let shoppingList = [];

// Definiamo una funzione che mostra il menù delle opzioni all'utente
function showMenu() {
    inquirer.prompt([
        {
        type: 'list',
        name: 'menuOption',
        message: 'Cosa vuoi fare?',
        choices: ['Aggiungi un elemento alla lista', 'Rimuovi un elemento dalla lista', 'Visualizza la lista', 'Svuota completamente la lista', 'Esci']
        }
    ]).then((answers) => {
        // In base alla scelta dell'utente, eseguiamo le operazioni corrispondenti
        switch (answers.menuOption) {
        case 'Aggiungi un elemento alla lista':
            addToList();
            break;
        case 'Rimuovi un elemento dalla lista':
            removeFromList();
            break;
        case 'Visualizza la lista':
            showList();
            break;
        case 'Svuota completamente la lista':
            clearList();
            break;
        case 'Esci':
            console.log('Arrivederci!');
            return;
        }
    });
}

const addQuestions = [
    {
        type: "input",
        name: "addItem",
        message: "Che elemento vuoi inserire?"
    }
];

const remQuestions = [
    {
        type: "input",
        name: "remItem",
        message: "Che elemento vuoi eliminare?"
    }
];

// Definiamo una funzione che permette all'utente di aggiungere un elemento alla lista
// Usare inquirer.prompt() per chiedere all'utente di inserire un elemento da aggiungere alla lista
// Richiamare la funzione showMenu() per mostrare nuovamente il menù delle opzioni
function addToList() {
    inquirer.prompt(addQuestions).then((answers) => {
        shoppingList.push(answers.addItem);
        showMenu();
    });
}

// Definiamo una funzione che permette all'utente di rimuovere un elemento dalla lista
// Usare inquirer.prompt() per chiedere all'utente di inserire un elemento da rimuovere dalla lista
// Richiamare la funzione showMenu() per mostrare nuovamente il menù delle opzioni
function removeFromList() {
    inquirer.prompt(remQuestions).then((answers) => {
        let i = shoppingList.indexOf(answers.remItem);
        if (i != -1){
            // shoppingList = shoppingList.slice(0,i).concat(shoppingList.slice(i+1));
            const rem = shoppingList.splice(i, 1);
            console.log(`Elemento ${rem} eliminato.`);
        }else
            console.log("Elemento non presente.");
        showMenu();
    });
}

// Definiamo una funzione che mostra la lista della spesa
// Se la lista è vuota, mostriamo un messaggio di avvertimento
// Richiamare la funzione showMenu() per mostrare nuovamente il menù delle opzioni
function showList() {
    if (!shoppingList.length)
        console.log("La lista è vuota!");
    else{
        for(let i = 0; i < shoppingList.length; i++){
            console.log(shoppingList[i]);
        }
    }
    showMenu();
}

// Definiamo una funzione che svuota completamente la lista della spesa
// Richiamare la funzione showMenu() per mostrare nuovamente il menù delle opzioni
function clearList() {
    shoppingList = [];
    console.log("Lista svuotata.");
    showMenu();
}

// Avviamo il programma mostrando il menù delle opzioni
showMenu();
