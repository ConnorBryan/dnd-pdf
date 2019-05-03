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
  abilityScores: {
    STR: 10,
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
      proficient: false,
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
    investigation: {
      proficient: true,
      value: 1
    },
    medicine: {
      proficient: true,
      value: 1
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
    languages: ["Common", "Elven"],
    tools: ["Thieve's Tools"],
    instruments: ["Viola"],
    weapons: ["Bows", "Crossbows"],
    armor: ["Light"]
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
    successes: 0,
    failures: 0
  },
  attacksAndSpellcasting: [
    {
      name: "Heavy Xbow",
      bonus: 8,
      damage: "1d10+3 prc."
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
    cantrips: ["Mage Hand"],
    1: {
      slots: {
        maximum: 2,
        expended: 0
      },
      spells: [
        {
          name: "Magic Missile",
          prepared: true
        }
      ]
    }
  }
};
