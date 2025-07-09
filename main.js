function roll() {
  const dices = []
  let numberOfDices = document.querySelector("#numberOfDices").value
  for (numberOfDices > 0; numberOfDices--;) {
    const diceNumber = (Math.floor(Math.random() * 6) + 1)
    dices.push(diceNumber)
  }
  const dicesResult = document.querySelector("#dicesResult")
  dicesResult.textContent = `Result: ${dices.join(', ')}`
  
  const dicesImages = document.querySelector("#dicesImages")
  dicesImages.innerHTML = ''

  for (dice in dices) {
    dicesImages.innerHTML += `<img src="images/${dices[dice]}.png" width="100" alt="${dices[dice]}">`
  }
}

const rollDices = document.querySelector("#rollDices")
rollDices.addEventListener("click", roll)