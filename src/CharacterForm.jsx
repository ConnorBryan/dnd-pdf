import React, { useState } from "react";
import { Formik, Form as FormikForm, FastField } from "formik";
import S from "string";
import {
  Button,
  Container,
  Divider,
  Form,
  Grid,
  Header,
  Segment
} from "semantic-ui-react";

import emptyCharacter from "./character";

function CharacterSection({ title, children }) {
  const [open, setOpen] = useState(true);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <Segment
      style={{
        maxHeight: "400px",
        overflowY: "auto"
      }}
    >
      <Header as="h3" onClick={toggleOpen}>
        {title}
      </Header>
      {open && children}
    </Segment>
  );
}

function CharacterInputField({ name, label, ...rest }) {
  return (
    <FastField
      render={({ field }) => <Form.Input {...field} {...rest} label={label} />}
      name={name}
    />
  );
}

function CharacterCheckboxField({ name, label }) {
  return (
    <FastField
      render={({ field, form }) => (
        <Form.Checkbox
          checked={field.value}
          onClick={() => form.setFieldValue(field.name, !field.value)}
          {...field}
          label={label}
        />
      )}
      name={name}
    />
  );
}

function CharacterProficiencyField({
  entry,
  path,
  type,
  format = entry => entry
}) {
  return (
    <CharacterInputField
      name={`${path}.${entry}.value`}
      type={type}
      label={() => (
        <div
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <CharacterCheckboxField
            name={`${path}.${entry}.proficient`}
            label=""
          />
          <div>{format(entry)}</div>
        </div>
      )}
    />
  );
}

export default function CharacterForm({
  character = emptyCharacter,
  onSubmit
}) {
  return (
    <Formik
      initialValues={character}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <>
          <Button
            primary
            icon="refresh"
            onClick={handleSubmit}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "40px",
              height: "40px",
              zIndex: 99999
            }}
          />
          <FormikForm>
            <Container className="form">
              <Header as="h1">Stats</Header>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <CharacterSection title="Basics">
                      <Form.Group widths={4}>
                        <CharacterInputField name="name" label="Name" />
                        <CharacterInputField
                          name="basics.class"
                          label="Class"
                        />
                        <CharacterInputField
                          name="basics.level"
                          label="Level"
                          type="number"
                        />
                        <CharacterInputField
                          name="basics.background"
                          label="Background"
                        />
                      </Form.Group>
                      <Form.Group widths={4}>
                        <CharacterInputField name="basics.race" label="Race" />
                        <CharacterInputField
                          name="basics.alignment"
                          label="Alignment"
                        />
                        <CharacterInputField
                          name="basics.experiencePoints"
                          label="XP"
                          type="number"
                        />
                        <CharacterInputField
                          name="basics.player"
                          label="Player"
                        />
                      </Form.Group>
                    </CharacterSection>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={8}>
                          <CharacterSection title="Ability Scores">
                            <CharacterInputField
                              name="abilityScores.STR"
                              label="STR"
                              type="number"
                            />
                            <CharacterInputField
                              name="abilityScores.DEX"
                              label="DEX"
                              type="number"
                            />
                            <CharacterInputField
                              name="abilityScores.CON"
                              label="CON"
                              type="number"
                            />
                            <CharacterInputField
                              name="abilityScores.INT"
                              label="INT"
                              type="number"
                            />
                            <CharacterInputField
                              name="abilityScores.WIS"
                              label="WIS"
                              type="number"
                            />
                            <CharacterInputField
                              name="abilityScores.CHA"
                              label="CHA"
                              type="number"
                            />
                          </CharacterSection>
                        </Grid.Column>
                        <Grid.Column width={8}>
                          <CharacterSection title="Etc.">
                            <CharacterCheckboxField
                              name="inspiration"
                              label="Inspiration"
                            />
                            <CharacterInputField
                              name="proficiencyBonus"
                              label="Proficiency"
                              type="number"
                            />
                            <CharacterInputField
                              name="passivePerception"
                              label="Passive Perception"
                              type="number"
                            />
                            <CharacterInputField
                              name="armorClass"
                              label="Armor Class"
                              type="number"
                            />
                            <CharacterInputField
                              name="initiative"
                              label="Initiative"
                              type="number"
                            />
                            <CharacterInputField
                              name="speed"
                              label="Speed"
                              type="number"
                            />
                          </CharacterSection>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Column width={8}>
                        <CharacterSection title="Saving Throws">
                          {["STR", "DEX", "CON", "INT", "WIS", "CHA"].map(
                            save => (
                              <CharacterProficiencyField
                                path="savingThrows"
                                entry={save}
                                type="number"
                                key={save}
                              />
                            )
                          )}
                        </CharacterSection>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <CharacterSection title="Skills">
                          {[
                            ["acrobatics", "animalHandling", "arcana"],
                            ["athletics", "deception", "history"],
                            ["insight", "intimidation", "investigation"],
                            ["medicine", "nature", "perception"],
                            ["performance", "persuasion", "religion"],
                            ["sleightOfHand", "stealth", "survival"]
                          ].map(skillSet => (
                            <Form.Group key={skillSet} widths={3}>
                              {skillSet.map(skill => (
                                <CharacterProficiencyField
                                  key={skill}
                                  entry={skill}
                                  path="skills"
                                  type="number"
                                  format={entry =>
                                    S(entry)
                                      .humanize()
                                      .s.split(" ")
                                      .map(word => S(word).capitalize().s)
                                      .join(" ")
                                  }
                                />
                              ))}
                            </Form.Group>
                          ))}
                        </CharacterSection>
                      </Grid.Column>
                    </Grid>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={16}>
                          <CharacterSection title="Proficiencies">
                            {[
                              "languages",
                              "tools",
                              "instruments",
                              "weapons",
                              "armor"
                            ].map((proficiency, index) => (
                              <>
                                <Header as="h4">
                                  {S(proficiency).humanize().s}
                                </Header>
                                {Array.from({ length: 5 }, (_, index) => (
                                  <CharacterInputField
                                    key={index}
                                    name={`proficiencies.${proficiency}[${index}]`}
                                    label=""
                                    placeholder="Enter proficiency..."
                                  />
                                ))}
                              </>
                            ))}
                          </CharacterSection>
                          <CharacterSection title="Equipment">
                            <CharacterInputField
                              name="gold"
                              label="Gold"
                              type="number"
                            />
                            <Divider />
                            {Array.from({ length: 15 }, (_, index) => (
                              <>
                                <Form.Group widths={2} key={index}>
                                  <CharacterInputField
                                    name={`equipment[${index}].name`}
                                    label="Item"
                                    placeholder="Enter item..."
                                  />
                                  <CharacterInputField
                                    name={`equipment[${index}].quantity`}
                                    label="Quantity"
                                    placeholder="Enter quantity..."
                                    type="number"
                                  />
                                </Form.Group>
                                <Divider />
                              </>
                            ))}
                          </CharacterSection>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <CharacterSection title="Hit Points">
                      <Form.Group widths={3}>
                        <CharacterInputField
                          name="hitPoints.maximum"
                          label="Maximum"
                          type="number"
                        />
                        <CharacterInputField
                          name="hitPoints.current"
                          label="Current"
                          type="number"
                        />
                        <CharacterInputField
                          name="hitPoints.temporary"
                          label="Temporary"
                          type="number"
                        />
                      </Form.Group>
                    </CharacterSection>
                    <CharacterSection title="Hit Dice">
                      {/* <Form.Group widths={2}> */}
                      <CharacterInputField name="hitDice.die" label="Die" />
                      {/* </Form.Group> */}
                      <Form.Group widths={2}>
                        <CharacterInputField
                          name="hitDice.total"
                          label="Total"
                          type="number"
                        />
                        <CharacterInputField
                          name="hitDice.current"
                          label="Current"
                          type="number"
                        />
                      </Form.Group>
                    </CharacterSection>
                    <CharacterSection title="Death Saves">
                      <Form.Group widths={2}>
                        <CharacterInputField
                          name="deathSaves.successes"
                          label="Successes"
                          type="number"
                        />
                        <CharacterInputField
                          name="deathSaves.failures"
                          label="Failures"
                          type="number"
                        />
                      </Form.Group>
                    </CharacterSection>
                    <CharacterSection title="Attacks & Spellcasting">
                      {Array.from({ length: 3 }, (_, index) => (
                        <>
                          <CharacterInputField
                            key={index}
                            name={`attacksAndSpellcasting[${index}].name`}
                            label="Name"
                          />
                          <Form.Group widths={2}>
                            <CharacterInputField
                              key={index}
                              name={`attacksAndSpellcasting[${index}].bonus`}
                              label="Bonus"
                              type="number"
                            />
                            <CharacterInputField
                              key={index}
                              name={`attacksAndSpellcasting[${index}].damage`}
                              label="Damage"
                            />
                          </Form.Group>
                          <Divider />
                        </>
                      ))}
                      <Form.Group widths={3}>
                        <CharacterInputField
                          name="resource.name"
                          label="Resource"
                        />
                        <CharacterInputField
                          name="resource.maximum"
                          label="Maximum"
                          type="number"
                        />
                        <CharacterInputField
                          name="resource.current"
                          label="Current"
                          type="number"
                        />
                      </Form.Group>
                    </CharacterSection>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <CharacterSection title="Personality Traits">
                      <CharacterInputField
                        name="personalityTraits[0]"
                        label=""
                      />
                      <CharacterInputField
                        name="personalityTraits[1]"
                        label=""
                      />
                    </CharacterSection>
                    <CharacterSection title="Ideals">
                      <CharacterInputField name="ideals[0]" label="" />
                      <CharacterInputField name="ideals[1]" label="" />
                    </CharacterSection>
                    <CharacterSection title="Bonds">
                      <CharacterInputField name="bonds[0]" label="" />
                      <CharacterInputField name="bonds[1]" label="" />
                    </CharacterSection>
                    <CharacterSection title="Flaws">
                      <CharacterInputField name="flaws[0]" label="" />
                      <CharacterInputField name="flaws[1]" label="" />
                    </CharacterSection>
                    <CharacterSection title="Features">
                      <>
                        {[
                          {
                            from: "race",
                            length: 5
                          },
                          {
                            from: "class",
                            length: 8
                          },
                          {
                            from: "background",
                            length: 3
                          },
                          {
                            from: "feat",
                            length: 5
                          },
                          {
                            from: "item",
                            length: 5
                          }
                        ].map(({ from, length }) => (
                          <>
                            <Header as="h4">{S(from).capitalize().s}</Header>
                            {Array.from({ length }, (_, index) => (
                              <CharacterInputField
                                key={index}
                                name={`featuresAndTraits.${from}[${index}]`}
                                label=""
                                placeholder="Enter feature..."
                              />
                            ))}
                          </>
                        ))}
                      </>
                    </CharacterSection>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Header as="h1">Spells</Header>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={7}>
                    <CharacterInputField
                      name="spellcastingClass"
                      label="Spellcasting Class"
                    />
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <CharacterInputField
                      name="spellcastingAbility"
                      label="Spellcasting Ability"
                    />
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <CharacterInputField
                      name="spellAttackBonus"
                      label="Spell Attack Bonus"
                    />
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <CharacterInputField
                      name="spellSaveDc"
                      label="Spell Save DC"
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <CharacterSection title="Cantrips">
                      <Grid>
                        <Grid.Row>
                          <Grid.Column width={5}>
                            {Array.from({ length: 3 }, (_, index) => (
                              <CharacterInputField
                                key={index}
                                name={`spellsKnown.cantrips[${index}]`}
                                label=""
                                placeholder="Enter cantrip..."
                              />
                            ))}
                          </Grid.Column>
                          <Grid.Column width={5}>
                            {Array.from({ length: 3 }, (_, index) => (
                              <CharacterInputField
                                key={index}
                                name={`spellsKnown.cantrips[${index + 3}]`}
                                label=""
                                placeholder="Enter cantrip..."
                              />
                            ))}
                          </Grid.Column>
                          <Grid.Column width={6}>
                            {Array.from({ length: 2 }, (_, index) => (
                              <CharacterInputField
                                key={index}
                                name={`spellsKnown.cantrips[${index + 5}]`}
                                label=""
                                placeholder="Enter cantrip..."
                              />
                            ))}
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </CharacterSection>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  {["1", "2", "3"].map(level => (
                    <Grid.Column width={5} key={level}>
                      <CharacterSection
                        title={`Level ${level} Spells`}
                        key={level}
                      >
                        <Form.Group widths={2}>
                          <CharacterInputField
                            name={`spellsKnown[${level}].slots.maximum`}
                            label="Maximum"
                            type="number"
                            placeholder="Enter spell..."
                          />
                          <CharacterInputField
                            name={`spellsKnown[${level}].slots.expended`}
                            label="Expended"
                            type="number"
                            placeholder="Enter spell..."
                          />
                        </Form.Group>
                        <Divider />
                        {Array.from({ length: 13 }, (_, index) => (
                          <CharacterInputField
                            ley={index}
                            name={`spellsKnown[${level}].spells[${index}].name`}
                            label={() => (
                              <CharacterCheckboxField
                                name={`spellsKnown[${level}].spells[${index}].prepared`}
                                label="Prepared"
                              />
                            )}
                            placeholder="Enter spell..."
                          />
                        ))}
                      </CharacterSection>
                    </Grid.Column>
                  ))}
                </Grid.Row>
                <Grid.Row>
                  {["4", "5", "6"].map((level, offset) => (
                    <Grid.Column width={5} key={level}>
                      <CharacterSection
                        title={`Level ${level} Spells`}
                        key={level}
                      >
                        <Form.Group widths={2}>
                          <CharacterInputField
                            name={`spellsKnown[${level}].slots.maximum`}
                            label="Maximum"
                            type="number"
                          />
                          <CharacterInputField
                            name={`spellsKnown[${level}].slots.expended`}
                            label="Expended"
                            type="number"
                          />
                        </Form.Group>
                        <Divider />
                        {Array.from(
                          { length: offset === 0 ? 13 : 9 },
                          (_, index) => (
                            <CharacterInputField
                              ley={index}
                              name={`spellsKnown[${level}].spells[${index}].name`}
                              label={() => (
                                <CharacterCheckboxField
                                  name={`spellsKnown[${level}].spells[${index}].prepared`}
                                  label="Prepared"
                                />
                              )}
                              placeholder="Enter spell..."
                            />
                          )
                        )}
                      </CharacterSection>
                    </Grid.Column>
                  ))}
                </Grid.Row>
                <Grid.Row>
                  {["7", "8", "9"].map((level, offset) => (
                    <Grid.Column width={5} key={level}>
                      <CharacterSection
                        title={`Level ${level} Spells`}
                        key={level}
                      >
                        <Form.Group widths={2}>
                          <CharacterInputField
                            name={`spellsKnown[${level}].slots.maximum`}
                            label="Maximum"
                            type="number"
                          />
                          <CharacterInputField
                            name={`spellsKnown[${level}].slots.expended`}
                            label="Expended"
                            type="number"
                          />
                        </Form.Group>
                        <Divider />
                        {Array.from(
                          { length: offset === 0 ? 9 : 7 },
                          (_, index) => (
                            <CharacterInputField
                              ley={index}
                              name={`spellsKnown[${level}].spells[${index}].name`}
                              label={() => (
                                <CharacterCheckboxField
                                  name={`spellsKnown[${level}].spells[${index}].prepared`}
                                  label="Prepared"
                                />
                              )}
                              placeholder="Enter spell..."
                            />
                          )
                        )}
                      </CharacterSection>
                    </Grid.Column>
                  ))}
                </Grid.Row>
              </Grid>
            </Container>
          </FormikForm>
        </>
      )}
    />
  );
}
