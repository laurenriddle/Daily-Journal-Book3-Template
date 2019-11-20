/*
    Function 1 Purpose: Add event listener to radio buttons that filters the entries

    Function 2 Purpose: Add event listener to delete buttons that deletes a single entry

    Function 3 Purpose: Add event listener to edit buttons that populates a form gets the values of the form after editing and PUTs them back into the API

    Function 4 Purpose: Add an event listener to the search input that search through the entries when you press enter
*/


import API from "./data.js"
import renderDom from "./entriesDOM.js"
import defaultElements from "./createForm.js"


const radioButtons = document.getElementsByName("moodButton")
const logArticle = document.querySelector(".entryLog")


const eventListeners = {
    radioButtonsEventListener() {
        // Add event listener to radio buttons that filters the entries
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
        // Add event listener to delete buttons that deletes a single entry
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
        // add event listener to edit buttons that populates a form gets the values of the form after editing and PUTs them back into the API
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
                        document.querySelector("#mood").value = entry.moodId
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
                            const moodInt = parseInt(mood)
                            const updatedObject = {
                                date: date,
                                concept: concepts,
                                entry: journalEntry,
                                moodId: moodInt
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
        // add an event listener to the search input that search through the entries when you press enter
        const searchInput = document.querySelector("#searchInputField")
        searchInput.addEventListener("keypress", event => {
            if (event.charCode === 13) {
                const searchTerm = event.target.value
                // console.log(searchTerm)
                API.searchAllJournalEntries(searchTerm)
                    .then(response => {
                        // console.log("response", response)
                        renderDom.renderJournalEntries(response)
                    })
            }
        })
    }


}

export default eventListeners