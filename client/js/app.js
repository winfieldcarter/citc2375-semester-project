const projTitle = "MTG Deck Lists"
let isEDH = true;
let numDecks = 4;
let deckList = []
let sum=0;
const deck1 = ["atraxa", 7]
const deck2 = ["mothman", 4]
const deck3 = ["phelddagrif", 4]
const deck4 = ["valgavoth", 4]

deckList = [deck1, deck2, deck3, deck4]
for(const deck of deckList){
    for(let i=0; i < deck.length; i++){
        if (i% 2 == 0){
            console.log("Deck Commander: " + deck[i])
        }
        else{
            console.log("Mana Cost: " + deck[i])
        }
        if(i===1){
            sum += deck[i]
        }
    }
    
}


/*Define an array named items containing at least 6 objects.*/
const atraxa = new Deck(1, "Planar Threats", "EDH", "First Deck", "GWUB", 7);

const mothman = new Deck(2, "Mill to Win", "EDH", "Mill out your opponents", "BGU", 4);

const phelddagrif = new Deck(3, "Phelddafun", "EDH", "Give gifts that really aren't gifts", "WUG", 4);

const valgavoth = new Deck(4, "Lord of Pain", "EDH", "Damage doesn't hurt untless you only have 1 life", "BR", 4);

const pako = new Deck(5, "Good Boy", "Standard", "He plays fetch. Need I say more?", "GUR", 5);

const gwenom = new Deck(6, "Lets Go Gambling", "Modern", "You never know what will be on the top of your library but lets hope you can pay for it.", "B", 5);

const decks = [atraxa, mothman, phelddagrif, valgavoth, pako, gwenom];

console.log("");//Makes console easier to differentiate app.js from data.js
for(deck of decks){
    console.log(deck.name)
}

/* Update app.js so its console output calls at least two of your new functions. */

/*Calls function to return deck name for given id value*/
console.log("The deck at ID " + 2 + " is " + itemIdCheck(2, decks));

/*Calls function that filters and returns all edh decks and stores into a new array*/
const edhDecks = decks.filter(edhDeckCheck);

for(deck of edhDecks){
    console.log(deck)
}

/*Displays the average mana cost of all decks*/
console.log("The average mana cost of all decks is: " + avgManaCost(decks).toFixed(2));

const jsonString = JSON.stringify(decks);

const returnedDeckArray = JSON.parse(jsonString);
console.log(returnedDeckArray[0]);





