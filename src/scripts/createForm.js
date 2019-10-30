const buildAndAppendSearchForm = () => {
   const searchForm = 
   `<h1>Daily Journal</h1>
    <form>
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
                <option value="Amazing">Amazing</option>
                <option value="Great">Great</option>
                <option value="Ok">Ok</option>
            </select>
        </fieldset>
        </form>
        <button>Record Journal Entry</button>`
   const searchFormContainer = document.querySelector("#searchFormContainer")
    searchFormContainer.innerHTML = searchForm
}

export default buildAndAppendSearchForm