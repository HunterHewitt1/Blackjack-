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
  'Jack (10)',
  'Queen (10)',
  'King (10)',
  'Ace'
]
let deck = []
let newGameBtn = document.getElementById('newGame')
let hitBtn = document.getElementById('hit')
let standBtn = document.getElementById('stand')
let playerHand = document.getElementById('playersHand')
let playerHand2 = document.getElementById('playersHand2')
let playerHand3 = document.getElementById('playersHand3')
let playerHand4 = document.getElementById('playersHand4')
let dealerHand = document.getElementById('dealerHand')
let dealerHand2 = document.getElementById('dealerHand2')
let player = 1
let playerCount = 3

// newGameBtn.addEventListener("click", testFunction);
// const newGame = () => {
//   newGameBtn.addEventListener('click', newDeck)
// }
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
}
const hitMePlayer = () => {
  // buildDeck()
  // randomDeck()
  hit1Player()
}

const dealPlayerCards = () => {
  // buildDeck()
  // randomDeck()
  displayPlayerCards()
}
const dealDealerCards = () => {
  // buildDeck()
  // randomDeck()
  displayDealerCards()
}
let newGameStart = newGameBtn.addEventListener("click", ()=> {
  buildDeck()
  randomDeck()
  dealDealerCards()
  dealPlayerCards()
  
})
let playerHit = hitBtn.addEventListener("click",()=>{
  hitMePlayer()
})




