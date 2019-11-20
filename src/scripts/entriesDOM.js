/*
    Purpose: To render all journal entries to the DOM
*/
import entryManager from "./entryComponent.js"
import htmlElements from "./createForm.js"

const renderDom = {
  renderJournalEntries(entries) {
    let HtmlForAllEntries = ""
    // loop through the response from the GET call
    entries.forEach(entry => {
      // make the entry html for each entry and put all entries html in the htmlForAllEntries variable
      const entryHtml = entryManager.makeJournalEntryComponent(entry)
      HtmlForAllEntries += entryHtml
    })
    // append the html to the container on the DOM
    const logArticle = document.querySelector(".entryLog")
    logArticle.innerHTML = HtmlForAllEntries
  },
  renderRadioButtons(moods) {
    let htmlForAllRadioButtons = ""
    moods.forEach(mood => {
       const moodHtml = htmlElements.buildAndAppendRadioButtons(mood)
       htmlForAllRadioButtons += moodHtml
    })
    let radioButtonContainer = document.querySelector("#radioContainer")
    radioButtonContainer.innerHTML += htmlForAllRadioButtons
  }
}

export default renderDom