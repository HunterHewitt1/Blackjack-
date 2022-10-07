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
let testDealer = document.querySelectorAll(".dealer")

let player = 1
let playerScore = 0
let dealerScore = 0
let playerCount = 3
let dealerCount = 3

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
  if (player === 1) {
  let card = deck.shift()
  let cardReturn = `${card.Value} of ${card.Suit}`
  document.getElementById(`playersHand${playerCount}`).innerHTML = cardReturn
  playerCount++
  sumScorePlayer()
  playerStand
  bustCondition()
  }
}
const hit1Dealer = () => {
  if (player === 0){
  let card = deck.shift()
  let cardReturn = `${card.Value} of ${card.Suit}`
  document.getElementById(`dealerHand${dealerCount}`).innerHTML = cardReturn
  dealerCount++
  sumScoreDealer()
  winnerConditions()
  bustCondition()
  }
}
const sumScorePlayer = () => {
  let sum = 0
  for (let i = 0; i < testPlayer.length; i++) {
    if (parseInt(testPlayer[i].innerHTML.substring(0,2)) > 0){
      sum += parseInt(testPlayer[i].innerHTML.substring(0,2))
      playerScore = sum
      playersCards.innerText = "Player has: " + playerScore
      console.log(playerScore)
    }
    else {
      break;
    }
  }
}
const sumScoreDealer = () => {
  let sum = 0
  for (let i = 0; i < testDealer.length; i++) {
    if (parseInt(testDealer[i].innerHTML.substring(0,2)) > 0){
      sum += parseInt(testDealer[i].innerHTML.substring(0,2))
      dealerScore = sum
      dealersCards.innerText = "Dealer has: " + dealerScore
      console.log(dealerScore)
    }
    else {
      break;
    }
  }
}
const winnerConditions = () => {
  if (sumScorePlayer > sumScoreDealer && playerScore <= 21 && dealerScore <= 21) {
    updateText.innerHTML = "Player 1 Wins!"
    
  }else if(sumScorePlayer < sumScoreDealer && playerScore <= 21 && dealerScore <= 21) {
    updateText.innerHTML = "Dealer Wins!"
  }
}
const bustCondition = () => {
  if (sumScorePlayer > 21 || sumScoreDealer > 21){
    updateText.innerHTML = "BUST"
  }
}
//Event Listeners
let newGameStart = newGameBtn.addEventListener("click", ()=> {
  buildDeck()
  randomDeck()
  displayDealerCards()
  displayPlayerCards()
  sumScorePlayer()
  sumScoreDealer()
})
let playerHit = hitBtn.addEventListener("click",()=>{
  hit1Player()
})
let dealerHit = hitBtn.addEventListener("click",()=>{
  hit1Dealer()
})
let playerStand = standBtn.addEventListener("click", ()=>{
  if (standBtn = "click") {
    player = 0
    console.log(player)
  }
})
//InnerText




