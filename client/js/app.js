let numDecks = 4;
let deckList = []
let sum=0;
const deck1 = ["atraxa", 7]
const deck2 = ["mothman", 4]
const deck3 = ["phelddagrif", 4]
const deck4 = ["phelddagrif", 4]

deckList = [deck1, deck2, deck3, deck4]
for(const deck of deckList){
    for(let i=0; i < deck.length; i++){
        console.log(deck[i])
        console.log(deck[i+1])  //wouldnt post number if I didnt include this...

        if(i=1){
            sum += deck[i]
        }
    }
    
}

let averageManaCost = sum / numDecks;
    console.log(averageManaCost);



