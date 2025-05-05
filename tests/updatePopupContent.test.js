// updatePopupContent.test.js
const updatePopupContent = require('./updatePopupContent'); // Import the function

describe('updatePopupContent', () => {
    let popupImage, popupName, popupRole, popupDescription, popupAbilities, popupTeamups, popupHealth, popupMobility;

    beforeEach(() => {
        // Mock the DOM elements
        popupImage = { src: '' };
        popupName = { textContent: '' };
        popupRole = { textContent: '' };
        popupDescription = { textContent: '' };
        popupAbilities = { innerHTML: '', appendChild: jest.fn() };
        popupTeamups = { textContent: '' };
        popupHealth = { textContent: '' };
        popupMobility = { textContent: '' };

        // Mock document.getElementById
        document.getElementById = jest.fn((id) => {
            if (id === 'popup-hero-image') return popupImage;
            if (id === 'popup-hero-name') return popupName;
            if (id === 'popup-hero-role') return popupRole;
            if (id === 'popup-hero-description') return popupDescription;
            if (id === 'popup-hero-abilities') return popupAbilities;
            if (id === 'popup-hero-teamups') return popupTeamups;
            if (id === 'popup-hero-health') return popupHealth;
            if (id === 'popup-hero-mobility') return popupMobility;
        });
    });

    it('should update popup content with hero and form data', () => {
        const hero = { Hero: 'SuperHero', Role: 'Tank' };
        const formName = 'TestForm';
        const formData = {
            Image: 'superhero.jpg',
            Description: 'A powerful hero',
            TeamUps: 'Hero1, Hero2',
            Health: '300',
            MovementSpeed: '5 m/s',
            MovementMode: 'Flying',
            Q: 'Ability1',
            LClick: 'Ability2',
            E: 'Ability3',
            F: 'Ability4'
        };

        // Call the function
        updatePopupContent(hero, formName, formData);

        // Check if the elements were updated correctly
        expect(popupImage.src).toBe('superhero.jpg');
        expect(popupName.textContent).toBe('SuperHero (TestForm)');
        expect(popupRole.textContent).toBe('Tank');
        expect(popupDescription.textContent).toBe('A powerful hero');
        expect(popupTeamups.textContent).toBe('Hero1, Hero2');
        expect(popupHealth.textContent).toBe('300');
        expect(popupMobility.textContent).toBe('5 m/s (Flying)');

        // Check if abilities were populated correctly
        expect(popupAbilities.appendChild).toHaveBeenCalledTimes(4);
        expect(popupAbilities.appendChild).toHaveBeenCalledWith(expect.objectContaining({
            textContent: 'Q: Ability1'
        }));
        expect(popupAbilities.appendChild).toHaveBeenCalledWith(expect.objectContaining({
            textContent: 'LClick: Ability2'
        }));
        expect(popupAbilities.appendChild).toHaveBeenCalledWith(expect.objectContaining({
            textContent: 'E: Ability3'
        }));
        expect(popupAbilities.appendChild).toHaveBeenCalledWith(expect.objectContaining({
            textContent: 'F: Ability4'
        }));
    });

    it('should handle default health and movement speed if not provided', () => {
        const hero = { Hero: 'SuperHero', Role: 'Tank' };
        const formName = 'TestForm';
        const formData = {
            Image: 'superhero.jpg',
            Description: 'A powerful hero',
            TeamUps: 'Hero1, Hero2',
            Q: 'Ability1',
            LClick: 'Ability2'
        };

        // Call the function
        updatePopupContent(hero, formName, formData);

        // Check if default values are used for health and movement speed
        expect(popupHealth.textContent).toBe('250'); // Default health
        expect(popupMobility.textContent).toBe('6 m/s'); // Default movement speed
    });
});
