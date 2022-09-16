window.addEventListener("DOMContentLoaded", () => {
  const array = ["javascript", "javascript", "php", "php", "python", "python"];
  var randomizedList = shuffle(array);
  const cards = document.querySelectorAll(".card");
  var cardA = null;
  var cardB = null;
  var IndxA = null;
  var IndxB = null;
  var flippedCard = 0;
  var points = 0;

  cards.forEach((card, i) => {
    document.getElementById(`img-${i}`).src = `/src/${randomizedList[i]}.png`;
  });

  // for each card

  cards.forEach((card, i) => {
    card.addEventListener("click", () => {
      if (cardA == null) {
        card.children[0].classList.add("flip");
        cardA = card;
        IndxA = i;
      } else if ((cardB == null) & (cardA != null)) {
        card.children[0].classList.add("flip");
        cardB = card;
        IndxB = i;
        if (randomizedList[IndxA] == randomizedList[IndxB]) {
          flippedCard += 1;
          setTimeout(() => {
            cardA.children[0].classList.add("display-none");
            cardB.children[0].classList.add("display-none");
            cardA = null;
            cardB = null;
            IndxA = null;
            IndxB = null;
            if (flippedCard == 3) {
              flippedCard = 0;
              points += 1;
              document.getElementById("score").innerHTML = points;
              cardA = null;
              cardB = null;
              IndxA = null;
              IndxB = null;
              cards.forEach((card) => {
                card.children[0].classList.remove("flip");
                card.children[0].classList.remove("display-none");
              });
            }
          }, 600);
        } else {
          setTimeout(() => {
            cardA.children[0].classList.remove("flip");
            cardB.children[0].classList.remove("flip");
            cardA = null;
            cardB = null;
            IndxA = null;
            IndxB = null;
          }, 600);
        }
      }
    });
  });

  // reset the game

  const reset = document.getElementById("reset");
  reset.addEventListener("click", () => {
    points = 0;
    document.getElementById("score").innerHTML = points;
  });
});

//  shuffle function
const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};
