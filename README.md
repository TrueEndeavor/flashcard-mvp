# Flashcard MVP 🧠

A simple, minimal flashcard web app inspired by Anki self-study best practices. 
Built to simulate spaced repetition using a clean UI with tag-based topics and recall ratings.

---

## 🌟 Features

- 🔹 Clickable flashcard: reveal answers on click
- 🏷 Tag display: subject/topic tags per question
- 🔁 Recall rating buttons: Easy, Medium, Forgot
- ⏭ Auto-advance to next card after rating
- 🖼 Stable layout with no visual jumps
- 📦 Pure HTML/CSS/JS – no frameworks

---

## 🚀 Getting Started

1. **Clone or download this repo**
2. Open `index.html` in any browser
3. Click the card to show the answer
4. Click a difficulty rating (Easy, Medium, Forgot) to move to the next card

---

## 🧰 Folder Structure

flashcard_mvp/
├── index.html # Main UI
├── style.css # Layout & styles
├── script.js # App logic
├── converters/ # Tools to convert Anki decks
│ ├── apkg_to_csv.py
│ └── csv_to_json.py


---

## 🔄 Convert Your Own Anki Decks

Use the tools inside the `converters/` folder:

- `apkg_to_csv.py`: Extract from Anki `.apkg`
- `csv_to_json.py`: Convert CSV to app-compatible `.json`

Then replace or add to the `cards.json` file to load dynamically.

---

## 📦 Future Plans

- Add support for multiple decks
- Filter by tags (e.g. only Physics cards)
- Store user progress (localStorage or Firebase)

---

## 💡 Inspiration

This project is inspired by Anki cards

---

## 🛠 Tech Stack

- Frontend: HTML, CSS, JavaScript
- Designed for easy portability and extension

---

## 📄 License

MIT License — feel free to use and adapt!

---