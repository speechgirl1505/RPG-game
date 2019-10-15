function Character(name, strength, hitPoints) {
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
    this.printStats = function() {
        console.log(
            `
            name: ${this.name}
            strength: ${this.strength}
            hitPoints: ${this.hitPoints}
            `);
      
    };
    this.isAlive = function() {
        if (this.hitPoints <= 0) {
            console.log("Goodbye, cruel world")
        } else {
            console.log("Try again Bitch")
        };
    }
  };
 
var xena = new Character("Xena", 90, 100);
var kenny = new Character("Dude", 50, 1);
var skilla = new Character("P", 80, 100);
var magee = new Character("Magee", 90, 100);
var rufus = new Character("Rufus", 80, 100);

var characterArray = [xena, kenny, skilla, magee, rufus];

function showCharacters () {
for (let i = 0; i < characterArray.length; i++) {
   var displayCharacter = $("<div>");
displayCharacter.append(`<p> ${characterArray[i].name} </p>`);
// displayCharacter.attr("data-name", characterArray[i].name);
displayCharacter.append(`<button data-name="${characterArray[i].name}" class="charSelectBtn"> Select Character </button>`);
$(".charactersHere").append(displayCharacter);
    
};
};
showCharacters();

$(document).on("click", ".charSelectBtn", function() {
    alert("You clicked!")
});

// grab data-value giphy solution 

//for loop if clicked whatever you want to happen

//functions into construction attack, health-strength

// death stuff if else health




