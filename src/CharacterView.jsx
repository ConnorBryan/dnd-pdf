import React from "react";

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

export default function CharacterView({ character }) {
  return (
    <div>
      <h1>Information</h1>
      {/* Middle */}
      <div
        style={{
          display: "flex"
        }}
      >
        <div
          style={{
            flex: 1
          }}
        >
          <h4>Basics</h4>
          <ul>
            <li>
              <Entry title="Name" value={character.name} />
            </li>
            <li>
              <Entry title="Notes" value={character.notes} />
            </li>
            <li>
              <Entry
                title="Class/Level"
                value={`${character.basics.class} ${character.basics.level}`}
              />
            </li>
            <li>
              <Entry title="Gold" value={character.gold} />
            </li>
            <li>
              <Entry title="Background" value={character.basics.background} />
            </li>
            <li>
              <Entry title="Player" value={character.basics.player} />
            </li>
            <li>
              <Entry title="Race" value={character.basics.race} />
            </li>
            <li>
              <Entry title="Alignment" value={character.basics.alignment} />
            </li>
            <li>
              <Entry title="XP" value={character.basics.experiencePoints} />
            </li>
            <li>
              <Entry
                title="Passive Perception"
                value={character.passivePerception}
              />
            </li>
            <li>
              <Entry title="Inspiration" proficient={character.inspiration} />
            </li>
            <li>
              <Entry title="Proficiency" value={character.proficiencyBonus} />
            </li>
          </ul>
          <h4>Ability Scores</h4>
          <ul>
            {Object.entries(character.abilityScores).map(([key, value]) => (
              <li>
                <Entry
                  title={key}
                  value={`${value} (${
                    getAbilityModifier(value) > -1 ? "+" : ""
                  }${getAbilityModifier(value)})`}
                />
              </li>
            ))}
          </ul>
          <h4>Proficiencies </h4>
          <ul>
            {Object.entries(character.proficiencies).map(([key, value]) => (
              <li>
                <Entry
                  title={key}
                  value={
                    <ul>{value.map(entry => entry && <li>{entry}</li>)}</ul>
                  }
                />
              </li>
            ))}
          </ul>
        </div>
        <div
          style={{
            flex: 1
          }}
        >
          <h4>Saving Throws</h4>
          <ul>
            {Object.entries(character.savingThrows).map(([key, value]) => (
              <li>
                <Entry
                  title={key}
                  value={value.value}
                  proficient={value.proficient}
                />
              </li>
            ))}
          </ul>
          <h4>Skills</h4>
          <ul>
            {Object.entries(character.skills).map(([key, value]) => (
              <li>
                <Entry
                  title={key}
                  value={value.value}
                  proficient={value.proficient}
                />
              </li>
            ))}
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1
          }}
        >
          <div>
            <h4>Battle</h4>
            <ul>
              <li>
                <Entry title="AC" value={character.armorClass} />
              </li>
              <li>
                <Entry title="Initiative" value={`+${character.initiative}`} />
              </li>
              <li>
                <Entry title="Speed" value={`${character.speed} ft.`} />
              </li>
              <li>
                <Entry
                  title="HP"
                  value={`${character.hitPoints.current} / ${
                    character.hitPoints.maximum
                  } (${character.hitPoints.temporary})`}
                />
              </li>
              <li>
                <Entry
                  title="Hit Dice"
                  value={`${character.hitDice.current} / ${
                    character.hitDice.total
                  } (${character.hitDice.die})`}
                />
              </li>
              <li>
                <Entry
                  title="Death Saves"
                  value={`${character.deathSaves.successes} successes, ${
                    character.deathSaves.failures
                  } failures`}
                />
              </li>
              <li>
                <Entry
                  title={character.resource.name}
                  value={`${character.resource.current} / ${
                    character.resource.maximum
                  }`}
                />
              </li>
            </ul>
            <h4>Attacks and Spellcasting</h4>
            <ul>
              {character.attacksAndSpellcasting.map(move => (
                <li>
                  {move.name} | +{move.bonus} | {move.damage}
                </li>
              ))}
            </ul>
            <h4>Equipment</h4>
            <ul>
              {character.equipment.map(
                ({ name, quantity }) =>
                  name && (
                    <li>
                      {name} x{quantity}
                    </li>
                  )
              )}
            </ul>
          </div>
          <div />
        </div>
        <div
          style={{
            flex: 1
          }}
        >
          <div>
            <h4>Personality Traits</h4>
            <ul>
              {character.personalityTraits.map(trait => (
                <li>{trait}</li>
              ))}
            </ul>
            <br />
            <h4>Ideals</h4>
            <ul>
              {character.ideals.map(trait => (
                <li>{trait}</li>
              ))}
            </ul>
            <br />
            <h4>Bonds</h4>
            <ul>
              {character.bonds.map(trait => (
                <li>{trait}</li>
              ))}
            </ul>
            <br />
            <h4>Flaws</h4>
            <ul>
              {character.flaws.map(trait => (
                <li>{trait}</li>
              ))}
            </ul>
          </div>
          <h4>Features and Traits</h4>
          <ul>
            {Object.entries(character.featuresAndTraits).map(([key, value]) => (
              <li>
                <Entry
                  title={key}
                  value={
                    <ul>{value.map(entry => entry && <li>{entry}</li>)}</ul>
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h1>Spells</h1>

      <div>
        <Entry title="Spellcasting Class" value={character.spellcastingClass} />
        <Entry
          title="Spellcasting Ability"
          value={character.spellcastingAbility}
        />
        <Entry title="Spell Save DC" value={character.spellSaveDc} />
        <Entry
          title="Spell Attack Bonus"
          value={`${character.spellSaveDc >= 0 && "+"}${
            character.spellAttackBonus
          }`}
        />
        <br />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          {character.spellsKnown.cantrips.some(Boolean) && (
            <div>
              <strong>Cantrips</strong> <br />
              <ul>
                {character.spellsKnown.cantrips.map(
                  cantrip => cantrip && <li>{cantrip}</li>
                )}
              </ul>
            </div>
          )}
          {Array.from(
            { length: 9 },
            (_, index) =>
              character.spellsKnown[index + 1].spells.some(el => el.name) && (
                <div>
                  <strong>Level {index + 1} Spells: </strong>
                  {character.spellsKnown[index + 1].slots.expended} /
                  {character.spellsKnown[index + 1].slots.maximum}
                  <br />
                  <ul>
                    {character.spellsKnown[index + 1].spells.map(spell => (
                      <li>
                        <input
                          type="checkbox"
                          disabled
                          checked={spell.prepared}
                        />{" "}
                        {spell.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )
          )}
        </div>
      </div>
      {/* {JSON.stringify(character, null, 2)} */}
    </div>
  );
}

function Entry({ title, value, proficient }) {
  return (
    <>
      {typeof proficient !== "undefined" && (
        <>
          <input type="checkbox" checked={proficient} />{" "}
        </>
      )}
      <strong>{title}:</strong> {value} <br />
    </>
  );
}
