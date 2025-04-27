// Hero data
const strategists = {
    "Adam Warlock": {
        Hero: "Adam Warlock",
        Role: "Strategist",
        Health: "250",
        MovementSpeed: "6 m/s",
        Q: "Karmic Revival",
        LClick: "Quantum Magic",
        LShift: "Soul Bound",
        E: "Avatar Life Stream",
        F: "",
        V: "",
        Space: "",
        RClick: "Cosmic Cluster",
        Passives: "Regenerative Cocoon",
        TeamUps: "Soul Perseverance (Passive)",
        Image: "./CharacterImages/adam_warlock.png",
        Description: "The genetically-engineered Adam Warlock wields mighty Quantum Magic, allowing him to connect and heal souls with a gentle touch. When the time comes for his allies to unite, Warlock emerges as the unwavering epicenter of cosmic justice!"
    },
    "Cloak & Dagger": {
        Hero: "Cloak & Dagger",
        Role: "Strategist",
        Health: "250",
        MovementSpeed: "6 m/s",
        Image: "./CharacterImages/cloak&dagger.png",
        Forms: {
            "Cloak": {
                Health: "250",
                MovementSpeed: "6 m/s",
                Q: "Eternal Bond",
                LClick: "Darkforce Cloak",
                LShift: "Light's Embrace",
                E: "Terror Cape",
                F: "",
                V: "",
                Space: "",
                RClick: "Dark Teleportation",
                Passives: "",
                TeamUps: "From Shadow to Light (Passive)",
                Image: "./CharacterImages/cloak-headbig.png",
                Description: "Tyrone Johnson wields the power of darkness, able to teleport through shadows and create portals to other dimensions. As Cloak, he serves as the perfect complement to Dagger's light-based abilities."
            },
            "Dagger": {
                Health: "250",
                MovementSpeed: "6 m/s",
                Q: "Eternal Bond",
                LClick: "Lightforce Dagger",
                LShift: "Shadow's Embrace",
                E: "Veil of LightForce",
                F: "",
                V: "",
                Space: "",
                RClick: "Dagger Storm",
                Passives: "",
                TeamUps: "From Shadow to Light (Passive)",
                Image: "./CharacterImages/dagger-headbig.png",
                Description: "Tandy Bowen channels the power of light, creating daggers of pure energy and healing allies with her radiant touch. As Dagger, she brings hope and healing to the battlefield."
            }
        },
        Description: "Tyrone Johnson and Tandy Bowen are nearly inseparable, like two sides of the same coin. Intertwined by forces of shadow and light, Cloak & Dagger fight as a united front, dealing havoc and healing allies across the arena."
    },
    "Invisible Woman": {
        Hero: "Invisible Woman",
        Role: "Strategist",
        Health: "275",
        MovementSpeed: "6 m/s",
        Q: "Invisible Boundary",
        LClick: "Orb Projection",
        LShift: "Psionic Vortex",
        E: "Force Physics",
        F: "",
        V: "",
        Space: "Veiled Step",
        RClick: "Guardian Shield",
        Passives: "Covert Advance",
        TeamUps: "Fantasti-Force (Passive)",
        Image: "./CharacterImages/invisible_woman.png",
        Description: "The Invisible Woman is able to slip in and out of sight without a trace. No matter how intense the battle may be, Susan Richards always keeps her cool, conjuring up impenetrable force fields to protect herself and her team."
    },
    "Jeff The Land Shark": {
        Hero: "Jeff the Land Shark",
        Role: "Strategist",
        Health: "250",
        MovementSpeed: "6 m/s",
        Q: "It's Jeff!",
        LClick: "Joyful Splash",
        LShift: "Hide and Seek",
        E: "Healing Bubble",
        F: "",
        V: "",
        Space: "",
        RClick: "Aqua Burst",
        Passives: "Oblivious Cutness",
        TeamUps: "X: Frozen Spitball\nC: New Friends",
        Image: "./CharacterImages/jeff.png",
        Description: "Most landsharks are vicious creatures of the deep... but not Jeff! This adorable and mischievous little landshark brings splashes of joy and healing to every battle. But if the tide turns, Jeff can morph into a voracious beast, swallowing an army of foes in one giant gulp!"
    },
    "Loki": {
        Hero: "Loki",
        Role: "Strategist",
        Health: "250",
        MovementSpeed: "6 m/s",
        Q: "God of Mischief",
        LClick: "Mystical Missile",
        LShift: "Regeneration Domain",
        E: "Doppelganger",
        F: "Devious Exchange",
        V: "Backstab",
        Space: "",
        RClick: "Deception",
        Passives: "",
        TeamUps: "Laufeyson Reborn (Passive)",
        Image: "./CharacterImages/loki.png",
        Description: "What greater thrill is there for a God of Mischief than to outsmart his foes? The cunning trickster Loki uses his illusions and shapeshifting abilities to weave in and out of combat, toying with enemies at every turn."
    },
    "Luna Snow": {
        Hero: "Luna Snow",
        Role: "Strategist",
        Health: "275",
        MovementSpeed: "6 m/s",
        Q: "Fate of Both Worlds",
        LClick: "Light & Dark Ice",
        LShift: "Ice Arts",
        E: "Share The Stage",
        F: "",
        V: "",
        Space: "",
        RClick: "Absolute Zero",
        Passives: "Cryo Heart\nSmooth Skate",
        TeamUps: "Icy Disco (Passive)\nC: Frozen Chi",
        Image: "./CharacterImages/luna_snow.png",
        Description: "Equal parts pop star and Super Hero, Luna Snow puts on a dazzling show with both her light and dark ice powers. The arena is her stage, where Seol Hee and her team orchestrate spectacular displays that earn her an ever-increasing number of fans and wins."
    },
    "Mantis": {
        Hero: "Mantis",
        Role: "Strategist",
        Health: "250",
        MovementSpeed: "6 m/s",
        Q: "Soul Resurgence",
        LClick: "Life Energy Blast",
        LShift: "Spore Slumber",
        E: "Allied Inspiration",
        F: "Natural Anger",
        V: "",
        Space: "",
        RClick: "Healing Flower",
        Passives: "Nature's Favor",
        TeamUps: "Nature's Soul (Passive)",
        Image: "./CharacterImages/mantis.png",
        Description: "Mantis uses her impressive mental abilities and her penchant for plant control to anchor any team she fights alongside. Her powers tap into a limitless flow of life energy, gently nourishing everything she touches."
    },
    "Rocket Raccoon": {
        Hero: "Rocket Raccoon",
        Role: "Strategist",
        Health: "250",
        MovementSpeed: "6 m/s",
        Q: "C.Y.A.",
        LClick: "Bombard Mode",
        LShift: "Jetpack Dash",
        E: "B.R.B.",
        F: "",
        V: "",
        Space: "Wild Crawl/Flying Ace",
        RClick: "Repair Mode",
        Passives: "",
        TeamUps: "C: Old Friends\nZ: Ammon Invention",
        Image: "./CharacterImages/rocket_raccoon.png",
        Description: "Rocket may not look like a tech genius or an expert tactician, but anyone who's ever made his hit list has quickly regretted underestimating him. This savvy space soldier is equally eager to boost his teammates and to collect bounties on his foes."
    }
};

const duelists = {
    "Black Panther": {
        Hero: "Black Panther",
        Role: "Duelist",
        Health: "300",
        MovementSpeed: "7 m/s",
        Q: "Bast's Descent",
        LClick: "Vibranium Claws",
        LShift: "Spirit Rend",
        E: "Spinning Kick",
        F: "",
        V: "",
        Space: "Subtle Step",
        RClick: "Spear Toss",
        Passives: "Panther's Cunning",
        TeamUps: "C: Wakandan Master",
        Image: "./CharacterImages/black_panther.png",
        Description: "T'Challa, King of Wakanda, wields the perfect blend of the cutting-edge Vibranium technology and ancestral power drawn from the Panther God, Bast. The Black Panther bides his time until elegantly infiltrating enemy lines and commencing his hunt."
    },
    "Black Widow": {
        Hero: "Black Widow",
        Role: "Duelist",
        Health: "250",
        MovementSpeed: "6 m/s",
        Q: "Electro-Plasma Explosion",
        LClick: "Widow's Bite Baton/Red Room Rifle",
        LShift: "Fleet Foot",
        E: "Edge Dancer",
        F: "",
        V: "",
        Space: "",
        RClick: "Straight Shooter",
        Passives: "",
        TeamUps: "C: Supersensory Hunt",
        Image: "./CharacterImages/black_widow.png",
        Description: "Natasha Romanova is the world's most elite spy in any era. Her mastery of the sniper rifle eliminates targets from afar, while her shock batons neutralize close-range threats. Black Widow is locked, loaded, and ready to deliver a fatal bite!"
    },
    "Hawkeye": {
        Hero: "Hawkeye",
        Role: "Duelist",
        Health: "275",
        MovementSpeed: "6 m/s",
        Q: "Hunter's Sight",
        LClick: "Piercing Arrow/Blast Arrow",
        LShift: "Crescent Slash",
        E: "Hypersonic Arrow",
        F: "",
        V: "Ronin Slash",
        Space: "Skyward Leap",
        RClick: "",
        Passives: "Archer's Focus",
        TeamUps: "Supersensory Vision (Passive)",
        Image: "./CharacterImages/hawkeye.png",
        Description: "Despite his lack of superpowers, Hawkeye's unparalleled skills as a marksman have earned him a spot alongside earth's mightiest heroes. With a cool head and steady hand, Clint Barton never misses a target… so enemies best stay out of his sights!"
    },
    "Hela": {
        Hero: "Hela",
        Role: "Duelist",
        Health: "250",
        MovementSpeed: "6 m/s",
        Q: "Goddess of Death",
        LClick: "Nightsword",
        LShift: "Astral Flock",
        E: "Soul Drainer",
        F: "",
        V: "",
        Space: "Hel's Descent",
        RClick: "Piercing Night",
        Passives: "Nastrond Crowstorm",
        TeamUps: "Queen of Hel (Passive)",
        Image: "./CharacterImages/hela.png",
        Description: "As the Goddess of Death, Hela wields supreme control over the fallen souls residing in Hel. With a haunting whisper and a murder of crows, the queen of the underworld gracefully reaps the souls of her enemies without an ounce of mercy."
    },
    "Human Torch": {
        Hero: "Human Torch",
        Role: "Duelist",
        Health: "250",
        MovementSpeed: "6 m/s",
        MovementMode: "Flight",
        Q: "Supernova",
        LClick: "Fire Cluster",
        LShift: "Plasma Body",
        E: "Pyro-Prison",
        F: "Flaming Meteor",
        V: "",
        Space: "",
        RClick: "Blazing Blast",
        Passives: "",
        TeamUps: "C: Storm Siblings\nX: Omega Fire",
        Image: "./CharacterImages/human_torch.png",
        Description: "The Fantastic Four's resident heartthrob, Johnny Storm, adds an intense flare to every battle he fights. Shrouded in roaring flames, the Human Torch always manages to look cool while turning up the heat!"
    },
    "Iron Fist": {
        Hero: "Iron Fist",
        Role: "Duelist",
        Health: "300",
        MovementSpeed: "6 m/s",
        Q: "Living Chi",
        LClick: "Jeet Kune Do/Yat Jee Chung Kuen",
        LShift: "K'un-Lun Kick",
        E: "Harmony Recovery",
        F: "",
        V: "",
        Space: "Crane Leap/Wall Runner",
        RClick: "Dragon Defense",
        Passives: "Chi Absorption",
        TeamUps: "Dragon's Chill (Passive)",
        Image: "./CharacterImages/iron_fist.png",
        Description: "Lin Lie is a master of Chinese martial arts who once wielded the shattered Sword of Fu Xi. After fusing its pieces with the mighty Chi of Shou-Lao, he is poised to strike his foes with the grace and force of a soaring dragon as the latest immortal Iron Fist"
    },
    "Iron Man": {
        Hero: "Iron Man",
        Role: "Duelist",
        Health: "250",
        MovementSpeed: "6 m/s",
        MovementMode: "Flight",
        Q: "Invincible Pulse Cannon",
        LClick: "Repulsor Blast/Repulsor Blast (Armor Overdrive), Repulsor Blast (Gamma Overdrive)",
        LShift: "Hyper Velocity/ Hyper-Velocity (Armor Over Drive)",
        E: "Armor Overdrive",
        F: "Micro-Missle Barrage/Micro-Missle Barrage (Armor Overdrive)",
        V: "",
        Space: "",
        RClick: "Unibeam/Unibeam (Armor Overdrive)/Unibeam (Gamma Overdrive)",
        Passives: "",
        TeamUps: "E: Gamma Overdrive",
        Image: "./CharacterImages/iron_man.png",
        Description: "Armed with superior intellect and a nanotech battlesuit of his own design, Tony Stark stands alongside gods as the Invincible Iron Man. His state of the art armor turns any battlefield into his personal playground, allowing him to steal the spotlight he so desperately desires."
    },
    "Magik": {
        Hero: "Magik",
        Role: "Duelist",
        Health: "250",
        MovementSpeed: "6 m/s",
        Q: "Darkchild",
        LClick: "Soulsword/Eldritch Whirl",
        LShift: "Stepping Disc",
        E: "Umbral Incursion",
        F: "",
        V: "",
        Space: "",
        RClick: "Magik Slash/Demon's Rage",
        Passives: "Limbo's Might",
        TeamUps: "Disc Master (Passive)",
        Image: "./CharacterImages/magik.png",
        Description: "Illyana Rasputin, also known as Magik, wields the Soulsword and commands the mystical realm of Limbo. Her mastery of dark magic and teleportation makes her a formidable opponent.",
        Forms: {
            "Magik": {
                Q: "Darkchild",
                LClick: "Soulsword/Eldritch Whirl",
                LShift: "Stepping Disc",
                E: "Umbral Incursion",
                F: "",
                V: "",
                Space: "",
                RClick: "Magik Slash/Demon's Rage",
                Passives: "Limbo's Might",
                TeamUps: "Disc Master (Passive)",
                Image: "./CharacterImages/magik-headbig.png",
                Description: "Illyana Rasputin, also known as Magik, wields the Soulsword and commands the mystical realm of Limbo. Her mastery of dark magic and teleportation makes her a formidable opponent."
            },
            "MagikUlt": {
                Q: "",
                LClick: "Soulsword",
                LShift: "Stepping Disc",
                E: "Umbral Incursion",
                F: "",
                V: "",
                Space: "",
                RClick: "Magik Slash/Demon's Rage",
                Passives: "Limbo's Might",
                TeamUps: "Disc Master (Passive)",
                Image: "./CharacterImages/magik-ult-headbig.png",
                Description: "Magik's ultimate form unleashes the full power of Limbo and the Soulsword."
            }
        }
    },
    "Mister Fantastic": {
        Hero: "Mister Fantastic",
        Role: "Duelist",
        Health: "375",
        MovementSpeed: "6 m/s",
        Q: "Brainic Bounce",
        LClick: "Stretch Punch",
        LShift: "Reflexive Rubber",
        E: "Flexible Elongation",
        F: "",
        V: "",
        Space: "",
        RClick: "Distended Grip",
        Passives: "Elastic Strength",
        TeamUps: "C: Wedded Harmony",
        Image: "./CharacterImages/mister_fantastic.png",
        Description: "Reed Richards, the leader of the Fantastic Four, possesses incredible elasticity and superhuman intelligence. His ability to stretch and contort his body makes him a versatile combatant."
    },
    "Moon Knight": {
        Hero: "Moon Knight",
        Role: "Duelist",
        Health: "250",
        MovementSpeed: "6 m/s",
        Q: "Hand of Khonshu",
        LClick: "Crescent Dart",
        LShift: "Night Glider",
        E: "Ancient Guard",
        F: "Moonlight Hook",
        V: "Triple Eclipse",
        Space: "Rising Leap",
        RClick: "Moon Blade",
        Passives: "",
        TeamUps: "C: Full Moon",
        Image: "./CharacterImages/moon_knight.png",
        Description: "Moon Knight, the Fist of Khonshu, fights under the light of the moon. His multiple personalities and connection to the Egyptian moon god make him a unique and unpredictable hero."
    },
    "Namor": {
        Hero: "Namor",
        Role: "Duelist",
        Health: "275",
        MovementSpeed: "6 m/s",
        Q: "Horn of Proteus",
        LClick: "Trident of Neptune",
        LShift: "Blessing of the Deep",
        E: "Aquatic Dominion",
        F: "",
        V: "",
        Space: "",
        RClick: "Wrath of the Seven Seas",
        Passives: "",
        TeamUps: "C: Gamma Monstro",
        Image: "./CharacterImages/namor.png",
        Description: "Namor, the Sub-Mariner, is the ruler of Atlantis and possesses incredible strength and aquatic abilities. His dual nature as both hero and anti-hero makes him a complex figure."
    },
    "Psylocke": {
        Hero: "Psylocke",
        Role: "Duelist",
        Health: "250",
        MovementSpeed: "6 m/s",
        Q: "Dance of the Butterfly",
        LClick: "Psionic Crossbow",
        LShift: "Psi-Blade Dash",
        E: "Psychic Stealth",
        F: "",
        V: "",
        Space: "",
        RClick: "Wing Shurikens",
        Passives: "",
        TeamUps: "C: Psychic Echoes",
        Image: "./CharacterImages/psylocke.png",
        Description: "Psylocke wields powerful psychic abilities and martial arts skills. Her psychic knife and telepathic powers make her a deadly opponent in combat."
    },
    "Scarlet Witch": {
        Hero: "Scarlet Witch",
        Role: "Duelist",
        Health: "250",
        MovementSpeed: "6 m/s",
        Q: "Reality Erasure",
        LClick: "Chaos Control",
        LShift: "Mystic Projection",
        E: "Dark Seal",
        F: "",
        V: "",
        Space: "Telekinesis",
        RClick: "Chthonian Burst",
        Passives: "",
        TeamUps: "RClick: Sorcery Surge",
        Image: "./CharacterImages/scarlet_witch.png",
        Description: "Wanda Maximoff, the Scarlet Witch, wields powerful chaos magic that can alter reality itself. Her abilities make her one of the most powerful beings in the universe."
    },
    "Spider-Man": {
        Hero: "Spider-Man",
        Role: "Duelist",
        Health: "250",
        MovementSpeed: "6 m/s",
        Q: "Spectacular Spin",
        LClick: "Spider-Power",
        LShift: "Web-Swing",
        E: "Get Over Here!",
        F: "Amazing Combo",
        V: "",
        Space: "Thwip and Flip/Wall Crawl",
        RClick: "Web-Cluster",
        Passives: "Spider-Sense",
        TeamUps: "Extra Web-Fluid (Passive)\nC: Suit Expulsion",
        Image: "./CharacterImages/spider_man.png",
        Description: "Peter Parker, the friendly neighborhood Spider-Man, uses his spider-like abilities and quick wit to protect New York City. His agility and web-slinging make him a formidable hero."
    },
    "Squirrel Girl": {
        Hero: "Squirrel Girl",
        Role: "Duelist",
        Health: "275",
        MovementSpeed: "6 m/s",
        Q: "Unbeatable Squirrel Tsunami",
        LClick: "Burst Acorn",
        LShift: "Tail Bounce",
        E: "Mammal Bond",
        F: "",
        V: "",
        Space: "",
        RClick: "Squirrel Blockade",
        Passives: "",
        TeamUps: "C: Webbed Acorn",
        Image: "./CharacterImages/squirrel_girl.png",
        Description: "Doreen Green, also known as Squirrel Girl, has the proportional strength and abilities of a squirrel. Her ability to communicate with squirrels and her unbeatable record make her a unique hero."
    },
    "Star-Lord": {
        Hero: "Star-Lord",
        Role: "Duelist",
        Health: "250",
        MovementSpeed: "6 m/s",
        Q: "Galactic Legend",
        LClick: "Element Guns",
        LShift: "Rocket Propulsion",
        E: "Blaster Barrage",
        F: "",
        V: "",
        Space: "",
        RClick: "Stellar Shift",
        Passives: "",
        TeamUps: "Leader's Soul (Passive)",
        Image: "./CharacterImages/star_lord.png",
        Description: "Peter Quill, the legendary Star-Lord, leads the Guardians of the Galaxy with his quick wit and impressive arsenal. His Element Gun and tactical skills make him a formidable leader."
    },
    "Storm": {
        Hero: "Storm",
        Role: "Duelist",
        Health: "250",
        MovementSpeed: "6 m/s",
        Q: "Omega Hurricane",
        LClick: "Wind Blade",
        LShift: "Weather Control",
        E: "Goddess Boost",
        F: "",
        V: "",
        Space: "",
        RClick: "Bolt Rush",
        Passives: "",
        TeamUps: "X: Burning Hurricane",
        Image: "./CharacterImages/storm.png",
        Description: "Ororo Munroe, also known as Storm, controls the weather with her mutant powers. Her ability to manipulate the elements makes her one of the most powerful mutants."
    },
    "The Punisher": {
        Hero: "The Punisher",
        Role: "Duelist",
        Health: "275",
        MovementSpeed: "6 m/s",
        Q: "Final Judgement",
        LClick: "Adjudication/Deliverance",
        LShift: "Vantage Connection",
        E: "Culling Turrent",
        F: "",
        V: "",
        Space: "",
        RClick: "Scourge Grenade",
        Passives: "Warrior's Glaze",
        TeamUps: "Infinite Punishment",
        Image: "./CharacterImages/the_punisher.png",
        Description: "Frank Castle, the Punisher, wages a one-man war on crime using his military training and arsenal of weapons. His relentless pursuit of justice makes him a feared vigilante."
    },
    "Winter Soldier": {
        Hero: "Winter Soldier",
        Role: "Duelist",
        Health: "275",
        MovementSpeed: "6 m/s",
        Q: "Kraken Impact",
        LClick: "Roterstern",
        LShift: "Trooper's Fist",
        E: "Tainted Voltage",
        F: "",
        V: "",
        Space: "",
        RClick: "Bionic Hook",
        Passives: "Ceaseless Charge",
        TeamUps: "C: Stellar Impact",
        Image: "./CharacterImages/winter_soldier.png",
        Description: "Bucky Barnes, the Winter Soldier, is a highly skilled assassin with a vibranium arm and military training. His combat skills and tactical mind make him a valuable asset to any team."
    },
    "Wolverine": {
        Hero: "Wolverine",
        Role: "Duelist",
        Health: "350",
        MovementSpeed: "7 m/s",
        Q: "Last Stand",
        LClick: "Savage Claw",
        LShift: "Feral Leap",
        E: "Undying Animal",
        F: "",
        V: "",
        Space: "",
        RClick: "Vicious Rampage",
        Passives: "Regenerative Healing Factor\nBerserker Rage",
        TeamUps: "C: Metal Cannonball",
        Image: "./CharacterImages/wolverine.png",
        Description: "Wolverine, the best there is at what he does, possesses an adamantium skeleton and claws, along with a powerful healing factor. His combat skills and indomitable spirit make him a legendary X-Man."
    }
};

const vanguards = {
    "Captain America": {
        Hero: "Captain America",
        Role: "Vanguard",
        Health: "650",
        MovementSpeed: "6 m/s",
        Q: "Freedom Charge",
        LClick: "Sentinel Strike/Super-Soldier Slam",
        LShift: "Leading Dash",
        E: "Vibranium Energy Saw",
        F: "Liberty Rush",
        V: "",
        Space: "",
        RClick: "Living Legend",
        Passives: "",
        TeamUps: "Captain's Spirit (Passive)",
        Image: "./CharacterImages/captain_america.png",
        Description: "Steve Rogers, the first Avenger, leads the charge with his indestructible vibranium shield. Captain America's tactical brilliance and unwavering spirit inspire his team to victory."
    },
    "Emma Frost": {
        Hero: "Emma Frost",
        Role: "Vanguard",
        Health: "550",
        MovementSpeed: "6 m/s",
        Q: "Psionic Seduction",
        LClick: "Telepathic Pulse/ Faceted Fury",
        LShift: "Diamond Form",
        E: "Psychic Spear",
        F: "",
        V: "",
        Space: "",
        RClick: "Crystal Kick/Carbon Crush",
        Passives: "",
        TeamUps: "Mind link (Passive)",
        Image: "./CharacterImages/emma_frost.png",
        Description: "For Emma Frost, war is the purest form of art. With her formidable telepathic abilities, she intricately weaves a deadly mental web that ensnares her foes, while her indestructible diamond form lets her lead her teammates fearlessly into the fray. Forever elegant and composed, Emma reigns as the one true queen of the battlefield!"
    },
    "Doctor Strange": {
        Hero: "Doctor Strange",
        Role: "Vanguard",
        Health: "600",
        MovementSpeed: "6 m/s",
        Q: "Eye of Agamotto",
        LClick: "Daggers of Denak",
        LShift: "Cloak of Levitation",
        E: "Maelstorm of Madness",
        F: "Pentagram of Farallah",
        V: "",
        Space: "",
        RClick: "Shield of the Seraphim",
        Passives: "Price of Magic",
        TeamUps: "Enchanted Enhancement (Passive)",
        Image: "./CharacterImages/doctor_strange.png",
        Description: "Doctor Strange, the Sorcerer Supreme, wields the mystic arts to protect reality from supernatural threats. His mastery of magic makes him a formidable ally in any battle."
    },
    "Groot": {
        Hero: "Groot",
        Role: "Vanguard",
        Health: "700",
        MovementSpeed: "6 m/s",
        Q: "Strangling Prison",
        LClick: "Vine Strike",
        LShift: "Thornlash Wall",
        E: "Ironwood Wall",
        F: "",
        V: "Furious Flora",
        Space: "",
        RClick: "Spore Bomb",
        Passives: "Flora Colossus",
        TeamUps: "Friendly Shoulder (Passive)",
        Image: "./CharacterImages/groot.png",
        Description: "Groot, the Flora Colossus, uses his incredible strength and ability to grow and manipulate his body to protect his friends. His simple phrase 'I am Groot' carries deep meaning to those who understand him."
    },
    "Hero Hulk": {
        Hero: "Hero Hulk",
        Role: "Vanguard",
        Health: "650",
        MovementSpeed: "6.5 m/s",
        Q: "Hulk Smash!",
        LClick: "Heavy Blow",
        LShift: "Indestructible Guard",
        E: "Radioactive Lockdown",
        F: "",
        V: "",
        Space: "Incredible Leap",
        RClick: "Gamma Burst",
        Passives: "",
        TeamUps: "Gamma Boost (Passive)\nC: Gamma Fastball",
        Image: "./CharacterImages/hero_hulk.png",
        Description: "Bruce Banner's alter ego, the Hulk, brings incredible strength and durability to the battlefield. When the Hulk gets angry, his power knows no bounds.",
        Forms: {
            "Bruce Banner": {
                Health: "200",
                MovementSpeed: "6 m/s",
                Q: "Puny Banner",
                LClick: "Gamma Ray Gun",
                LShift: "Gamma Grenade",
                E: "",
                F: "",
                V: "",
                Space: "",
                RClick: "",
                Passives: "",
                TeamUps: "Gamma Boost (Passive)",
                Image: "./CharacterImages/bruce-banner-headbig.png",
                Description: "Bruce Banner, the brilliant scientist, can transform into the Hulk when his emotions get the better of him."
            },
            "Hero Hulk": {
                Health: "650",
                MovementSpeed: "6.5 m/s",
                Q: "Hulk Smash!",
                LClick: "Heavy Blow",
                LShift: "Indestructible Guard",
                E: "Radioactive Lockdown",
                F: "",
                V: "",
                Space: "Incredible Leap",
                RClick: "Gamma Burst",
                Passives: "",
                TeamUps: "Gamma Boost (Passive)\nC: Gamma Fastball",
                Image: "./CharacterImages/hero-hulk-headbig.png",
                Description: "Bruce Banner's alter ego, the Hulk, brings incredible strength and durability to the battlefield. When the Hulk gets angry, his power knows no bounds."
            },
            "Monster Hulk": {
                Health: "1400",
                MovementSpeed: "6.5 m/s",
                Q: "World Breaker",
                LClick: "Heavy Blow",
                LShift: "",
                E: "Radioactive Lockdown",
                F: "",
                V: "",
                Space: "Incredible Leap",
                RClick: "Gamma Burst",
                Passives: "",
                TeamUps: "Gamma Boost (Passive)\nC: Gamma Fastball",
                Image: "./CharacterImages/monster-hulk-headbig.png",
                Description: "The Monster Hulk is the most powerful and dangerous form of the Hulk, with incredible strength and durability."
            }
        }
    },
    "Magneto": {
        Hero: "Magneto",
        Role: "Vanguard",
        Health: "650",
        MovementSpeed: "6 m/s",
        Q: "Metero M",
        LClick: "Iron Volley",
        LShift: "Metallic Curtain",
        E: "Metal Bulwark",
        F: "iron Bulwark",
        V: "",
        Space: "Magetic Descent",
        RClick: "Mag-Cannon",
        Passives: "",
        TeamUps: "C: Magnetic Resonance",
        Image: "./CharacterImages/magneto.png",
        Description: "Magneto, the Master of Magnetism, wields incredible power over metal and magnetic fields. His leadership of mutantkind makes him both a powerful ally and a dangerous enemy."
    },
    "Peni Parker": {
        Hero: "Peni Parker",
        Role: "Vanguard",
        Health: "750",
        MovementSpeed: "6 m/s",
        Q: "Spider-Sweeper",
        LClick: "Cyber-Web Cluster",
        LShift: "Bionic Spider-Nest",
        E: "Arachno-Mine",
        F: "Cyber-Bond",
        V: "",
        Space: "Wall Crawl",
        RClick: "Cyber-Web Snare",
        Passives: "",
        TeamUps: "C: Armor Expulsion",
        Image: "./CharacterImages/peni_parker.png",
        Description: "Peni Parker pilots the SP//dr mech suit, combining her intelligence with advanced technology to fight crime. Her unique connection to the SP//dr makes her a formidable hero."
    },
    "The Thing": {
        Hero: "The Thing",
        Role: "Vanguard",
        Health: "700",
        MovementSpeed: "6 m/s",
        Q: "Clobberin' Time",
        LClick: "Rocky Jab",
        LShift: "Yancy Street Charge",
        E: "Embattled Leap",
        F: "",
        V: "",
        Space: "",
        RClick: "Stone Haymaker",
        Passives: "Unyielding Will",
        TeamUps: "Z: Cosmic Fastball\nC: Cooperative Comrades",
        Image: "./CharacterImages/the_thing.png",
        Description: "Ben Grimm, the Thing, is a founding member of the Fantastic Four with incredible strength and durability. His rocky exterior and tough personality make him a formidable hero."
    },
    "Thor": {
        Hero: "Thor",
        Role: "Vanguard",
        Health: "600",
        MovementSpeed: "6.5 m/s",
        Q: "God of Thunder",
        LClick: "Mjolnir Bash",
        LShift: "Lightning Shield",
        E: "Lightning Realm",
        F: "Awakening Rune",
        V: "",
        Space: "",
        RClick: "Hammer Throw",
        Passives: "Thorforce",
        TeamUps: "Odinson Reborn (Passive)",
        Image: "./CharacterImages/thor.png",
        Description: "Thor, the God of Thunder, wields the mighty Mjolnir and commands the power of lightning. His godly strength and control over the weather make him one of the most powerful Avengers."
    },
    "Venom": {
        Hero: "Venom",
        Role: "Vanguard",
        Health: "650",
        MovementSpeed: "6 m/s",
        Q: "Feast of the Abyss",
        LClick: "Dark Predation",
        LShift: "Venom Swing",
        E: "Symbiotic Resilience",
        F: "Frenzied Arrival",
        V: "",
        Space: "Alien Biology",
        RClick: "Cellular Corrosion",
        Passives: "",
        TeamUps: "Touch of Klyntar (Passive)",
        Image: "./CharacterImages/venom.png",
        Description: "Venom, the alien symbiote bonded with Eddie Brock, possesses incredible strength and shape-shifting abilities. His unique connection to the symbiote makes him a powerful anti-hero."
    }
};

// Function to create hero cards
function createHeroCard(hero) {
    const card = document.createElement('div');
    card.className = 'hero-card m-2';
    card.style.cursor = 'pointer';
    card.onclick = () => openImagePopup(hero);
    
    const img = document.createElement('img');
    img.src = hero.Image;
    img.alt = hero.Hero;
    img.className = 'hero-image';
    
    const name = document.createElement('p');
    name.className = 'text-center mt-2';
    name.textContent = hero.Hero;
    
    card.appendChild(img);
    card.appendChild(name);
    return card;
}

// Function to populate hero containers
function populateHeroContainers() {
    const strategistsContainer = document.getElementById('strategists-container');
    const duelistsContainer = document.getElementById('duelists-container');
    const vanguardsContainer = document.getElementById('vanguards-container');

    // Clear existing content
    strategistsContainer.innerHTML = '';
    duelistsContainer.innerHTML = '';
    vanguardsContainer.innerHTML = '';

    // Add strategists
    Object.values(strategists).forEach(hero => {
        strategistsContainer.appendChild(createHeroCard(hero));
    });

    // Add duelists
    Object.values(duelists).forEach(hero => {
        duelistsContainer.appendChild(createHeroCard(hero));
    });

    // Add vanguards
    Object.values(vanguards).forEach(hero => {
        vanguardsContainer.appendChild(createHeroCard(hero));
    });
}

// Function to open character details page
function openCharacterDetails() {
    const currentHero = window.currentHero;
    if (!currentHero) return;

    // Get the current form if it exists
    const currentForm = window.currentForm || '';

    // Convert hero name to filename format
    const fileName = currentHero.Hero.toLowerCase().replace(/[^a-z0-9]/g, '_') + '.html';
    
    // Navigate to the individual hero details page
    window.location.href = `Detail Heroes Abilities/${fileName}`;
}

// Function to open the hero popup
function openImagePopup(hero) {
    // Store the current hero for the More Details button
    window.currentHero = hero;
    window.currentForm = '';

    const popup = document.getElementById('hero-popup');
    const popupImage = document.getElementById('popup-hero-image');
    const popupName = document.getElementById('popup-hero-name');
    const popupRole = document.getElementById('popup-hero-role');
    const popupDescription = document.getElementById('popup-hero-description');
    const popupAbilities = document.getElementById('popup-hero-abilities');
    const popupTeamups = document.getElementById('popup-hero-teamups');
    const popupForms = document.getElementById('popup-hero-forms');
    const popupHealth = document.getElementById('popup-hero-health');
    const popupMobility = document.getElementById('popup-hero-mobility');

    // Clear existing content
    popupForms.innerHTML = '';
    popupAbilities.innerHTML = '';

    // Special handling for heroes with forms
    if (hero.Forms && (hero.Hero === "Cloak & Dagger" || hero.Hero === "Hero Hulk" || hero.Hero === "Magik")) {
        // Create form selection buttons
        Object.entries(hero.Forms).forEach(([formName, formData]) => {
            const button = document.createElement('button');
            button.className = 'form-button';
            button.textContent = formName;
            button.onclick = () => updatePopupContent(hero, formName, formData);
            popupForms.appendChild(button);
        });

        // Show form selection
        popupForms.style.display = 'flex';
        
        // Set initial form
        const initialForm = Object.entries(hero.Forms)[0];
        updatePopupContent(hero, initialForm[0], initialForm[1]);
    } else {
        // Hide form selection
        popupForms.style.display = 'none';
        
        // For regular heroes, use the big head PNG in the popup
        const heroName = hero.Hero.toLowerCase().replace(/\s+/g, '-');
        popupImage.src = `https://static.dotgg.gg/rivals/characters/${heroName}-headbig.webp`;
        popupName.textContent = hero.Hero;
        popupRole.textContent = hero.Role;
        popupDescription.textContent = hero.Description;
        popupTeamups.textContent = hero.TeamUps;

        // Set health and movement speed
        popupHealth.textContent = hero.Health || '250';
        popupMobility.textContent = hero.MovementSpeed || '6 m/s';
        if (hero.MovementMode) {
            popupMobility.textContent += ` (${hero.MovementMode})`;
        }

        // Populate abilities
        const abilities = [
            { key: 'Q', name: hero.Q },
            { key: 'LClick', name: hero.LClick },
            { key: 'LShift', name: hero.LShift },
            { key: 'E', name: hero.E },
            { key: 'F', name: hero.F },
            { key: 'V', name: hero.V },
            { key: 'Space', name: hero.Space },
            { key: 'RClick', name: hero.RClick }
        ];

        abilities.forEach(ability => {
            if (ability.name) {
                const li = document.createElement('li');
                li.textContent = `${ability.key}: ${ability.name}`;
                popupAbilities.appendChild(li);
            }
        });
    }

    // Show popup
    popup.style.display = 'flex';
}

// Function to update popup content for a specific form
function updatePopupContent(hero, formName, formData) {
    const popupImage = document.getElementById('popup-hero-image');
    const popupName = document.getElementById('popup-hero-name');
    const popupRole = document.getElementById('popup-hero-role');
    const popupDescription = document.getElementById('popup-hero-description');
    const popupAbilities = document.getElementById('popup-hero-abilities');
    const popupTeamups = document.getElementById('popup-hero-teamups');
    const popupHealth = document.getElementById('popup-hero-health');
    const popupMobility = document.getElementById('popup-hero-mobility');

    // Update popup content
    popupImage.src = formData.Image;
    popupName.textContent = `${hero.Hero} (${formName})`;
    popupRole.textContent = hero.Role;
    popupDescription.textContent = formData.Description;
    popupTeamups.textContent = formData.TeamUps;

    // Set health and movement speed for the form
    popupHealth.textContent = formData.Health || '250';
    popupMobility.textContent = formData.MovementSpeed || '6 m/s';
    if (formData.MovementMode) {
        popupMobility.textContent += ` (${formData.MovementMode})`;
    }

    // Clear and populate abilities
    popupAbilities.innerHTML = '';
    const abilities = [
        { key: 'Q', name: formData.Q },
        { key: 'LClick', name: formData.LClick },
        { key: 'LShift', name: formData.LShift },
        { key: 'E', name: formData.E },
        { key: 'F', name: formData.F },
        { key: 'V', name: formData.V },
        { key: 'Space', name: formData.Space },
        { key: 'RClick', name: formData.RClick }
    ];

    abilities.forEach(ability => {
        if (ability.name) {
            const li = document.createElement('li');
            li.textContent = `${ability.key}: ${ability.name}`;
            popupAbilities.appendChild(li);
        }
    });
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('hero-popup');
    popup.style.display = 'none';
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', populateHeroContainers); 