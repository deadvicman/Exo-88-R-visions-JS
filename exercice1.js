let userInput = document.createElement("input");
let userInputButton = document.createElement("input");
userInputButton.type = "button";
userInputButton.value = "Envoyer";

document.body.append(userInput);
document.body.append(userInputButton);

let randomButton = document.createElement("input");
randomButton.type = "button";
randomButton.value = "Aléatoire";
document.body.append(randomButton)
randomButton.addEventListener("click", function (){

    let randomTable = document.createElement("div");
    randomTable.innerText = "Entrée Aléatoire: " + table[Math.floor(Math.random()*table.length)];
    document.body.append(randomTable);
})

let allTableButton = document.createElement("input");
allTableButton.type = "button";
allTableButton.value = "Afficher Tout";
document.body.append(allTableButton);
allTableButton.addEventListener("click", function (){
    let allTable = document.createElement("div");
    allTable.innerText = table.join(", ");
    document.body.append(allTable);
})

let deleteLastButton = document.createElement("input");
deleteLastButton.type = "button";
deleteLastButton.value = "Supprimer Dernier";
document.body.append(deleteLastButton);
deleteLastButton.addEventListener("click", function (){
    table.pop();
})

let deleteAllButton = document.createElement("input");
deleteAllButton.type = "button";
deleteAllButton.value = "Supprimer Tout";
document.body.append(deleteAllButton);
deleteAllButton.addEventListener("click", function (){
    table = [];
})

let table =[];
userInputButton.addEventListener("click", function (){
    table.push(userInput.value.toString());

    if (table.length >= 10) {
        let randomTable = document.createElement("div");
        randomTable.innerText = "Entrée Aléatoire: " + table[Math.floor(Math.random()*table.length)];
        document.body.append(randomTable);

        let fifthEntry = document.createElement("div");
        fifthEntry.innerText = "5eme entrée du tableau: " + table[5];
        document.body.append(fifthEntry);
    } else if (table.length < 10) {
        let notTenYet = document.createElement("div");
        notTenYet.innerText = "Veuillez entrer 10 valeurs";
        document.body.append(notTenYet);
    }


})