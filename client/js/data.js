/*Define an array named items containing at least 6 objects.
Every object must contain the same core fields: id, title/name, 
category/type, description, and at least one additional project-specific field.*/

function Deck(id, name, type, description, color, mana) {
  this.id = id;
  this.name = name;
  this.type = type;
  this.description = description;
  this.color = color;
  this.mana = mana;
}

/*Create a function that receives an item ID and returns the matching object. */
function itemIdCheck(id, decks){
    for(deck of decks){
        if(deck.id === id){
            return deck.name
        }
    }
}

/*Create a function that receives a category/type and returns only matching items. 
Use an array method such as filter.*/
function edhDeckCheck(deck){
    return deck.type === "EDH";
}

/*Create a function that calculates a meaningful summary using a loop or array method. 
Examples include average rating, total duration, average cost, number of favorites, 
or count by category. */
function avgManaCost(decks){
    let total = 0;
    for(deck of decks){
        total += deck.mana;
    }
    return (total / decks.length)
}



