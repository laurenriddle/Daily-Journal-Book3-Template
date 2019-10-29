
import renderDom from "./entriesDOM.js"

const API = {
  getJournalEntries() {
    return fetch("http://localhost:3000/entries")
      .then(response => response.json())
  },
  saveJournalEntry() {
    const date = document.getElementById("date").value
    const subject = document.getElementById("subject").value
    const entry = document.getElementById("entry").value
    const mood = document.getElementById("mood").value
    if (date === "" || subject === "" || entry === "") {
      alert("Required fields must be filled out.")
    } if (subject.length >= 20) {
      alert("Concepts field length is too long. Please shorten message.")
    }else {
      let newJournalEntry = {
        "date": date,
        "concept": subject,
        "entry": entry,
        "mood": mood
      }
      fetch("http://localhost:3000/entries", { // Replace "url" with your API's URL
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
      })
      this.getJournalEntries()
        .then(response => renderDom.renderJournalEntries(response))
    }
  }
}
export default API
