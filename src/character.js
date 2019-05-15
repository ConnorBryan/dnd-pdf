export default {
  name: "Thia Ilfakur",
  basics: {
    class: "Ranger",
    level: 5,
    background: "Outlander",
    player: "Elena",
    race: "Wood Elf",
    alignment: "Neutral",
    experiencePoints: "10000"
  },
  notes: "Paralyzed",
  abilityScores: {
    STR: 12,
    DEX: 10,
    CON: 10,
    INT: 10,
    WIS: 10,
    CHA: 10
  },
  inspiration: true,
  proficiencyBonus: 3,
  savingThrows: {
    STR: {
      proficient: false,
      value: 1
    },
    DEX: {
      proficient: false,
      value: 1
    },
    CON: {
      proficient: true,
      value: 1
    },
    INT: {
      proficient: false,
      value: 1
    },
    WIS: {
      proficient: false,
      value: 1
    },
    CHA: {
      proficient: false,
      value: 1
    }
  },
  skills: {
    acrobatics: {
      proficient: true,
      value: 1
    },
    animalHandling: {
      proficient: true,
      value: 1
    },
    arcana: {
      proficient: true,
      value: 1
    },
    athletics: {
      proficient: true,
      value: 1
    },
    deception: {
      proficient: true,
      value: 1
    },
    history: {
      proficient: true,
      value: 1
    },
    insight: {
      proficient: true,
      value: 1
    },
    intimidation: {
      proficient: true,
      value: 1
    },
    investigation: {
      proficient: true,
      value: 1
    },
    medicine: {
      proficient: true,
      value: 3
    },
    nature: {
      proficient: true,
      value: 1
    },
    perception: {
      proficient: true,
      value: 1
    },
    performance: {
      proficient: true,
      value: 1
    },
    persuasion: {
      proficient: true,
      value: 1
    },
    religion: {
      proficient: true,
      value: 1
    },
    sleightOfHand: {
      proficient: true,
      value: 1
    },
    stealth: {
      proficient: true,
      value: 1
    },
    survival: {
      proficient: true,
      value: 1
    }
  },
  passivePerception: 12,
  proficiencies: {
    languages: ["Common", "Elven", "", "", "", ""],
    tools: ["Thieves Tools", "", "", "", "", ""],
    instruments: ["Viola", "", "", "", "", ""],
    weapons: ["Bows", "Crossbows", "Knives", "Tools", "Daggers", ""],
    armor: ["Light", "", "", "", "", ""]
  },
  armorClass: 16,
  initiative: 2,
  speed: 35,
  hitPoints: {
    maximum: 33,
    current: 33,
    temporary: 0
  },
  hitDice: {
    total: 5,
    die: "1d8",
    current: 5
  },
  deathSaves: {
    successes: 3,
    failures: 2
  },
  attacksAndSpellcasting: [
    {
      name: "Heavy Xbow",
      bonus: 8,
      damage: "1d10+3 prc."
    },
    {
      name: "",
      bonus: "",
      damage: ""
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
  gold: 200,
  equipment: [
    {
      name: "Torch",
      quantity: 10
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
  personalityTraits: ["A", "B"],
  ideals: ["A", "B"],
  bonds: ["A", "B"],
  flaws: ["A", "B"],
  featuresAndTraits: {
    race: ["A", "B"],
    class: ["C", "D", "E"],
    background: ["F"],
    feat: ["G", "H"],
    item: ["I"]
  },
  spellcastingClass: "Ranger",
  spellcastingAbility: "WIS",
  spellSaveDc: 13,
  spellAttackBonus: 5,
  spellsKnown: {
    cantrips: ["Mage Hand", "", "", "", "", "", "", ""],
    1: {
      slots: {
        maximum: 2,
        expended: 0
      },
      spells: [
        {
          name: "Magic Missile",
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
      ]
    },
    2: {
      slots: {
        maximum: 1,
        expended: 1
      },
      spells: [
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
    3: {
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
    4: {
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
    5: {
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
    6: {
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
    7: {
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
    8: {
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
    9: {
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
    }
  }
};
