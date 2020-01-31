const readlineSync = require('readline-sync');
const Font = require('ascii-art-font');

// TODO Create mob base//

const base = (race, health, hit, defence) => {
    return {
        race: race,
        health: health,
        hit: hit,
        defence: defence,
    };
}

// TODO Create Player Race

const human = base('Human', 15, 5, 5);
const elf = base('Elf', 15, 7, 3);
const dwarf = base('Dwarf', 17, 3, 5);
const giant = base('Giant', 20, 5, 0);

// Todo Create Monsters//

const bat = base('Bat', 5, 1, 5);
const rat = base('rat', 3, 3, 7);
const goblin = base('Goblin', 5, 5, 15);
const demon = base('Demon', 25, 2, 5);
//TO DO ADD TITLE

const title = String.raw `
______   _        ______     _______ 
(  __  \ ( (    /|(  __  \   (  ____ \
| (  \  )|  \  ( || (  \  )  | (    \/
| |   ) ||   \ | || |   ) |  | |      
| |   | || (\ \) || |   | |  | |      
| |   ) || | \   || |   ) |  | |      
| (__/  )| )  \  || (__/  )  | (____/\
(______/ |/    )_)(______/   (_______/`
//TODO Race Selector//
races = [human, elf, dwarf, giant];
raceOptions = races.map(race => race.race)

selector = readlineSync.keyInSelect(raceOptions, ' Select your race.', {
    cancel: 'Leave Game'
});

currentPselect = races[selector];
console.log("Ah an " + currentPselect.race + " Welcome adventurer lets begin shall we.")

//TODO Create Dice For Player & Monster//



//TODO encounterd//

monsterList = [bat, rat, goblin, demon];
randomMonster = monsterList[Math.floor(Math.random() * monsterList.length)];
console.log("You've encounted a " + randomMonster.race);
currentmonster = randomMonster;

//TODO Combat//

while (currentPselect.health > 0 && currentmonster.health > 0) {
    //FIGHT RUN SNEAK//

    fightrunsneak = ['fight', 'run', 'sneak'];
    selectfight = readlineSync.keyInSelect(fightrunsneak, ' What do you do.', {
        cancel: 'Leave Game'
    });
    selectedOption = fightrunsneak[selectfight];



    //TODO Roll for player and monster//

    proll = Math.floor(Math.random() * 20 + 1);
    mroll = Math.floor(Math.random() * 20 + 1);
    if (proll > mroll) {
        console.log("You rolled a", proll, "Monster rolled a", mroll, "Player won roll");
    } else {
        console.log("You rolled a", proll, "Monster rolled", mroll, "Monster won roll");
    }

    // TODO Who won the roll//

    let damage;
    let critical = 1.5;
    if (proll > mroll) {

        //TODO Damage calculation

        damage = Math.round(currentPselect.hit * (100 / (100 + currentmonster.defence + 1)));
    } else if (proll < mroll) {
        damage = Math.round(currentmonster.hit * (100 / (100 + currentPselect.defence + 1)));

    } else {
        damage = 0;
    }
    //TODO Take Damage
    if (proll > mroll) {
        console.log("Your current HP", currentPselect.health, "Enemies current HP", currentmonster.health);
        currentmonster.health = currentmonster.health - damage;
        console.log("monster lost", damage, "hp", 'monster health', currentmonster.health);
    } else if (proll < mroll) {
        console.log("Your current HP", currentPselect.health, "Enemies current HP", currentmonster.health);
        currentPselect.health = currentPselect.health - damage;
        console.log("Player lost", damage, "hp", "player Healh", currentPselect.health);
    } else if (proll == mroll) {
        currentPselect.health = currentPselect.health + 1;
        console.log("Player has gained 1hp");
        currentmonster.health = currentmonster.health + 1;
        console.log("Monster has gained 1 hp");
        console.log("Both you and the beast found a chance to catch your breath");
        console.log("Player current hp", currentPselect.health, "Monster current hp", currentmonster.health);
    } else if (proll == 20 && mroll !== 20) {
        console.log("Your current HP", currentPselect.health, "Enemies current HP", currentmonster.health);
        currentPselect.health = currentPselect.health - damage * critical;
        console.log("You've land a critical blow on the beast! Damage multiplied by 1.5");
        console.log("monster lost", damage * critical, "hp", 'monster health', currentmonster.health, );
    } else {
        console.log("hi");
    }

}