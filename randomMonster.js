const Mob = require(`./Mob`)


 slime = new Mob('Slime',20,5,10,5)
 kobal = new Mob('Kobal',40,10,10,1)
 rat = new Mob('Rat',10,10,10,1)
 spider = new Mob('Spider',5,20,10,1)

function randomMonster(){
    let monsters  = [slime,kobal,rat,spider]
    monsterPicker = monsters[Math.floor(Math.random()*monsters.length)];
    monster = monsterPicker
    return monster
} 


module.exports = randomMonster;