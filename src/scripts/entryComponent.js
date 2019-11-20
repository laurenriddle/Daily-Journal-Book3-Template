/*
    Purpose: To create the html for a single entry
*/

const entryManager = {

  makeJournalEntryComponent(journalEntry) {
    // Create your own HTML structure for a journal entry
    return `
      <section class="singleEntry">
        <h3>${journalEntry.concept}</h3>
        <hr />
        <p>${journalEntry.entry}</p>
        <hr />
        <div class="details">
        <p>Mood: ${journalEntry.mood}</p>
        <p>Date: ${journalEntry.date}</p>
        </div>
        <button id="editButton--${journalEntry.id}">Edit</button>
        <button id="deleteButton--${journalEntry.id}">Delete</button>
        </section>
    `
  }
}

export default entryManager