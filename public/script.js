let cards = [];
let currentIndex = 0;
let showingAnswer = false;

fetch("public/cards.json")
  .then(res => res.json())
  .then(data => {
    cards = data;
    showCard();    
  });

// 🔀 Shuffle cards once at start
// cards = shuffle(cards);
// showCard();

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function showCard() {
  if (currentIndex >= cards.length) {
    document.getElementById("flashcard").innerHTML = "<b>Deck finished!</b><br><button onclick='restartDeck()'>Restart</button>";
    return;
  }

  showingAnswer = false;
  const card = cards[currentIndex];

  document.getElementById("question").textContent = card.question;
  document.getElementById("answer").textContent = card.answer;
  document.getElementById("answer").classList.add("hidden");

  // Render tags as badges
    const tagContainer = document.getElementById("tags");
    tagContainer.innerHTML = "";
    (card.tags || []).forEach(tag => {
    const tagEl = document.createElement("span");
    tagEl.className = "tag";
    tagEl.textContent = tag;
    tagContainer.appendChild(tagEl);
    });
    const answerEl = document.getElementById("answer");
  answerEl.classList.remove("visible"); // Hide it
  answerEl.textContent = card.answer;

  // Disable buttons until answer is shown
  document.querySelectorAll(".rating-button").forEach(btn => {
    btn.disabled = true;
  });

}

function toggleAnswer() {
  showingAnswer = true;
    const answerEl = document.getElementById("answer");
    answerEl.classList.remove("hidden");
  answerEl.classList.add("visible");

  // Enable rating buttons
  document.querySelectorAll(".rating-button").forEach(btn => {
    btn.disabled = false;
  });
}

function rate(difficulty) {
  console.log(`Card ${currentIndex + 1} rated: ${difficulty}`);
  currentIndex++;
  showCard();
}

function nextCard() {
  currentIndex++;
  showCard();
}

function restartDeck() {
  currentIndex = 0;
  cards = shuffle(cards);
  showCard();
}
