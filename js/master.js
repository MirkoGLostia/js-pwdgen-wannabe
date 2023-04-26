// richiesta

    // Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito.
    // Infine scrivi sulla pagina: "nomecognomecolorepreferito21"




// variables
let utName, utSurname, favColor;


// chiedere nome utente
utName = prompt('come ti chiami? (se vuoi mettere degli spazi usa questo "-")');


// chiedere cognome utente 
utSurname = prompt('e il tuo cognome? (se vuoi mettere degli spazi usa questo "-")');


// chiedere colore preferito
favColor = prompt('quale colore preferisci? (se vuoi mettere degli spazi usa questo "-")');


// generare password con i dati
const password = (utName + '-' + utSurname + '-' + favColor + '-' + '21');


// mostrare il risultato in pagina
document.getElementById('generated_psw').innerHTML = password


// BONUS

document.getElementById('user_name').innerHTML = utName

document.getElementById('user_surname').innerHTML = utSurname

document.getElementById('user_color').innerHTML = favColor