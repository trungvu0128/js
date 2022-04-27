var player1 = [];
var player2 = [];
var player3 = [];
var player4 = [];
var cards = ["4K", "KH", "5C", "KA", "QH", "KD", "2H", "10S",
    "AS", "7H", "9K", "10D"];
var index;
var card;
//   ||  || 
function play() {
    while (cards.length > 0) {
        index = Math.floor(Math.random() * cards.length);
        card = cards[index];
        if (card) {
            if (player1.length < 3) {
                player1.push(card);
            }
            else if (player2.length < 3) {
                player2.push(card);
            }
            else if (player3.length < 3) {
                player3.push(card);
            }
            else if (player4.length < 3) {
                player4.push(card);
            }
            cards.splice(index, 1);
            console.log(index);
        }
    }
    console.log(player1);
    console.log(player2);
    console.log(player3);
    console.log(player4);
}

play();