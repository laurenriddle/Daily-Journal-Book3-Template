import API from "./data.js"
import renderDom from "./entriesDOM.js"
import defaultElements from "./createForm.js"


const radioButtons = document.getElementsByName("moodButton")
const logArticle = document.querySelector(".entryLog")

const eventListeners = {
    radioButtonsEventListener() {
        radioButtons.forEach((button) => {
            button.addEventListener("click", event => {
                const mood = event.target.value
                // console.log(mood)
                API.getJournalEntries()
                    .then(response => {
                        // console.log(response)
                        let filteredArray = response.filter(entry => {
                            let moodBoolean = false
                            // console.log(entry.mood)
                            if (entry.mood === mood) {
                                moodBoolean = true
                                // console.log("event.target.value =", mood)
                                // console.log("entry.mood =", entry.mood)

                                // console.log("this is working!", mood)
                            } else if (mood === "All") {
                                moodBoolean = true
                            }
                            return moodBoolean
                            // console.log(moodBoolean)
                        })
                        // console.log(filteredArray)
                        renderDom.renderJournalEntries(filteredArray)

                    })
            }
            )
        });
    },
    deleteButtonsEventListener() {
        logArticle.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteButton--")) {
                // Extract entry id from the button's id attribute
                const entryToDelete = event.target.id.split("--")[1]

                // Invoke the delete method, then get all entries and render them
                API.deleteSingleJournalEntry(entryToDelete)
                    .then(API.getJournalEntries)
                    .then(response => renderDom.renderJournalEntries(response))
            }
        })
    },
    editButtonEventListener() {
        logArticle.addEventListener("click", event => {
            if (event.target.id.startsWith("editButton--")) {
                const entryToEdit = event.target.id.split("--")[1]

                API.getSingleJournalEntry(entryToEdit)
                    .then(entry => {
                        defaultElements.buildAndAppendSearchForm("edit")



                        document.querySelector("#date").value = entry.date
                        document.querySelector("#subject").value = entry.concept
                        document.querySelector("#entry").value = entry.entry
                        document.querySelector("#mood").value = entry.mood
                        document.querySelector("#id").value = entry.id
                        const saveButton = document.querySelector("#saveChanges")

                        saveButton.addEventListener("click", event => {
                            let entryID = document.querySelector("#id").value
                            const date = document.querySelector("#date").value
                            const concepts = document.querySelector("#subject").value
                            const journalEntry = document.querySelector("#entry").value
                            const mood = document.querySelector("#mood").value
                            const updatedObject = {
                                date: date,
                                concept: concepts,
                                entry: journalEntry,
                                mood: mood
                            }
                            API.editSingleJournalEntry(entryID, updatedObject)
                            .then(() => {
                            defaultElements.buildAndAppendSearchForm()
                            API.getJournalEntries()
                                .then(response => renderDom.renderJournalEntries(response))
                            })
                        })

                    })

            }
        })
    }

}

export default eventListeners