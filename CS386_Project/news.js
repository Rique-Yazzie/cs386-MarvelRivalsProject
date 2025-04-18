const newsData = [
    {
        version: "20250415",
        date: "April 17, 2025",
        url: "patches/20250415_patch.html",
        image: "patch_notes_images/patch_notes_20250415.jpg",
        title: "Customize Colors Update",
        type: "PATCH NOTES"
    },
    {
        version: "20250411",
        date: "April 8, 2025",
        url: "./patches/20250411_patch.html",
        image: "./patch_notes_images/patch_notes_20250411.jpg",
        title: "Patch Notes",
        type: "PATCH NOTES"
    },
    {
        version: "20250405",
        date: "April 5, 2025",
        url: "./announcements/20250405_hellfire_gala.html",
        image: "./announcements/annoucements_0405.jpg",
        title: "Hellfire Gala: Krakoa Map Reveal",
        type: "ANNOUNCEMENT"
    },
    {
        version: "20250404",
        date: "April 4, 2025",
        url: "./announcements/20250404_emma_frost.html",
        image: "./announcements/annoucements_0404.jpg",
        title: "Join Emma Frost at Krakoa's most revered event on April 11th UTC!",
        type: "ANNOUNCEMENT"
    },
    {
        version: "20250411",
        date: "April 4, 2025",
        url: "./patches/20250411_balance.html",
        image: "./patch_notes_images/hero_balance_adjustments_20250411.jpg",
        title: "Season 2 Balance Changes",
        type: "HERO BALANCES"
    },
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
        type: "HERO BALANCES"
    },
    {
        version: "20250311",
        date: "March 11, 2025",
        url: "./announcements/20250311_amd_fsr.html",
        image: "./announcements/annoucements_0311.jpg",
        title: "AMD FSR 3 Frame Generation Slow Level Loading Fix",
        type: "ANNOUNCEMENT"
    },
    {
        version: "20250307",
        date: "March 7, 2025",
        url: "./patches/20250307_patch.html",
        image: "./patch_notes_images/patch_notes_20250307.jpg",
        title: "Patch Notes",
        type: "PATCH NOTES"
    },
    {
        version: "20250221",
        date: "February 21, 2025",
        url: "./announcements/20250221_plugins.html",
        image: "./announcements/annoucements_0225.jpg",
        title: "Announcement on Third-Party Plugins",
        type: "ANNOUNCEMENT"
    },
    {
        version: "20250221",
        date: "February 21, 2025",
        url: "./announcements/20250221_twitch_drops.html",
        image: "./announcements/annoucements_0221.jpg",
        title: "Twitch Drops Season 1 Second Half",
        type: "ANNOUNCEMENT"
    },
    {
        version: "20250221",
        date: "February 20, 2025",
        url: "./patches/20250221_patch.html",
        image: "./patch_notes_images/patch_notes_20250221.jpg",
        title: "Patch Notes",
        type: "PATCH NOTES"
    },
    {
        version: "20250221",
        date: "February 19, 2025",
        url: "./patches/20250221_balance.html",
        image: "./patch_notes_images/hero_balance_adjustments_20250221.jpg",
        title: "Season 1.5 Balance Changes",
        type: "HERO BALANCES"
    },
    {
        version: "20250219",
        date: "February 19, 2025",
        url: "./announcements/20250219_central_park.html",
        image: "./announcements/annoucements_0219.jpg",
        title: "Take the battle to Dracula's Castle in Central Park!",
        type: "ANNOUNCEMENT"
    },
    {
        version: "20250219",
        date: "February 19, 2025",
        url: "./announcements/20250219_fantastic_four.html",
        image: "./announcements/annoucements_0219-2.jpg",
        title: "Human Torch and The Thing Join the Fight on Feb 21st!",
        type: "ANNOUNCEMENT"
    },
    {
        version: "20250214",
        date: "February 13, 2025",
        url: "./patches/20250214_patch.html",
        image: "./patch_notes_images/patch_notes_20250214.jpg",
        title: "Patch Notes",
        type: "PATCH NOTES"
    },
    {
        version: "20250207",
        date: "February 6, 2025",
        url: "./patches/20250207_patch.html",
        image: "./patch_notes_images/patch_notes_20250207.jpg",
        title: "Patch Notes",
        type: "PATCH NOTES"
    },
    {
        version: "20250122",
        date: "January 22, 2025",
        url: "./patches/20250122_patch.html",
        image: "./patch_notes_images/patch_notes_20250122.jpg",
        title: "Spring Festival Update",
        type: "PATCH NOTES"
    },
    {
        version: "20250113",
        date: "January 13, 2025",
        url: "./announcements/20250113_adapters.html",
        image: "./announcements/annoucements_0113.jpg",
        title: "Keyboard and Mouse Adapters Statement",
        type: "ANNOUNCEMENT"
    },
    {
        version: "20250110",
        date: "January 10, 2025",
        url: "./announcements/20250110_geforce_now.html",
        image: "./announcements/annoucements_0110.jpg",
        title: "NVIDIA GeForce NOW is live on Marvel Rivals now!",
        type: "ANNOUNCEMENT"
    },
    {
        version: "20250110",
        date: "January 9, 2025",
        url: "./patches/20250110_balance.html",
        image: "./patch_notes_images/hero_balance_adjustments_20250110.jpg",
        title: "Season 1 Balance Changes",
        type: "HERO BALANCES"
    },
    {
        version: "20250110",
        date: "January 8, 2025",
        url: "./patches/20250110_patch.html",
        image: "./patch_notes_images/patch_notes_20250110.jpg",
        title: "Empire of Eternal Night Update",
        type: "PATCH NOTES"
    },
    {
        version: "20250108",
        date: "January 8, 2025",
        url: "./announcements/20250108_new_maps.html",
        image: "./announcements/annoucements_0108.jpg",
        title: "New maps for Season 1! Fight in New York City on Jan 10th!",
        type: "ANNOUNCEMENT"
    },
    {
        version: "20250108",
        date: "January 8, 2025",
        url: "./announcements/20250108_fantastic_four_2.html",
        image: "./announcements/annoucements_0108-2.jpeg",
        title: "Mister Fantastic and Invisible Woman Join the fight on Jan 10th!",
        type: "ANNOUNCEMENT"
    },
    {
        version: "20241220",
        date: "December 20, 2024",
        url: "./announcements/20241220_streamer_giveaway.html",
        image: "./announcements/annoucements_1220.jpg",
        title: "Winter Celebration Streamer Giveaway Event Rule & FAQ",
        type: "ANNOUNCEMENT"
    },
    {
        version: "20241219",
        date: "December 19, 2024",
        url: "./patches/20241219_patch.html",
        image: "./patch_notes_images/patch_notes_20241219.jpg",
        title: "Winter Celebration Update",
        type: "PATCH NOTES"
    },
    {
        version: "20241210",
        date: "December 10, 2024",
        url: "./patches/20241210_patch.html",
        image: "./patch_notes_images/patch_notes_20241210.jpg",
        title: "Patch Notes",
        type: "PATCH NOTES"
    },
    {
        version: "20241109",
        date: "November 9, 2024",
        url: "./announcements/20241109_moon_knight.html",
        image: "./announcements/annoucements_1109.jpg",
        title: "The Moon Haunts You! New Hero Moon Knight Joins Launch Roster!",
        type: "ANNOUNCEMENT"
    },
    {
        version: "20240923",
        date: "September 23, 2024",
        url: "./announcements/20240923_psylocke.html",
        image: "./announcements/annoucements_0923.jpg",
        title: "蝶の舞を喰らえ！- Ignite the Battle with Psylocke!",
        type: "ANNOUNCEMENT"
    },
    {
        version: "20240821",
        date: "August 21, 2024",
        url: "./announcements/20240821_launch_gamescom.html",
        image: "./announcements/annoucements_0821.jpg",
        title: "Marvel Rivals Launches December 6th with All Heroes Free-to-Play & Gamescom Overviews!",
        type: "ANNOUNCEMENT"
    },
    {
        version: "20240803",
        date: "August 3, 2024",
        url: "./announcements/20240803_account_bans.html",
        image: "./announcements/annoucements_0803.jpg",
        title: "Account Bans Notice",
        type: "ANNOUNCEMENT"
    },
    {
        version: "20240727",
        date: "July 27, 2024",
        url: "./announcements/20240727_thor_jeff.html",
        image: "./announcements/annoucements_0727.jpg",
        title: "Thor and Jeff Are Joining the Closed Beta!",
        type: "ANNOUNCEMENT"
    },
    {
        version: "20240626",
        date: "June 26, 2024",
        url: "./announcements/20240626_cbt.html",
        image: "./announcements/annoucements_0626.jpg",
        title: "Console Closed Beta Test Details",
        type: "ANNOUNCEMENT"
    },
    {
        version: "20240530",
        date: "May 30, 2024",
        url: "./announcements/20240530_playstation.html",
        image: "./announcements/annoucements_0530.jpg",
        title: "Marvel Rivals Hits PlayStation with an Upcoming Closed Beta Test!",
        type: "ANNOUNCEMENT"
    },
    {
        version: "20240506",
        date: "May 6, 2024",
        url: "./announcements/20240506_cat.html",
        image: "./announcements/annoucements_0506.jpg",
        title: "Closed Alpha Test | Events, Tournaments, Live Streams & More!",
        type: "ANNOUNCEMENT"
    },
    {
        version: "20240328",
        date: "March 28, 2024",
        url: "./announcements/20240328_cat_announce.html",
        image: "./announcements/annoucements_20240328.jpg",
        title: "MARVEL RIVALS CLOSED ALPHA TEST BEGINS IN MAY!",
        type: "ANNOUNCEMENT"
    },
    {
        version: "20240327",
        date: "March 27, 2024",
        url: "./announcements/20240327_welcome.html",
        image: "./announcements/annoucements_20240327.jpg",
        title: "WELCOME TO MARVEL RIVALS",
        type: "ANNOUNCEMENT"
    },
];

function createNewsCards(filter = 'all') {
    const grid = document.getElementById('news-grid');
    const template = document.getElementById('news-card-template');
    
    // Clear existing cards
    grid.innerHTML = '';

    newsData.forEach(news => {
        // Apply filter
        if (filter !== 'all') {
            const filterType = filter === 'patch-notes' ? 'PATCH NOTES' : 
                             filter === 'hero-balances' ? 'HERO BALANCES' :
                             filter === 'announcements' ? 'ANNOUNCEMENT' : null;
            if (news.type !== filterType) return;
        }

        const clone = template.content.cloneNode(true);
        
        const link = clone.querySelector('a');
        link.href = news.url;
        
        const card = clone.querySelector('.news-card');
        card.dataset.type = news.type;
        
        const img = clone.querySelector('img');
        img.src = news.image;
        img.alt = `${news.type} ${news.version}`;
        
        img.onerror = function() {
            console.error(`Failed to load image: ${news.image}`);
        };
        
        const badge = clone.querySelector('.news-type-badge');
        badge.dataset.type = news.type;
        badge.querySelector('.badge-text').textContent = news.type;
        
        const title = clone.querySelector('.card-title');
        title.textContent = `Version ${news.version} - ${news.title}`;
        
        const date = clone.querySelector('.card-text');
        date.textContent = news.date;
        
        grid.appendChild(clone);
    });
}

function initializeTimeline() {
    const markers = document.querySelectorAll('.timeline-marker');
    markers.forEach(marker => {
        marker.addEventListener('click', () => {
            markers.forEach(m => m.classList.remove('active'));
            marker.classList.add('active');
            // Future enhancement: Filter news by year
        });
    });
}

function initializeTabs() {
    const tabs = document.querySelectorAll('#newsTypesTabs .nav-link');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            e.target.classList.add('active');
            
            // Get filter type from tab id
            const filter = e.target.id.replace('-tab', '');
            // Update displayed cards
            createNewsCards(filter);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createNewsCards(); // Initial load with all news
    initializeTimeline();
    initializeTabs();
});










