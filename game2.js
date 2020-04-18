const readlineSync = require("readline-sync");
const playerPick = require(`./playerselection`)
const randomMonster = require(`./randomMonster`)



function start(){
    playerPick()
    randomMonster()
    function firstStrike(){
        roll = Math.floor(Math.random()*20+1)
        return roll
    }
  
    if(firstStrike() >= 12){
        return true
    }else{
        return false
    }
    function round(){
    if (firstStrike() == true){
            
        }
    }
}
start()
