let location1 = 3;
let location2 = 4;
let location3 = 5;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

const battleLoop = () => {
  while (isSunk === false) {
    guess = prompt("Eneter a number from 0 to 6 ");
    if (guess < 0 || guess > 6) {
      alert("Please enter a valid value");
    } else {
      guesses++;

      if (guess == location1 || guess == location2 || guess == location3) {
        alert("Hit!");
        hits++;
        if (hits == 3) {
          isSunk = true;
          alert("You have sank my battleship!");
        }
      } else {
        alert("Miss!");
      }
    }
  }

  let stats = `You took ${guesses} guesses to sink the ship and your accuracy is ${Math.floor(
    (3 / guesses) * 100
  )}%`;
  alert(stats);
};

const startButton = document.getElementById("h1");
startButton.addEventListener("click", battleLoop);
