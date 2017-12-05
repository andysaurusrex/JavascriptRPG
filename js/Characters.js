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

// mainChar class with properties
class mainChar {
    constructor(name, race, attributes, equippedWeapon, equippedArmor, maxHealth, currentHealth){
        this.name = name;
        this.race = race;
        this.attributes = attributes;
        this. equippedWeapon;
        this.equippedArmor;
        this.maxHealth;
        this.currentHealth;

    }
}

// the base main character with base stats and name
// const mainChar = {
//     name: name,
//     attributes: {
//         strength: 0,
//         finesse: 0,
//         intelligence: 0,
//         constitution: 0,
//         wits: 0,

//     }
// }