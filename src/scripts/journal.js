/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

import buildAndAppendSearchForm from "./createForm.js"
import API from "./data.js"
import renderDom from "./entriesDOM.js"
import saveObject from "./saveEntry.js"


buildAndAppendSearchForm()

API.getJournalEntries()
    .then(response => renderDom.renderJournalEntries(response))


const button = document.querySelector("button")
button.addEventListener("click", saveObject.saveJournalEntry)
