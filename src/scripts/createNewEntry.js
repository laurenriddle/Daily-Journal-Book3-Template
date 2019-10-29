
const createNewEntry = {
    date: document.getElementById("date").value,
    subject: document.getElementById("subject").value,
    entry: document.getElementById("entry").value,
    mood: document.getElementsByClassName("mood").value,
    createEntryObject = () => {
        return {
            "date": `${date}`,
            "concept": `${subject}`,
            "entry": `${entry}`,
            "mood": `${mood}`
        }
    }

}

export default createNewEntry