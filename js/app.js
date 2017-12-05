// -- Character creation -- // 

// Character name
const name = prompt (`Greetings adventurer! What is your name>?`)

// Character class
let characterClass = prompt (`What is your character's starting class? (Warrior, Ranger, Rouge, Cleric, Wizard, Witch?)`);
// Lowercase the character class for case sensitive checks
let lowerCharacterClass = characterClass.toLowerCase();

// Used switch case instead of if/else for practice
switch (lowerCharacterClass){
    case `warrior`:
        console.log(characterClass);
        // break statement breaks the code from running again
        break;
    case `ranger`:
        console.log(characterClass);
        break;
    case `rouge`:
        console.log(characterClass);
        break;
    case `cleric`:
        console.log(characterClass);
        break;
    case `wizard`:
        console.log(characterClass);
        break;
    case `witch`:
        console.log(characterClass);
        break;
    // default case - if nothing else match do this
    default:
        characterClass = prompt (`${characterClass} is not a valid starting class!`);
        break;
}

