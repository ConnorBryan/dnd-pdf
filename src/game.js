import character from "./character";

export default {
  characters: [
    character,
    { ...character, name: "Bob" },
    { ...character, name: "Dan" }
  ]
};
