let suits = ['Spades ♠️', 'Hearts ♥️', 'Diamonds ♦️', 'Clubs ♣️']
let values = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '10 Jack',
  '10 Queen',
  '10 King',
  '1 Ace'
]
let deck = []
let newGameBtn = document.getElementById('newGame')
let hitBtn = document.getElementById('hit')
let standBtn = document.getElementById('stand')
let updateText = document.getElementById("updateText")
let playersCards = document.getElementById("playersCards")
let dealersCards = document.getElementById("dealersCards")
let playerHand = document.getElementById('playersHand')
let playerHand2 = document.getElementById('playersHand2')
let playerHand3 = document.getElementById('playersHand3')
let playerHand4 = document.getElementById('playersHand4')
let dealerHand = document.getElementById('dealerHand')
let dealerHand2 = document.getElementById('dealerHand2')
let testPlayer = document.querySelectorAll(".player")
let player = 1
let playerScore = 0
let dealerScore = 0
let playerCount = 3

//Functions
const buildDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let card = { Value: values[x], Suit: suits[i] }
      deck.push(card)
    }
  }
}
const randomDeck = () => {
  for (let i = deck.length - 1; i > 0; i--) {
    let a = Math.floor(Math.random() * i)
    let temp = deck[i]
    deck[i] = deck[a]
    deck[a] = temp
  }
}
const displayPlayerCards = () => {
  let card1 = deck.shift()
  let card2 = deck.shift()
  let playerReturn1= `${card1.Value} of ${card1.Suit}`
  let playerReturn2 = `${card2.Value} of ${card2.Suit}`
  playerHand.innerHTML = playerReturn1
  playerHand2.innerHTML = playerReturn2
  let sumCards = `${card1}`
  updateText.innerHTML = sumCards
}
const displayDealerCards = () => {
  let card1 = deck.shift()
  let card2 = deck.shift()
  let dealerReturn1 = `${card1.Value} of ${card1.Suit}`
  let dealerReturn2 = `${card2.Value} of ${card2.Suit}`
  dealerHand.innerHTML = dealerReturn1
  dealerHand2.innerHTML = dealerReturn2
}
const hit1Player = () => {
  let card = deck.shift()
  let cardReturn = `${card.Value} of ${card.Suit}`
  document.getElementById(`playersHand${playerCount}`).innerHTML = cardReturn
  playerCount++
  sumScore()
}
const switchPlayer = () => {

}
const numericValue = (cards) => {
  switch (cards.value) {
    case "Ace":
      return 1;
    case "Two":
      return 2;
    case "Three":
      return 3;
    case "Four":
      return 4;
    case "Five":
      return 5;
    case "Six":
      return 6;
    case "Seven":
      return 7;
    case "Eight":
      return 8;
    case "Nine":
      return 9;
    default:
      return 10;
  }
}
const sumScore = () => {
  for (let i = 0; i < testPlayer.length; i++) {
    if (parseInt(testPlayer[i].innerHTML.substring(0,2)) > 0){
      playerScore += parseInt(testPlayer[i].innerHTML.substring(0,2))
      playersCards.innerText = "Player has:" + playerScore
      console.log(playersCards)
    }
    else {
      break;
    }
  }
}
//Event Listeners
let newGameStart = newGameBtn.addEventListener("click", ()=> {
  buildDeck()
  randomDeck()
  displayDealerCards()
  displayPlayerCards()
  sumScore()
})
let playerHit = hitBtn.addEventListener("click",()=>{
  hit1Player()
})
let playerStand = standBtn.addEventListener("click", ()=>{
  player--
  if (player === 0) {
    //if statment here to check hit or not
  }
})
//InnerText




