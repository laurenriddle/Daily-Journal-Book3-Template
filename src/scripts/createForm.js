import saveObject from "./saveEntry.js"
/*
    Function 1 Purpose: To build the form and append it to the DOM

    Function 2 Purpose: To build the radio buttons and search input and append it to the DOM

*/
const searchFormContainer = document.querySelector("#searchFormContainer")

const htmlElements = {
    buildAndAppendSearchForm(entry) {
        // this function builds the html for the form and appends it to the DOM
        let searchForm =
            `
        <div class="header">
            <h1>Daily Journal</h1>
            <p>Cohort 36</p>
        </div>
        <form>
        <input type="hidden" name="id-input" id="id">

        <fieldset>
            <label for="date-input">Date of entry:</label>
            <input type="date" name="date-input" id="date" required>
        </fieldset>
        <fieldset>
            <label for="concept-input">Concepts covered:</label>
            <input type="text" name="concept-input" id="subject" required>
        </fieldset>
        <fieldset>
            <label for="entry-input">Journal entry:</label>
            <textarea name="entry-input" id="entry" required></textarea>
        </fieldset>
        <fieldset>
            <label for="mood-input">Mood:</label>
            <select id="mood" name="mood-input" required>
                <option value="2">Amazing</option>
                <option value="3">Great</option>
                <option value="1">Ok</option>
            </select>
        </fieldset>
        </form>
`
        if (entry === "edit") {
            searchFormContainer.innerHTML = ""
            searchFormContainer.innerHTML = searchForm += `<div id="buttonContainer"><button id="saveChanges">Save Changes</button></div>`
        } else {
            searchFormContainer.innerHTML = ""
            searchFormContainer.innerHTML = searchForm += `<div id="buttonContainer"><button id="newEntryButton">Record New Journal Entry</button></div>`
            const saveJournalEntryButton = document.querySelector("#newEntryButton")
            saveJournalEntryButton.addEventListener("click", saveObject.postEntry)

        }
    },
    buildAndAppendFilterElement() {
        // this function builds and appends the radio buttons and search input
        const filterHtml =
        `
        <div id="filterElements">
            <div id="allRadioButtons">
                <fieldset id="radioButtons">
                    <legend>Filter Journal Entries By Mood</legend>
                    <div id="radioContainer">
                    <div>
                    <input type="radio" name="moodButton" value="All">
                    <label for="date-input">All</label>
                    </div>
                    </div>
                    </fieldset>
            </div>
            <div id="searchInput">
            <fieldset>

                <legend>Search Journal Entries</legend>
                <input type="search" name="search" id="searchInputField">
            </div> 
            </fieldset>
        </div>
        `
        const filterContainer = document.querySelector("#filterContainer")
        filterContainer.innerHTML = filterHtml
    },
    buildAndAppendRadioButtons(mood) {
        return `<div>
            <input type="radio" name="moodButton" value="${mood.id}">
            <label for="date-input">${mood.label}</label>
        </div>`
    }
}
export default htmlElements

{/* <div>
                        <input type="radio" name="moodButton" value="Amazing">
                        <label for="date-input">Amazing</label>
                    </div>
                    <div>
                        <input type="radio" name="moodButton" value="Great">
                        <label for="date-input">Great</label>
                    </div>
                    <div>
                        <input type="radio" name="moodButton" value="Ok">
                        <label for="date-input">Ok</label>
                    </div>
                    */}