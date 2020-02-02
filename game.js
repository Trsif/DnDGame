//librarys declaration//



const readlineSync = require("readline-sync");
var colors = require('colors/safe');

function startgame() {
    // TODO Create mob base//
    const base = (race, health, hit, defence) => {
        return {
            race: race,
            health: health,
            hit: hit,
            defence: defence
        };
    };
    // TODO Create Player Race
    const human = base("Human", 15, 5, 5);
    const elf = base("Elf", 15, 7, 3);
    const dwarf = base("Dwarf", 17, 3, 5);
    const giant = base("Giant", 20, 5, 0);
    // Todo Create Monsters//
    const bat = base("Bat", 5, 1, 5);
    const rat = base("rat", 3, 3, 7);
    const goblin = base("Goblin", 5, 5, 15);
    const demon = base("Demon", 25, 2, 5);
    //TO DO ADD TITLE
    const title = String.raw `
______   _        ______     _______
(  __  \ ( (    /|(  __  \   (  ____ \
| (  \  )|  \  ( || (  \  )  | (    \/
| |   ) ||   \ | || |   ) |  | |
| |   | || (\ \) || |   | |  | |
| |   ) || | \   || |   ) |  | |
| (__/  )| )  \  || (__/  )  | (____/\
(______/ |/    )_)(______/   (_______/`;

    const losescreen = String.raw `
_______             ______  _________ _______  ______  
|\     /|(  ___  )|\     /|  (  __  \ \__   __/(  ____ \(  __  \ 
( \   / )| (   ) || )   ( |  | (  \  )   ) (   | (    \/| (  \  )
 \ (_) / | |   | || |   | |  | |   ) |   | |   | (__    | |   ) |
  \   /  | |   | || |   | |  | |   | |   | |   |  __)   | |   | |
   ) (   | |   | || |   | |  | |   ) |   | |   | (      | |   ) |
   | |   | (___) || (___) |  | (__/  )___) (___| (____/\| (__/  )
   \_/   (_______)(_______)  (______/ \_______/(_______/(______/ 
      `;
    const winscreen = String.raw `

_______                     _________ _       
|\     /|(  ___  )|\     /|  |\     /|\__   __/( (    /|
( \   / )| (   ) || )   ( |  | )   ( |   ) (   |  \  ( |
 \ (_) / | |   | || |   | |  | | _ | |   | |   |   \ | |
  \   /  | |   | || |   | |  | |( )| |   | |   | (\ \) |
   ) (   | |   | || |   | |  | || || |   | |   | | \   |
   | |   | (___) || (___) |  | () () |___) (___| )  \  |
   \_/   (_______)(_______)  (_______)\_______/|/    )_)


`;





    console.log(title);

    //TODO Race Selector//

    races = [human, elf, dwarf, giant];
    raceOptions = races.map(race => race.race);
    selector = readlineSync.keyInSelect(raceOptions, " Select your race.", {
        cancel: "Leave Game"
    });
    currentPselect = races[selector];
    console.log(
        "Ah an " + currentPselect.race + " Welcome adventurer lets begin shall we."
    );


    //TODO Create Dice For Player & Monster//
    //TODO encounterd//
    let boss;

    const combat = () => {
        let bat = base("Bat", 5, 1, 5);
        let rat = base("rat", 3, 3, 7);
        let goblin = base("Goblin", 5, 5, 15);
        let demon = base("Demon", 25, 2, 5);
        let tristan = base("Tristan", 100, 1, 30);
        const heal = 5;
        monsterList = [bat, rat, goblin, demon, tristan];
        boss = monsterList.pop();
        randomMonster = monsterList[Math.floor(Math.random() * monsterList.length)];
        if (currentPselect.health <= 0) {
            console.log("You've lost too many hit points! Game Over!!!");
        } else {
            console.log("You've encounted a " + randomMonster.race);
        }
        currentmonster = randomMonster;


        //TODO Combat loop//


        while (currentPselect.health > 0 && currentmonster.health > 0) {

            //FIGHT Rest SNEAK//

            fightrunsneak = ["Attack", "rest", "Run"];
            selectfight = readlineSync.keyInSelect(fightrunsneak, " What do you do.", {
                cancel: false
            });
            selectedOption = fightrunsneak[selectfight];




            //TODO Roll for player and monster//
            proll = Math.floor(Math.random() * 20 + 1);
            mroll = Math.floor(Math.random() * 20 + 1);
            if (selectedOption === "rest") {
                currentPselect.health = currentPselect.health + heal;
                proll = 2;
                console.log(`Current Health is now ${currentPselect.health}`)
            } else if (selectedOption === "Run") {
                console.log("Mama Didn't raise no B*tch, Go back and FIGHT!");
            }
            if (proll > mroll) {
                console.log(
                    "You rolled a",
                    proll,
                    "Monster rolled a",
                    mroll,
                    "Player won roll"
                );
            } else {
                console.log(
                    "You rolled a",
                    proll,
                    "Monster rolled",
                    mroll,
                    "Monster won roll"
                );
            }
            // TODO Who won the roll//
            let damage;
            let critical = 1.5;
            if (proll > mroll) {
                //TODO Damage calculation
                damage = Math.round(
                    currentPselect.hit * (100 / (100 + currentmonster.defence + 1))
                );
            } else if (proll < mroll) {
                damage = Math.round(
                    currentmonster.hit * (100 / (100 + currentPselect.defence + 1))
                );
            } else {
                damage = 0;
            }
            //TODO Take Damage
            if (proll > mroll && proll == 20) {
                console.log(
                    "Your current HP",
                    currentPselect.health,
                    "Enemies current HP",
                    currentmonster.health
                );
                currentmonster.health = currentmonster.health - damage - critical;
                console.log(
                    "You've land a critical blow on the beast! Damage multiplied by 1.5"
                );
                console.log(
                    "monster lost",
                    damage * critical,
                    "hp",
                    "monster health",
                    currentmonster.health
                );
            } else if (proll > mroll) {
                console.log(
                    "Your current HP",
                    currentPselect.health,
                    "Enemies current HP",
                    currentmonster.health
                );
                currentmonster.health = currentmonster.health - damage;
                console.log(
                    damage + " damage",
                    "hp",
                    "monster health",
                    currentmonster.health
                );
                if (currentmonster.health <= 0) {
                    console.log("Monster Lost"),
                        damage + " damage",
                        "hp",
                        "monster health",
                        currentmonster.health;
                }
            } else if (proll < mroll) {
                console.log(
                    "Your current HP",
                    currentPselect.health,
                    "Enemies current HP",
                    currentmonster.health
                );
                currentPselect.health = currentPselect.health - damage;
                console.log(
                    damage + " damage",
                    "hp",
                    "player Healh",
                    currentPselect.health
                );
                if (currentPselect.health <= 0) {
                    console.log(
                        "You Lost",
                        damage + " damage",
                        "hp",
                        "player Healh",
                        currentPselect.health
                    );
                }
            } else if (proll == mroll) {
                currentPselect.health = currentPselect.health + 1;
                console.log("Player has gained 1hp");
                currentmonster.health = currentmonster.health + 1;
                console.log("Monster has gained 1 hp");
                console.log("Both you and the beast found a chance to catch your breath");
                console.log(
                    "Player current hp",
                    currentPselect.health,
                    "Monster current hp",
                    currentmonster.health
                );
            } else {
                console.log("hi");
            }
        }
    };
    combat();
    let monsterkill = 0;
    // TODO combat loop 
    if (currentPselect.health <= 0) {
        console.log("better luck next time bucko");
        console.log(losescreen)
    } else {
        console.log("You journey deeper into the cave.  Continue?");
        answer = ["yes", "no"];
        index = readlineSync.keyInSelect(answer, " ", {
            cancel: false
        });
        if (answer[index] === "yes") {
            monsterkill++;
            combat();
        } else {
            console.log("adventurers don't turn back");
            monsterkill++;
            combat();
        }
        if (currentPselect.health <= 0) {
            console.log("better luck next time bucko");
            console.log(losescreen.red);
        } else {
            console.log("You're almost there!  Continue?");
            answerTwo = ["yes", "no"];
            index = readlineSync.keyInSelect(answerTwo, " ", {
                cancel: false
            });
            if (answerTwo[index] === "yes") {
                monsterkill++
                combat();
            } else {
                console.log("can't turn back now!");
                monsterkill++
                combat();
            }
        }
        if (currentPselect.health <= 0) {
            console.log("Death is only the beginning! Want to play again?");
            console.log(losescreen);
        } else {
            console.log("You're in the last chamber!  Continue?");
            answerThree = ["yes", "no"];
            index = readlineSync.keyInSelect(answerTwo, " ", {
                cancel: false
            });
            if (answerThree[index] === "yes") {
                monsterkill++
                console.log(monsterkill);
                combat();
            } else {
                console.log("can't turn back now");
                monsterkill++
                console.log(monsterkill)
                combat();
            }
        }
    }
    if (currentPselect.health > 0) {
        console.log("You've done it, you have reached the treasure room  filled with richies beyond your wildist dreams")
        console.log(winscreen);
    }

}

startgame()