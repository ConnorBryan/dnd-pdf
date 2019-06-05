module.exports = {
  characters: [
    {
      name: "S'zrathis-Dren",
      notes: "Ayy",
      basics: {
        class: "Monk",
        level: "4",
        background: "Outlander",
        player: "Dave",
        race: "Lizardfolk",
        alignment: "Neutral",
        experiencePoints: "3200"
      },
      abilityScores: {
        STR: "12",
        DEX: "16",
        CON: "16",
        INT: "10",
        WIS: "15",
        CHA: "8"
      },
      inspiration: true,
      condition: "Normal",
      proficiencyBonus: 3,
      savingThrows: {
        STR: {
          proficient: true,
          value: 1
        },
        DEX: {
          proficient: true,
          value: 4
        },
        CON: {
          proficient: false,
          value: 1
        },
        INT: {
          proficient: false,
          value: "0"
        },
        WIS: {
          proficient: false,
          value: "2"
        },
        CHA: {
          proficient: false,
          value: "-1"
        }
      },
      skills: {
        acrobatics: {
          proficient: true,
          value: "5"
        },
        animalHandling: {
          proficient: false,
          value: "2"
        },
        arcana: {
          proficient: false,
          value: "0"
        },
        athletics: {
          proficient: false,
          value: 1
        },
        deception: {
          proficient: false,
          value: "-1"
        },
        history: {
          proficient: false,
          value: "0"
        },
        insight: {
          proficient: false,
          value: "2"
        },
        intimidation: {
          proficient: false,
          value: "-1"
        },
        investigation: {
          proficient: false,
          value: "0"
        },
        medicine: {
          proficient: true,
          value: "4"
        },
        nature: {
          proficient: true,
          value: 1
        },
        perception: {
          proficient: true,
          value: "4"
        },
        performance: {
          proficient: false,
          value: "-1"
        },
        persuasion: {
          proficient: false,
          value: "-1"
        },
        religion: {
          proficient: true,
          value: "2"
        },
        sleightOfHand: {
          proficient: false,
          value: "3"
        },
        stealth: {
          proficient: true,
          value: "5"
        },
        survival: {
          proficient: true,
          value: "4"
        }
      },
      passivePerception: "14",
      proficiencies: {
        languages: ["Common", "Draconic", "Primordial", "", "", ""],
        tools: ["Herbalism Kit", "Leatherworker's Tools", "", "", "", ""],
        instruments: ["", "", "", "", "", ""],
        weapons: ["Shortsword", "Simple Weapons", "", "", "", ""],
        armor: ["", "", "", "", "", ""]
      },
      armorClass: 16,
      initiative: "3",
      speed: "40",
      hitPoints: {
        maximum: "35",
        current: "35",
        temporary: 0
      },
      hitDice: {
        total: 5,
        die: "1d8",
        current: "4",
        maximum: "4"
      },
      deathSaves: {
        successes: "0",
        failures: "0"
      },
      attacksAndSpellcasting: [
        {
          name: "Nunchaku",
          bonus: "5",
          damage: "1d4+3 bldg."
        },
        {
          name: "Shuriken",
          bonus: "5",
          damage: "1d4+3 prc."
        },
        {
          name: "Unarmed",
          bonus: "5",
          damage: "1d4+3 bldg."
        }
      ],
      resource: {
        name: "Ki",
        maximum: "4",
        current: "4"
      },
      gold: "15",
      equipment: [
        {
          name: "Brass Bell",
          quantity: "1"
        },
        {
          name: "Map Case",
          quantity: "1"
        },
        {
          name: "Healer's Kit",
          quantity: "1"
        },
        {
          name: "Rations",
          quantity: "10"
        },
        {
          name: "Black Uwagi",
          quantity: "1"
        },
        {
          name: "Torch",
          quantity: "10"
        },
        {
          name: "Tinderbox",
          quantity: "1"
        },
        {
          name: "Waterskin",
          quantity: "2"
        },
        {
          name: "Leatherworker's Tools",
          quantity: "1"
        },
        {
          name: "Woodcarver's Tools",
          quantity: "1"
        },
        {
          name: "Herbalism Kit",
          quantity: "1"
        },
        {
          name: "Playing Cards",
          quantity: "1"
        },
        {
          name: "Incense",
          quantity: "1"
        },
        {
          name: "Bowl",
          quantity: "1"
        },
        {
          name: "",
          quantity: ""
        }
      ],
      personalityTraits: ["-", "-"],
      ideals: ["-", "-"],
      bonds: ["-", "-"],
      flaws: ["-", "B"],
      featuresAndTraits: {
        race: ["A", "B", "", "", ""],
        class: ["C", "D", "E", "", "", "", "", "", "", ""],
        background: ["F", "", ""],
        feat: ["G", "H", "", "", ""],
        item: ["I", "", "", "", ""]
      },
      spellcastingClass: "Ranger",
      spellcastingAbility: "WIS",
      spellSaveDc: 13,
      spellAttackBonus: 5,
      spellsKnown: {
        "1": {
          slots: {
            maximum: 2,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "2": {
          slots: {
            maximum: 1,
            expended: 1
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "3": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "4": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "5": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "6": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "7": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "8": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "9": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        cantrips: ["", "", "", "", "", "", "", ""]
      }
    },
    {
      name: "Albdorphis the Wyrd",
      notes: "",
      basics: {
        class: "Warlock",
        level: "3",
        background: "Outlander",
        player: "Joel",
        race: "Tiefling",
        alignment: "Chaotic Good",
        experiencePoints: "1870"
      },
      abilityScores: {
        STR: "8",
        DEX: "12",
        CON: "14",
        INT: "11",
        WIS: "13",
        CHA: "17"
      },
      inspiration: true,
      condition: "Normal",
      proficiencyBonus: "2",
      savingThrows: {
        STR: {
          proficient: false,
          value: "-1"
        },
        DEX: {
          proficient: false,
          value: 1
        },
        CON: {
          proficient: false,
          value: "2"
        },
        INT: {
          proficient: false,
          value: "0"
        },
        WIS: {
          proficient: true,
          value: "3"
        },
        CHA: {
          proficient: true,
          value: "5"
        }
      },
      skills: {
        acrobatics: {
          proficient: false,
          value: 1
        },
        animalHandling: {
          proficient: false,
          value: 1
        },
        arcana: {
          proficient: false,
          value: "0"
        },
        athletics: {
          proficient: true,
          value: 1
        },
        deception: {
          proficient: true,
          value: "5"
        },
        history: {
          proficient: false,
          value: "0"
        },
        insight: {
          proficient: false,
          value: 1
        },
        intimidation: {
          proficient: true,
          value: "5"
        },
        investigation: {
          proficient: false,
          value: "0"
        },
        medicine: {
          proficient: false,
          value: "1"
        },
        nature: {
          proficient: true,
          value: 1
        },
        perception: {
          proficient: false,
          value: "1"
        },
        performance: {
          proficient: false,
          value: "3"
        },
        persuasion: {
          proficient: false,
          value: "3"
        },
        religion: {
          proficient: false,
          value: "0"
        },
        sleightOfHand: {
          proficient: false,
          value: "1"
        },
        stealth: {
          proficient: false,
          value: 1
        },
        survival: {
          proficient: true,
          value: "3"
        }
      },
      passivePerception: 12,
      proficiencies: {
        languages: ["Common", "Infernal", "Sylvan", "", "", ""],
        tools: ["", "", "", "", "", ""],
        instruments: ["", "", "", "", "", ""],
        weapons: ["", "", "", "", "", ""],
        armor: ["", "", "", "", "", ""]
      },
      armorClass: "11",
      initiative: "1",
      speed: "30",
      hitPoints: {
        maximum: "24",
        current: "24",
        temporary: 0
      },
      hitDice: {
        total: 5,
        die: "1d8",
        current: "3",
        maximum: "3"
      },
      deathSaves: {
        successes: "0",
        failures: "0"
      },
      attacksAndSpellcasting: [
        {
          name: "Eldritch Blast",
          bonus: "6",
          damage: "1d10+3 frc."
        },
        {
          name: "Quarterstaff",
          bonus: "-1",
          damage: "1d6-1 bldg."
        },
        {
          name: "",
          bonus: "",
          damage: ""
        }
      ],
      resource: {
        name: "",
        maximum: 0,
        current: 0
      },
      gold: "89",
      equipment: [
        {
          name: "Torch",
          quantity: 10
        },
        {
          name: "Flame Cypher",
          quantity: "1"
        },
        {
          name: "Arcane Focus (staff)",
          quantity: "1"
        },
        {
          name: "Dungeoneering Pack",
          quantity: "1"
        },
        {
          name: "",
          quantity: ""
        },
        {
          name: "",
          quantity: ""
        },
        {
          name: "",
          quantity: ""
        },
        {
          name: "",
          quantity: ""
        },
        {
          name: "",
          quantity: ""
        },
        {
          name: "",
          quantity: ""
        },
        {
          name: "",
          quantity: ""
        },
        {
          name: "",
          quantity: ""
        },
        {
          name: "",
          quantity: ""
        },
        {
          name: "",
          quantity: ""
        },
        {
          name: "",
          quantity: ""
        }
      ],
      personalityTraits: ["Enjoys the fey.", "Hates to bathe."],
      ideals: ["Follows a Satyr prince.", "Enjoys helping others."],
      bonds: ["Fey sprite.", "  "],
      flaws: ["Gambling addiction.", "B"],
      featuresAndTraits: {
        race: ["A", "B"],
        class: ["C", "D", "E"],
        background: ["F"],
        feat: ["G", "H"],
        item: ["I"]
      },
      spellcastingClass: "Warlock",
      spellcastingAbility: "CHA",
      spellSaveDc: 13,
      spellAttackBonus: 5,
      spellsKnown: {
        "1": {
          slots: {
            maximum: 2,
            expended: 0
          },
          spells: [
            {
              name: "Faerie Fire",
              prepared: true
            },
            {
              name: "Charm Person",
              prepared: true
            },
            {
              name: "Invisibility",
              prepared: true
            },
            {
              name: "Sleep",
              prepared: true
            },
            {
              name: "Find Familiar",
              prepared: true
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ],
          maximum: "0",
          expended: "0"
        },
        "2": {
          slots: {
            maximum: 1,
            expended: 1
          },
          spells: [
            {
              name: "Mirror Image",
              prepared: true
            },
            {
              name: "Misty Step",
              prepared: true
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ],
          maximum: "2",
          expended: "0"
        },
        "3": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "4": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "5": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "6": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "7": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "8": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "9": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        cantrips: [
          "Minor Illusion",
          "Hellish Rebuke",
          "Prestidigitation",
          "",
          "",
          "",
          "",
          ""
        ]
      }
    },
    {
      name: "Thia Ilfakur",
      notes: "Pakita 14/20",
      basics: {
        class: "Ranger",
        level: 6,
        background: "Outlander",
        player: "Elena",
        race: "Wood Elf",
        alignment: "Neutral",
        experiencePoints: 15955
      },
      abilityScores: {
        STR: 10,
        DEX: 17,
        CON: 13,
        INT: 12,
        WIS: 15,
        CHA: 8
      },
      inspiration: true,
      condition: "Normal",
      proficiencyBonus: 3,
      savingThrows: {
        STR: {
          proficient: true,
          value: 3
        },
        DEX: {
          proficient: true,
          value: 6
        },
        CON: {
          proficient: false,
          value: 1
        },
        INT: {
          proficient: false,
          value: 1
        },
        WIS: {
          proficient: false,
          value: 2
        },
        CHA: {
          proficient: false,
          value: -1
        }
      },
      skills: {
        acrobatics: {
          proficient: false,
          value: 3
        },
        animalHandling: {
          proficient: false,
          value: 2
        },
        arcana: {
          proficient: false,
          value: 1
        },
        athletics: {
          proficient: true,
          value: 3
        },
        deception: {
          proficient: false,
          value: -1
        },
        history: {
          proficient: false,
          value: 1
        },
        insight: {
          proficient: true,
          value: 5
        },
        intimidation: {
          proficient: false,
          value: -1
        },
        investigation: {
          proficient: false,
          value: 2
        },
        medicine: {
          proficient: false,
          value: 2
        },
        nature: {
          proficient: true,
          value: 4
        },
        perception: {
          proficient: true,
          value: 5
        },
        performance: {
          proficient: false,
          value: -1
        },
        persuasion: {
          proficient: false,
          value: -1
        },
        religion: {
          proficient: false,
          value: 1
        },
        sleightOfHand: {
          proficient: false,
          value: "1"
        },
        stealth: {
          proficient: false,
          value: 3
        },
        survival: {
          proficient: true,
          value: 5
        },
        sleoghtOfHand: {
          value: 3
        }
      },
      passivePerception: 12,
      proficiencies: {
        languages: ["Common", "Elvish", "Draconic", "", "", ""],
        tools: ["", "", "", "", "", ""],
        instruments: ["Viola", "", "", "", "", ""],
        weapons: ["Simple", "Martial", "Bows", "XBows", "", ""],
        armor: ["Light", "Medium", "Shields", "", "", ""]
      },
      armorClass: 17,
      initiative: 3,
      speed: 35,
      hitPoints: {
        maximum: 42,
        current: 40,
        temporary: 0
      },
      hitDice: {
        total: 6,
        die: "1d10",
        current: 5,
        maximum: "3"
      },
      deathSaves: {
        successes: "0",
        failures: "0"
      },
      attacksAndSpellcasting: [
        {
          name: "Heavy XBow",
          bonus: 8,
          damage: "1d10+3 prc."
        },
        {
          name: "Eagle Talons",
          bonus: 8,
          damage: "1d4+6 prc."
        },
        {
          name: "Hand-Axe",
          bonus: 3,
          damage: "1d6 sls."
        }
      ],
      resource: {
        name: "",
        maximum: "",
        current: ""
      },
      gold: 400,
      equipment: [
        {
          name: "Scale Mail",
          quantity: 1
        },
        {
          name: "Javelin",
          quantity: "1"
        },
        {
          name: "Dungeoneer's Pack",
          quantity: "1"
        },
        {
          name: "Staff",
          quantity: "1"
        },
        {
          name: "Hunting Trap",
          quantity: 1
        },
        {
          name: "Animal Trophy",
          quantity: 1
        },
        {
          name: "Traveler's Clothes",
          quantity: 1
        },
        {
          name: "Potion of Healing",
          quantity: 4
        },
        {
          name: "Oil (flask)",
          quantity: 5
        },
        {
          name: "Acid (vial)",
          quantity: 3
        },
        {
          name: "Violin",
          quantity: 1
        },
        {
          name: "",
          quantity: ""
        },
        {
          name: "",
          quantity: ""
        },
        {
          name: "",
          quantity: ""
        },
        {
          name: "",
          quantity: ""
        }
      ],
      personalityTraits: ["", ""],
      ideals: ["", ""],
      bonds: ["", "  "],
      flaws: ["", ""],
      featuresAndTraits: {
        race: [
          "Darkvision - 60'",
          "Keen Senses",
          "Fey Ancestry",
          "Trance",
          "Mask of the Wild"
        ],
        class: [
          "Archery Fighting Style",
          "Beastmaster: Eagle",
          "Primeval Awareness",
          "Extra Attack",
          "Favored Terrain: Forest",
          "Favored Enemy: Hob/goblin"
        ],
        background: ["Wanderer"],
        feat: ["Crossbow Expert", ""],
        item: [""]
      },
      spellcastingClass: "Ranger",
      spellcastingAbility: "WIS",
      spellSaveDc: "5",
      spellAttackBonus: "13",
      spellsKnown: {
        "1": {
          slots: {
            maximum: 4,
            expended: 0
          },
          spells: [
            {
              name: "Cure Wounds",
              prepared: true
            },
            {
              name: "Speak with Animals",
              prepared: true
            },
            {
              name: "Detect Poison & Disease",
              prepared: true
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ],
          maximum: "0",
          expended: "0"
        },
        "2": {
          slots: {
            maximum: 2,
            expended: 0
          },
          spells: [
            {
              name: "Lesser Restoration",
              prepared: true
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ],
          maximum: "2",
          expended: "0"
        },
        "3": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "4": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "5": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "6": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "7": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "8": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "9": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        cantrips: ["", "", "", "", "", "", "", ""]
      }
    },
    {
      name: "Aelar",
      notes: "",
      basics: {
        class: "Monk",
        level: 6,
        background: "Urchin",
        player: "Seth",
        race: "Wood Elf",
        alignment: "Lawful Neutral",
        experiencePoints: 15955
      },
      abilityScores: {
        STR: 12,
        DEX: 19,
        CON: 13,
        INT: 10,
        WIS: 15,
        CHA: 8
      },
      inspiration: false,
      condition: "Normal",
      proficiencyBonus: 3,
      savingThrows: {
        STR: {
          proficient: true,
          value: 1
        },
        DEX: {
          proficient: true,
          value: 4
        },
        CON: {
          proficient: false,
          value: 1
        },
        INT: {
          proficient: false,
          value: "0"
        },
        WIS: {
          proficient: false,
          value: 2
        },
        CHA: {
          proficient: false,
          value: -1
        }
      },
      skills: {
        acrobatics: {
          proficient: true,
          value: 4
        },
        animalHandling: {
          proficient: false,
          value: 2
        },
        arcana: {
          proficient: false,
          value: "0"
        },
        athletics: {
          proficient: true,
          value: 1
        },
        deception: {
          proficient: false,
          value: -1
        },
        history: {
          proficient: false,
          value: "0"
        },
        insight: {
          proficient: false,
          value: 2
        },
        intimidation: {
          proficient: false,
          value: -1
        },
        investigation: {
          proficient: false,
          value: "0"
        },
        medicine: {
          proficient: false,
          value: 2
        },
        nature: {
          proficient: false,
          value: 0
        },
        perception: {
          proficient: true,
          value: 2
        },
        performance: {
          proficient: false,
          value: -1
        },
        persuasion: {
          proficient: false,
          value: -1
        },
        religion: {
          proficient: false,
          value: "0"
        },
        sleightOfHand: {
          proficient: true,
          value: 4
        },
        stealth: {
          proficient: true,
          value: 4
        },
        survival: {
          proficient: false,
          value: 2
        },
        sleoghtOfHand: {
          proficient: true
        }
      },
      passivePerception: 12,
      proficiencies: {
        languages: ["Common", "Elvish", "", "", "", ""],
        tools: ["Calligrapher's Tools", "", "", "", "", ""],
        instruments: ["", "", "", "", "", ""],
        weapons: [
          "Simple",
          "Short Swords",
          "Long Swords",
          "Shortbow",
          "Longbow",
          ""
        ],
        armor: ["", "", "", "", "", ""]
      },
      armorClass: 16,
      initiative: 4,
      speed: 50,
      hitPoints: {
        maximum: 39,
        current: 22,
        temporary: 0
      },
      hitDice: {
        total: 6,
        die: "1d8",
        current: 4,
        maximum: "3"
      },
      deathSaves: {
        successes: 0,
        failures: "0"
      },
      attacksAndSpellcasting: [
        {
          name: "Quarter Staff",
          bonus: 7,
          damage: "1d8+4 bld."
        },
        {
          name: "Shortbow",
          bonus: 7,
          damage: "1d6+4 prc."
        },
        {
          name: "Martial Arts",
          bonus: 7,
          damage: "1d6+4 bld."
        }
      ],
      resource: {
        name: "Ki",
        maximum: 6,
        current: 5
      },
      gold: 600,
      equipment: [
        {
          name: "Small Knife",
          quantity: 1
        },
        {
          name: "Pan Flute",
          quantity: "1"
        },
        {
          name: "Calligrapher's Tools",
          quantity: "1"
        },
        {
          name: "Explorer's Pack",
          quantity: "1"
        },
        {
          name: "Potion of Healing",
          quantity: 3
        },
        {
          name: "Oil (flask)",
          quantity: 10
        },
        {
          name: "Acid (vial)",
          quantity: 2
        },
        {
          name: "",
          quantity: ""
        },
        {
          name: "",
          quantity: ""
        },
        {
          name: "",
          quantity: ""
        },
        {
          name: "",
          quantity: ""
        },
        {
          name: "",
          quantity: ""
        },
        {
          name: "",
          quantity: ""
        },
        {
          name: "",
          quantity: ""
        },
        {
          name: "",
          quantity: ""
        }
      ],
      personalityTraits: ["Squeeze into small places.", ""],
      ideals: ["Change.", ""],
      bonds: ["Town.", "  "],
      flaws: ["Kleptomania.", ""],
      featuresAndTraits: {
        race: [
          "Darkvision - 60'",
          "Fey Ancestry",
          "Trance",
          "Mask of the Wild",
          "Fleet of Foot"
        ],
        class: [
          "Martial Arts",
          "Ki",
          "Unarmored Movement",
          "Monastic Tradition: <which>",
          "Slow Fall",
          "Ki-Empowered Strikes",
          "Shadow Step"
        ],
        background: ["City Secrets"],
        feat: ["", ""],
        item: [""]
      },
      spellcastingClass: "",
      spellcastingAbility: "",
      spellSaveDc: "",
      spellAttackBonus: "",
      spellsKnown: {
        "1": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ],
          maximum: "0",
          expended: "0"
        },
        "2": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ],
          maximum: "2",
          expended: "0"
        },
        "3": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "4": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "5": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "6": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "7": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "8": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "9": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        cantrips: ["", "", "", "", "", "", "", ""]
      }
    },
    {
      name: "Legolas",
      notes: "Bound w/ Light XBow\nGroup Inventory: 1535GP",
      basics: {
        class: "Fighter",
        level: 6,
        background: "Outlander",
        player: "Jared",
        race: "Wood Elf",
        alignment: "Neutral",
        experiencePoints: 15955
      },
      abilityScores: {
        STR: "8",
        DEX: 16,
        CON: 13,
        INT: 15,
        WIS: 13,
        CHA: 10
      },
      inspiration: true,
      condition: "Normal",
      proficiencyBonus: 3,
      savingThrows: {
        STR: {
          proficient: true,
          value: 2
        },
        DEX: {
          proficient: false,
          value: 3
        },
        CON: {
          proficient: true,
          value: 4
        },
        INT: {
          proficient: false,
          value: 2
        },
        WIS: {
          proficient: true,
          value: 2
        },
        CHA: {
          proficient: true,
          value: 0
        }
      },
      skills: {
        acrobatics: {
          proficient: true,
          value: 6
        },
        animalHandling: {
          proficient: false,
          value: 1
        },
        arcana: {
          proficient: false,
          value: 2
        },
        athletics: {
          proficient: true,
          value: 2
        },
        deception: {
          proficient: false,
          value: 0
        },
        history: {
          proficient: false,
          value: 2
        },
        insight: {
          proficient: true,
          value: 4
        },
        intimidation: {
          proficient: false,
          value: 0
        },
        investigation: {
          proficient: false,
          value: 2
        },
        medicine: {
          proficient: false,
          value: "1"
        },
        nature: {
          proficient: false,
          value: 2
        },
        perception: {
          proficient: true,
          value: 4
        },
        performance: {
          proficient: false,
          value: 0
        },
        persuasion: {
          proficient: false,
          value: 0
        },
        religion: {
          proficient: false,
          value: 2
        },
        sleightOfHand: {
          proficient: false,
          value: 3
        },
        stealth: {
          proficient: false,
          value: 3
        },
        survival: {
          proficient: true,
          value: 4
        }
      },
      passivePerception: 14,
      proficiencies: {
        languages: ["Common", "Dwarvish", "Elvish", "", "", ""],
        tools: ["", "", "", "", "", ""],
        instruments: ["Pan Flute", "", "", "", "", ""],
        weapons: ["Simple", "Martial", "", "", "", ""],
        armor: ["Light", "Medium", "Heavy", "Shields", "", ""]
      },
      armorClass: 18,
      initiative: 3,
      speed: 35,
      hitPoints: {
        maximum: 46,
        current: 20,
        temporary: 0
      },
      hitDice: {
        total: 6,
        die: "1d10",
        current: 4,
        maximum: "3"
      },
      deathSaves: {
        successes: "0",
        failures: "0"
      },
      attacksAndSpellcasting: [
        {
          name: "Hand XBow",
          bonus: 8,
          damage: "1d6+3 prc."
        },
        {
          name: "Scimitar",
          bonus: 6,
          damage: "1d6+3 sls."
        },
        {
          name: "Firebolt",
          bonus: 5,
          damage: "2d10 fire"
        }
      ],
      resource: {
        name: "Action Surge",
        maximum: 1,
        current: 0
      },
      gold: 400,
      equipment: [
        {
          name: "Chain Mail",
          quantity: 1
        },
        {
          name: "Shield",
          quantity: "1"
        },
        {
          name: "Staff",
          quantity: "1"
        },
        {
          name: "Hunting Trap",
          quantity: "1"
        },
        {
          name: "Animal Trophy",
          quantity: 1
        },
        {
          name: "Bag of Holding",
          quantity: 1
        },
        {
          name: "Potion of Healing",
          quantity: 4
        },
        {
          name: "Acid (vial)",
          quantity: 2
        },
        {
          name: "Oil (flask)",
          quantity: 6
        },
        {
          name: "Grappling Hook",
          quantity: 1
        },
        {
          name: "Dungeoneer's Pack",
          quantity: 1
        },
        {
          name: "Disguise Kit",
          quantity: 1
        },
        {
          name: "",
          quantity: ""
        },
        {
          name: "",
          quantity: ""
        },
        {
          name: "",
          quantity: ""
        }
      ],
      personalityTraits: ["", ""],
      ideals: ["", ""],
      bonds: ["", "  "],
      flaws: ["", ""],
      featuresAndTraits: {
        race: [
          "Darkvision - 60'",
          "Fey Ancestry",
          "Trance",
          "Mask of the Wild",
          "Fleet of Foot"
        ],
        class: [
          "Fighting Style: Archery",
          "Second Wind 1/1",
          "Martial Archetype: Eldritch Knight",
          "Extra Attack"
        ],
        background: ["Wanderer"],
        feat: ["Crossbow Expert", "Sharpshooter"],
        item: [""]
      },
      spellcastingClass: "Eldritch Knight",
      spellcastingAbility: "INT",
      spellSaveDc: 13,
      spellAttackBonus: 5,
      spellsKnown: {
        "1": {
          slots: {
            maximum: 3,
            expended: 0
          },
          spells: [
            {
              name: "Mage Armor",
              prepared: true
            },
            {
              name: "Feather Fall",
              prepared: true
            },
            {
              name: "Magic Missile",
              prepared: true
            },
            {
              name: "Shield",
              prepared: true
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ],
          maximum: "0",
          expended: "0"
        },
        "2": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ],
          maximum: "2",
          expended: "0"
        },
        "3": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "4": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "5": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "6": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "7": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "8": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        "9": {
          slots: {
            maximum: 0,
            expended: 0
          },
          spells: [
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            },
            {
              name: "",
              prepared: false
            }
          ]
        },
        cantrips: ["Fire Bolt", "Minor Illusion", "", "", "", "", "", ""]
      }
    }
  ]
};
