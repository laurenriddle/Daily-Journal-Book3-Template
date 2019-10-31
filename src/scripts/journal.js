/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

import htmlElements from "./createForm.js"
import API from "./data.js"
import renderDom from "./entriesDOM.js"
import saveObject from "./saveEntry.js"
import eventListeners from "./eventListeners.js"


htmlElements.buildAndAppendSearchForm()
htmlElements.buildAndAppendFilterElement()

API.getJournalEntries()
    .then(response => renderDom.renderJournalEntries(response))

   

const saveJournalEntryButton = document.querySelector("button")
saveJournalEntryButton.addEventListener("click", saveObject.postEntry)
eventListeners.radioButtonsEventListener()
eventListeners.deleteButtonsEventListener()

