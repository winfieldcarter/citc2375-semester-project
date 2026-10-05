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

let averageManaCost = sum / numDecks;
    console.log("Average Mana Cost: " + averageManaCost);



