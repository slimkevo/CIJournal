function addEntry(entryText) {
    if (entryText === '') {
        return null; // Indicate that entry is empty
    }
    const entryElement = document.createElement('div');
    entryElement.classList.add('entry');
    entryElement.textContent = entryText;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        entryElement.remove();
    };

    entryElement.appendChild(deleteButton);
    document.getElementById('journal-entries').appendChild(entryElement);
    return entryElement;
}

module.exports = { addEntry };