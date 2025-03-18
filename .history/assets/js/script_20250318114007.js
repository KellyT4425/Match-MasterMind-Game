document.addEventListener("DOMContentLoaded", runGame);
const delayFlipBack = 1000;
const matchCardFade = 500;

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

  return [...myIcons, ...myIcons];
}

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
   * Iterates throught cardBacks array and assigns icons to card-back <div>
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
let flippedCards = [];

function flipCard() {
  if (flippedCards.length >= 2) {
    return; // Prevent flipping more than two cards at once
  }

  // Ensure the card isn't already flipped
  if (!this.classList.contains("flipped")) {
    this.classList.add("flipped");
    flippedCards.push(this);
  }

  // If two cards are flipped, check for a match
  if (flippedCards.length === 2) {
    cardMatched(); // Delay checking to show second card
  }
}

/**
 * function to determine when cards are matched, and cards disappear, score is incremented.
 */
function cardMatched() {
 // const [card1, card2] = flippedCards;

  let icon1 = card1.querySelector(".card-back img").src;
  let icon2 = card2.querySelector(".card-back img").src;

  if (icon1 === icon2) {
    // Match found - Fade out the matched cards
    setTimeout(
      () => {
        card1.style.visibility = "hidden";
        card2.style.visibility = "hidden";
      },
      matchCardFade,
      matchScore
    );

    flippedCards = []; // Reset for next turn
  } else {
    // No match - Flip cards back.
    setTimeout(() => {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");

      flippedCards = []; // Reset for next turn
    }, delayFlipBack);
  }
}

cardMatched();

/**
 * function to increment score on matched cards.
 */
let points = [];

function matchScore() {
  let score1 = parseInt(document.getElementById("score").innerText);

  console.log(score1);
}

matchScore();

/**
 * shuffle button reset game.
 */
function shuffleReset() {}
