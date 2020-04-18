const readlineSync = require("readline-sync");

const Mob = require(`./Mob`)

human = new Mob('Human',100,20,20,5)
elf = new Mob('Elf',80,30,10,5)
orc = new Mob('Orc',120,25,5,8)
minitar = new Mob('Mintar',100,10,30,6)

function playerPick() {
    playerlist = [human,elf,orc,minitar]
    createOption= playerlist.map(playerlist => playerlist.name)
    selectOption = readlineSync.keyInSelect(createOption,`Select your race`,{
        cancel: `Return to the void`
});
let charName = readlineSync.question(`What is your name Hero? `)
currentOption = playerlist[selectOption];

currentOption.name = charName

return currentOption
}


module.exports = playerPick;