
import { changeImage } from '/home/git/CS386_Project/gitHubFiles/CS386_Project/tests/changeImage'

describe('changeImage function', () => {
    beforeEach(() => {
        // Set up fake DOM elements
        document.body.innerHTML = `
            <a id="image-link" href="#"><img id="main-image" src="" /></a>
            <h2 id="image-title"></h2>
        `;
    });

    test('should update image src, title text, and link href', () => {
        // Call the function
        changeImage('test.jpg', 'Test Title', 'https://example.com');

        // Check if DOM was updated
        expect(document.getElementById('main-image').src).toContain('test.jpg');
        expect(document.getElementById('image-title').textContent).toBe('Test Title');
        expect(document.getElementById('image-link').href).toBe('https://example.com/');
    });
});
