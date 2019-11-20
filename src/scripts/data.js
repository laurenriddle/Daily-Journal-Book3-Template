/*
    Function 1 Purpose: To GET all entries

    Function 2 Purpose: To POST a new entry

    Function 3 Purpose: To DELETE and existing entry

    Function 4 Purpose: To GET a single existing entry

    Function 5 Purpose: To PUT an existing entry

*/
const baseURL = "http://localhost:8088/entries"

const API = {
  getJournalEntries() {
    // GET all journal entries
    return fetch(`${baseURL}?_expand=mood`)
      .then(response => response.json())
  },
  saveJournalEntry(entry) {
    // perform a POST to save a new journal entry
    return fetch(`${baseURL}?_expand=mood`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    })
  },
  deleteSingleJournalEntry(entryId) {
    // perform a DELETE to delete a journal entry
      return fetch(`${baseURL}/${entryId}`, {
          method: "DELETE"
      })
          .then(response => response.json())
  },
  getSingleJournalEntry(entryId) {
    // GET the journal entry with the specified ID number
    return fetch(`${baseURL}/${entryId}`)
        .then(response => response.json())
},
editSingleJournalEntry(entryId, entry) {
  // perform a PUT on the journal entry with the specified ID number
 return fetch(`${baseURL}/${entryId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(response => response.json())
},
searchAllJournalEntries(userInput){
  return fetch(`${baseURL}?q=${userInput}`)
  .then(response => response.json())
}
}
export default API
