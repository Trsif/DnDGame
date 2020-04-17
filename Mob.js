
class Mob {
    constructor(name,health,attack,defence,regen){
        this.name = name
        this.health = health;
        this.attack = attack;
        this.defence = defence;
        this.regen = regen;
    }

     damageCal(damage){
        damage = this.attack - this.defence;
        return damage
        };



        human = new Mob('Human',100,20,20,5)
        elf = new Mob('Elf',80,30,10,5)
        Orc = new Mob('Orc',120,25,5,8)
        minitar = new Mob('Mintar',100,10,30,6)
        
        slime = new Mob('Slime',20,5,10,5)
        kobal = new Mob('Kobal',40,10,10,1)
        rat = new Mob('Rat',10,10,10,1)
        spider = new Mob('Spider',5,20,10,1)
        
}



module.exports = Mob;