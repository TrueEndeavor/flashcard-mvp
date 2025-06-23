import csv
import json

def csv_to_json(csv_file, json_file):
    flashcards = []

    with open(csv_file, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            flashcards.append({
                "question": row["Question"],
                "answer": row["Answer"]
            })

    with open(json_file, 'w', encoding='utf-8') as jsonfile:
        json.dump(flashcards, jsonfile, indent=2, ensure_ascii=False)

    print(f"✅ Converted {len(flashcards)} flashcards to {json_file}")

# === RUN THIS ===
if __name__ == "__main__":
    csv_to_json("flashcards3.csv", "cards3.json")
