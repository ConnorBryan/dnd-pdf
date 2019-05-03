import React from "react";
import { Formik, Form as FormikForm, Field } from "formik";
import S from "string";
import { Form, Header, Segment } from "semantic-ui-react";

import emptyCharacter from "./character";

export default function CharacterForm({
  character = emptyCharacter,
  onSubmit
}) {
  return (
    <Formik
      initialValues={character}
      onSubmit={onSubmit}
      render={() => (
        <FormikForm>
          <Segment>
            <Form as="div">
              <Form.Group widths={4}>
                <Field
                  render={({ field }) => <Form.Input {...field} label="Name" />}
                  name="name"
                />
              </Form.Group>
              <Header as="h3">Basics</Header>
              <Form.Group widths={8}>
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Class" />
                  )}
                  name="basics.class"
                />
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Level" />
                  )}
                  name="basics.level"
                />
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Background" />
                  )}
                  name="basics.background"
                />
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Player" />
                  )}
                  name="basics.player"
                />
              </Form.Group>
              <Form.Group widths={8}>
                <Field
                  render={({ field }) => <Form.Input {...field} label="Race" />}
                  name="basics.race"
                />
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Alignment" />
                  )}
                  name="basics.alignment"
                />
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Experience Points" />
                  )}
                  name="basics.experiencePoints"
                />
              </Form.Group>
              <Header as="h3">Ability Scores</Header>
              <Form.Group widths={8}>
                <Field
                  render={({ field }) => <Form.Input {...field} label="STR" />}
                  name="abilityScores.STR"
                />
                <Field
                  render={({ field }) => <Form.Input {...field} label="DEX" />}
                  name="abilityScores.DEX"
                />
                <Field
                  render={({ field }) => <Form.Input {...field} label="CON" />}
                  name="abilityScores.CON"
                />
                <Field
                  render={({ field }) => <Form.Input {...field} label="INT" />}
                  name="abilityScores.INT"
                />
                <Field
                  render={({ field }) => <Form.Input {...field} label="WIS" />}
                  name="abilityScores.WIS"
                />
                <Field
                  render={({ field }) => <Form.Input {...field} label="CHA" />}
                  name="abilityScores.CHA"
                />
              </Form.Group>
              <Header as="h3">Bonuses</Header>
              <Form.Group widths={4}>
                <Field
                  render={({ field, form }) => (
                    <Form.Checkbox
                      checked={field.value}
                      onClick={() =>
                        form.setFieldValue(field.name, !field.value)
                      }
                      {...field}
                      label="Inspiration"
                    />
                  )}
                  name="inspiration"
                />
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Proficiency Bonus" />
                  )}
                  name="proficiencyBonus"
                />
              </Form.Group>

              <Header as="h3">Saving Throws</Header>
              <Header as="h4">STR</Header>
              <Form.Group widths={4}>
                <Field
                  name="savingThrows.STR.proficient"
                  render={({ field, form }) => (
                    <Form.Checkbox
                      label="Proficient"
                      checked={field.value}
                      onClick={() =>
                        form.setFieldValue(field.name, !field.value)
                      }
                    />
                  )}
                />
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Value" />
                  )}
                  name="savingThrows.STR.value"
                />
              </Form.Group>
              <Header as="h4">DEX</Header>
              <Form.Group widths={4}>
                <Field
                  name="savingThrows.DEX.proficient"
                  render={({ field, form }) => (
                    <Form.Checkbox
                      label="Proficient"
                      checked={field.value}
                      onClick={() =>
                        form.setFieldValue(field.name, !field.value)
                      }
                    />
                  )}
                />
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Value" />
                  )}
                  name="savingThrows.DEX.value"
                />
              </Form.Group>
              <Header as="h4">CON</Header>
              <Form.Group widths={4}>
                <Field
                  name="savingThrows.CON.proficient"
                  render={({ field, form }) => (
                    <Form.Checkbox
                      label="Proficient"
                      checked={field.value}
                      onClick={() =>
                        form.setFieldValue(field.name, !field.value)
                      }
                    />
                  )}
                />
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Value" />
                  )}
                  name="savingThrows.CON.value"
                />
              </Form.Group>
              <Header as="h4">INT</Header>
              <Form.Group widths={4}>
                <Field
                  name="savingThrows.INT.proficient"
                  render={({ field, form }) => (
                    <Form.Checkbox
                      label="Proficient"
                      checked={field.value}
                      onClick={() =>
                        form.setFieldValue(field.name, !field.value)
                      }
                    />
                  )}
                />
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Value" />
                  )}
                  name="savingThrows.INT.value"
                />
              </Form.Group>
              <Header as="h4">WIS</Header>
              <Form.Group widths={4}>
                <Field
                  name="savingThrows.WIS.proficient"
                  render={({ field, form }) => (
                    <Form.Checkbox
                      label="Proficient"
                      checked={field.value}
                      onClick={() =>
                        form.setFieldValue(field.name, !field.value)
                      }
                    />
                  )}
                />
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Value" />
                  )}
                  name="savingThrows.WIS.value"
                />
              </Form.Group>
              <Header as="h4">CHA</Header>
              <Form.Group widths={4}>
                <Field
                  name="savingThrows.CHA.proficient"
                  render={({ field, form }) => (
                    <Form.Checkbox
                      label="Proficient"
                      checked={field.value}
                      onClick={() =>
                        form.setFieldValue(field.name, !field.value)
                      }
                    />
                  )}
                />
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Value" />
                  )}
                  name="savingThrows.CHA.value"
                />
              </Form.Group>

              <Header as="h3">Skills</Header>
              {[
                "acrobatics",
                "animalHandling",
                "arcana",
                "athletics",
                "deception",
                "history",
                "insight",
                "intimidation",
                "investigation",
                "medicine",
                "perception",
                "performance",
                "persuasion",
                "religion",
                "sleightOfHand",
                "stealth",
                "survival"
              ].map(skill => (
                <>
                  <Header as="h4">
                    {S(skill)
                      .humanize()
                      .s.split(" ")
                      .map(word => S(word).capitalize().s)
                      .join(" ")}
                  </Header>
                  <Form.Group widths={4}>
                    <Field
                      name={`skills.${skill}.proficient`}
                      render={({ field, form }) => (
                        <Form.Checkbox
                          label="Proficient"
                          checked={field.value}
                          onClick={() =>
                            form.setFieldValue(field.name, !field.value)
                          }
                        />
                      )}
                    />
                    <Field
                      render={({ field }) => (
                        <Form.Input {...field} label="Value" />
                      )}
                      name={`skills.${skill}.value`}
                    />
                  </Form.Group>
                </>
              ))}
              <Form.Group widths={4}>
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Passive Perception" />
                  )}
                  name="passivePerception"
                />
              </Form.Group>
              <Header as="h3">Proficiencies</Header>
              {["languages", "tools", "instruments", "weapons", "armor"].map(
                proficiency => (
                  <>
                    <Header as="h4">{S(proficiency).humanize().s}</Header>
                    {Array.from(
                      {
                        length: 5
                      },
                      (_, index) => (
                        <Field
                          name={`proficiencies.${proficiency}[${index}]`}
                          render={({ field }) => (
                            <Form.Input
                              {...field}
                              placeholder="Enter proficiency..."
                            />
                          )}
                        />
                      )
                    )}
                  </>
                )
              )}
              <Form.Group inline>
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Armor Class" />
                  )}
                  name="armorClass"
                />
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Initiative" />
                  )}
                  name="initiative"
                />
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Speed" />
                  )}
                  name="speed"
                />
              </Form.Group>

              <Header as="h3">Hit Points</Header>
              <Form.Group inline>
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Maximum" />
                  )}
                  name="hitPoints.maximum"
                />
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Current" />
                  )}
                  name="hitPoints.current"
                />
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Temporary" />
                  )}
                  name="hitPoints.temporary"
                />
              </Form.Group>

              <Header as="h3">Hit Dice</Header>
              <Form.Group inline>
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Maximum" />
                  )}
                  name="hitDice.maximum"
                />
                <Field
                  render={({ field }) => <Form.Input {...field} label="Die" />}
                  name="hitDice.die"
                />
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Current" />
                  )}
                  name="hitDice.current"
                />
              </Form.Group>

              <Header as="h3">Death Saves</Header>
              <Form.Group inline>
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Successes" />
                  )}
                  name="deathSaves.successes"
                />
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} label="Failures" />
                  )}
                  name="deathSaves.failures"
                />
              </Form.Group>

              <Header as="h3">Attacks & Spellcasting</Header>
              {Array.from({ length: 3 }, (_, index) => (
                <Form.Group widths={6}>
                  <Field
                    render={({ field }) => (
                      <Form.Input {...field} label="Name" />
                    )}
                    name={`attacksAndSpellcasting[${index}].name`}
                  />
                  <Field
                    render={({ field }) => (
                      <Form.Input {...field} label="Bonus" />
                    )}
                    name={`attacksAndSpellcasting[${index}].bonus`}
                  />
                  <Field
                    render={({ field }) => (
                      <Form.Input {...field} label="Damage" />
                    )}
                    name={`attacksAndSpellcasting[${index}].damage`}
                  />
                </Form.Group>
              ))}

              <Header as="h3">Resource</Header>
              <Field
                render={({ field }) => <Form.Input {...field} label="Name" />}
                name={`resource.name`}
              />
              <Field
                render={({ field }) => (
                  <Form.Input {...field} label="Maximum" />
                )}
                name={`resource.maximum`}
              />
              <Field
                render={({ field }) => (
                  <Form.Input {...field} label="Current" />
                )}
                name={`resource.current`}
              />

              <Header as="h3">Equipment</Header>
              <Form.Group widths={6}>
                <Field
                  render={({ field }) => <Form.Input {...field} label="Gold" />}
                  name={`gold`}
                />
              </Form.Group>
              {Array.from({ length: 15 }, (_, index) => (
                <Form.Group inline>
                  <Field
                    render={({ field }) => (
                      <Form.Input {...field} placeholder="Enter item name..." />
                    )}
                    name={`equipment[${index}].name`}
                  />
                  <Field
                    render={({ field }) => (
                      <Form.Input
                        {...field}
                        placeholder="Enter item quantity..."
                      />
                    )}
                    name={`equipment[${index}].quantity`}
                  />
                </Form.Group>
              ))}

              <Header as="h3">Personality Traits</Header>
              <Field
                render={({ field }) => (
                  <Form.Input {...field} label="Personality Trait 1" />
                )}
                name={`personalityTraits[0]`}
              />
              <Field
                render={({ field }) => (
                  <Form.Input {...field} label="Personality Trait 2" />
                )}
                name={`personalityTraits[1]`}
              />

              <Header as="h3">Ideals</Header>
              <Field
                render={({ field }) => (
                  <Form.Input {...field} label="Ideal 1" />
                )}
                name={`ideals[0]`}
              />
              <Field
                render={({ field }) => (
                  <Form.Input {...field} label="Ideal 2" />
                )}
                name={`ideals[1]`}
              />

              <Header as="h3">Bonds</Header>
              <Field
                render={({ field }) => <Form.Input {...field} label="Bond 1" />}
                name={`bonds[0]`}
              />
              <Field
                render={({ field }) => <Form.Input {...field} label="Bond 2" />}
                name={`bonds[1]`}
              />

              <Header as="h3">Flaws</Header>
              <Field
                render={({ field }) => <Form.Input {...field} label="Flaw 1" />}
                name={`flaws[0]`}
              />
              <Field
                render={({ field }) => <Form.Input {...field} label="Bond 2" />}
                name={`bonds[1]`}
              />

              <Header as="h3">Spellcasting</Header>
              <Field
                render={({ field }) => (
                  <Form.Input {...field} label="Spellcasting Class" />
                )}
                name={`spellcastingClass`}
              />
              <Field
                render={({ field }) => (
                  <Form.Input {...field} label="Spellcasting Ability" />
                )}
                name={`spellcastingAbility`}
              />
              <Field
                render={({ field }) => (
                  <Form.Input {...field} label="Spell Attack Bonus" />
                )}
                name={`spellAttackBonus`}
              />

              <Header as="h3">Cantrips</Header>
              {Array.from({ length: 8 }, (_, index) => (
                <Field
                  render={({ field }) => (
                    <Form.Input {...field} placeholder="Enter cantrip..." />
                  )}
                  name={`spellsKnown.cantrips[${index}]`}
                />
              ))}

              {Array.from({ length: 9 }, (_, index) => (
                <>
                  <Header as="h4">Level {index + 1}</Header>
                  <Field
                    render={({ field }) => (
                      <Form.Input
                        {...field}
                        placeholder="Enter maximum slots..."
                      />
                    )}
                    name={`spellsKnown[${index + 1}].maximum`}
                  />
                  <Field
                    render={({ field }) => (
                      <Form.Input
                        {...field}
                        placeholder="Enter expended slots..."
                      />
                    )}
                    name={`spellsKnown[${index + 1}].expended`}
                  />
                  {Array.from({ length: 13 }, (_, index2) => (
                    <Form.Group>
                      <Field
                        render={({ field }) => (
                          <Form.Input
                            {...field}
                            placeholder="Enter spell name..."
                          />
                        )}
                        name={`spellsKnown[${index +
                          1}].spells[${index2}].name`}
                      />
                      <Field
                        render={({ field, form }) => (
                          <Form.Checkbox
                            checked={field.value}
                            onClick={() =>
                              form.setFieldValue(field.name, !field.value)
                            }
                            {...field}
                            label="Prepared"
                          />
                        )}
                        name={`spellsKnown[${index +
                          1}].spells[${index2}].prepared`}
                      />
                    </Form.Group>
                  ))}
                </>
              ))}

              <Form.Button primary type="submit">
                Send
              </Form.Button>
            </Form>
          </Segment>
        </FormikForm>
      )}
    />
  );
}
