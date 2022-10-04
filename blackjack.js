let suits = ['♠️', '♥️', '♦️', '♣️']
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
let newGameBtn = document.getElementById('newgame')
let hitBtn = document.getElementById('hit')
let standBtn = document.getElementById('stand')
let playerHand = document.getElementById('playersHand')

const newGame = () => {
  newGameBtn.addEventListener('click', newDeck)
}
const testFunction = () => {
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let card = { Value: values[x], Suit: suits[i] }
      deck.push(card)
    }
  }

  for (let i = deck.length - 1; i > 0; i--) {
    let a = Math.floor(Math.random() * i)
    let temp = deck[i]
    deck[i] = deck[a]
    deck[a] = temp
  }

  for (let i = 0; i < 2; i++) {
    let playerReturn = [`${deck[i].Value} of ${deck[i].Suit}`]
    playerHand.innerHTML = playerReturn
    console.log(playerReturn)
  }
}
testFunction()
const startGame = () => {}
