// -- Characters -- // 

// Base character with base stats (every character will have this as a base)
class BaseCharacter {
    constructor (name, health){
        this.name = name;
        this.attributes = {
            strength: 0,
            finesse: 0,
            intelligence: 0,
            constitution: 0,
            wits: 0,
        };
        this.armor = 0;
        this.maxArmor;
        this.currentHealth = health;
        this.maxHealth = health;
        
    };
};



// Hero class
class Hero extends BaseCharacter {
    constructor(name, health, gender, race, role){
        super(name, health);
        this.name = name;
        this.race = race;
        this.characterRole = role;
        this.attributes = attributes;

        //-- Equipment -- //
        this.equippedWeapon = {
            name: `None`,
            minDamage: null,
            maxDamage: null
        };
        this.equippedArmor = {
            name: `None`,
            armor: null
        };

        //-- Health and Armor -- //
        this.armor = 0;
        this.maxArmor = 0;
        this.currentHealth = health;
        this.maxHealth = health;
        this.isIncapacitated = false;

    };
};

// -- Attributes for character class and race -- //

// Checks class
const checkClass = (hero, characterClass) => {
    let lowerCharacterClass = characterClass.toLowerCase();

    switch (lowerCharacterClass) {
        case `warrior`:
            hero.attributes.strength += 3;
            hero.attributes.constitution +=2;
            // break statement breaks the code from running again
            break;
        case `ranger`:
            hero.attributes.strength +=2;
            hero.attributes.finesse +=2;
            hero.attributes.wits ++;
            break;
        case `rouge`:
            hero.attributes.finesse += 3;
            hero.attributes.wits += 2;
            break;
        case `cleric`:
            hero.attributes.intelligence += 2;
            hero.attributes.constitution ++;
            hero.attributes.wits +=2;
            break;
        // case will continue until break, this is the same as or in this instance
        case `wizard`:
        case `witch`:
            hero.attributes.intelligence += 3;
            hero.attributes.wits += 2;
            break;
        
        default: 
            characterClass = prompt (`${characterClass} is not a valid option. Please choose one!`);
            hero.characterRole = characterClass;
            checkClass(hero, characterClass);
        break;
    }
};

// Checks race
const checkRace = (hero, race) => {
    let lowerCharacterRace = race.toLowerCase();

    switch (lowerCharacterRace){
        case 'human':
            hero.attributes.strength ++;
            break;
        case 'elf':
            hero.attributes.intelligence ++;
            break;
        case 'dwarf':
            hero.attributes.constitution ++;
            break;
        case 'lizard':
            hero.attributes.finesse ++;
            break;

        default:
            race = prompt (`${race} is not a valid race. Please choose a valid option!`);
            hero.race = race;
            checkRace(hero, race);
            break;
    }

}