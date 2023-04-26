// richiesta

    // Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito.
    // Infine scrivi sulla pagina: "nomecognomecolorepreferito21"




// variables
let utName, utSurname, favColor;


// chiedere nome utente
utName = prompt('come ti chiami?');
console.log(utName);


// chiedere cognome utente 
utSurname = prompt('e il tuo cognome?');
console.log(utSurname);


// chiedere colore preferito
favColor = prompt('quale colore preferisci?');
console.log(favColor);


// generare password con i dati
const password = (utName + utSurname + favColor + '21');
console.log(password);


// mostrare il risultato in pagina
document.getElementById('generated_psw').innerHTML = password