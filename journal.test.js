const { addEntry } = require('./journal');

test('adds a new journal entry', () => {
    const entryText = 'Test entry';

    document.getElementById = jest.fn().mockReturnValue({
        appendChild: jest.fn(),
    });

    const entryElement = addEntry(entryText);

    expect(entryElement).not.toBeNull();
    expect(entryElement.textContent).toBe(entryText + 'Delete');
});

test('does not add an empty journal entry', () => {
    const entryText = '';

    const entryElement = addEntry(entryText);

    expect(entryElement).toBeNull();
});

