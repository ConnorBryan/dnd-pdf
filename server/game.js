module.exports = {
  characters: [
    {
      name: "S'zrathis-Dren", //
      basics: {
        //
        class: "Monk",
        level: "4",
        background: "Hermit",
        player: "Dave",
        race: "Lizardfolk",
        alignment: "Neutral",
        experiencePoints: "3200"
      }, //
      abilityScores: {
        STR: "12",
        DEX: "16",
        CON: "16",
        INT: "10",
        WIS: "15",
        CHA: "8"
      },
      inspiration: true, //
      proficiencyBonus: 3, //
      savingThrows: {
        //
        STR: {
          proficient: true,
          value: "13"
        },
        DEX: {
          proficient: true,
          value: "5"
        },
        CON: {
          proficient: false,
          value: "3"
        },
        INT: {
          proficient: false,
          value: "0"
        },
        WIS: {
          proficient: true,
          value: "2"
        },
        CHA: {
          proficient: true,
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
      passivePerception: "14", //
      proficiencies: {
        languages: ["Common", "Draconic", "Primordial", "", "", ""],
        tools: ["Herbalism Kit", "Leatherworker's Tools", "", "", "", ""],
        instruments: ["", "", "", "", "", ""],
        weapons: ["Shortsword", "Simple Weapons", "", "", "", ""],
        armor: ["", "", "", "", "", ""]
      },
      armorClass: 16, //
      initiative: "3", //
      speed: "40", //
      hitPoints: {
        maximum: "35",
        current: "35",
        temporary: 0
      },
      hitDice: {
        //
        total: 5,
        die: "1d8",
        current: "4",
        maximum: "4"
      },
      deathSaves: {
        //
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
    }
  ]
};
