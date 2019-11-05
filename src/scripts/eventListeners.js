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


                        // set the values of the input 
                        document.querySelector("#date").value = entry.date
                        document.querySelector("#subject").value = entry.concept
                        document.querySelector("#entry").value = entry.entry
                        document.querySelector("#mood").value = entry.mood
                        document.querySelector("#id").value = entry.id
                        // get a reference to the save button
                        const saveButton = document.querySelector("#saveChanges")

                        // attach event listener to save button
                        saveButton.addEventListener("click", event => {
                            // get values of input fields
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
    },
    searchInputEventListener() {
        searchInput.addEventListener("keypress", event => {
            if (event.charCode === 13) {
                const searchTerm = event.target.value
                // console.log(searchTerm)
                API.getJournalEntries()
                    .then(response => {
                        let entryArray = []
                        // console.log("response", response)
                        response.forEach(entry => {
                            // console.log("first Entry", entry)
                            for (const value of Object.values(entry)) {
                                // console.log("value", value)
                                // console.log("second entry", entry)

                                if (value === searchTerm) {
                                    entryArray.push(entry)
                                    // console.log("entry", entry)
                                } else if (event.target.value === "") {
                                    API.getJournalEntries()
                                        .then(response => renderDom.renderJournalEntries(response))

                                }
                            }
                        })
                        renderDom.renderJournalEntries(entryArray)
                    })
            }
        })


    }
}
export default eventListeners