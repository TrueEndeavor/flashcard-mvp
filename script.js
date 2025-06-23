let cards = [];
let currentIndex = 0;
let showingAnswer = false;

fetch("cards.json")
  .then((res) => res.json())
  .then((data) => {
    cards = data;
    showCard();
  });

function showCard() {
  if (currentIndex >= cards.length) {
    document.getElementById("flashcard").innerHTML = "<b>You've finished!</b>";
    return;
  }
  showingAnswer = false;
  document.getElementById("question").textContent = cards[currentIndex].question;
  document.getElementById("answer").textContent = cards[currentIndex].answer;
  document.getElementById("answer").classList.add("hidden");
}

function toggleAnswer() {
  showingAnswer = !showingAnswer;
  document.getElementById("answer").classList.toggle("hidden");
}

function rate(difficulty) {
  console.log(`You rated this card: ${difficulty}`);
  currentIndex++;
  showCard();
}
