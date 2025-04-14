function showHeroPopup(heroId) {
    const popup = document.getElementById('heroPopup');
    const popupImage = document.getElementById('popupHeroImage');
    const popupName = document.getElementById('popupHeroName');
    
    // Set the image source using the CharacterImages folder
    popupImage.src = `../CharacterImages/${heroId}.png`;
    popupName.textContent = heroId.split('_').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    // Show the popup
    popup.style.display = 'flex';
}

function closeHeroPopup() {
    const popup = document.getElementById('heroPopup');
    popup.style.display = 'none';
}

// Close popup when clicking outside
document.addEventListener('click', function(event) {
    const popup = document.getElementById('heroPopup');
    if (event.target === popup) {
        closeHeroPopup();
    }
}); 
