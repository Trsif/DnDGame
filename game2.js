const readlineSync = require("readline-sync");

const Mob = require(`./Mob`)
 human = new Mob('Human',100,20,20,5)
 elf = new Mob('Elf',80,30,10,5)
 Orc = new Mob('Orc',120,25,5,8)
 minitar = new Mob('Mintar',100,10,30,6)

 slime = new Mob('Slime',20,5,10,5)
 kobal = new Mob('Kobal',40,10,10,1)
 rat = new Mob('Rat',10,10,10,1)
 spider = new Mob('Spider',5,20,10,1)


function firstStrike(){
    roll = Math.floor(Math.random()*20+1)
    return roll
}

if(firstStrike() >= 12){
    console.log(`round goes to ${human.name}`)
}else{
    console.log(`round goes to ${kobal.name}`)
}
let monsters  = [slime,kobal,rat,spider]
monsterPicker = monsters[Math.floor(Math.random()*monsters.length)];
monsterStat = `${monsterPicker.name} current health:${monsterPicker.health}`

console.log(monsterStat)