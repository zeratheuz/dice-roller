function roll() {

  const dices = []
  let numberOfDices = document.querySelector("#numberOfDices").value

  for (numberOfDices > 0; numberOfDices--;) {
    const diceNumber = (Math.floor(Math.random() * 6) + 1)
    dices.push(diceNumber)
  }

  const diceResults = document.querySelector("#diceResults")
  diceResults.textContent = `Result: ${dices.join(', ')}`

  const diceImages = document.querySelector("#diceImages")
  const images = []
  
  for (let dice of dices) {
    images.push(`<img src="images/${dice}.png" width="100" alt="${dice}">`)
  }

  diceImages.innerHTML = images.join(' ')
}

const rollDices = document.querySelector("#rollDices")
rollDices.addEventListener("click", roll)
