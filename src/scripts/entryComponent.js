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
        <p>Mood: ${journalEntry.mood.label}</p>
        <p>Date: ${journalEntry.date}</p>
        <p>Instructor: ${journalEntry.instructor.firstName} ${journalEntry.instructor.lastName}</p>
        </div>
        <button id="editButton--${journalEntry.id}">Edit</button>
        <button id="deleteButton--${journalEntry.id}">Delete</button>
        </section>
    `
  }
}

export default entryManager