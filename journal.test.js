const { addEntry } = require('./journal');

test('adds a new journal entry', () => {
    // Arrange
    const entryText = 'Test entry';

    // Mock document.getElementById
    document.getElementById = jest.fn().mockReturnValue({
        appendChild: jest.fn(),
    });

    // Act
    const entryElement = addEntry(entryText);

    // Assert
    expect(entryElement).not.toBeNull();
    expect(entryElement.textContent).toBe(entryText + 'Delete');
});

test('does not add an empty journal entry', () => {
    // Arrange
    const entryText = '';

    // Act
    const entryElement = addEntry(entryText);

    // Assert
    expect(entryElement).toBeNull();
});

