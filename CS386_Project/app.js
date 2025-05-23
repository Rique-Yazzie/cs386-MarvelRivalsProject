const strategists = {
    "AdamWarlock": {
        Hero: "Adam Warlock",
        Role: "Strategist",
        Q: "Karmic Revival",
        LClick: "Quantum Magic",
        LShift: "Soul Bound",
        E: "AVATAR LIFE STREAM",
        F: "",
        V: "",
        Space: "",
        RClick: "",
        TeamUpsPassives: "Soul Perseverance",
        Image: "./CharacterImages/adam_warlock.png",
        Description: "The genetically-engineered Adam Warlock wields mighty Quantum Magic, allowing him to connect and heal souls with a gentle touch. When the time comes for his allies to unite, Warlock emerges as the unwavering epicenter of cosmic justice!"
    },
    "CloakDagger": {
        Hero: "Cloak & Dagger",
        Role: "Strategist",
        Q: "Eternal Bond",
        LClick: "Lightforce Dagger/ DARKFORCE CLOAK",
        LShift: "Light/Shadow's Embrace",
        E: "Veil of LightForce/Terror Cape",
        F: "",
        V: "",
        Space: "",
        RClick: "Dagger Stprm/Dark Teleportation",
        TeamUpsPassives: "FROM SHADOW TO LIGHT",
        Image: "./CharacterImages/cloak&dagger.png",
        Description: "Tyrone Johnson and Tandy Bowen are nearly inseparable, like two sides of the same coin. Intertwined by forces of shadow and light, Cloak & Dagger fight as a united front, dealing havoc and healing allies across the arena."
    },
    "InvisibleWoman": {
        Hero: "Invisible Woman",
        Role: "Strategist",
        Q: "Invisible Boundary",
        LClick: "Orb Projection",
        LShift: "Psionic Vortex",
        E: "Force Physics ",
        F: "",
        V: "",
        Space: "Veiled Step",
        RClick: "Guardian Shield",
        TeamUpsPassives: "COVERT ADVANCE/FANTASTI-FORCE",
        Image: "./CharacterImages/invisible_woman.png",
        Description: "The Invisible Woman is able to slip in and out of sight without a trace. No matter how intense the battle may be, Susan Richards always keeps her cool, conjuring up impenetrable force fields to protect herself and her team."
    },
    "JeffTheLandShark": {
        Hero: "Jeff the Land Shark",
        Role: "Strategist",
        Q: "It's Jeff!",
        LClick: "Joyful Splash",
        LShift: "Hide and Seek",
        E: "Healing Bubble",
        F: "",
        V: "",
        Space: "",
        RClick: "Aqua Burst",
        TeamUpsPassives: "Frozen SpitBall/New Friends",
        Image: "./CharacterImages/jeff.png",
        Description: "Most landsharks are vicious creatures of the deep... but not Jeff! This adorable and mischievous little landshark brings splashes of joy and healing to every battle. But if the tide turns, Jeff can morph into a voracious beast, swallowing an army of foes in one giant gulp!"
    },
    "Loki": {
        Hero: "Loki",
        Role: "Strategist",
        Q: "God of Mischief",
        LClick: "Mystical Missile",
        LShift: "Regeneration Domain",
        E: "Doppelganger",
        F: "Devious Exchange",
        V: "Backstab",
        Space: "",
        RClick: "",
        TeamUpsPassives: "Laufeyson Reborn",
        Image: "./CharacterImages/loki.png",
        Description: "What greater thrill is there for a God of Mischief than to outsmart his foes? The cunning trickster Loki uses his illusions and shapeshifting abilities to weave in and out of combat, toying with enemies at every turn."
    },
    "LunaSnow": {
        Hero: "Luna Snow",
        Role: "Strategist",
        Q: "Fate of Both Worlds",
        LClick: "Light & Dark Ice",
        LShift: "Ice Arts",
        E: "Share The Stage",
        F: "",
        V: "",
        Space: "",
        RClick: "Absolute Zero",
        TeamUpsPassives: "Cryo Heart, Smooth Skate, Icy Disco, Frozen Chi",
        Image: "./CharacterImages/luna_snow.png",
        Description: "Equal parts pop star and Super Hero, Luna Snow puts on a dazzling show with both her light and dark ice powers. The arena is her stage, where Seol Hee and her team orchestrate spectacular displays that earn her an ever-increasing number of fans and wins."
    },
    "Mantis": {
        Hero: "Mantis",
        Role: "Strategist",
        Q: "Soul Resurgence",
        LClick: "Life Energy Blast",
        LShift: "Spore Slumber",
        E: "Allied Inspiration",
        F: "Natural Anger",
        V: "",
        Space: "",
        RClick: "Healing Flower",
        TeamUpsPassives: "Nature's Favor/ Nature's Soul",
        Image: "./CharacterImages/mantis.png",
        Description: "Mantis uses her impressive mental abilities and her penchant for plant control to anchor any team she fights alongside. Her powers tap into a limitless flow of life energy, gently nourishing everything she touches."
    },
    "RocketRaccoon": {
        Hero: "Rocket Raccoon",
        Role: "Strategist",
        Q: "C.Y.A.",
        LClick: "Bombard Mode",
        LShift: "Jetpack Dash",
        E: "B.R.B.",
        F: "",
        V: "",
        Space: "Wild Crawl/Flying Ace",
        RClick: "Repair Mode",
        TeamUpsPassives: "Old Friends/ Ammo Invention",
        Image: "./CharacterImages/rocket_raccoon.png",
        Description: "Rocket may not look like a tech genius or an expert tactician, but anyone who's ever made his hit list has quickly regretted underestimating him. This savvy space soldier is equally eager to boost his teammates and to collect bounties on his foes."
    }
}

const duelists = {
    "BlackPanther": {
        Hero: "Black Panther",
        Role: "Duelist",
        Q: "Bast's Descent",
        LClick: "Vibranium Claws",
        LShift: "Spirit Rend",
        E: "Spinning Kick",
        F: "",
        V: "",
        Space: "Subtle Step",
        RClick: "Spear Toss",
        TeamUpsPassives: "Panther's Cunning/Wakandan Master",
        Image: "./CharacterImages/black_panther.png",
        Description: "T'Challa, King of Wakanda, wields the perfect blend of the cutting-edge Vibranium technology and ancestral power drawn from the Panther God, Bast. The Black Panther bides his time until elegantly infiltrating enemy lines and commencing his hunt."
    },
    "BlackWidow": {
        Hero: "Black Widow",
        Role: "Duelist",
        Q: "Electro-Plasma Explosion",
        LClick: "Widow's Bite Baton/Red Room Rifle",
        LShift: "Fleet Foot",
        E: "Edge Dancer",
        F: "",
        V: "",
        Space: "",
        RClick: "Straight Shooter",
        TeamUpsPassives: "Supersensory Hunt",
        Image: "./CharacterImages/black_widow.png",
        Description: "Natasha Romanova is the world's most elite spy in any era. Her mastery of the sniper rifle eliminates targets from afar, while her shock batons neutralize close-range threats. Black Widow is locked, loaded, and ready to deliver a fatal bite!"
    },
    "Hawkeye": {
        Hero: "Hawkeye",
        Role: "Duelist",
        Q: "Hunter's Sight",
        LClick: "Piercing Arrow/Blast Arrow",
        LShift: "Crescent Slash",
        E: "Hypersonic Arrow",
        F: "",
        V: "Ronin Slash",
        Space: "Skyward Leap",
        RClick: "",
        TeamUpsPassives: "Archer's Focus/Supersensory Hunt",
        Image: "./CharacterImages/hawkeye.png",
        Description: "Despite his lack of superpowers, Hawkeye's unparalleled skills as a marksman have earned him a spot alongside earth's mightiest heroes. With a cool head and steady hand, Clint Barton never misses a target… so enemies best stay out of his sights!"
    },
    "Hela": {
        Hero: "Hela",
        Role: "Duelist",
        Q: "Goddes of Death",
        LClick: "Nightsword",
        LShift: "Astral Flock",
        E: "Soul Drainer ",
        F: "",
        V: "",
        Space: "Hel's Descent",
        RClick: "Piercing Night",
        TeamUpsPassives: "Nastrond Crowstorm/Queen of Hel",
        Image: "./CharacterImages/hela.png",
        Description: "As the Goddess of Death, Hela wields supreme control over the fallen souls residing in Hel. With a haunting whisper and a murder of crows, the queen of the underworld gracefully reaps the souls of her enemies without an ounce of mercy."
    },
    "HumanTorch": {
        Hero: "Human Torch",
        Role: "Duelist",
        Q: "Supernova",
        LClick: "Fire Cluster",
        LShift: "Plasma Body",
        E: "Pyro-Prison",
        F: "Flaming Meteor",
        V: "",
        Space: "",
        RClick: "Blazing Blast",
        TeamUpsPassives: "Storm Siblings/Omega Fire",
        Image: "./CharacterImages/human_torch.png",
        Description: "The Fantastic Four's resident heartthrob, Johnny Storm, adds an intense flare to every battle he fights. Shrouded in roaring flames, the Human Torch always manages to look cool while turning up the heat!"
    },
    "IronFist": {
        Hero: "Iron Fist",
        Role: "Duelist",
        Q: "Living Chi",
        LClick: "Jeet Kune Do/Yat Jee Chung Kuen",
        LShift: "K'un-Lun Kick",
        E: "Harmony Recovery",
        F: "",
        V: "",
        Space: "Crane Leap/Wall Runner",
        RClick: "Dragon Defense",
        TeamUpsPassives: "Chi Absorption/Dragon's Chill",
        Image: "./CharacterImages/iron_fist.png",
        Description: "Lin Lie is a master of Chinese martial arts who once wielded the shattered Sword of Fu Xi. After fusing its pieces with the mighty Chi of Shou-Lao, he is poised to strike his foes with the grace and force of a soaring dragon as the latest immortal Iron Fist"
    },
    "IronMan": {
        Hero: "Iron Man",
        Role: "Duelist",
        Q: "Invincible Pulse Cannon",
        LClick: "Repulsor Blast/Repulsor Blast (Armor Overdrive), Repulsor Blast (Gamma Overdrive)",
        LShift: "Hyper Velocity/ Hyper-Velocity (Armor Over Drive)",
        E: "Armor Overdrive",
        F: "Micro-Missle Barrage/Micro-Missle Barrage (Overdriver)",
        V: "",
        Space: "",
        RClick: "Unibeam/Unibeam (Armor Overdrive)/Unibeam (Gamma Overdrive)",
        TeamUpsPassives: "Gamma Overdrive",
        Image: "./CharacterImages/iron_man.png",
        Description: "Armed with superior intellect and a nanotech battlesuit of his own design, Tony Stark stands alongside gods as the Invincible Iron Man. His state of the art armor turns any battlefield into his personal playground, allowing him to steal the spotlight he so desperately desires."
    },
    "Magik": {
        Hero: "Magik",
        Role: "Duelist",
        Q: "Darkchild",
        LClick: "Soulsword/EkdritchWhirl",
        LShift: "Stepping Discs",
        E: "Umbral Incursion",
        F: "",
        V: "",
        Space: "",
        RClick: "Magik Slash/Demon's Rage",
        TeamUpsPassives: "Limbo's Might/Disc Master",
        Image: "./CharacterImages/magik.png",
        Description: "Trained in the dark arts and wielding her mighty Soulsword, Magik leaps through portals to navigate the arena with ease. Once Illyana transforms into the demonic Darkchild, all who dare stand against her will fall before her merciless blade."
    },
    "Magik(Ult)": {
        Hero: "Magik (Ult)",
        Role: "Duelist",
        Q: "",
        LClick: "Soulsword/EkdritchWhirl",
        LShift: "Stepping Discs",
        E: "Umbral Incursion",
        F: "",
        V: "",
        Space: "",
        RClick: "Magik Slash/Demon's Rage",
        TeamUpsPassives: "",
        Image: "./CharacterImages/magik_ult.png",
        Description: "Trained in the dark arts and wielding her mighty Soulsword, Magik leaps through portals to navigate the arena with ease. Once Illyana transforms into the demonic Darkchild, all who dare stand against her will fall before her merciless blade."
    },
    "MisterFantastic": {
        Hero: "Mister Fantastic",
        Role: "Duelist",
        Q: "Brainiac Bouce",
        LClick: "Stretch Punch",
        LShift: "Reflexive Rubber",
        E: "Flexible Elongation",
        F: "",
        V: "",
        Space: "",
        RClick: "Distended Grip",
        TeamUpsPassives: "Elastic Strength/Wedded Harmony",
        Image: "./CharacterImages/mister_fantastic.png",
        Description: "Reed Richards believes that true strength comes from remaining flexible, both mentally and physically. Mister Fantastic's elastic body, which can twist and stretch into any form with ease, is almost as impressive as his brilliant mind."
    },
    "MoonKnight": {
        Hero: "Moon Knight",
        Role: "Duelist",
        Q: "Hand of Khonshu",
        LClick: "Crescent Dart",
        LShift: "Night Glider",
        E: "Ancient Ankh",
        F: "Moonlight Hook",
        V: "Triple Eclipse",
        Space: "Rising Leap",
        RClick: "Moon Blade",
        TeamUpsPassives: "Full Moon",
        Image: "./CharacterImages/moon_knight.png",
        Description: "As the avatar of the Egyptian God of Vengeance, Marc Spector's body has been enhanced by Khonshu himself. Bathed in a luminous aura that pierces the darkness, Moon Knight glides through the night, ready to sear his enemies with his master's sacred Ankhs."
    },
    "Namor": {
        Hero: "Namor",
        Role: "Duelist",
        Q: "Horn of Proteus",
        LClick: "Trident of Neptune",
        LShift: "Blessing of the Deep",
        E: "Aquatic Dominion",
        F: "",
        V: "",
        Space: "",
        RClick: "Wrath of the Seven Seas",
        TeamUpsPassives: "Frozen Spawn",
        Image: "./CharacterImages/namor.png",
        Description: "The unrivaled King of the Seas, Namor surfs into battle on a mighty wave with an army of fierce aquatic creatures in his wake. When ancient horns of war blare, devastation soon follows as deadly waters engulf the arena."
    },
    "Psylocke": {
        Hero: "Psylocke",
        Role: "Duelist",
        Q: "Dance of the Butterfly",
        LClick: "Psionic Crossbow",
        LShift: "Psi-Blade Dash",
        E: "Psychic Stealth",
        F: "",
        V: "",
        Space: "",
        RClick: "Wing Shurikens",
        TeamUpsPassives: "Psionic Disc ",
        Image: "./CharacterImages/psylocke.png",
        Description: "The psychic warrior known as Sai has the Mutant ability to conjure a variety of weapons with the power of her mind. Gracefully gliding across the battlefield, this trained ninja can shatter the enemy's defenses with a single thought."
    },
    "ScarletWitch": {
        Hero: "Scarlet Witch",
        Role: "Duelist",
        Q: "Reality Erasure",
        LClick: "Chaos Control",
        LShift: "Mystic Projection",
        E: "Dark Seal",
        F: "",
        V: "",
        Space: "Telekinesis",
        RClick: "Chthonian Burst",
        TeamUpsPassives: "Chaotic Bond ",
        Image: "./CharacterImages/scarlet_witch.png",
        Description: "Wanda Maximoff is adept at harnessing formidable chaos magic, casting hexes with the power to twist and reshape reality itself. Energy, space, and matter are mere playthings in the hands of Scarlet Witch!"
    },
    "Spider-man": {
        Hero: "Spider-man",
        Role: "Duelist",
        Q: "Spectacular Spin",
        LClick: "Spider-Power",
        LShift: "Web-Swing",
        E: "Get Over Here!",
        F: "Amazing Combo",
        V: "",
        Space: "Thwip and Flip/Wall Crawl",
        RClick: "Web-Cluster",
        TeamUpsPassives: "Spider-Sense/Suit Explusion/Extra Web-Fluid",
        Image: "./CharacterImages/spider_man.png",
        Description: "Swinging around the arena on his signature weblines, your friendly neighborhood Spider-Man, AKA Peter Parker, catches his rivals by surprise with sneaky, sticky bursts of webbing and unexpected attacks from above. Look out… here comes the Spider-Man!"
    },
    "SquirrelGirl": {
        Hero: "Squirrel Girl",
        Role: "Duelist",
        Q: "Unbeatable Squirrel Tsunami",
        LClick: "Burst Acorn",
        LShift: "Tail Bounce",
        E: "Mammal Bond",
        F: "",
        V: "",
        Space: "",
        RClick: "Squirrel Blockade",
        TeamUpsPassives: "Webbed Acorn",
        Image: "./CharacterImages/squirrel_girl.png",
        Description: "Possessing only the powers of a common squirrel, somehow Doreen Green manages to defeat seemingly invincible enemies in the most unexpected ways. Any foe who counts her out is bound to fall at the hands of the Unbeatable Squirrel Girl!"
    },
    "Star-Lord": {
        Hero: "Star-Lord",
        Role: "Duelist",
        Q: "Galatic Legend",
        LClick: "Element Guns",
        LShift: "Rocket Propulsion",
        E: "Blaster Barrage",
        F: "",
        V: "",
        Space: "",
        RClick: "Stellar Shift",
        TeamUpsPassives: "Leader's Soul",
        Image: "./CharacterImages/star_lord.png",
        Description: "Peter Quill lives to dazzle his foes on the battlefield with his signature swagger. As his element guns paint arcs of devastation, his acrobatic moves sail through the sky with unrivaled style. With performances this spectacular, it's no wonder that Star-Lord is so legendary!"
    },
    "Storm": {
        Hero: "Storm",
        Role: "Duelist",
        Q: "Omega Hurricane",
        LClick: "Wind Blade",
        LShift: "Weather Control",
        E: "Goddes Boost",
        F: "",
        V: "",
        Space: "",
        RClick: "Bolt Rush",
        TeamUpsPassives: "Charged Gale/Burning Hurricane",
        Image: "./CharacterImages/storm.png",
        Description: "An Omega-level Mutant ability to manipulate weather patterns makes Ororo Munroe a force to be reckoned with. Rain or shine, thunder or lightning, nature itself bends to the command of the Goddess of the Storm!"
    },
    "ThePunisher": {
        Hero: "The Punisher",
        Role: "Duelist",
        Q: "Final Judgement",
        LClick: "Adjudication/Deliverance",
        LShift: "Vantage Connection",
        E: "Culling Turret",
        F: "",
        V: "",
        Space: "",
        RClick: "Scourage Grenade",
        TeamUpsPassives: "Warrior's Gaze/Inifite Punishment",
        Image: "./CharacterImages/the_punisher.png",
        Description: "Expertly wielding a full arsenal of futuristic weapons, Frank Castle is a formidable one-man army. With a steadfast resolve to deliver justice to his enemies, The Punisher won't cease in his mission until every last round is fired!"
    },
    "WinterSoldier": {
        Hero: "Winter Soldier",
        Role: "Duelist",
        Q: "Kraken Impact",
        LClick: "Roterstern",
        LShift: "Trooper's Fist",
        E: "Tainted Voltage",
        F: "",
        V: "",
        Space: "",
        RClick: "Bionic Hook",
        TeamUpsPassives: "Ceaseless Charge/Infinite Grit",
        Image: "./CharacterImages/winter_soldier.png",
        Description: "Terrifying experiments turned him into a brainwashed assassin, but now James Buchanan Bucky Barnes is in control of his own fate once again. With his enhanced mechanical arm, the Winter Soldier is primed to deliver earth-shattering blows to any foe in his path!"
    },
    "Wolverine": {
        Hero: "Wolverine",
        Role: "Duelist",
        Q: "Last Stand",
        LClick: "Savage Claw",
        LShift: "Feral Leap",
        E: "Undying Animal",
        F: "",
        V: "",
        Space: "",
        RClick: "Vicious Rampage",
        TeamUpsPassives: "Regenerative Healing Factor/Berserker Rage/Metal Cannonball",
        Image: "./CharacterImages/wolverine.png",
        Description: "Thanks to his regenerative healing factor and berserker rage, the centuries-old Logan can fight through the worst pain to go claw-to-claw with any foe. The Wolverine stands ready to shred through all obstacles in his way with his Adamantium claws."
    }
}

const vanguard = {
    "BruceBanner": {
        Hero: "Bruce Banner",
        Role: "Vanguard",
        Q: "Puny Banner",
        LClick: "Gamma Ray Gun",
        LShift: "Gamma Grenade",
        E: "",
        F: "",
        V: "",
        Space: "",
        RClick: "",
        TeamUpsPassives: "Gamma Boost",
        Image: "./CharacterImages/bruce_banner.png",
        Description: ""
    },
    "HeroHulk": {
        Hero: "Hero Hulk",
        Role: "Vanguard",
        Q: "Hulk Smash!",
        LClick: "Heavy Blow",
        LShift: "Indestructible Guard",
        E: "Radioactive Lockdown",
        F: "",
        V: "",
        Space: "Incredible Leap",
        RClick: "Gamma Burst",
        TeamUpsPassives: "Gamma Boost/ Gamma Fast Ball",
        Image: "./CharacterImages/hero_hulk.png",
        Description: "The mighty Hulk leaps into battle with unstoppable force! As a Vanguard, Hero Hulk uses his indestructible strength and powerful leaps to shield allies and smash through enemy lines. His rage is his greatest weapon, making him a true frontline powerhouse."
    },
    "MonsterHulk": {
        Hero: "Monster Hulk",
        Role: "Vanguard",
        Q: "World Breaker",
        LClick: "Heavy Blow",
        LShift: "",
        E: "Radioactive Lockdown",
        F: "",
        V: "",
        Space: "Incredible Leap",
        RClick: "Gamma Burst",
        TeamUpsPassives: "Gamma Boost/ Gamma Fast Ball",
        Image: "./CharacterImages/monster_hulk.png",
        Description: ""
    },
    "CaptainAmerica": {
        Hero: "Captain America",
        Role: "Vanguard",
        Q: "Freedom Charge",
        LClick: "Sentinel Strike",
        LShift: "Leading Dash",
        E: "Vibranium Energy Saw",
        F: "Liberty Rush",
        V: "",
        Space: "Super-soldier Slam",
        RClick: "Living Legend",
        TeamUpsPassives: "CHARGED AEGIS",
        Image: "./CharacterImages/captain_america.png",
        Description: "Enhanced by the Super-Soldier Serum, Steven 'Steve' Rogers uses his Vibranium shield and extensive combat training to confront any threat to justice. When Captain America rallies his troops, a wave of courage sweeps across the battlefield!"
    },
    "DoctorStrange": {
        Hero: "Doctor Strange",
        Role: "Vanguard",
        Q: "Eye Of Agamotto",
        LClick: "Daggers Of Denak",
        LShift: "Cloak Of Levitation",
        E: "Maelstrom Of Madness",
        F: "Pentagram Of Farallah",
        V: "",
        Space: "",
        RClick: "Shield Of The Seraphim",
        TeamUpsPassives: "Price Of Magic/GAMMA MAELSTROM",
        Image: "./CharacterImages/doctor_strange.png",
        Description: "As the Sorcerer Supreme, Doctor Stephen Strange gracefully wields ancient spells to turn the tide of even the most impossible battle. However, magic always comes at a cost, and each use of his arcane abilities gradually awakens the darkness within him."
    },
    "Groot": {
        Hero: "Groot",
        Role: "Vanguard",
        Q: "Strangling Prison",
        LClick: "Vine Strike",
        LShift: "Thornlash Wall",
        E: "Ironwood Wall",
        F: "",
        V: "Furious Flora",
        Space: "",
        RClick: "Spore Bomb",
        TeamUpsPassives: "Flora Colossus, Friendly Shoulder",
        Image: "./CharacterImages/groot.png",
        Description: "A flora colossus from Planet X, the alien known as Groot exhibits enhanced vitality and the ability to manipulate all forms of vegetation. As sturdy as a towering tree, Groot forges his own way, serving as the team's silent but reliable pathfinder."
    },
    "Magneto": {
        Hero: "Magneto",
        Role: "Vanguard",
        Q: "Meteor M",
        LClick: "Iron Volley",
        LShift: "Metallic Curtain",
        E: "Metal Bulwark",
        F: "Iron Bulwark",
        V: "",
        Space: "",
        RClick: "Mag-cannon",
        TeamUpsPassives: "Magnetic Descent/ METALLIC FUSION",
        Image: "./CharacterImages/magneto.png",
        Description: "The Master of Magnetism bends even the strongest metal to his whims, shielding his allies and striking at his foes. Whether he calls himself Max Eisenhardt, Erik Lehnsherr, or simply Magneto, the hardships this warrior has endured have made him as unbreakable as the steel he brandishes."
    },
    "PeniParker": {
        Hero: "Peni Parker",
        Role: "Vanguard",
        Q: "Spider-sweeper",
        LClick: "Cyber-web Cluster",
        LShift: "Bionic Spider-nest",
        E: "Arachno-mine",
        F: "Cyber-bond",
        V: "",
        Space: "Wall Crawl",
        RClick: "Cyber-web Snare",
        TeamUpsPassives: "Armor Explosion",
        Image: "./CharacterImages/peni_parker.png",
        Description: "Peni Parker may be young, but she bravely stands on the frontlines to protect the Web of Life and Destiny. Together, this teen prodigy and her state-of-the-art mech, the sensational SP//dr, make for the most thrilling duo on the battlefield!"
    },
    "TheThing": {
        Hero: "The Thing",
        Role: "Vanguard",
        Q: "Clobberin' Time",
        LClick: "Rocky Jab",
        LShift: "Yancy Street Charge",
        E: "Embattled Leap",
        F: "",
        V: "",
        Space: "",
        RClick: "Stone Haymaker",
        TeamUpsPassives: "Unyielding Will, Cooperative Comrades, Cosmic Fastball",
        Image: "./CharacterImages/the_thing.png",
        Description: "Benjamin J. Grimm is unquestionably the rock star of any team he's on. Always at the forefront of the fight, the Thing shields his allies with his unbreakable form, selflessly fending off any harm that comes their way."
    },
    "Thor": {
        Hero: "Thor",
        Role: "Vanguard",
        Q: "God Of Thunder",
        LClick: "Mjölnir Bash",
        LShift: "Storm Surge",
        E: "Lightning Realm",
        F: "Awakening Rune",
        V: "",
        Space: "",
        RClick: "Hammer Throw",
        TeamUpsPassives: "Thorforce, Odinson Reborn, Thunderous Deity",
        Image: "./CharacterImages/thor.png",
        Description: "The son of Odin taps into his divine power to call forth thunder and lightning, raining down relentless fury upon his enemies. With his mighty hammer Mjolnir in hand, Thor effortlessly asserts his dominance on the field of combat."
    },
    "Venom": {
        Hero: "Venom",
        Role: "Vanguard",
        Q: "Feast Of The Abyss",
        LClick: "Dark Predation",
        LShift: "Venom Swing",
        E: "Symbiotic Resilience",
        F: "Frenzied Arrival",
        V: "",
        Space: "Alien Biology",
        RClick: "Cellular Corrosion",
        TeamUpsPassives: "TOUCH OF KLYNTAR",
        Image: "./CharacterImages/venom.png",
        Description: "Using his symbiote-enhanced body as the perfect living weapon, Eddie Brock and his alien ally stand ever-ready to unleash vicious attacks upon anyone he deems an enemy. Those ensnared by Venom's tentacles have no choice but to surrender to this insatiable predator."
    }
}

// Wait until the document is fully loaded
$(document).ready(function() {
    // Listen for the "Enter" keypress in the search box
    $("#search-input").on("keydown", function(event) {
        if (event.key === "Enter") {
            // Prevent form submission
            event.preventDefault();
            searchFunction(); // Call search function on "Enter"
        }
    });
});

function searchFunction() {
    // Get the value and remove extra spaces
    var search = document.getElementById("search-input").value.trim(); 

    if (search.toLowerCase() === "character index" || search.toLowerCase() === "strategists" || search.toLowerCase() === "duelists" || search.toLowerCase() === "all heroes" || search.toLowerCase() === "all characters" || search.toLowerCase() === "all" || search.toLowerCase() === "heroes" || search.toLowerCase() === "characters") {
        // Redirect to character index
        window.location.href = "./characterIndex.html"; 
    }
    else if (search.toLowerCase() === "tier list") {
        // Redirect to tier list
        window.location.href = "./tierList.html"; 
    }
    else if (search.toLowerCase() === "team comps") {
        // Redirect to team comps
        window.location.href = "./teamComps.html";
    }
    else if (search.toLowerCase() === "home") {
        // Redirect to team comps
        window.location.href = "./mainPage.html";
    }
    else {
        // If no match, log it
        console.log("No matching page found for:", search); 
    }
}

// displays every hero in the dictionary
window.onload = function() {
    // get into heroes-container
    const container = document.getElementById("heroes-container");

    // for every strategist in the strategist dictionary
    for (const heroId in strategists) {
        if (strategists.hasOwnProperty(heroId)) {
            const hero = strategists[heroId];

            // add an image element for the hero
            const heroImage = document.createElement("img");
            heroImage.src = hero.Image;
            heroImage.alt = hero.Hero;
            heroImage.id = heroId;
            // add class to the image
            heroImage.classList.add("hero-image");
            // add one click function to the tag
            heroImage.onclick = function() { openImagePopup(heroId); };

            container.appendChild(heroImage);
        }
    }

    // for every duelist in the duelists dictionary
    for (const heroId in duelists) {
        if (duelists.hasOwnProperty(heroId)) {
            const hero = duelists[heroId];

            // add an image element for the hero
            const heroImage = document.createElement("img");
            heroImage.src = hero.Image;
            heroImage.alt = hero.Hero;
            heroImage.id = heroId;
            // add class to the image
            heroImage.classList.add("hero-image");
            // add one click function to the tag
            heroImage.onclick = function() { openImagePopup(heroId); };

            container.appendChild(heroImage);
        }
    }

    // for every vanguard in the vanguard dictionary
    for (const heroId in vanguard) {
        if (vanguard.hasOwnProperty(heroId)) {
            const hero = vanguard[heroId];

            // add an image element for the hero
            const heroImage = document.createElement("img");
            heroImage.src = hero.Image;
            heroImage.alt = hero.Hero;
            heroImage.id = heroId;
            // add class to the image
            heroImage.classList.add("hero-image");
            // add one click function to the tag
            heroImage.onclick = function() { openImagePopup(heroId); };

            container.appendChild(heroImage);
        }
    }
};

// Function to display the popup and display hero info
function openImagePopup(heroId) {
    const hero = strategists[heroId] || duelists[heroId] || vanguard[heroId];
    if (!hero) {
        alert("Hero not found!");
        return;
    }


    // Set the content inside the popup
    document.getElementById("hero-name").textContent = hero.Hero;
    document.getElementById("hero-image").src = hero.Image;
    document.getElementById("hero-description").textContent = hero.Description;
    
    const linkContainer = document.getElementById("hero-link");
    linkContainer.innerHTML = "";

    // make <a> tag
    const link = document.createElement("a");
    // set link
    link.href = "./characterIndex.html";
    // make text
    link.textContent = "More about this hero";

    linkContainer.appendChild(link);

    // Show the popup
    document.getElementById("hero-popup").style.display = "flex";
}

// Function to close the popup
function closePopup() {
    document.getElementById("hero-popup").style.display = "none";
}


function changeImage(imageSrc, title, linkHref) {
    document.getElementById('main-image').src = imageSrc;
    document.getElementById('image-title').textContent = title;
    document.getElementById('image-link').href = linkHref;
}

// Patch Carousel: Load PATCH NOTES from newsData and enable drag-to-scroll
function renderPatchCarousel() {
  const patchCarousel = document.getElementById('patch-carousel');
  if (!patchCarousel) return;
  // Filter PATCH NOTES only, most recent first
  const patches = newsData.filter(item => item.type === 'PATCH NOTES').slice(0, 10);
  patchCarousel.innerHTML = patches.map(patch => `
    <div class="patch-card" style="min-width: 320px; max-width: 340px; flex: 0 0 auto;">
      <img src="${patch.image}" alt="${patch.title}" class="patch-img">
      <div class="patch-content">
        <h4>${patch.title}</h4>
        <p class="patch-date">${patch.date}</p>
        <p class="patch-description">${patch.description}</p>
        <a href="${patch.url}" class="btn btn-sm btn-primary">View Details</a>
      </div>
    </div>
  `).join('');

  // Drag-to-scroll functionality
  let isDown = false;
  let startX;
  let scrollLeft;
  patchCarousel.addEventListener('mousedown', (e) => {
    isDown = true;
    patchCarousel.classList.add('active');
    startX = e.pageX - patchCarousel.offsetLeft;
    scrollLeft = patchCarousel.scrollLeft;
  });
  patchCarousel.addEventListener('mouseleave', () => {
    isDown = false;
    patchCarousel.classList.remove('active');
  });
  patchCarousel.addEventListener('mouseup', () => {
    isDown = false;
    patchCarousel.classList.remove('active');
  });
  patchCarousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - patchCarousel.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll-fast
    patchCarousel.scrollLeft = scrollLeft - walk;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderPatchCarousel();
});

// --- PATCH NEWS DATA (copied from news.js for main page carousel) ---
const newsData = [
    {
        version: "20250425",
        date: "April 24, 2025",
        url: "patches/20250425_patch.html",
        image: "patch_notes_images/patch_notes_20250425.jpg",
        title: "Giant-Size Brain Blast & Hero Balance Update",
        description: "New limited-time mode: Giant-Size Brain Blast! Major hero balance changes for Emma Frost, Hulk, Iron Fist, Psylocke, Star-Lord, Squirrel Girl, and Invisible Woman. UI and map fixes included.",
        type: "PATCH NOTES"
    },
    {
        version: "20250425_balance",
        date: "April 24, 2025",
        url: "patches/20250425_balance.html",
        image: "patch_notes_images/balance_20250425.jpg",
        title: "Hero Balance Adjustments",
        description: "Detailed hero balance changes for Emma Frost, Hulk, Iron Fist, Psylocke, Star-Lord, Squirrel Girl, and Invisible Woman.",
        type: "BALANCE CHANGES"
    },
    {
        version: "20250415",
        date: "April 17, 2025",
        url: "patches/20250415_patch.html",
        image: "patch_notes_images/patch_notes_20250415.jpg",
        title: "Costume Color Customization & Store Update",
        description: "Customize your hero's costume colors! New store bundles and emotes added. Minor hero adjustments.",
        type: "PATCH NOTES"
    },
    {
        version: "20250415_balance",
        date: "April 17, 2025",
        url: "patches/20250415_balance.html",
        image: "patch_notes_images/balance_20250415.jpg",
        title: "Hero Balance Adjustments",
        description: "Balance changes for Black Panther, Storm, and Doctor Strange.",
        type: "BALANCE CHANGES"
    },
    {
        version: "20250411",
        date: "April 8, 2025",
        url: "./patches/20250411_patch.html",
        image: "./patch_notes_images/patch_notes_20250411.jpg",
        title: "Emma Frost Joins & Season 2 Balance Changes",
        description: "Emma Frost is now playable! Season 2 brings balance changes to multiple heroes and new event content.",
        type: "PATCH NOTES"
    },
    {
        version: "20250411_balance",
        date: "April 8, 2025",
        url: "./patches/20250411_balance.html",
        image: "./patch_notes_images/balance_20250411.jpg",
        title: "Season 2 Hero Balance Adjustments",
        description: "Detailed balance changes for Rocket Raccoon, Groot, and Mantis.",
        type: "BALANCE CHANGES"
    },
    {
        version: "20250327",
        date: "March 27, 2025",
        url: "./patches/20250327.html",
        image: "./patch_notes_images/patch_notes_20250327.jpg",
        title: "Spring Event & Hero Adjustments",
        description: "Spring event begins! Hero adjustments for Iron Man, Groot, and Mantis. Bug fixes included.",
        type: "PATCH NOTES"
    },
    {
        version: "20250327_balance",
        date: "March 27, 2025",
        url: "./patches/20250327_balance.html",
        image: "./patch_notes_images/balance_20250327.jpg",
        title: "Hero Balance Adjustments",
        description: "Detailed balance changes for Iron Man, Groot, and Mantis.",
        type: "BALANCE CHANGES"
    },
    {
        version: "20250314",
        date: "March 14, 2025",
        url: "./patches/20250314_patch.html",
        image: "./patch_notes_images/patch_notes_20250314.jpg",
        title: "New Map: Chronal Ruins & Hero Tweaks",
        description: "Explore the new Chronal Ruins map! Minor tweaks to Black Panther, Storm, and Doctor Strange.",
        type: "PATCH NOTES"
    },
    {
        version: "20250314_balance",
        date: "March 14, 2025",
        url: "./patches/20250314_balance.html",
        image: "./patch_notes_images/balance_20250314.jpg",
        title: "Hero Balance Adjustments",
        description: "Detailed balance changes for Black Panther, Storm, and Doctor Strange.",
        type: "BALANCE CHANGES"
    },
    {
        version: "20250307",
        date: "March 7, 2025",
        url: "./patches/20250307_patch.html",
        image: "./patch_notes_images/patch_notes_20250307.jpg",
        title: "Performance Improvements & Bug Fixes",
        description: "Improved game performance and fixed bugs affecting gameplay and UI.",
        type: "PATCH NOTES"
    },
    {
        version: "20250221",
        date: "February 20, 2025",
        url: "./patches/20250221_patch.html",
        image: "./patch_notes_images/patch_notes_20250221.jpg",
        title: "Hero Balance Patch: Iron Man, Groot, Mantis",
        description: "Balance changes for Iron Man, Groot, and Mantis. Quality of life improvements.",
        type: "PATCH NOTES"
    },
    {
        version: "20250221_balance",
        date: "February 20, 2025",
        url: "./patches/20250221_balance.html",
        image: "./patch_notes_images/balance_20250221.jpg",
        title: "Hero Balance Adjustments",
        description: "Detailed balance changes for Iron Man, Groot, and Mantis.",
        type: "BALANCE CHANGES"
    },
    {
        version: "20250214",
        date: "February 13, 2025",
        url: "./patches/20250214_patch.html",
        image: "./patch_notes_images/patch_notes_20250214.jpg",
        title: "Valentine's Event & Hero Updates",
        description: "Valentine's event live! Hero updates for Black Widow and Hawkeye. New cosmetics available.",
        type: "PATCH NOTES"
    },
    {
        version: "20250214_balance",
        date: "February 13, 2025",
        url: "./patches/20250214_balance.html",
        image: "./patch_notes_images/balance_20250214.jpg",
        title: "Hero Balance Adjustments",
        description: "Detailed balance changes for Black Widow and Hawkeye.",
        type: "BALANCE CHANGES"
    },
    {
        version: "20250207",
        date: "February 6, 2025",
        url: "./patches/20250207_patch.html",
        image: "./patch_notes_images/patch_notes_20250207.jpg",
        title: "Bug Fixes & Minor Hero Changes",
        description: "Bug fixes and minor changes to Squirrel Girl and Namor.",
        type: "PATCH NOTES"
    },
    {
        version: "20250207_balance",
        date: "February 6, 2025",
        url: "./patches/20250207_balance.html",
        image: "./patch_notes_images/balance_20250207.jpg",
        title: "Hero Balance Adjustments",
        description: "Detailed balance changes for Squirrel Girl and Namor.",
        type: "BALANCE CHANGES"
    },
    {
        version: "20250122",
        date: "January 22, 2025",
        url: "./patches/20250122_patch.html",
        image: "./patch_notes_images/patch_notes_20250122.jpg",
        title: "Spring Festival Update",
        description: "Celebrate the Spring Festival! New event rewards and hero skins.",
        type: "PATCH NOTES"
    },
    {
        version: "20250122_balance",
        date: "January 22, 2025",
        url: "./patches/20250122_balance.html",
        image: "./patch_notes_images/balance_20250122.jpg",
        title: "Hero Balance Adjustments",
        description: "Detailed balance changes for Spider-Man and Doctor Strange.",
        type: "BALANCE CHANGES"
    },
    {
        version: "20250110",
        date: "January 8, 2025",
        url: "./patches/20250110_patch.html",
        image: "./patch_notes_images/patch_notes_20250110.jpg",
        title: "Empire of Eternal Night Update",
        description: "New event: Empire of Eternal Night. Balance changes and bug fixes included.",
        type: "PATCH NOTES"
    },
    {
        version: "20250110_balance",
        date: "January 8, 2025",
        url: "./patches/20250110_balance.html",
        image: "./patch_notes_images/balance_20250110.jpg",
        title: "Hero Balance Adjustments",
        description: "Detailed balance changes for Hela and Loki.",
        type: "BALANCE CHANGES"
    }
];

// Hero Card Interactions
document.addEventListener('DOMContentLoaded', function() {
  const heroCards = document.querySelectorAll('.hero-card');
  
  heroCards.forEach(card => {
    card.addEventListener('click', function() {
      const heroName = this.getAttribute('data-hero');
      // Convert hero name to the format used in your character pages
      const formattedHeroName = heroName.replace(/-/g, '_');
      window.location.href = `./characterIndex.html#${formattedHeroName}`;
    });
    
    // Add keyboard navigation
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        const heroName = this.getAttribute('data-hero');
        const formattedHeroName = heroName.replace(/-/g, '_');
        window.location.href = `./characterIndex.html#${formattedHeroName}`;
      }
    });
    
    // Make cards focusable
    card.setAttribute('tabindex', '0');
  });
});

// --- HERO VERTICAL CAROUSEL & SPOTLIGHT ---

document.addEventListener('DOMContentLoaded', function() {
  // Helper: get all heroes as array with type
  function getAllHeroes() {
    const all = [];
    for (const [id, hero] of Object.entries(strategists)) all.push({ ...hero, id });
    for (const [id, hero] of Object.entries(duelists)) all.push({ ...hero, id });
    for (const [id, hero] of Object.entries(vanguard)) all.push({ ...hero, id });
    
    // Sort heroes alphabetically by their Hero name
    return all.sort((a, b) => a.Hero.localeCompare(b.Hero));
  }

  const heroes = getAllHeroes();
  const heroOrder = heroes.map(h => h.id);
  // Adam Warlock first
  let selectedHeroId = 'AdamWarlock';

  function getBigheadImg(hero) {
    // Special case for Cloak & Dagger
    if (hero.Hero === 'Cloak & Dagger') {
      return './CharacterImages/cloak&dagger-headbig.png';
    }
    
    // Try kebab-case for bighead PNGs
    let base = hero.Hero || hero.id;
    base = base.replace(/\s+/g, '-')
               .replace(/\(|\)/g, '')
               .replace(/\./g, '')
               .replace(/'/g, '')
               .replace(/_/g, '-')
               .toLowerCase();
    return `./CharacterImages/${base}-headbig.png`;
  }
  function getMainArt(hero) {
    let base = hero.Image.replace('./CharacterImages/', '').replace('.png', '');
    return `./CharacterImages/${base}_art.png`;
  }
  function getOverlayArt(hero) {
    let base = hero.Image.replace('./CharacterImages/', '').replace('.png', '');
    return `./CharacterImages/${base}_art_2.png`;
  }
  function getDetailsLink(hero) {
    // Special cases for certain heroes
    if (hero.id === 'JeffTheLandShark') return './Detail Heroes Abilities/jeff_the_land_shark.html';
    if (hero.id === 'Spider-man') return './Detail Heroes Abilities/spider_man.html';
    if (hero.id === 'Star-Lord') return './Detail Heroes Abilities/star_lord.html';
    if (hero.id === 'ThePunisher') return './Detail Heroes Abilities/the_punisher.html';
    if (hero.id === 'TheThing') return './Detail Heroes Abilities/the_thing.html';
    // Convert PascalCase to snake_case for others
    const snakeCaseId = hero.id
      .replace(/([A-Z])/g, '_$1')  // Add underscore before capital letters
      .toLowerCase()                // Convert to lowercase
      .replace(/^_/, '')           // Remove leading underscore if any
      .replace(/&/g, '_and_')      // Replace & with _and_
      .replace(/the_/g, '')        // Remove "the_" prefix
      .replace(/_+/g, '_');        // Replace multiple underscores with single underscore
    return encodeURI(`./Detail Heroes Abilities/${snakeCaseId}.html`);
  }

  function renderCarousel(selectedId) {
    const container = document.getElementById('hero-vertical-carousel');
    container.innerHTML = '';
    container.style.overflowY = 'auto';
    container.style.scrollbarWidth = 'thin';
    container.style.scrollbarColor = '#666 #222';
    container.style.paddingRight = '8px';
    
    // Add custom scrollbar styles
    const style = document.createElement('style');
    style.textContent = `
      #hero-vertical-carousel::-webkit-scrollbar {
        width: 8px;
      }
      #hero-vertical-carousel::-webkit-scrollbar-track {
        background: #222;
        border-radius: 4px;
      }
      #hero-vertical-carousel::-webkit-scrollbar-thumb {
        background-color: #666;
        border-radius: 4px;
      }
      #hero-vertical-carousel::-webkit-scrollbar-thumb:hover {
        background-color: #888;
      }
    `;
    document.head.appendChild(style);

    heroes.forEach(hero => {
      // Skip these heroes in the carousel
      if (hero.id === 'Magik(Ult)' || hero.id === 'BruceBanner' || hero.id === 'MonsterHulk') {
        return;
      }
      
      const icon = document.createElement('img');
      icon.src = getBigheadImg(hero);
      icon.alt = hero.Hero;
      icon.className = 'hero-carousel-icon mb-3' + (hero.id === selectedId ? ' selected' : '');
      icon.style.cursor = 'pointer';
      icon.style.width = '72px';
      icon.style.height = '72px';
      icon.style.objectFit = 'cover';
      icon.style.border = '2px solid #333';
      icon.style.borderRadius = '8px';
      icon.style.padding = '4px';
      icon.style.backgroundColor = '#222';
      icon.style.transition = 'all 0.2s ease';
      icon.onmouseover = () => {
        icon.style.borderColor = '#ffd700';
        icon.style.transform = 'scale(1.05)';
      };
      icon.onmouseout = () => {
        icon.style.borderColor = '#333';
        icon.style.transform = 'scale(1)';
      };
      icon.onclick = () => {
        selectedHeroId = hero.id;
        renderCarousel(selectedHeroId);
        renderSpotlight(selectedHeroId);
      };
      container.appendChild(icon);
    });
  }

  function renderSpotlight(heroId) {
    const hero = heroes.find(h => h.id === heroId);
    if (!hero) return;
    const mainArt = getMainArt(hero);
    const overlayArt = getOverlayArt(hero);
    const detailsLink = getDetailsLink(hero);
    const spotlight = document.getElementById('hero-spotlight-card');
    spotlight.innerHTML = `
      <div class="hero-spotlight-card p-4 position-relative" style="background:#181818;border-radius:16px;box-shadow:0 4px 24px #0008;min-height:340px;overflow:hidden;">
        <div style="position:relative;min-height:260px;display:flex;align-items:flex-end;">
          <div style="position:relative;width:320px;height:320px;margin-left:-80px;margin-bottom:-40px;">
            <img src="${mainArt}" alt="${hero.Hero}" style="height:320px;position:absolute;left:0;bottom:0;z-index:2;">
            <img src="${overlayArt}" alt="${hero.Hero} Overlay" style="height:320px;position:absolute;left:40px;bottom:0;z-index:1;opacity:0.35;filter:blur(1px);">
          </div>
          <div style="flex:1;padding-left:80px;padding-right:40px;position:relative;z-index:3;">
            <h2 class="marvel-font" style="color:#ffd700;margin-bottom:16px;font-size:2.5rem;">${hero.Hero}</h2>
            <p style="color:#fff;max-width:600px;margin-bottom:24px;font-size:1.2rem;line-height:1.5;">${hero.Description}</p>
            <a href="${detailsLink}" class="btn btn-primary mt-2" style="display:inline-block;padding:12px 24px;z-index:4;position:relative;font-size:1.1rem;">View Details</a>
          </div>
        </div>
      </div>
    `;
  }

  // Only run if the section exists
  if (document.getElementById('hero-vertical-carousel-section')) {
    // Remove any previous header if present
    const section = document.getElementById('hero-vertical-carousel-section');
    const oldHeader = section.querySelector('.section-header-container-dark');
    if (oldHeader) oldHeader.remove();
    // Create the matching header
    const headerContainer = document.createElement('div');
    headerContainer.className = 'section-header-container-dark';
    const header = document.createElement('h2');
    header.className = 'text-white marvel-font mb-4';
    header.textContent = 'Learn About Your Favorite Heroes';
    headerContainer.appendChild(header);
    section.prepend(headerContainer);

    renderCarousel(selectedHeroId);
    renderSpotlight(selectedHeroId);
  }
});
  
