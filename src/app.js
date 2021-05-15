// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10
//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20,
}

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true,
}

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty()
  renderCheese()
  renderTomatoes()
  renderOnions()
  renderLettuce()
  renderButtons()
  renderIngredientsBoard()
  renderPrice()
}

function renderPatty() {
  let patty = document.querySelector('#patty')
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = 'inherit'
  } else {
    patty.style.display = 'none'
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.getElementById('cheese')
  if (state.Cheese) {
    cheese.style.display = 'inherit'
  } else {
    cheese.style.display = 'none'
  }
}

function renderTomatoes() {
  let tomato = document.getElementById('tomato')
  if (state.Tomatoes) {
    tomato.style.display = 'inherit'
  } else {
    tomato.style.display = 'none'
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.getElementById('onion')
  if (state.Onions) {
    onion.style.display = 'inherit'
  } else {
    onion.style.display = 'none'
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.getElementById('lettuce')
  if (state.Lettuce) {
    lettuce.style.display = 'inherit'
  } else {
    lettuce.style.display = 'none'
  }
}

document.querySelector('.btn-patty').onclick = function () {
  state.Patty = !state.Patty
  renderAll()
}

// Trial 2 - Setup event listener for the cheese button
document.querySelector('.btn-cheese').onclick = function () {
  state.Cheese = !state.Cheese
  renderAll()
}

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector('.btn-tomatoes').onclick = function () {
  state.Tomatoes = !state.Tomatoes
  renderAll()
}

// Trial 2 - Setup event listener for the onion button
document.querySelector('.btn-onions').onclick = function () {
  state.Onions = !state.Onions
  renderAll()
}
// Trial 2 - Setup event listener for the lettuce button
document.querySelector('.btn-lettuce').onclick = function () {
  state.Lettuce = !state.Lettuce
  renderAll()
}
//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {
  let btnPatty = document.querySelector('.btn-patty')
  let btnCheese = document.querySelector('.btn-cheese')
  let btnTomatoes = document.querySelector('.btn-tomatoes')
  let btnOnions = document.querySelector('.btn-onions')
  let btnLettuce = document.querySelector('.btn-lettuce')
  if (state.Patty) btnPatty.classList.add('active')
  else btnPatty.classList.remove('active')
  if (state.Cheese) btnCheese.classList.add('active')
  else btnCheese.classList.remove('active')
  if (state.Tomatoes) btnTomatoes.classList.add('active')
  else btnTomatoes.classList.remove('active')
  if (state.Onions) btnOnions.classList.add('active')
  else btnOnions.classList.remove('active')
  if (state.Lettuce) btnLettuce.classList.add('active')
  else btnLettuce.classList.remove('active')
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard() {
  if (state.Patty)
    document.getElementsByClassName('items')[0].style.visibility = 'visible'
  else document.getElementsByClassName('items')[0].style.visibility = 'hidden'
  if (state.Cheese)
    document.getElementsByClassName('items')[1].style.visibility = 'visible'
  else document.getElementsByClassName('items')[1].style.visibility = 'hidden'
  if (state.Tomatoes)
    document.getElementsByClassName('items')[2].style.visibility = 'visible'
  else document.getElementsByClassName('items')[2].style.visibility = 'hidden'
  if (state.Onions)
    document.getElementsByClassName('items')[3].style.visibility = 'visible'
  else document.getElementsByClassName('items')[3].style.visibility = 'hidden'
  if (state.Lettuce)
    document.getElementsByClassName('items')[4].style.visibility = 'visible'
  else document.getElementsByClassName('items')[4].style.visibility = 'hidden'
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

function renderPrice() {
  var total = 20
  if (state.Patty) total = total + ingredients.Patty

  if (state.Cheese) total = total + ingredients.Cheese

  if (state.Tomatoes) total = total + ingredients.Tomatoes
  if (state.Onions) total = total + ingredients.Onions
  if (state.Lettuce) total = total + ingredients.Lettuce
  document.getElementsByClassName('price-details')[0].innerHTML = total
}
