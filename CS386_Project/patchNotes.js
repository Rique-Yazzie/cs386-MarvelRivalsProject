const patchNotesData = [
    {
        version: "1.2.0",
        date: "March 14, 2025",
        changes: [
            {
                category: "Duelist",
                heroes: [
                    {
                        name: "Human Torch",
                        image: "./CharacterImages/human_torch.png",
                        description: "The fiery hero is getting a boost to his primary attack damage output and Ultimate Ability, enhancing his solo takedown potential.",
                        changes: [
                            "Increase Fire Cluster projectile speed from 120m/s to 150m/s and projectile count from 12 to 14.",
                            "Increase the energy cost of Supernova (ultimate ability) from 3400 to 4000.",
                            "Increase activation wave damage from 70 to 80 and Flame Tornado damage from 100 per/s to 120 per/s."
                        ]
                    },
                    {
                        name: "Iron Man",
                        image: "./CharacterImages/iron_man.png",
                        description: "The Armored Avenger will see slight adjustments to his primary attack in both states, balancing his mid-range offensive capabilities.",
                        changes: [
                            "Decrease Repulsor Blast stage 1 and 2 direct hit damage from 55 to 40; Increase spell field damage from 35 to 50.",
                            "Decrease stage 3 direct hit damage from 65 to 50; Increase spell field damage from 40 to 60.",
                            "Decrease Repulsor Blast (Armor Overdrive) direct hit damage from 55 to 50; Increase spell field damage from 55 to 65."
                        ]
                    }
                ]
            },
            {
                category: "Strategist",
                heroes: [
                    {
                        name: "Cloak & Dagger",
                        image: "./CharacterImages/cloak&dagger.png",
                        description: "The duality duo will see improvements in their healing abilities, making them more versatile for various team compositions.",
                        changes: [
                            "Increase the healing effect from Lightforce Dagger on hit allies from 10 to 16.",
                            "Reduce the spell field healing amount generated by the hit from 18 to 16."
                        ]
                    }
                ]
            }
        ]
    }
];

// Function to render patch notes
function renderPatchNotes() {
    const patchContainer = document.getElementById('patch-notes-container');
    patchContainer.innerHTML = '';

    patchNotesData.forEach((patch) => {
        const patchDiv = document.createElement('div');
        patchDiv.className = 'patch-note';
        patchDiv.innerHTML = `
            <h2 style="font-size: 28px; font-weight: 600; margin-bottom: 10px;">Patch ${patch.version} - ${patch.date}</h2>
            ${patch.changes.map(category => `
                <h3 style="font-size: 22px; font-weight: 500; margin-top: 20px;">${category.category}</h3>
                ${category.heroes.map(hero => `
                    <div style="
                        display: flex; 
                        align-items: center; 
                        padding: 20px; 
                        margin: 20px 0;">
                        
                        <!-- Hero Image -->
                        <img src="${hero.image}" 
                            style="
                                max-height: 300px; 
                                max-width: 300px; 
                                margin-right: 25px;
                                object-fit: contain;
                                transition: transform 0.2s ease-in-out;"
                            onmouseover="this.style.transform='scale(1.05)'" 
                            onmouseout="this.style.transform='scale(1)'" />
                        
                        <!-- Hero Information -->
                        <div>
                            <strong style="font-size: 20px; font-weight: 600;">${hero.name}</strong>
                            <p style="font-size: 16px; margin-top: 5px; opacity: 0.9;">${hero.description}</p>
                            <p style="font-size: 16px; margin-top: 5px; opacity: 0.9;">${hero.changes.join(" ")}</p>
                        </div>
                    </div>
                `).join('')}
            `).join('')}
        `;
        patchContainer.appendChild(patchDiv);
    });
}

document.addEventListener('DOMContentLoaded', renderPatchNotes);










