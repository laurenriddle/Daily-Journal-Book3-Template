/*
    Purpose: To create the html for a single entry
*/

const entryManager = {

  makeJournalEntryComponent(journalEntry) {
    // Create your own HTML structure for a journal entry
    return `
      <section>
        <h3>${journalEntry.concept}</h3>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.mood}</p>
        <p>${journalEntry.date}</p>
        <button id="editButton--${journalEntry.id}">Edit</button>
        <button id="deleteButton--${journalEntry.id}">Delete</button>
        </section>
    `
  }
}

export default entryManager