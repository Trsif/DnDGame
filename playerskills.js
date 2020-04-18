const readlineSync = require("readline-sync");
function pickoption(){
playerskills = ['Attack','Defend','rest']
skillOption = readlineSync.keyInSelect(playerskills, `Your turn hero!`,{
    cancel: false
})
}
selectedSkill = playerskills[skillOption]

module.exports = pickoption
