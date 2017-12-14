// -- Character creation (Story) -- // 

// Character name, gender, race and class
let name = prompt (`Greetings adventurer! What is your name?`);
let gender = prompt (`What gender is your character?`);
let race = prompt (`What race is your character?(Humar, Elf, Dwarf, Lizard, Lalafell)`);
let characterRole = prompt (`What is your character's starting class? (Warrior, Ranger, Rouge, Cleric, Wizard, Witch?`);

const mainChar = new Hero (name, 10, gender, race, characterRole);

checkRace(mainChar, mainChar.race);
checkClass(mainChar, mainChar.characterRole);

console.log(mainChar);

