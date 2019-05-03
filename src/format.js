export function getAbilityModifier(abilityScore) {
  return {
    1: -5,
    2: -4,
    3: -4,
    4: -3,
    5: -3,
    6: -2,
    7: -2,
    8: -1,
    9: -1,
    10: 0,
    11: 0,
    12: 1,
    13: 1,
    14: 2,
    15: 2,
    16: 3,
    17: 3,
    18: 4,
    19: 4,
    20: 5
  }[abilityScore];
}

export function getXMark(value) {
  return value.proficient ? "X" : "";
}

export default function format(character) {
  const statPage = [
    [character.name, 50, 715, 18],

    // Basics
    [`${character.basics.class} ${character.basics.level}`, 270, 730, 10],
    [character.basics.background, 380, 730, 10],
    [character.basics.player, 480, 730, 10],
    [character.basics.race, 270, 705, 10],
    [character.basics.alignment, 380, 705, 10],
    [character.basics.experiencePoints, 480, 705, 10],

    // Ability Scores
    [character.abilityScores.STR, 50, 620, 16],
    [`+${getAbilityModifier(character.abilityScores.STR)}`, 50, 595, 12],
    [character.abilityScores.DEX, 50, 547, 16],
    [`+${getAbilityModifier(character.abilityScores.DEX)}`, 50, 522, 12],
    [character.abilityScores.CON, 50, 474, 16],
    [`+${getAbilityModifier(character.abilityScores.CON)}`, 50, 451, 12],
    [character.abilityScores.INT, 50, 404, 16],
    [`+${getAbilityModifier(character.abilityScores.INT)}`, 50, 379, 12],
    [character.abilityScores.WIS, 50, 333, 16],
    [`+${getAbilityModifier(character.abilityScores.WIS)}`, 50, 307, 12],
    [character.abilityScores.CHA, 50, 262, 16],
    [`+${getAbilityModifier(character.abilityScores.CHA)}`, 50, 237, 12],

    // Bonuses
    [character.inspiration ? "Y" : "N", 102, 647, 16],
    [`+${character.proficiencyBonus}`, 99, 610, 16],

    // Saving Throws
    [getXMark(character.savingThrows.STR), 100, 577, 12],
    [character.savingThrows.STR.value, 116, 579, 12],
    [getXMark(character.savingThrows.DEX), 100, 563, 12],
    [character.savingThrows.DEX.value, 116, 565, 12],
    [getXMark(character.savingThrows.CON), 100, 549, 12],
    [character.savingThrows.CON.value, 116, 551, 12],
    [getXMark(character.savingThrows.INT), 100, 535, 12],
    [character.savingThrows.INT.value, 116, 537, 12],
    [getXMark(character.savingThrows.WIS), 100, 521, 12],
    [character.savingThrows.WIS.value, 116, 523, 12],
    [getXMark(character.savingThrows.CHA), 100, 507, 12],
    [character.savingThrows.CHA.value, 116, 509, 12],

    // Skills
    [getXMark(character.skills.acrobatics), 100, 461, 12],
    [character.skills.acrobatics.value, 116, 464, 12],
    [getXMark(character.skills.animalHandling), 100, 448, 12],
    [character.skills.animalHandling.value, 116, 449, 12],
    [getXMark(character.skills.arcana), 100, 435, 12],
    [character.skills.arcana.value, 116, 436, 12],
    [getXMark(character.skills.athletics), 100, 421, 12],
    [character.skills.athletics.value, 116, 423, 12],
    [getXMark(character.skills.deception), 100, 407, 12],
    [character.skills.deception.value, 116, 409, 12],
    [getXMark(character.skills.history), 100, 394, 12],
    [character.skills.history.value, 116, 396, 12],
    [getXMark(character.skills.insight), 100, 381, 12],
    [character.skills.insight.value, 116, 383, 12],
    [getXMark(character.skills.intimidation), 100, 368, 12],
    [character.skills.intimidation.value, 116, 370, 12],
    [getXMark(character.skills.investigation), 100, 354, 12],
    [character.skills.investigation.value, 116, 356, 12],
    [getXMark(character.skills.medicine), 100, 340, 12],
    [character.skills.medicine.value, 116, 342, 12],
    [getXMark(character.skills.nature), 100, 326, 12],
    [character.skills.nature.value, 116, 328, 12],
    [getXMark(character.skills.perception), 100, 313, 12],
    [character.skills.perception.value, 116, 315, 12],
    [getXMark(character.skills.performance), 100, 300, 12],
    [character.skills.performance.value, 116, 302, 12],
    [getXMark(character.skills.persuasion), 100, 286, 12],
    [character.skills.persuasion.value, 116, 288, 12],
    [getXMark(character.skills.religion), 100, 272, 12],
    [character.skills.religion.value, 116, 274, 12],
    [getXMark(character.skills.sleightOfHand), 100, 258, 12],
    [character.skills.sleightOfHand.value, 116, 260, 12],
    [getXMark(character.skills.stealth), 100, 245, 12],
    [character.skills.stealth.value, 116, 247, 12],
    [getXMark(character.skills.survival), 100, 232, 12],
    [character.skills.survival.value, 116, 234, 12],

    // Battle
    [character.armorClass, 239, 631, 16],
    [character.initiative, 300, 631, 16],
    [character.speed, 354, 631, 16],

    // Hit Points
    [character.hitPoints.maximum, 300, 587, 12],
    [character.hitPoints.current, 300, 561, 16],
    [character.hitPoints.temporary, 300, 508, 16],

    // Hit Dice
    [`${character.hitDice.total}, ${character.hitDice.die}`, 250, 465, 10],
    [character.hitDice.current, 258, 445, 16],
    // Death Saves
    // ---

    // Attacks & Spellcasting
    // ---

    // Resources
    // ---

    // Passive Perception
    [character.passivePerception, 36, 188, 12],

    // Proficiencies
    // ---

    // Equipment
    [character.gold, 234, 102, 12],
    // ---

    // Mentality
    [character.personalityTraits[0], 420, 631, 10],
    [character.personalityTraits[1], 420, 616, 10],
    [character.ideals[0], 420, 567, 10],
    [character.ideals[1], 420, 552, 10],
    [character.bonds[0], 420, 512, 10],
    [character.bonds[1], 420, 497, 10],
    [character.flaws[0], 420, 457, 10],
    [character.flaws[1], 420, 442, 10]

    // Features & Traits
    // ---
  ];

  /* === Death Saves === */
  const deathSavesSuccessesCoordinates = [
    [347, 462, 10],
    [360, 462, 10],
    [373, 462, 10]
  ];
  const deathSavesFailuresCoordinates = [
    [347, 447, 10],
    [360, 447, 10],
    [373, 447, 10]
  ];

  Array.from({ length: character.deathSaves.successes }, () => {
    const coordinates = deathSavesSuccessesCoordinates.shift();

    statPage.push(["X", ...coordinates]);
  });
  Array.from({ length: character.deathSaves.failures }, () => {
    const coordinates = deathSavesFailuresCoordinates.shift();

    statPage.push(["X", ...coordinates]);
  });
  /* === /Death Saves === */

  /* === Attacks & Spellcasting === */
  const attacksAndSpellcastingCoordinates = [
    [227, 389, 8],
    [299, 388, 12],
    [329, 389, 8],
    [227, 369, 8],
    [299, 368, 12],
    [329, 369, 8],
    [227, 349, 8],
    [299, 348, 12],
    [329, 349, 8]
  ];

  character.attacksAndSpellcasting.forEach(attack => {
    const nameCoordinates = attacksAndSpellcastingCoordinates.shift();
    const bonusCoordinates = attacksAndSpellcastingCoordinates.shift();
    const damageCoordinates = attacksAndSpellcastingCoordinates.shift();

    statPage.push([attack.name, ...nameCoordinates]);
    statPage.push([`+${attack.bonus}`, ...bonusCoordinates]);
    statPage.push([attack.damage, ...damageCoordinates]);
  });
  /* === /Attacks & Spellcasting === */

  /* === Resources === */
  const resourceCoordinates = [[224, 329, 10], [375, 329, 10]];

  if (character.resource.name) {
    const nameCoordinates = resourceCoordinates.shift();
    const numberCoordinates = resourceCoordinates.shift();

    statPage.push(character.resource.name, ...nameCoordinates);
    statPage.push(
      `${character.resource.current}/${character.resource.maximum}`,
      ...numberCoordinates
    );
  }
  /* === /Resources === */

  /* === Proficiencies === */
  function addProficiencies(property, topRowCoordinates, bottomRowCoordinates) {
    const label = property.toUpperCase();

    if (character.proficiencies[property].length > 2) {
      const [first, second, ...others] = character.proficiencies[property];
      const topRow = `${label}: ${first}, ${second},`;
      const tempBottomRow = others.join(", ");
      const bottomRow = tempBottomRow.slice(0, tempBottomRow.length - 3);

      statPage.push([topRow, ...topRowCoordinates]);
      statPage.push([bottomRow, ...bottomRowCoordinates]);
    } else if (character.proficiencies[property].length === 2) {
      const [first, second] = character.proficiencies[property];

      statPage.push([`${label}: ${first}, ${second}`, ...topRowCoordinates]);
    } else {
      statPage.push([
        `${label}: ${character.proficiencies[property][0]}`,
        ...topRowCoordinates
      ]);
    }
  }

  addProficiencies("languages", [36, 154, 8], [36, 144, 8]);
  addProficiencies("tools", [36, 129, 8], [36, 119, 8]);
  addProficiencies("instruments", [36, 104, 8], [36, 94, 8]);
  addProficiencies("weapons", [36, 79, 8], [36, 69, 8]);
  addProficiencies("armor", [36, 54, 8], [36, 44, 8]);
  /* === /Proficiencies === */

  /* === Equipment === */
  const equipmentCoordinates = [
    [268, 192, 8],
    [268, 182, 8],
    [268, 172, 8],
    [268, 162, 8],
    [268, 152, 8],
    [268, 142, 8],
    [268, 132, 8],
    [268, 122, 8],
    [268, 112, 8],
    [268, 102, 8],
    [268, 92, 8],
    [268, 82, 8],
    [268, 72, 8],
    [268, 62, 8],
    [268, 52, 8],
    [268, 42, 8]
  ];

  character.equipment.forEach(item => {
    const coordinates = equipmentCoordinates.shift();

    statPage.push([`${item.name} x${item.quantity}`, ...coordinates]);
  });
  /* === /Equipment === */

  /* === Features & Traits === */
  function addFeatures(coordinates, type) {
    character.featuresAndTraits[type].forEach(feature => {
      statPage.push([
        `${type.toUpperCase()}: ${feature}`,
        ...coordinates.shift()
      ]);
    });
  }

  const raceFeaturesCoordinates = [
    [412, 399, 8],
    [412, 389, 8],
    [412, 379, 8],
    [412, 369, 8],
    [412, 359, 8]
  ];
  const classFeaturesCoordinates = [
    [412, 339, 8],
    [412, 329, 8],
    [412, 319, 8],
    [412, 309, 8],
    [412, 299, 8],
    [412, 289, 8],
    [412, 279, 8],
    [412, 269, 8],
    [412, 259, 8],
    [412, 249, 8]
  ];
  const backgroundFeaturesCoordinates = [
    [412, 229, 8],
    [412, 219, 8],
    [412, 209, 8]
  ];
  const featFeaturesCoordinates = [
    [412, 189, 8],
    [412, 179, 8],
    [412, 169, 8],
    [412, 159, 8],
    [412, 149, 8]
  ];
  const itemFeaturesCoordinates = [
    [412, 129, 8],
    [412, 119, 8],
    [412, 109, 8],
    [412, 99, 8],
    [412, 89, 8]
  ];

  addFeatures(raceFeaturesCoordinates, "race");
  addFeatures(classFeaturesCoordinates, "class");
  addFeatures(backgroundFeaturesCoordinates, "background");
  addFeatures(featFeaturesCoordinates, "feat");
  addFeatures(itemFeaturesCoordinates, "item");
  /* === /Features & Traits === */

  // =~=~=~=~=~=~=~=~=~=~=~=~=~=~ //
  const spellPage = [
    [character.spellcastingClass, 50, 712, 18],
    [character.spellcastingAbility, 302, 717, 18],
    [character.spellSaveDc, 405, 717, 18],
    [`+${character.spellAttackBonus}`, 510, 717, 18]

    // Cantrips
    // ---
  ];

  /* === Cantrips === */
  const cantripCoordinates = [
    [36, 610, 8],
    [36, 596, 8],
    [36, 582, 8],
    [36, 568, 8],
    [36, 554, 8],
    [36, 540, 8],
    [36, 526, 8],
    [36, 512, 8]
  ];

  character.spellsKnown.cantrips.forEach(cantrip => {
    const coordinates = cantripCoordinates.shift();

    spellPage.push([cantrip, ...coordinates]);
  });
  /* === /Cantrips === */

  /* === Spells === */
  function addSpells(coordinates, level) {
    const spellLevel = character.spellsKnown[level];

    if (!spellLevel) {
      return;
    }

    spellPage.push([spellLevel.slots.maximum, ...coordinates.shift()]);
    spellPage.push([spellLevel.slots.expended, ...coordinates.shift()]);

    spellLevel.spells.forEach(spell => {
      const preparedCoordinates = coordinates.shift();
      const nameCoordinates = coordinates.shift();

      spellPage.push([spell.name, ...nameCoordinates]);

      if (spell.prepared) {
        spellPage.push(["X", ...preparedCoordinates]);
      }
    });
  }

  const level1Coordinates = [
    [66, 463, 14],
    [146, 463, 14],
    [31, 435, 12],
    [48, 439, 8],
    [31, 421, 12],
    [48, 424, 8],
    [31, 407, 12],
    [48, 410, 8],
    [31, 393, 12],
    [48, 396, 8],
    [31, 379, 12],
    [48, 382, 8],
    [31, 365, 12],
    [48, 368, 8],
    [31, 351, 12],
    [48, 354, 8],
    [31, 337, 12],
    [48, 340, 8],
    [31, 323, 12],
    [48, 326, 8],
    [31, 309, 12],
    [48, 312, 8],
    [31, 295, 12],
    [48, 298, 8],
    [31, 281, 12],
    [48, 284, 8],
    [31, 267, 12],
    [48, 270, 8]
  ];
  const level2Coordinates = [
    [66, 234, 14],
    [146, 234, 14],
    [31, 208, 12],
    [49, 212, 8],
    [31, 194, 12],
    [49, 197, 8],
    [31, 180, 12],
    [49, 183, 8],
    [31, 166, 12],
    [49, 169, 8],
    [31, 152, 12],
    [49, 155, 8],
    [31, 138, 12],
    [49, 141, 8],
    [31, 124, 12],
    [49, 127, 8],
    [31, 110, 12],
    [49, 113, 8],
    [31, 96, 12],
    [49, 99, 8],
    [31, 82, 12],
    [49, 85, 8],
    [31, 68, 12],
    [49, 71, 8],
    [31, 54, 12],
    [49, 57, 8],
    [31, 40, 12],
    [49, 43, 8]
  ];
  const level3Coordinates = [
    [256, 630, 14],
    [330, 630, 14],
    [220, 605, 12],
    [236, 608, 8],
    [220, 591, 12],
    [236, 594, 8],
    [220, 577, 12],
    [236, 580, 8],
    [220, 563, 12],
    [236, 566, 8],
    [220, 549, 12],
    [236, 552, 8],
    [220, 535, 12],
    [236, 538, 8],
    [220, 521, 12],
    [236, 524, 8],
    [220, 507, 12],
    [236, 510, 8],
    [220, 493, 12],
    [236, 496, 8],
    [220, 479, 12],
    [236, 482, 8],
    [220, 465, 12],
    [236, 468, 8],
    [220, 451, 12],
    [236, 454, 8],
    [220, 437, 12],
    [236, 441, 8]
  ];
  const level4Coordinates = [
    [256, 405, 14],
    [330, 405, 14],
    [220, 380, 12],
    [236, 383, 8],
    [220, 366, 12],
    [236, 369, 8],
    [220, 352, 12],
    [236, 355, 8],
    [220, 338, 12],
    [236, 341, 8],
    [220, 324, 12],
    [236, 327, 8],
    [220, 310, 12],
    [236, 313, 8],
    [220, 296, 12],
    [236, 299, 8],
    [220, 282, 12],
    [236, 285, 8],
    [220, 268, 12],
    [236, 271, 8],
    [220, 254, 12],
    [236, 257, 8],
    [220, 240, 12],
    [236, 243, 8],
    [220, 226, 12],
    [236, 229, 8],
    [220, 212, 12],
    [236, 215, 8]
  ];
  const level5Coordinates = [
    [256, 179, 14],
    [330, 179, 14],
    [220, 154, 12],
    [236, 157, 8],
    [220, 140, 12],
    [236, 143, 8],
    [220, 126, 12],
    [236, 129, 8],
    [220, 112, 12],
    [236, 115, 8],
    [220, 98, 12],
    [236, 101, 8],
    [220, 84, 12],
    [236, 87, 8],
    [220, 70, 12],
    [236, 73, 8],
    [220, 56, 12],
    [236, 59, 8],
    [220, 42, 12],
    [236, 45, 8]
  ];
  const level6Coordinates = [
    [444, 631, 14],
    [518, 631, 14],
    [407, 605, 12],
    [423, 608, 8],
    [407, 591, 12],
    [423, 594, 8],
    [407, 577, 12],
    [423, 580, 8],
    [407, 563, 12],
    [423, 566, 8],
    [407, 549, 12],
    [423, 552, 8],
    [407, 535, 12],
    [423, 539, 8],
    [407, 521, 12],
    [423, 524, 8],
    [407, 507, 12],
    [423, 510, 8],
    [407, 493, 12],
    [423, 496, 8]
  ];
  const level7Coordinates = [
    [444, 461, 14],
    [518, 461, 14],
    [407, 435, 12],
    [423, 438, 8],
    [407, 421, 12],
    [423, 424, 8],
    [407, 407, 12],
    [423, 410, 8],
    [407, 393, 12],
    [423, 396, 8],
    [407, 379, 12],
    [423, 382, 8],
    [407, 365, 12],
    [423, 368, 8],
    [407, 351, 12],
    [423, 354, 8],
    [407, 337, 12],
    [423, 340, 8],
    [407, 323, 12],
    [423, 326, 8]
  ];
  const level8Coordinates = [
    [444, 291, 14],
    [518, 291, 14],
    [407, 265, 12],
    [423, 268, 8],
    [407, 251, 12],
    [423, 254, 8],
    [407, 237, 12],
    [423, 241, 8],
    [407, 223, 12],
    [423, 226, 8],
    [407, 209, 12],
    [423, 212, 8],
    [407, 195, 12],
    [423, 198, 8],
    [407, 181, 12],
    [423, 184, 8]
  ];
  const level9Coordinates = [
    [444, 151, 14],
    [518, 151, 14],
    [407, 125, 12],
    [423, 128, 8],
    [407, 111, 12],
    [423, 114, 8],
    [407, 97, 12],
    [423, 100, 8],
    [407, 83, 12],
    [423, 86, 8],
    [407, 69, 12],
    [423, 72, 8],
    [407, 55, 12],
    [423, 58, 8],
    [407, 41, 12],
    [423, 44, 8]
  ];

  Array.from({ length: 9 }, (_, index) => {
    const level = index + 1;
    addSpells(eval(`level${level}Coordinates`), level);
  });

  /* === /Spells === */

  return {
    statPageData: statPage,
    spellPageData: spellPage
  };
}
