// -- Characters -- // 

// Base character with base stats (every character will have this as a base)
class BaseCharacter {
    constructor (name, health, skills = {attack: 0, mAttack: 0, sneak: 0, persuade: 0}){
        this.name = name;
        this.currentHealth = health;
        this.maxHealth = health;
        this.barriers = {
            attack: 10,
            mAttack: 10,
            sneak: 10,
            persuade: 10
        };

        this.skills = skills;
                
    };
};



// Hero class
class Hero extends BaseCharacter {
    constructor(name, health, gender, race, role, skills){
        super(name, health, skills);
        this.name = name;
        this.currentHealth = health;
        this.maxHealth = health;

        this.isIncapacitated = false;

        this.gender = gender;
        this.race = race;
        this.characterRole = role;

        //-- Equipment -- //
        this.equippedWeapon = {
            name: `None`,
            minDamage: null,
            maxDamage: null
        }
        this.equippedArmor = {
            name: `None`,
            hitBarrierBonus: null
        };

        
    };
};

// -- Skills for character class and race -- //

// Checks class
const checkClass = (hero, characterClass) => {
    let lowerCharacterClass = characterClass.toLowerCase();

        switch (lowerCharacterClass) {
            case `warrior`:
                hero.skills.attack += 3;
                // break statement breaks the code from running again
                break;
            case `ranger`:
                hero.skills.attack ++;
                hero.skills.sneak ++;
                hero.skills.persuade ++;
                break;
            case `rouge`:
                hero.skills.attack +=2;
                hero.skills.sneak +=2;
                break;
            case `cleric`:
                hero.skills.attack ++;
                hero.skill.mAttack ++;
                hero.skills.persuade ++;
                break;
             // case will continue until break, this is the same as or in this instance
            case `wizard`:
            case `witch`:
                hero.skills.mAttack += 3;
                break;        
            default: 
                characterClass = prompt (`"${characterClass}" is not a valid option. Please choose one!`);
                hero.characterRole = characterClass;
                checkClass(hero, characterClass);
            break;
    };
};

// Checks race
const checkRace = (hero, race) => {
    let lowerCharacterRace = race.toLowerCase();

        switch (lowerCharacterRace){
            case 'human':
            case 'dwarf':
                hero.skills.attack ++;
                break;
            case 'elf':
                hero.skills.mAttack ++;
             break;
            case 'lizard':
                hero.skills.sneak ++;
                break;
            case 'lalafell':
                hero.skils.persuade ++;
                break;
            default:
                race = prompt (`${race} is not a valid race. Please choose a valid option!`);
                hero.race = race;
                checkRace(hero, race);
                break;
    };
};