const readlineSync = require("readline-sync");
const playerPick = require(`./playerselection`)
const randomMonster = require(`./randomMonster`)


playerPick()
randomMonster()
function firstStrike(){
    roll = Math.floor(Math.random()*20+1)
    return roll
}

if(firstStrike() >= 12){
    console.log(`round goes to ${currentOption.name}`)
}else{
    console.log(`round goes to ${monster.name}`)
}
