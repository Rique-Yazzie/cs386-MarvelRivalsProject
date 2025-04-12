const patchData = [
    {
        version: "20250327",
        date: "March 27, 2025",
        url: "./patches/20250327.html",
        image: "./patch_notes_images/patch_notes_20250327.jpg",
        title: "Patch Notes",
        type: "PATCH NOTES"
    },
    {
        version: "20250314",
        date: "March 14, 2025",
        url: "./patches/20250314_patch.html",
        image: "./patch_notes_images/patch_notes_20250314.jpg",
        title: "Patch Notes",
        type: "PATCH NOTES"
    },
    {
        version: "20250314",
        date: "March 14, 2025",
        url: "./patches/20250314_balance.html",
        image: "./patch_notes_images/hero_balance_adjustments_20250314.jpg",
        title: "Balance Patch",
        type: "PATCH NOTES"
    },
    {
        version: "20250307",
        date: "March 7, 2025",
        url: "./patches/20250307_patch.html",
        image: "./patch_notes_images/patch_notes_20250307.jpg",
        title: "Patch Notes",
        type: "PATCH NOTES"
    }
];

function createPatchCards() {
    const grid = document.getElementById('patch-notes-grid');
    const template = document.getElementById('patch-card-template');

    patchData.forEach(patch => {
        const clone = template.content.cloneNode(true);
        
        const link = clone.querySelector('a');
        link.href = patch.url;
        
        const img = clone.querySelector('img');
        img.src = patch.image;
        img.alt = `Patch ${patch.version}`;
        
        img.onerror = function() {
            console.error(`Failed to load image: ${patch.image}`);
        };
        
        const badge = clone.querySelector('.patch-type-badge');
        badge.textContent = patch.type;
        
        const title = clone.querySelector('.card-title');
        title.textContent = `Version ${patch.version} - ${patch.title}`;
        
        const date = clone.querySelector('.card-text');
        date.textContent = patch.date;
        grid.appendChild(clone);
    });
}

function initializeTimeline() {
    const markers = document.querySelectorAll('.timeline-marker');
    markers.forEach(marker => {
        marker.addEventListener('click', () => {
            markers.forEach(m => m.classList.remove('active'));
            marker.classList.add('active');
            // Future enhancement: Filter patches by year
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createPatchCards();
    initializeTimeline();
});










