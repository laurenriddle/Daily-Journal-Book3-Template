/*
    Purpose: To render all journal entries to the DOM
*/
import entryManager from "./entryComponent.js"

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
  }
}

export default renderDom