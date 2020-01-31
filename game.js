const readlineSync = require('readline-sync');

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

const human = base('Human', 5, 5, 5);
const elf = base('Elf', 5, 7, 3);
const dwarf = base('Dwarf', 7, 3, 5);
const giant = base('Giant', 10, 5, 0);

// Todo Create Monsters//

const bat = base('Bat', 1, 1, 5);
const rat = base('rat', 3, 3, 7);
const goblin = base('Goblin', 5, 5, 15);
const demon = base('Demon', 25, 2, 5);

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
// let fights = () => {
while (currentPselect.health > 0 && currentmonster.health > 0) {
    proll = Math.floor(Math.random() * 20 + 1);
    mroll = Math.floor(Math.random() * 20 + 1);
    if (proll > mroll) {
        currentmonster.health = currentmonster.health - 1;
    } else {
        currentPselect.health = currentPselect.health - 1;
    }
    console.log("human", currentPselect.health)
    console.log("monster", currentmonster.health)
}
// }
console.log(currentPselect.health);
//TODO Compare Player Roll with Monster Roll //