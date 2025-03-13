document.addEventListener("DOMContentLoaded", runGame);

/**
 * function to add how the game should run
 */
function runGame() {
  let cardsFront = document.getElementsByClassName("card");

  for (let card of cardsFront) {
    card.addEventListener("click", flipCard);
  }
}

/**
 * duplicate icon array to make 10 pairs.
 */
function duplicateIcons() {
  let myIcons = [
    "assets/images/card1.png",
    "assets/images/card2.png",
    "assets/images/card3.png",
    "assets/images/card4.png",
    "assets/images/card5.png",
    "assets/images/card6.png",
    "assets/images/card7.png",
    "assets/images/card8.png",
    "assets/images/card9.png",
    "assets/images/card10.png",
  ];

  let duplicate = [...myIcons, ...myIcons];
  return duplicate;
}

duplicateIcons();

/**
 * function the shuffle cards and assign icon to cards
 */
function cardShuffle() {
    const iconArray = duplicateIcons();
    const cardBacks = document.getElementsByClassName("card-back");
  
    for (let i = 0; i < iconArray.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [iconArray[i], iconArray[j]] = [iconArray[j], iconArray[i]];
    }
  /**
   * Iterates throught cardBacks array and assigns to card-back <div>
   */
    for (let i = 0; i < cardBacks.length; i++) {
      cardBacks[i].innerHTML = `<img src="${iconArray[i]}" alt="icon">`;
    }
  
    console.log(iconArray);
    console.log(cardBacks);
  }

cardShuffle();

/**
 * function to make card flip when clicked to display, icon.
 */
function flipCard() {
  cardsFront = document.getElementsByClassName("card");
  
}


/**
 * function to determine when cards are matched, and cards disappear, score is incremented.
 */
function cardMatched() {}

/**
 * function if there is no match, include hiding cards again
 */
function noMatch() {}

/**
 * function to increment score on matched cards.
 */
function matchScore() {}

/**
 * shuffle button reset game.
 */
function shuffleReset() {}
