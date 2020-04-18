const readlineSync = require("readline-sync");
const playerPick = require(`./playerselection`)
const randomMonster = require(`./randomMonster`)
const turnOption = require(`./turnpicks`)

playerDamage = currentOption.attack * (100/(100+monster.defense+1))
monsterDamage = monster.attack * (100/(100+currentOption.defense + 1))

function start(){
    playerPick()
    randomMonster()
    function firstStrike(){
        roll = Math.floor(Math.random()*20+1)
        return roll
    }
   function whogofirst(){
    if(firstStrike() >= 12){
        return true
    }else{
        return false
    }

   }
while (currentOption.health > 0 && monster.health > 0){
    
    if (whogofirst() == true){
          return  turnOption()
        }else{
          return  currentOption.health = currentOption.health - monsterDamage
        }
}
}
start()
