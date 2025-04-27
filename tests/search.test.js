const $ = require('jquery');

// Mocking searchFunction
const searchFunction = jest.fn();

describe('Search function tests', () => {
    beforeEach(() => {
        // Set up the HTML structure before each test
        document.body.innerHTML = '<input type="text" id="search-input">';
        // Attach the event listener
        $("#search-input").on("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                // Call search function on "Enter"
                searchFunction();
            }
        });
    });

    test('should call searchFunction when Enter key is pressed', () => {
        // Create a mock event for the "Enter" key
        const eventMock = new KeyboardEvent('keydown', { key: 'Enter' });

        // Dispatch the event on the input element
        document.getElementById("search-input").dispatchEvent(eventMock);

        // Ensure searchFunction was called
       expect(searchFunction).toHaveBeenCalled();
    });
});
