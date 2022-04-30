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
    if condition to check no two players should be able tro receive the same card and loop should be stopped once hand's length reaches 2
    return players hand
create a function that assigns the value of suit to number
  loop players hands and if they have facecards set 10 for facecards and 11 for ace
  break
create a function that finds sum of players cards
  loop to find sum of each players cards
  set the winner as one with highest number and give number of player
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
console.log(cardPlayers);
