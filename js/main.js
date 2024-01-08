// Creo una variabile per il titolo
const Passwordwritten = document.getElementById("main-title");

// # Step 1
const userName = prompt(
  "Scrivi il tuo nome per ottenere la tua nuova password per il 2024! "
);
console.log(userName);

// # Step 2
const userSurname = prompt(
  "Bene" + " " + userName + ", ora inserisci qui il tuo cognome"
);
console.log(userSurname);

// # Step 3
const userColor = prompt(
  "Ci siamo quasi" +
    " " +
    userName +
    ", ora inserisci qui il tuo colore preferito"
);
console.log(userColor);

// # Step 4
const userPassword = userName + userSurname + userColor + 24;
console.log(userPassword);
alert(userPassword);
Passwordwritten.innerText = userPassword;
