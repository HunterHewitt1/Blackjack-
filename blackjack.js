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
  for (let i = 0; i < 2; i++) {
    let playerReturn = [`${deck[i].Value} of ${deck[i].Suit}`]
      if (i == 0) {
        playerHand.innerHTML = playerReturn
        console.log(i)
      } else{
        playerHand2.innerHTML = playerReturn
        console.log(i)
      }
  }
}
const displayDealerCards = () => {
  for (let i = 0; i < 2; i++) {
    let playerReturn = [`${deck[i].Value} of ${deck[i].Suit}`]
      if (i == 0) {
        dealerHand.innerHTML = playerReturn
        console.log(i)
      } else{
        dealerHand2.innerHTML = playerReturn
        console.log(i)
      }
  }
}
const hitMe = () => {}
const dealPlayerCards = () => {
  buildDeck()
  randomDeck()
  displayPlayerCards()
}
const dealDealerCards = () => {
  buildDeck()
  randomDeck()
  displayDealerCards()
}
let newGameStart = newGameBtn.addEventListener("click", ()=> {
  dealDealerCards()
  dealPlayerCards()
})




