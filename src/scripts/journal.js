/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

import htmlElements from "./createForm.js"
import API from "./data.js"
import renderDom from "./entriesDOM.js"
import eventListeners from "./eventListeners.js"


// build and append the search form, radio buttons, and entry form upon the page loading
htmlElements.buildAndAppendSearchForm()
htmlElements.buildAndAppendFilterElement()

// get all journal entries and render them upon the page loading
API.getJournalEntries()
    .then(response => renderDom.renderJournalEntries(response))


// call event listener functions
eventListeners.radioButtonsEventListener()
eventListeners.deleteButtonsEventListener()
eventListeners.editButtonEventListener()
const searchInput = document.querySelector("#searchInputField")
eventListeners.searchInputEventListener()

