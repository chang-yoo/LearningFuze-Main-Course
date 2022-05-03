console.log('Lodash is loaded:', typeof _ !== 'undefined');

/*
create an object literal for players that includes name and hand
create an array for 52 card deck with rank and another array for suit
create a function that returns a shuffled deck
  loop and set every players hand as an array for future use
  assign an emtpy array for shuffled deck to be assigned
  loop through deck with rank and assign it to an object literal
  push that object to deck
  use shuffle method to shuffle the deck
  return the shuffled deck
create a function that returns two cards at players hand
  assign previous function to a variable
  loop to push the shuffled cards to players hand
    use one dech to push from previous function in order to players hand so each player cannot get same cards
    if condition loop should be stopped once hand's length reaches 2
    return players hand
create a function that assigns the value of suit to number
  assign a 0 for winningscore to find the highest score at the end
  assign winner as null and update with the string saying winner blah blah balh
  loop players hands and if they have facecards set 10 for facecards and 11 for ace
  loop to find sum of each players cards and use if statement to find the highest score and the name
  return the winner
*/

var cardPlayers = [
  {
    name: 'Player1',
    hand: null
  },
  {
    name: 'Player2',
    hand: null
  },
  {
    name: 'Player3',
    hand: null
  },
  {
    name: 'Player4',
    hand: null
  }
];

var card = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
var suit = ['club', 'diamonds', 'hearts', 'spades'];

function shuffledDeck() {
  for (var i = 0; i < cardPlayers.length; i++) {
    cardPlayers[i].hand = [];
  }
  var deck = [];
  for (var q = 0; q < card.length; q++) {
    for (var j = 0; j < suit.length; j++) {
      var obj = {
        rank: card[q],
        face: suit[j]
      };
      deck.push(obj);
    }
  }
  var shuffled = _.shuffle(deck);
  return shuffled;
}

function dealCards() {
  var afterShuffled = shuffledDeck();
  var index = 0;
  for (var i = 0; i < cardPlayers.length; i++) {
    for (var j = 0; j < afterShuffled.length; j++) {
      index++;
      cardPlayers[i].hand.push(afterShuffled[index]);
      if (cardPlayers[i].hand.length === 2) {
        break;
      }
    }
  }
  return cardPlayers;
}

function score() {
  var cardsOnHand = dealCards();
  console.log(cardsOnHand);
  var winner = null;
  var winningScore = 0;
  for (var i = 0; i < cardsOnHand.length; i++) {
    for (var j = 0; j < cardsOnHand[i].hand.length; j++) {
      if (cardsOnHand[i].hand[j].rank === 'Jack' || cardsOnHand[i].hand[j].rank === 'Queen' || cardsOnHand[i].hand[j].rank === 'King') {
        cardsOnHand[i].hand[j].rank = 10;
      } else if (cardsOnHand[i].hand[j].rank === 'Ace') {
        cardsOnHand[i].hand[j].rank = 11;
      }
    }
    var score = cardsOnHand[i].hand[0].rank + cardsOnHand[i].hand[1].rank;
    if (score > winningScore) {
      winningScore = score;
      winner = cardPlayers[i].name + ' is the Winner with a score of ' + winningScore;
      console.log(winner);
    }
  }
  return winner;
}

score();
