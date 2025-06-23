import os
import zipfile
import sqlite3
import csv

def extract_apkg(apkg_file, extract_path="extracted_apkg"):
    if not os.path.exists(extract_path):
        os.makedirs(extract_path)
    with zipfile.ZipFile(apkg_file, 'r') as zip_ref:
        zip_ref.extractall(extract_path)
    return os.path.join(extract_path, "collection.anki2")

def convert_to_csv(db_path, output_file="flashcards3.csv"):
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    # Notes table contains the actual flashcard fields
    cursor.execute("SELECT flds FROM notes")
    notes = cursor.fetchall()

    with open(output_file, "w", newline='', encoding="utf-8") as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(["Question", "Answer"])
        for note in notes:
            fields = note[0].split('\x1f')  # Anki uses Unit Separator (0x1f)
            if len(fields) >= 2:
                writer.writerow([fields[0], fields[1]])

    print(f"✅ Exported {len(notes)} flashcards to {output_file}")
    conn.close()

# === RUN THIS ===
if __name__ == "__main__":
    apkg_path = "chirag.apkg"  # Replace with your file
    db_file = extract_apkg(apkg_path)
    convert_to_csv(db_file)
