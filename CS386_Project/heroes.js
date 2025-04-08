// Hero data
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
        Image: "./CharacterImages/cloak&dagger.png",
        Forms: {
            "Cloak": {
                Q: "Eternal Bond",
                LClick: "DARKFORCE CLOAK",
                LShift: "Shadow's Embrace",
                E: "Terror Cape",
                F: "",
                V: "",
                Space: "",
                RClick: "Dark Teleportation",
                TeamUpsPassives: "FROM SHADOW TO LIGHT",
                Image: "./CharacterImages/cloak.png",
                Description: "Tyrone Johnson wields the power of darkness, able to teleport through shadows and create portals to other dimensions. As Cloak, he serves as the perfect complement to Dagger's light-based abilities."
            },
            "Dagger": {
                Q: "Eternal Bond",
                LClick: "Lightforce Dagger",
                LShift: "Light's Embrace",
                E: "Veil of LightForce",
                F: "",
                V: "",
                Space: "",
                RClick: "Dagger Storm",
                TeamUpsPassives: "FROM SHADOW TO LIGHT",
                Image: "./CharacterImages/dagger.png",
                Description: "Tandy Bowen channels the power of light, creating daggers of pure energy and healing allies with her radiant touch. As Dagger, she brings hope and healing to the battlefield."
            }
        },
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
};

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
        Image: "./CharacterImages/magik.png",
        Description: "Trained in the dark arts and wielding her mighty Soulsword, Magik leaps through portals to navigate the arena with ease. Once Illyana transforms into the demonic Darkchild, all who dare stand against her will fall before her merciless blade.",
        Forms: {
            "Magik": {
                Q: "Darkchild",
                LClick: "Soulsword/EkdritchWhirl",
                LShift: "Stepping Discs",
                E: "Umbral Incursion",
                F: "",
                V: "",
                Space: "",
                RClick: "Magik Slash/Demon's Rage",
                TeamUpsPassives: "Limbo's Might/Disc Master",
                Image: "./CharacterImages/magik-headbig.png",
                Description: "Trained in the dark arts and wielding her mighty Soulsword, Magik leaps through portals to navigate the arena with ease. Once Illyana transforms into the demonic Darkchild, all who dare stand against her will fall before her merciless blade."
            },
            "MagikUlt": {
                Q: "Darkchild",
                LClick: "Soulsword/EkdritchWhirl",
                LShift: "Stepping Discs",
                E: "Umbral Incursion",
                F: "",
                V: "",
                Space: "",
                RClick: "Magik Slash/Demon's Rage",
                TeamUpsPassives: "Limbo's Might/Disc Master",
                Image: "./CharacterImages/magik_ult.png",
                Description: "In her ultimate form, Magik's demonic powers reach their peak. The Darkchild's abilities are enhanced, making her an even more formidable force on the battlefield."
            }
        }
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
        Role: "Vanguard",
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
};

const vanguards = {
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
    "HeroHulk": {
        Hero: "Hero Hulk",
        Role: "Vanguard",
        Image: "./CharacterImages/hero_hulk.png",
        Description: "The heroic Hulk uses his incredible strength and durability to protect his allies. With his gamma-enhanced abilities, he can leap great distances and deliver devastating blows to his enemies.",
        Forms: {
            "BruceBanner": {
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
                Description: "Bruce Banner, the brilliant scientist, uses his intellect and gamma-based technology to support his team. Though physically weak, his scientific mind makes him a valuable asset on the battlefield."
            },
            "HeroHulk": {
                Q: "Hulk Smash!",
                LClick: "Heavy Blow",
                LShift: "Indestructible Guard",
                E: "Radioactive Lockdown",
                F: "",
                V: "",
                Space: "Incredible Leap",
                RClick: "Gamma Burst",
                TeamUpsPassives: "Gamma Boost/ Gamma Fast Ball",
                Image: "./CharacterImages/hero_hulk2.png",
                Description: "The heroic Hulk uses his incredible strength and durability to protect his allies. With his gamma-enhanced abilities, he can leap great distances and deliver devastating blows to his enemies."
            },
            "MonsterHulk": {
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
                Description: "In his most powerful form, the Monster Hulk becomes an unstoppable force of destruction. His rage knows no bounds, and his strength is unmatched on the battlefield."
            }
        }
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
    "MisterFantastic": {
        Hero: "Mister Fantastic",
        Role: "Vanguard",
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

// Function to open the hero popup
function openImagePopup(hero) {
    const popup = document.getElementById('hero-popup');
    const popupImage = document.getElementById('popup-hero-image');
    const popupName = document.getElementById('popup-hero-name');
    const popupRole = document.getElementById('popup-hero-role');
    const popupDescription = document.getElementById('popup-hero-description');
    const popupAbilities = document.getElementById('popup-hero-abilities');
    const popupTeamups = document.getElementById('popup-hero-teamups');
    const popupForms = document.getElementById('popup-hero-forms');

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
        popupTeamups.textContent = hero.TeamUpsPassives;

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

    // Update popup content
    popupImage.src = formData.Image;
    popupName.textContent = `${hero.Hero} (${formName})`;
    popupRole.textContent = hero.Role;
    popupDescription.textContent = formData.Description;
    popupTeamups.textContent = formData.TeamUpsPassives;

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