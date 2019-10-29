
const createNewEntry = {
    date: document.getElementById("date").value,
    subject: document.getElementById("subject").value,
    entry: document.getElementById("entry").value,
    mood: document.getElementsByClassName("mood").value,
    createEntryObject: () => {
        return {
            "date": `${date}`,
            "concept": `${subject}`,
            "entry": `${entry}`,
            "mood": `${mood}`
        }
    },
    addEntryToAPI: () => {
        // Invoke the factory function, passing along the form field values
        const newJournalEntry = this.createEntryObject()

        // Use `fetch` with the POST method to add your entry to your API
        fetch("http://localhost:3000/entries", { // Replace "url" with your API's URL
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
        })
    }
}

export default createNewEntry