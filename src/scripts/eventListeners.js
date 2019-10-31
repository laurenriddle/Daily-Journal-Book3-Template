import API from "./data.js"
import renderDom from "./entriesDOM.js"



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
                        let filteredArray = response.filter(entry => {
                            let moodBoolean = false
                            // console.log(entry.mood)
                            if (entry.mood === mood) {
                                moodBoolean = true
                                // console.log("this is working!", mood)
                            } else if (mood === "All") {
                                moodBoolean = true
                            }
                            return moodBoolean
                            // console.log(moodBoolean)
                        })

                        renderDom.renderJournalEntries(filteredArray)

                    })
            }
            )
        });
    },
    deleteButtonsEventListener() {
        logArticle.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteButton--")) {
                // Extract recipe id from the button's id attribute
                const entryToDelete = event.target.id.split("--")[1]

                // Invoke the delete method, then get all recipes and render them
                API.deleteSingleJournalEntry(entryToDelete)
                    .then(API.getJournalEntries)
                    .then(response => renderDom.renderJournalEntries(response))
            }
        })
    }

}

export default eventListeners