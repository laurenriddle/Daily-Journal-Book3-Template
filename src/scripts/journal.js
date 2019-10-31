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

htmlElements.buildAndAppendSearchForm()
htmlElements.buildAndAppendFilterElement()

API.getJournalEntries()
    .then(response => renderDom.renderJournalEntries(response))

const button = document.querySelector("button")
button.addEventListener("click", saveObject.postEntry)


const radioButtons = document.getElementsByName("moodButton")
radioButtons.forEach((button) => {
    button.addEventListener("click", event => {
        const mood = event.target.value
        // console.log(mood)
        API.getJournalEntries()
        .then(response => response.forEach((entries) => {
            console.log(entries.mood)
            if (entries.mood === mood) {
                console.log("this is working!",mood)
            } else {
                console.log("this isn't working")
            }
        }))

        // .then(response => response.filter(response => {
        //     if(response.mood === mood) {
        //         return response
        //     }
        // })

        // console.log(mood)
    // )
})
});

