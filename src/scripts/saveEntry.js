import renderDom from "./entriesDOM.js"
import API from "./data.js"

const saveObject = {
    saveJournalEntry() {
        const date = document.querySelector("#date").value
        const subject = document.querySelector("#subject").value
        const entry = document.querySelector("#entry").value
        const mood = document.querySelector("#mood").value
        if (date === "" || subject === "" || entry === "") {
            alert("Required fields must be filled out.")
        } if (subject.length >= 30) {
            alert("Concepts field length is too long. Please shorten message.")
        } else {
            let newJournalEntry = {
                "date": date,
                "concept": subject,
                "entry": entry,
                "mood": mood
            }
            API.postObject(newJournalEntry)
            API.getJournalEntries()
                .then(response => renderDom.renderJournalEntries(response))
        }
    }
}
export default saveObject