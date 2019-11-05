/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

import htmlElements from "./createForm.js"
import API from "./data.js"
import renderDom from "./entriesDOM.js"
import eventListeners from "./eventListeners.js"


htmlElements.buildAndAppendSearchForm()
htmlElements.buildAndAppendFilterElement()

API.getJournalEntries()
    .then(response => renderDom.renderJournalEntries(response))

   


eventListeners.radioButtonsEventListener()
eventListeners.deleteButtonsEventListener()
eventListeners.editButtonEventListener()
const searchInput = document.querySelector("#searchInputField")
eventListeners.searchInputEventListener()

