const API = {
  getJournalEntries() {
    return fetch("http://localhost:3000/entries")
      .then(response => response.json())
  },
  saveJournalEntry(entry) {
    return fetch("http://localhost:3000/entries", { // Replace "url" with your API's URL
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    })
  },
  deleteSingleJournalEntry(entryId) {
      return fetch(`http://localhost:3000/entries/${entryId}`, {
          method: "DELETE"
      })
          .then(response => response.json())
  }
  
}
export default API
