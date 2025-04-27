// openCharacterDetails.test.js
const openCharacterDetails = require('./openCharacterDetails'); // Import the function

describe('openCharacterDetails', () => {
    let originalLocation;

    beforeEach(() => {
        // Mock window.location.href
        originalLocation = global.window.location;
        delete global.window.location;
        global.window.location = { href: '' };
    });

    afterEach(() => {
        // Restore window.location after each test
        global.window.location = originalLocation;
    });

    it('should navigate to hero details page if currentHero is defined', () => {
        // Mock window.currentHero
        global.window.currentHero = { Hero: 'SuperHero' };

        // Call the function
        openCharacterDetails();

        // Check if window.location.href is set to the correct path
        expect(global.window.location.href).toBe('Detail Heroes Abilities/superhero.html');
    });

    it('should not navigate if currentHero is undefined', () => {
        // Mock window.currentHero as undefined
        global.window.currentHero = undefined;

        // Call the function
        openCharacterDetails();

        // Check that window.location.href has not changed
        expect(global.window.location.href).toBe('');
    });
});
